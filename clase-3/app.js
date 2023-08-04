const express = require('express');
const crypto = require('node:crypto');
const fs = require('node:fs');
const movies = require('./movies.json');
const {validateMovie, validatePartialMovie} = require('./movies');



const app = express();
app.use(express.json())
app.disable('x-powered-by'); // deshabilita el header X-Powered-By: Express

app.get('/', (req, res) => {
    res.json({ message: 'Página de inicio' });
});

app.get("/movies", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { genre } = req.query;
    if (genre) {
        const filteredMovies = movies.filter(movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase()));
        return res.json(filteredMovies);
    } else {
        res.json(movies);
    }
});

app.post("/movies", (req, res) => {
    const result = validateMovie(req.body);

    if(result.error) {
        return res.status(400).json({ message: JSON.parse(result.error.message) });
    }

    const newMovie = {
        id: crypto.randomUUID(), //uuid v4 
        //los podemos pasar así xq ya están los datos validados
        ...result.data
    };
    movies.push(newMovie);
    json = JSON.stringify(movies, null, 2);
    fs.writeFileSync("./movies.json", json, "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.status(201).json(newMovie);
})

// Borrar por título
app.delete("/movies/:title", (req, res) => {
    const title = req.params.title;
    const movie = movies.find(movie => movie.title === title);
    if (movie) {
        const index = movies.indexOf(movie);
        movies.splice(index, 1);
        json = JSON.stringify(movies, null, 2);
        fs.writeFileSync("./movies.json", json, "utf-8", (err) => {
            if (err) {
                console.log(err);
            }
        });
        res.json(movie);
    } else {
        res.status(404).json({ message: "Movie not found" });
    }
});

// buscar por id
//path-to-regexp
app.get("/movies/:id", (req, res) => {
    console.log(typeof movies);
    const id = req.params.id;
    const movie = movies.find(movie => movie.id === id);
    if (movie) {
        res.json(movie);
    } else {
        res.status(404).json({ message: "Movie not found" });
    }
});

// actualizar por id
app.patch("/movies/:id", (req, res) => {
    const {id} = req.params;
    const movie = movies.find(movie => movie.id === id);
    if(!movie) return res.status(404).json({ message: "Movie not found" });
    const result = validatePartialMovie(req.body);
    if(result.error) return res.status(400).json({ message: JSON.parse(result.error.message) });

    const movieIndex = movies.indexOf(movie);
    const updatedMovie = {
        ...movie,
        ...result.data
    };
    movies[movieIndex] = updatedMovie;
    json = JSON.stringify(movies, null, 2);
    fs.writeFileSync("./movies.json", json, "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
    });
    res.json(updatedMovie);
});

const PORT = process.env.PORT ?? 1234;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});