const fs = require('fs');
const path = require('path');

//NOTA: 4 formas distintas de referenciar el mismo archivo
console.log(__dirname); //imprime el path donde estoy ubicado actualmente

//3 formas distintos de referir un archivo en el mismo directorio
const pathArchivoOpcion1 = 'texto.txt';
const pathArchivoOpcion2 = './texto.txt';               //El ./ indica que estas en el directorio actual
const pathArchivoOpcion3 = `${__dirname}/texto.txt`;
const pathArchivoOpcion4 = __filename;


const pathArchivo4 = path.resolve(__dirname, './../03-Programacion sincronica y asincronica', 'texto.txt');


const ubicacionArchivo = pathArchivoOpcion2

//Lectura sincronica     -   la diferencia mayor es que a estas sincronas no se les pasa callback
try {
  const data = fs.readFileSync(ubicacionArchivo, 'utf-8');
  console.log(data);
} catch (err) {
  console.log('Error lectura Sincronica');
  console.log(err.message)
}

//Lectura asincronica
const rutaCorrecta = path.resolve(__dirname, './texto.txt');

fs.readFile(rutaCorrecta, 'utf-8', (error, dataAsync) => {
  if(error) throw error;     //esta es otra forma de escribir
  // if (error) return console.log('Error lectura Asincronica', error.message);
  console.log(dataAsync);
  console.log(dataAsync.toString());
});
