// módulos nativos de node
const { log } = require('node:console')
const os = require('node:os')

console.log('Información del sistema operativo');
console.log("-----------------");

console.log("nombre del sistema operativo", os.platform());
console.log("versión del sistema operativo", os.version());
console.log('arquitectura', os.arch());
console.log("CPUS", os.cpus());
console.log("memoria", os.freemem());
console.log("memoria total", os.totalmem());
console.log("uptime", os.uptime());