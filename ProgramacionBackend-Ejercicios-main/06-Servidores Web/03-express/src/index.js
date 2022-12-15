// en vez de http llamo a express
const express = require('express');
const path = require('path')

//Creamos nuestra aplicacion de express
const app = express();

//Ponemos a nuestra aplicacion de express a escuchar peticiones HTTP en un puerto que nosotros definimos
//La salida de la funcion listen va a ser nuestro servidor HTTP
const puerto = 8080;
const server = app.listen(puerto, () =>
  console.log('Server Up en puerto:', puerto)
);

//Para indicar una situación de error en la puesta en marcha del servidor, 
//podemos configurar el evento ‘error’ a través del método ‘on’ sobre nuestro servidor web
server.on('error', (err) => {
  console.log('Error en el servidor!! =>', err);
});

// request 'req' : toda laa info que el cliente envia
// response 'res' : lo que nosotros enviaremos
//Definimos las rutas de nuestra aplicacion. Si el usuario ejecuta alguna de estas rutas la funcion correspondiente se ejecutara.
app.get('/', (req, res) => {
  // se puede responder tanto con send como con json
  // send se puede mandar lo que se quiere
  // res.send({mensaje: "hola desde la ruta principal con send"})
  // json solo mandar json
  res.json({
    mensaje: "Hola desde la ruta principal"
  })
})

app.get('/recurso1', (req, res) => {
  res.json({
    mensaje: "Hola desde la ruta /recurso1"
  })
})

app.get('/recurso2', (req, res) => {
  res.json({
    mensaje: "Hola desde la ruta /recurso2"
  })
})

// ENVIO DE UN HTML BASICO USANDO EXPRESS
app.get('/mihtml', (req, res) => {
  const myfilePath = path.resolve(__dirname, './views/vista1.html');

  const filePathNotAbsolute = './views/vista1.html'     //probar con este path. va a dar error porque no es absoluto.
  res.sendFile(myfilePath);
});
