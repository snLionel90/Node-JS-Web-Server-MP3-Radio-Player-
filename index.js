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
const servidor=http.createServer( (pedido,respuesta) => {
  const objetourl = url.parse(pedido.url);
  let camino='server'+objetourl.pathname;
  if (camino=='server/')
    camino='server/index.html';
  fs.stat(camino, error => {
    if (!error) {
      fs.readFile(camino, (error,contenido) => {
        if (error) {
          respuesta.writeHead(500, {'Content-Type': 'text/plain'});
          respuesta.write('Error interno');
          respuesta.end();					
        } else {
          respuesta.writeHead(200, {'Content-Type': 'text/html'});
          respuesta.write(contenido);
          respuesta.end();
        }
      });
    } else {
      respuesta.writeHead(404, {'Content-Type': 'text/html'});
      respuesta.write('<!doctype html><html><head></head><body>Recurso inexistente</body></html>');		
      respuesta.end();
    }
  });
});

servidor.listen(PORT);
console.log('Servidor web iniciado en el puesto: ' +PORT);