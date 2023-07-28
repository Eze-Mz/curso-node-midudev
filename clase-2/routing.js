const http =  require("node:http")

const processRequest = (req, res) => {
    const { method, url } =  req;
    switch(method) {
        case "GET":
            switch(url) {
                case '/':
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    return res.end('<h1>Página principal</h1> \n <a style="display: block;" href="./lobo-azul">Lobo azul</a> \n <a style="display: block;" href="./lobo-blanco">Lobo blanco</a>')
                case '/lobo-azul': 
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    return res.end('<h1>Imagen del lobo azul</h1> \n <a href="./">Volver</a>')
                case '/lobo-blanco': 
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    return res.end('<h1>Imagen del lobo blanco</h1> \n <a href="./">Volver</a>')
                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    return res.end('<h1>404</h1>')
            }
        case "POST":
            switch(url) {
                case "/lobo":
                    let body = '';
                    //Leer el body de la request
                    //escuchar el evento data
                    //los datos no llegan todos juntos sino por chunks o paquetes
                    //el tipo de los datos al accederlos en este punto es un buffer
                    req.on("data",  chunk => {
                        body += chunk.toString()
                    })
                    // Para saber cuándo llegó toda la información podemos escuchar el evento end
                    req.on("end", () => {
                        const data = JSON.parse(body)
                        //llamar a una base de datos para guardar la información
                        res.writeHead(201, {'Content-Type': "application/json; charset=utf-8"});
                        data.timestamp = Date.now()
                        res.end(JSON.stringify(data))
                    })
                    break
                default:
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html; charset=utf-8');
                    return res.end('<h1>404</h1>')
            }
    }
}

const server = http.createServer(processRequest)

server.listen(1234 , () => {
    console.log(`server listening on port http://localhost:1234`);
})