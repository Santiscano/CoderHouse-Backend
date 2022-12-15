const fs = require('fs');

try {
  const fecha = Date();

  const rutaArchivo = 'fyh.txt'

  fs.writeFileSync(rutaArchivo, fecha);

  const data = fs.readFileSync(rutaArchivo, 'utf-8');

  console.log(data);
} catch (err) {
  console.log('ERROR', err);
}

// asincrono
  fs.writeFile(rutaArchivo, fecha, (err, data) => {
    if (err) {
      console.log('ERROR writeFile', err);
      throw new Error(err)
    }

    fs.readFile(rutaArchivo, 'utf-8', (err, data) =>{
      if (err) {
        console.log('ERROR readFile', err);
        throw new Error(err)
      }
      console.log(data);
    })
  })

  // ahora con promesa
  fs.promises.writeFile(rutaArchivo, fecha)
  .then(() => {
    console.log('escribi')
    return fs.promises.readFile(rutaArchivo,'utf-8');
  })
  .then(data => console.log('lei',data))
  .catch(err =>{console.log('error promesa', err);}
  )
  
//convirtiendo async
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