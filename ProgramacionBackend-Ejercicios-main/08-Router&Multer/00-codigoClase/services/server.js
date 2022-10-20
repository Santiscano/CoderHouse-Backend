const express = require('express');
// MainRouter es traido de otra carpeta que lo exporto para separar logica
const MainRouter = require('../Routes/index');

// definimos a la constante app como la fuente principal de Express
const app = express();

// receta cocina para que pueda entender la info que recibe
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// direccion URL estandar 
app.use('/api', MainRouter); 

// asi se exporta por default
module.exports = app;

// asi se exportan varias cosas
// module.exports = {
//   asdad,
//   dadas,
//   asdad,
// };
