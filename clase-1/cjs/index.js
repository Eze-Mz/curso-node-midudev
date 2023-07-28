// globalThis es una variable global que puede ser accedida por toda la aplicación
// console y todo lo que es global sale de globalThis (la variable global)
// en el navegador apunta a "window"
// en node apunta a "global"
console.log(globalThis);
console.log(global);

// node aplica el patrón de diseño "module pattern"
const { sum } = require('./sum');
console.log(sum(1, 2));