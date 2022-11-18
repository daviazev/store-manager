const express = require('express');

const salesController = require('../controllers/sales.controller');

const { fieldsValidation } = require('../middlewares/sales.middlewares');

const router = express.Router();

router.use(express.json());

router.post('/', fieldsValidation, salesController.controllerInsertSalesProducts);

router.get('/', salesController.controllerGetAllSales);

router.get('/:id', salesController.controllerGetSaleById);

router.delete('/:id', salesController.controllerDeleteSaleById);

module.exports = router;