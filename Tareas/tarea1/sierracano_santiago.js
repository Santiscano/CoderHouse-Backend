class Usuario{
    nombre;
    apellidos;
    libros=[];
    mascotas=[];

    constructor( nombre, apellidos, libros, mascotas){
        this.nombre = nombre;
        this.apellidos =apellidos;
        this.libros =libros; //objeto
        this.mascotas =mascotas;  //string
    }

    // metodos
    // nombre usuario
    getFullName(){
        return console.log(`mi nombre completo es ${this.nombre} ${this.apellidos}`)
    }
    // agregar nombre de mascotas
    addMascotas(nombreMascota){
        this.mascotas.push(nombreMascota);
    }
    // dice que cantidad de mascotas tiene el array
    countMascotas(){
        console.log(this.mascotas.length);
    }
    addBook(nombre, autor){
        // crear objeto con nombre y autor
        // agregar objeto al array libros
        this.libros.push({ name:nombre, author: autor});
    }
    // identificar usuario y retornar libros de usuario
    getBookName(){
        let nombreLibros = [];
        let mapArray = this.libros.forEach((item) => {
            nombreLibros.push(item.name)
        });
        console.log(nombreLibros);
    }
}

let usuario = new Usuario('santiago','sierra cano',[{name: 'El señor de los anillos',author:'J.R.R Tolkien'}],['sam']); //nueva instancia
// ejecuta el crear nombre completo
usuario.getFullName();

// agrega nueva mascota
usuario.addMascotas('kiara');
// console log despues de agregar nueva mascota
console.log( usuario.mascotas );

// cantidad de mascotas 'deberian ser 2'
usuario.countMascotas();

// console.log antes de agregar libros
console.log( usuario.libros );
// agregar libros
usuario.addBook('Narnia','C.S Lewis');
// console log despues de agregar libro
console.log(usuario.libros);

// solo nombre libros
usuario.getBookName();
