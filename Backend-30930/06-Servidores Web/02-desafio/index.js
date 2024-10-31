const http = require('http');

// 1- creo una condicion para saludar
const obtenerMensaje = () => {
  // fyh resumen palabra fecha y hora
  const fyh = new Date();
  // solo mostrar la hora
  const hora = fyh.getHours();
  // definimos por default el mensaje como buenos dias
  let msg = 'Buenos Dias';
  // condicion para buenas tardes
  if (hora >= 13 && hora <= 19) msg = 'Buenas Tardes';
  // condicion para buenas noches
  if (hora >= 20 || hora <= 5) msg = 'Buenas Noches';

  return msg;
};
// 2-creo servidor
const server = http.createServer((request, response) => {
  // defino mensaje
  const mensaje = obtenerMensaje();
  // lo envio 
  response.end(mensaje);
});

// 3- creo puerto donde respondera
const puerto = 8080;
// pongo a escuchar al puerto 8080
server.listen(puerto, () => {
  console.log('Servidor escuchando en el puerto', puerto);
});
