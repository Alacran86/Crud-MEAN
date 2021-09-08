const express = require('express');
const conectarDB = require('./config/db');

// Server create
const app = express();

// BD Connection
conectarDB();

// Routes
app.get('/', (req, res) => {
    res.send('hola');
})


app.listen(4000, () => {
    console.log('Servidor corriendo puerto 4000');
})
