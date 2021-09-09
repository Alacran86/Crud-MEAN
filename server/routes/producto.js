const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

// api/productos
router.post('/', productoController.crearProducto);

router.get('/', productoController.obtenerProducto);

router.put('/:id', productoController.actualizarProducto);


module.exports = router;
