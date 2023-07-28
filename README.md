# Clase 1
## Posibilidades de lectura de archivos con fs
- síncrono -> ocupan el proceso principal por lo tanto nuestro programa no puede hacer otra cosa hasta que termine
- asíncrono callback -> se ejecuta el callback del primero que termina
- asíncrono secuencial (async-await) -> se lee uno, se espera a que se resuelva, se resuelve y sigue con el otro, el proceso se libera en cad caso
- asíncrono paralelo (promise.all) -> espera que se resuelvan todas las promesas, se leen los archivos a la vez

## Ejercicios
- explorar las opciones del módulo de file-system
- expandir las opciones de la función ls
  - diferenciar archivos ocultos de los normales
- 