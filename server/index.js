const express = require('express');
const conectarDB = require('./config/db');

// Server create
const app = express();

// BD Connection
conectarDB();

app.use(express.json());
app.use('/api/productos', require('./routes/producto'));




app.listen(4000, () => {
    console.log('Servidor corriendo puerto 4000');
})
