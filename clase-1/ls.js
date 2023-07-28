const fs = require('node:fs');

// lee los directorios de manera asíncrona llama un callback cuando se resuelve
fs.readdir('.', (err, files) => {
    if (err) {
        console.log(err);
        return;
    }
    files.forEach(file => {
        console.log(file);
    });
})