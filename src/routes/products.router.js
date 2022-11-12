const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();

router.use(express.json());

router.get('/', productsController.listProducts);

router.get('/:id', productsController.listProductById);

router.post('/', productsController.controllerInsertProduct);

module.exports = router;
