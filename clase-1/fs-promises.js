const fs = require('node:fs/promises');
// para crear una versión de promesa de una función que no esté de manera nativa
const {promisify} = require('node:util');

console.log("Leer el primer archivo");
//const stats = fs.statSync('./archivo.txt');
//console.log(stats.isFile(), stats.isDirectory(), stats.isSymbolicLink(), stats.size);

// utf-8 es el encoding que utilizamos para que no devuelva un buffer
//const text = fs.readFileSync('./archivo.txt', 'utf-8');
//console.log(text);

// Lectura asíncrona
console.log("Leer el segundo archivo");
fs.readFile('./archivo2.txt', 'utf-8').then(text => {
    console.log(text);
}).catch(err => {
    console.log(err);
});

console.log("Haciendo algo durante la lectura del 2do archivo");