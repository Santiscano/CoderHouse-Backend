// A) SetTimeout ejecuta una funcion pasada como argumento luego de un cierto delay pasado como argumentos (en MS)
//  setTimeout(funcion, milisegundos, param1, param2,...)

setTimeout(() => {
    console.log(new Date(),"EJECUTANDO FUNCION DEMORADA")
}, 2000)


const miFuncionAEjecutar = (nombre,edad) => {
    console.log(`${nombre} ejecutando ${edad}`)
}
// argumento 3 en adelante son las variables
setTimeout(miFuncionAEjecutar, 1000, 'santi', 8);

//B) SetInterval es similar a setTimeout solo que va a ejecutar la funcion periodicamente con el intervalo que le pasemo
//La funcion devuelve un identificador que nos servira para parar de ejecutar la funcion si queremos clearInterval
// setInterval(callback, milisegundos,param1, param2,...)

let i = 0;
const timerId = setInterval(() => {
    console.log(new Date(),"EJECUTANDO FUNCION de forma periodica")
    i++;
    if(i >5){
        console.log(new Date(),'dejamos de ejecutar la funcion')
        clearInterval(timerId)
    }
}, 2000)


// forma 2
const miFun = () =>{
    console.log(new Date(), 'EJECUTANDO')
    i++;
    if(i >5){
        console.log(new Date(),'dejamos de ejecutar la funcion')
        clearInterval(timerId)
    }
}

const timerID = setInterval(miFun, 2000)
