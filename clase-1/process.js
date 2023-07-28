// process -> objeto global que proporciona información sobre el proceso en ejecución

// argumentos de entrada a la aplicación
console.log(process.argv);

// current working directory -> desde dónde hemos ejecutado el proceso
console.log(process.cwd());

// platform
console.log(process.env.bar);

// ejecutar algo a la salida del proceso
process.on('exit', () => {
    console.log("El proceso va a terminar");
});
