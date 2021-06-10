//inicializamos las variables para la construccion del servidor node js
const http=require('http');
const url=require('url');
const fs=require('fs');

//Configuramos todo con una variable de entorno del puerto
const {PORT  = 3000} =process.env //la variable de entorno

const HTML_CONTENT_TYPE = 'text/html'; //tipo de documento, en este caso html
const CSS_CONTENT_TYPE = 'text/css'; //hojas de estilos css
const JS_CONTENT_TYPE = 'text/javascript'; //escripts en js

//inicializamos el servidor 
const servidor=http.createServer( (req,res) => {
  const objetourl = url.parse(req.url);
  let pathFolder='server'+objetourl.pathname;
  if (pathFolder=='server/')
    pathFolder='server/index.html';
  fs.stat(pathFolder, error => {
    if (!error) {
      fs.readFile(pathFolder, (error,contenido) => {
        if (error) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.write('Error interno');
          res.end();					
        } else {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(contenido);
          res.end();
        }
      });
    } else {
      res.writeHead(404, {'Content-Type': 'text/html'});
      res.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');		
      res.end();
    }
  });
});

servidor.listen(PORT);
console.log('Servidor web iniciado en el puesto: ' +PORT);