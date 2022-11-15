const express = require('express');

const productsController = require('../controllers/products.controller');

const { updateNameValidation } = require('../middlewares/sales.middlewares');

const router = express.Router();

router.use(express.json());

router.get('/', productsController.listProducts);

router.get('/:id', productsController.listProductById);

router.post('/', productsController.controllerInsertProduct);

router.put('/:id', updateNameValidation, productsController.controllerUpdateProduct);

module.exports = router;
