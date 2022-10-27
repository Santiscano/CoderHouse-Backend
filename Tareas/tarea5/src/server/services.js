const express = require('express');
const path = require('path');
const MainRouter = require('../routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));

// path de pug
const folderPugView = path.resolve(__dirname, '../../views')
app.set('views', folderPugView);
app.set('views engine', 'pug');

app.use('/api', MainRouter);

// 
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(status).json({
        message,
    })
});

module.exports = app;