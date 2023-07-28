const { log } = require('node:console');
const fs = require('node:fs/promises');
// en commonjs no se puede utilizar async await en el cuerpo del módulo

// es necesario utilizar una función autoinvocada
// IIFE 
(async () => {
    const text = await fs.readFile('./archivo2.txt', 'utf-8');
    console.log("leer texto:", text);
    console.log("Haciendo algo durante la lectura del 2do archivo");
}
)();


