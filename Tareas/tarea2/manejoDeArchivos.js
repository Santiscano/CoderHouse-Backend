const fs = require('fs');
const path = require('path');

class Contenedor {
    
    constructor(nameFile){
        // ubicacion archivo a manipular con los metodos
        this.nameFile =`./${nameFile}.json`;       
    }

    //leer archivo 
    async getJson(){
        // almacena laa info del archivo en esta variable
        const data = await fs.promises.readFile(this.nameFile,'utf-8');
        // retorna objeto json
        return JSON.parse(data);
    }

    // actualizar
    async updataFile(products){
        fs.promises.writeFile(this.nameFile, JSON.stringify(products, null, '\t'), 'utf-8');
    }

    // leer todo
    async getAll() {
        const data =  await this.getJson();
        return data;
    };

    // metodo 1
    async save(data){
        if(!data.title || !data.price || typeof data.title !== 'string' || typeof data.price !== 'number') throw new Error('verificar, Datos invalidos');
        let id = 1;
        const products =   await this.getJson();
        if(products.length){
            id = products[products.length -1].id +1;
        }
        const newProduct = {
            title: data.title,
            price: data.price,
            id: id
        }
        products.push(newProduct);
        console.log(`se agrego ${newProduct.title} a ${this.nameFile}`);
        return await this.updataFile(products);
    }

    async getById(id){
        const products = await this.getJson();
        const busqueda  = products.find((dato) => dato.id === id);
        console.log(`El producto con id ${id} es:`);
        console.log(busqueda);
        return busqueda;
    }

    async deleteById(id){
        const products = await this.getJson();
        products.splice(id - 1,1);
        console.log(`Se removio el producto con id:${id} de sus products`);
        return await this.updataFile(products);
    }

    async deleteAll(){
        const products = await this.getJson();
        products.splice(0);
        console.log('Se borraron todos los products de su lista');
        return await this.updataFile(products);
    }
}







const fileSintax = async() =>{
    const products = new Contenedor('products')

    const getAll = await products.getAll();
    console.log(getAll);

    const save = await products.save({
        title: 'pan',
        price: 1500
    });

    const searchId = await products.getById(2);

    const deleteId = await products.deleteById(2);

    const deleteAll = await products.deleteAll();

    const getAll2 = await products.getAll();
    console.log(getAll2);

}

fileSintax();