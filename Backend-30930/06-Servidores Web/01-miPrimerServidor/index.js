//Importo el modulo nativo HTTP para usarlo
const http = require('http');

console.log(http);

//Creo mi Server
// peticion objeto con toda la info que llego
// respuesta es un objeto para responder al cliente
// .end termina la peticion y responder al cliente
//la funcion que le pasamos define como se va a comportar mi server cuando llegue una peticion (request) de un cliente
const server = http.createServer((request, response) => {
  console.log('LLEGO UNA PETICION');
  console.log(request); //peticion del cliente
  console.log(response); //respuesta que daremos
  response.end('aqui te va tu respuesta');
});

// conectar y escuchar servidor asi le decimos que escuche en ese puerto
const connectedServer = server.listen(8080, ()=>{
  console.log(`servidor http escuchando el el puerto ${connectedServer.address().port}`)
})

//Indicamos en que puerto nuestro server va a estar escuchando peticiones.
//Le pasamos una funcion al final del seteo para saber que la asignacion del puerto esta bien y nuestro server esta listo

const puerto = 8080;
server.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
