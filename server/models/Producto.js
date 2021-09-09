const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    nombre: {
        type: 'string',
        required: true,
    },
    categoria: {
        type: 'string',
        required: true,
    },
    ubicacion: {
        type: 'string',
        required: true,
    },
    precio: {
        type: 'number',
        required: true,
    },
    fechaCreacion: {
        type: 'date',
        default: Date.now()
    }
});

module.exports = mongoose.model('Producto', ProductoSchema);