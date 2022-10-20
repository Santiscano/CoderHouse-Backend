const { Router } = require('express');
const { productsController } = require('../controllers/container');

const routerProducts = Router();

routerProducts.get('/', async (req, res, next)=>{
    try {
        const response = await productsController.getAll()
        res.json(response)
    }catch(err){
        next(err);
    }
});

routerProducts.get('/:id', async (req, res, next)=>{
    try{
        const id = parseInt(req.params.id)
        const response = await products.getById(id)
        res.json(response);
    }catch(err){
        next(err);
    }
});
routerProducts.post('/', async (req, res, next)=>{
    try{
        const data = req.body
        const response = await profuctsController.save(date)
        res.json({
            msg: `nuevo producto guardado Id: ${response}`
        });
    }catch(err){
        next(err);
    }
});

routerProducts.put('/:id', async (req, res, next)=>{
    const id = parseInt(req.params.id)
    const body = req.body
    try {
        let data = await ProductsController.updateById(id, body)

        res.json(data);

    } catch (err) {
        next(err);
    }
});


routerProducts.delete('/:id', async(req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        await ProductsController.deleteById(id)

        res.json({ message: 'Producto eliminado' })

    } catch (err) {
        next(err)
    }
});



