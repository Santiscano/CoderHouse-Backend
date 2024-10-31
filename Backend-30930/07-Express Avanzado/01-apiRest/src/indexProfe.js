const express = require('express');
// path es para poner ubicacion actual
const path = require('path');
// file sistem es para leer,editar, eliminar archivos
const fs = require('fs/promises');

// incorporo express en una variable
const app = express();
const puerto = 8080;
// escucho en algun puerto
const server = app.listen(puerto, () =>
  console.log('Server up en puerto', puerto)
);

server.on('error', (err) => {
  console.log('ERROR ATAJADO', err);
});

// ubicacion archivo donde se guarda info
const filePath = path.resolve(__dirname, '../usuarios.json');

// receta de cocina para entender lo que el cliente envia en el body
// esta primera es para entender json
app.use(express.json());
// y este para otro tipo de info
app.use(express.urlencoded({ extended: true }));



// PETICION GET
app.get('/usuarios', async (req, res)=>{
  const fileData = await fs.readFile(filePath, 'utf8');
  const usuarios = JSON.parse(fileData);
  res.json({
    data: usuarios
  });
})
// GET pero con filtro de :id
app.get('/usuarios/:id', async (req, res)=>{
  const id = req.params.id;
  const fileData = await fs.readFile(filePath, 'utf8');
  const usuarios = JSON.parse(fileData);

  const indice = usuarios.findIndex( unUsuario => unUsuario.id == id );

  if(indice < 0 ){
    return res.status(404)
      .json({
        msg: 'usuario no existe'
      }) 
  }

  res.status(200)
      .json({
        msg: `devolviendo usuario con id ${id}`,
        data: usuario[indice],
      })

  res.json({
    data: `devolviendo usuario con id ${id}`,
  });
})


// PETICION POST    "pasos"
app.post('/usuarios', async (req, res)=>{
  // 1- recibo data en variable
  const data = req.body;
  console.log(req.body);

  // 2-desestructuro
  const {nombre, edad, goles} =req.body;

  // 3-valido data correcta
  if(!nombre || !edad || !goles){
    return res.status(400).json({
      msg: 'Invalid Body'
    })
  }

  // 4- almaceno
  const nuevoUsuario = {
    nombre,
    edad,
    goles
  }

  // 4.1 recibo info del archivo usuarios.json
  const fileData = await fs.readFile(filePath, 'utf8');
  const usuarios = JSON.parse(fileData);
  // 4.2- almaceno en base de datos
  // usuarios.push(nuevoUsuario);  // forma con push
  const writeData = await fs.writeFile(filePath, JSON.stringify(usuarios,null, '\t'));


  // respondo al cliente
  res.json({
    msg: ok,
    data: nuevoUsuario
  })
})

// PETICION PUT
// los 2 puntos seguido de un nombre es para guardar esa informacion en una variable
app.put('/usuarios/:id', async (req, res)=>{
// dentro de req.params.id esta esa informacion recibida y la almaceno en una variable que puedo usar.
  const id = req.params.id;
  const {nombre, edad, goles} =req.body;
  // leo info y la guardo en la variable
  const fileData = await fs.readFile(filePath, 'utf8');
  // convierto en json y la guardo en la variable
  const usuarios = JSON.parse(fileData);

  // logica para identificar ID 
  const indice = usuario.findIndex( unUsuario => unUsuario.id == id );

  if(indice < 0 ){
    return res.status(404)
      .json({
        msg: 'usuario no existe'
      }) 
  }

  // 3-valido data correcta
  if(!nombre || !edad || !goles){
    return res.status(400).json({
      msg: 'Invalid Body'
    })
  }
  // 4- almaceno
  const usuarioActualizado = {
    // con esto defino
    id: usuario[indice].id,
    // con esto digo que lo demas es como llegue
    nombre,
    edad,
    goles
  }

  usuarios.splice(indice, 1, usuarioActualizado)

  res.json({
    msg: `modificando objeto ${id}`
  })
})

// PETICION DELETE
app.delete('/usuarios/:id',async (req, res)=>{
  const id = req.params.id;
  console.log(req.params);
  const fileData = await fs.readFile(filePath, 'utf8');
  const usuarios = JSON.parse(fileData)

  const indice = usuario.findIndex( unUsuario => unUsuario.id == id );
  // borrar

  if(indice < 0 ){
    return res.json({
        msg: 'ok'
      }) 
  }

  usuarios.splice(indice,1);
  await fs.writeFile(filePath,JSON.stringify(usuarios, null, '\t'));


  res.json({
    msg:`borrando objeto con id: ${id}`
  })
})





