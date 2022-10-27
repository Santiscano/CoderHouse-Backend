const { Router } = require('express');
const productsRouter = require('./productos');


const rutaPrincipal = Router();

rutaPrincipal.use('/productos', productsRouter);

module.exports = rutaPrincipal;