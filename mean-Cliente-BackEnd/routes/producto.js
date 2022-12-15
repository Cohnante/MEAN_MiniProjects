//Rutas para producto
const express = require('express');
const router = express.Router();
const ProductoController = require('../controllers/productoController');


// api/products

router.post('/',ProductoController.crearProducto)
router.get('/',ProductoController.ObtenerProducto)
router.put('/:id',ProductoController.ActualizarProducto)
router.get('/:id',ProductoController.BuscarProducto)
router.delete('/:id',ProductoController.BorrarProducto)
module.exports = router;