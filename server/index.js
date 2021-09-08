const express = require('express');

// Server configuration
const app = express();

// Routes
app.get('/', (req, res) => {
    res.send('hola');
})


app.listen(4000, () => {
    console.log('Servidor corriendo puerto 4000');
})
