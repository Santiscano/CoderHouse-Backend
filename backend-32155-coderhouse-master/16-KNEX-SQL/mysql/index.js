import ClientSql from "./sql.js";
import { options } from "./options/db.js";

const sql = new ClientSql(options);

const products = [
    { name: 'Camiseta Argentina', code: 'AB-12', price: 12360, stock: 24 },
    { name: 'Camiseta Colombia', code: 'CD-34', price: 11280, stock: 45 },
    { name: 'Camiseta Venezuela', code: 'EF-56', price: 10230, stock: 16 },
    { name: 'Camiseta México', code: 'FG-44', price: 4270, stock: 34 },
    { name: 'Camiseta Uruguay', code: 'CR-78', price: 6790, stock: 24 },
    { name: 'Camiseta Ecuador', code: 'CR-79', price: 6790, stock: 24 },
    { name: 'Camiseta Brasil', code: 'CR-80', price: 6790, stock: 24 }
  ]

async function test(){
    await sql.createTable();
    console.log('Tabla creada!');
    await sql.insertProduct(products);
    console.log('productos insertados!');
    const allProducts = await sql.getAllProuducts();
    console.table(allProducts);
    await sql.deleteProductById(7);
    console.log('producto con id 7 eliminado!');
    await sql.updateStockById(23, 1);
    console.log('stock de camiseta ARG actualizado!');
    sql.close()
}

test();