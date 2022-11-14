const express = require('express');

const salesController = require('../controllers/sales.controller');

const router = express.Router();

router.use(express.json());

router.post('/', salesController.controllerInsertSalesProducts);

module.exports = router;