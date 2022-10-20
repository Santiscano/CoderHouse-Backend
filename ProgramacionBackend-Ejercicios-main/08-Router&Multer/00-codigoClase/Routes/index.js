// funcion de express para direccionar
const {Router} = require('express');
// UsuariosRouter es la logica traida
const UsuariosRouter = require('./usuarios');
// y aqui ponemos esa funcion en una variable
const rutaPrincipal = Router();

// definimos ruta principal de usuarios
rutaPrincipal.use('/usuarios', UsuariosRouter);

// se le entrega al modulo anterior para que establesca la ruta
module.exports = rutaPrincipal;