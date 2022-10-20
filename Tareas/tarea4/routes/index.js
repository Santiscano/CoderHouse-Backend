const { Router } = require('express');
const productsRouter = require('./productos');
const formRouter = require('./formulario');


const rutaPrincipal = Router();

rutaPrincipal.use('/productos', productsRouter);
rutaPrincipal.use('/productos', formRouter);

module.exports = rutaPrincipal;