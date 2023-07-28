const http = require('node:http');
const fs = require('node:fs')

const port = process.env.PORT ?? 1234

const processRequest = (req, res) => {
    // cuando hago una request desde un navegador se ven dos request porque una es la request del navegador por el favicon
    res.setHeader('Content-Type', 'text/plain; charset=utf8');
    if(req.url === "/") {
        // este es el código por defecto
        res.statusCode = 200; 
        res.end("Página de inicio")
    } else if(req.url === "/imagen-01.png") {
        // recordar las direcciones relativas son relativas a donde se inició el proceso de node
        fs.readFile('./clase-2/ah!.png', (err, data) => {
            if(err) {
                console.log(err);
                res.statusCode = 500;
                res.end("500 - Internal Server Error")
            } else {
                res.setHeader('Content-Type', 'image/png');
                res.end(data)
            }
        })
    }
    else if (req.url === "/contacto") {
        res.end("Página de contacto")
    } else {
        res.statusCode =404
        res.end("404")
    }
}

const server = http.createServer(processRequest);

server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
});