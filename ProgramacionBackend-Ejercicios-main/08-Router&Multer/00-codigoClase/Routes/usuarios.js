// herramienta para rutas
const { Router } = require('express')
// herramienta de node.js para leer, editar y eliminar info de otro archivo local
const fs = require('fs/promises');
// herramienta para reconocer ubicacion actual de la carpeta y poder usar fs de manera correcta
const path = require('path');
// ubicacion archivo donde se guarda info
const filePath = path.resolve(__dirname, '../../../07-Express Avanzado/01-apiRest/usuarios.json');

// almacenamos la variable Router en una variable
const rutaUsuarios = Router()


// PETICION GET
rutaUsuarios.get('/', async (req, res)=>{
    // leemos y almacenamos info en variable
    const fileData = await fs.readFile(filePath, 'utf8');
    // convertimos a JSON
    const usuarios = JSON.parse(fileData);
    // respondemos a usuario con la info leida
    res.json({
      data: usuarios
    });
  })


  // GET pero con filtro de :id
rutaUsuarios.get('/:id', async (req, res)=>{
  // con los : lo capturamos en params para ponerlo en una variable
  const id = req.params.id;
  // leemos con readFile
  const fileData = await fs.readFile(filePath, 'utf8');
  // convertimos en JSON
  const usuarios = JSON.parse(fileData);

  // devuelve el primer indice que cumpla con la condicion solicitada en usuarios, en este caso .id
  const indice = usuario.findIndex( unUsuario => unUsuario.id == id );

  // validacion de errores
  if(indice < 0 ){
    return res.status(400)
      .json({
        msg: 'usuario no existe'
      }) 
  }

  // respuesta status solicitud al cliente
  res.status(200)
      .json({
        msg: `devolviendo usuario con id ${id}`,
        data: usuario[indice],
      })

  // respuesta cliente
  res.json({
    data: `devolviendo usuario con id ${id}`,
  });
})


// PETICION POST    "pasos"
rutaUsuarios.post('/', async (req, res)=>{
  // 1- recibo data enviada en body y guardo en variable "aunque parece mas solo para ver en consola porque el paso 2 desestructura"
  const data = req.body;
  console.log(data);

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

  // 4.1 leo info del archivo usuarios.json y almaceno en variable
  const fileData = await fs.readFile(filePath, 'utf8');
  // convierto info en JSON
  const usuarios = JSON.parse(fileData);

  // 4.2- almaceno en base de datos
  // usuarios.push(nuevoUsuario);  // forma con push
  const writeData = await fs.writeFile(filePath, JSON.stringify(usuarios,null, '\t'));
  // Una pregunta interesante seria el porque crear una variable que no se leera, y la respuesta es porque aunque no se lea, esto permite poder seguir con la asincronia escribiendo AWAIT


  // respondo al cliente
  res.json({
    msg: 'ok',
    data: nuevoUsuario
  })
})


  // PETICION PUT
  rutaUsuarios.put('/:id', async (req, res)=>{
    const id = req.params.id;
    const {nombre, edad, goles} =req.body;
    const fileData = await fs.readFile(filePath, 'utf8');
    const usuarios = JSON.parse(fileData);
  
    const indice = usuario.findIndex( unUsuario => unUsuario.id == id );
  
    if(indice < 0 ){
      return res.status(400)
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
      id: usuario[indice].id,
      nombre,
      edad,
      goles
    }
  
    res.json({
      msg: `modificando objeto ${id}`
    })
  })
  
  // PETICION DELETE
  rutaUsuarios.delete('/:id',async (req, res)=>{
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

// tener cuidado porque lo que se exporta es lo que se halla definido como variable de Router();
module.exports = rutaUsuarios;