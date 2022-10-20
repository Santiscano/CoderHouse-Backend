const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.static('public'));

// con estas 2 variables defino ubicacion de carpetas
const viewFolderPath = path.resolve(__dirname, '../../views')
const layoutFolderPath = `${viewFolderPath}/layout`
const defaultLayoutPath = `${layoutFolderPath}/index.hbs`

// esta configura handlebar

// app.engine('handlebars', engine({
// cambio esta linea anterior por 
app.engine('hbs', engine({
// para que lea la reduccion de handlebars en las extensiones 
    // aqui estara la configuracion handlebars donde esta la carpeta de view, cual es la carpeta de layout, etc
    layutsDir: layoutFolderPath,
    extname: 'hbs',
    defaultLayout: defaultLayoutPath //con esto no tengo que poner en los get {layout:'index'}
}));
// indica que va a usarse handlebar
app.set('view engine', 'hbs');
app.set('view engine', 'hbs');

// aqui se ponen las direcciones o path donde van los archivos HTML
app.set('views', viewFolderPath);


// main como pagina principal
app.get('/', (req, res) => {
    // main se refiere al main.handlebars referenciado
    // index al layout/index referenciado "por eso sabe donde estan"
    res.render('main',{layout:'index'})
})

// direccion visitas
app.get('/visitas', (req, res) => {
    res.render('visitas', {layout:'index'})
})
app.get('/contactenos', (req, res) => {
    res.render('contactenos', {layout:'index'})
})


module.exports = app;