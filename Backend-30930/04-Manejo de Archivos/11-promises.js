const fs = require('fs/promises');

//DESAFIO USANDO PROMISES
const rutaArchivo = './00-repaso.js'
const fecha = Date();

fs.promises
  .writeFile(rutaArchivo, fecha)
  .then(() => {
    console.log('escribi')
    return fs.promises.readFile(rutaArchivo,'utf-8');
  })
  .then(data => console.log('lei',data))
  .catch(err =>{
    console.log('error promesa', err);
  })
//onvirtiendo async
const miFuncionAsync = async () => {
  try{
    await fs.promises.writeFile(rutaArchivo, fecha);
    console.log('termine de escribir')

    const data = await fs.promises.readFile(rutaArchivo, 'utf8');
    console.log(data);
  }catch(err){
    console.log('se rompio', err);
  }
}




// 
const pathArchivo = './package.json';
const pathDestino = './info.txt';

const info = {
  contenidoStr: undefined,
  contenidoObj: undefined,
  size: undefined,
};

fs.readFile(pathArchivo, 'utf-8')
  .then((fileData) => {
    info.contenidoStr = fileData;
    info.contenidoObj = JSON.parse(fileData);
    return fs.stat(pathArchivo);
  })
  .then((stats) => {
    info.size = stats.size;

    const infoStringifycada = JSON.stringify(info, null, '\t');

    return fs.writeFile(pathDestino, infoStringifycada);
  })
  .then(() => {
    console.log('FIN PROCESO');
  })
  .catch((err) => {
    console.log('ERROR', err);
  });
