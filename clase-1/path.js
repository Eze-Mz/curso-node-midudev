const path = require('node:path');

// Es necesario utilizar esta librería porque los separadores de rutas son diferentes en cada sistema operativo

// para ver la separación en el sistema operativo
console.log(path.sep);

// unir rutas con path join
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log("ejemplo creación dirección archivo:", filePath);

// obtener el nombre base de un archivo
// le puedo decir que me quite la extensión
const base = path.basename(filePath);
console.log("obtener el nombre base de una dirección:", base);

// obtener la extensión
const ext = path.extname("image.01.jpg");
console.log(ext);