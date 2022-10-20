// server creado en otra carpeta, y aqui se trae
const server = require('./services/server')

// definimos puerto
const puerto = 8080;

// ponemos a escuchar al servidor que fue creado en otro lado, pero aqui decimos que escuche
server.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

// y si hay errores aqui los da
server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});




