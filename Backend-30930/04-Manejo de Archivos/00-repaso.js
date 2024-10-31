const mostrarLetras = (palabra, delay, cb) => {
    let i = 0;

    const timerId = setInterval(() => {
        console.log(new Date(), palabra[i]);
        i++;
        if(i >= palabra.length){
            clearInterval(timerId)
            cb()
        }
    }, delay)
}

const fin = () => console.log(new Date(), 'termine')

mostrarLetras('independiente', 500, fin)


//  metodos sincronos y asincronos
const saludar = (persona) => {
    console.log(`hola! me llamo ${persona.nombre} y tengo ${persona.edad}`);
}
const duplicarEdad = (persona) => {
    return persona.edad * 2;
}

const objeto = {
    nombre: santiago,
    edad: 30
}

saludar(objeto);
duplicarEdad(objeto);


// tarea
const mostrarLetrasInterval = (string, cb) => {
    let i= 0;
    const timer = setInterval(() => { //lo envuelvo en una variable para poder detenerlo
        console.log(string[i]);
        i++;
        if(i >= string.length){
            clearInterval(timer);
            cb();
        }
    },250)
}
const final = () => {console.log('termine')}
mostrarLetrasInterval('todo va a estar bien', final);
