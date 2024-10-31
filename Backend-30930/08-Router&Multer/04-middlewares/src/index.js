const express = require('express');
const mainRouter = require('./routes/index');

/** INICIALIZACION API con EXPRESS */
const app = express();
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


        // ESTA ES UN EJEMPLO DE VALIDACION EN EL QUE SE USA COMO MIDDLEWARES UNA FUNCION QUE TIENE UNA LOGICA DENTRO
        // el usuario deberia mandar un headers con su clave nombre=santiago
app.use((req, res, next) =>{
  const headers = req.headers;
  console.log('middleware de app')
  // if(headers.nombre !== 'santiago'){
  //   return res.status(404).json({
  //     msg: "no eres el desarrollador, solo el puede entrar"
  //   })
  // };
  
   // el no llamar a next hace que la app se pegue - no se cae, solo no continua la ruta asi que se pega
  next();
});
// estos middleware tambien pueden ser a rutas, para asi tener rutas libres sin validacion y otras que si requieran validacion


const funcion1 = (req, res, next) => {
  console.log('Entrando a funcion1');
  next();
};

const funcion2 = (req, res, next) => {
  console.log('Entrando a funcion2');
  next();
};

/** Ejecutando middlewares 1 y 2 para toda la aplicacion */
app.use(funcion1);
app.use(funcion2);

/**
 * DEFINICION DE LOS ROUTERS
 */

app.use('/api', mainRouter);

/**Este middleware se ejecutara si alguna ruta se rompe. */
app.use(function (err, req, res, next) {
  res.status(500).send({ msg: 'Something broke!', err: err.message });
});
