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

# Clase 3
## REST API
REST -> arquitectura de software. 2000 -> Roy Fielding

Principios: simplicidad, escalabilidad, portabilidad, visibilidad, modificabilidad

- Todo es considerado un recurso -> Cada recurso se identifica con una URL
- Verbos HTTP -> Definir las operaciones a realizar con los recursos
- Representaciones -> json, xml, html... (el cliente puede decidir la rep del recurso)
- Stateless -> el servidor no debe mantener ningún estado, nada que guarde información, la información tiene que ir en la petición del cliente
- Interfaz uniforme
- Separación de conceptos -> Permite que el cliente y el servidor evolucionen de forma separada

### **No todas las APIS son REST!**

## Zod
Para validar en runtime tipos de datos.
**zod ignora los datos que no están en su esquema. Por ejemplo, si defino no defino el id en el esquema y luego trato de cambiarlo con los datos del body de request, no voy a poder**

## POST - PUT - PATCH
### Idempotencia
la idempotencia es la propiedad para realizar una acción determinada varias veces y aun así conseguir el mismo resultado que se obtendría si se realizase una sola vez. Un elemento que cumple esta propiedad es un elemento idempotente, o un idempotente. De esta manera, si un elemento al multiplicarse por sí mismo sucesivas veces da él mismo, este elemento es idempotente. 

- POST -> crear un nuevo elemento/recurso en el servidor - /movies
- PUT -> actualizar un elemento existente o crearlo si no existe - /movies/:id
- PATCH -> actualizar parcialmente un recurso - /movies/:id

## CORS (cross-origin resource sharing)
is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

Solo funciona en navegadores. Preguntan al dominio de la api, al dominio al que hace la petición, si el dominio desde el que lo hago puede pedir sus recursos. 
Por defecto se niega el acceso, se debe declarar el acceso explícitamente.

**Cuando la petición es desde el mismo origen, no se envía esta cabecera**.

Cuando se trata de PUT, PATCH y DELETE el navegador envía un pre-fligth para preguntar al otro dominio qué opciones acepta, qué métodos acepta. Este pedido es por medio del método OPTIONS y por lo tanto debe haber una ruta con dicho método que responda qué se acepta.