const fs = require('node:fs');

console.log("Leer el primer archivo");
const stats = fs.statSync('./archivo.txt');

console.log(stats.isFile(), stats.isDirectory(), stats.isSymbolicLink(), stats.size);

// utf-8 es el encoding que utilizamos para que no devuelva un buffer
const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log(text);

// Lectura asíncrona
console.log("Leer el segundo archivo");
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => { // <- cuando termina de leer ejecuta la función
    if (err) {
        console.log(err);
        return;
    }
    console.log(text);
});

console.log("Haciendo algo durante la lectura del 2do archivo");
