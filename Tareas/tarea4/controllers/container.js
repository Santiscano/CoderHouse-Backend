const fs = require('fs');

const filepath = path.resolve(__dirname, '../routes/productos.js');

class Contenedor {

    constructor(archivo) {
		this.archivo = archivo;
	}

	async validateExistFile() {
		try {
			await fs.promises.stat(`${this.archivo}`)
		} catch (err) {
			await fs.promises.writeFile(`${this.archivo}`, JSON.stringify([]));
		}
	}

	async readFileFn() {
		await this.validateExistFile();
		const contenido = await fs.promises.readFile(`${this.archivo}`, 'utf-8');
		return JSON.parse(contenido);
	}

	async writeProducts(productos) {
		await this.validateExistFile();
		const data = JSON.stringify(productos, null, 4)
		await fs.promises.writeFile(this.archivo, data)
	}

    async exists(id) {
		const data = await this.getAll()
		const indice = data.findIndex(product => product.id == id)
		return indice >= 0;
	}

    async save(element){
        const data = await this.readFileFn();
		let id = 1;

		if (data.length) {
			//Si tengo elementos en mi array
			id = data[data.length - 1].id + 1;
		}

		const nuevoProducto = {
			title: element.title,
			price: element.price,
			thumbnail: element.thumbnail,
			id: id,
		};

		data.push(nuevoProducto);

		await this.writeProducts(data)
		console.log(`Nuevo producto guardado, N° ID: ${nuevoProducto.id}`);

		return nuevoProducto.id;
    }

    async getAll() {
		try {
			const data = this.readFileFn();
			return data

		} catch {
			console.log('Error en la obtencion todos los datos');
		}
	}

    async updateById(id, updateProduct) {
		const exist = await this.exists(id);
		if (!exist) throw new Error(`No existe item con ID ${id}`)

		const productos = await this.getAll()
		const productoId = productos.findIndex(producto => producto.id == id)

		const productoViejo = productos[productoId]

		const productoModificado = {
			id: productoViejo.id,
			title: updateProduct.title,
			price: updateProduct.price
		}

		productos.splice(productoId, 1, productoModificado)

		await this.writeProducts(productos)
		return productoModificado

	}

    async deleteById(id) {
		const data = await this.readFileFn()

		const productoId = data.findIndex((producto) => producto.id === id);

		if (productoId < 0) {
			throw new Error('El producto no existe');
		}

		data.splice(productoId, 1);

		await this.writeProducts(data)

	}

	async deleteAll() {
		await this.writeProducts([])
	}
}

const productsApi = new Contenedor( filepath );

module.exports = {
	ProductsController: productsApi
}





