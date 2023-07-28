function sum(a, b) {
    return a + b;
}

//forma clásica
// exports es otra variable global que puede ser accedida por toda la aplicación
//module.exports = sum;
//también se puede exportar como un objecto
module.exports = {
    sum
}