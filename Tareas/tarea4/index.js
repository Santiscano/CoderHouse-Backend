const server = require('./services/server');

const puerto = 8080;

server.listen(puerto, ()=>{
    console.log('Servidor escuchando en el puerto', puerto);
});
server.on('error',(err)=>{
    console.log('Ha sucedido un error: ', err);
});