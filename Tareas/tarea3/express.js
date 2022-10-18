// 1 puerto 8080
const express = require('express');
const fs = require('fs')
const http = require('http');
const path = require('path');

const app = express();
const puerto = 8080;
const server = app.listen(puerto,()=>{
    console.log('escuchando en ',puerto)
});
server.on('error',(err)=>{console.log(err)});

// referencio la ubicacion del archivo
const productos = path.resolve(__dirname,'./productos.txt')

// a- get '/productos' devuelve array con todos los productos
app.get('/productos',(req,res)=>{
    res.json(
        fs.readFile(productos, 'utf8', (err, data)=>{
            if(err) throw err;
            console.log(data);
        })
    )
})
// b- get '/productoRandom devuelve un producto al azar
const between = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
    };
app.get('/productoRandom',(req, res)=>{
    res.json(
        fs.readFile(productos, 'utf-8',(err, data)=>{
            if(err) throw err;
            // valido si lee el archivo
            console.log(productos)
            //  ejecuto funcion between
            console.log(`el producto elegido es ${between(1, productos.products.length)}`);
        })
    )
})







