const { salesService } = require('../services');
// const errorMap = require('../utils/errorMap');

const controllerInsertSalesProducts = async (req, res) => {
  const arrayOfProducts = req.body;
  
  const response = await salesService.serviceInsertSalesProducts(arrayOfProducts);

  if (!response.insertId) return res.status(404).json({ message: 'Product not found' });
  
  const sucessResult = {
    id: response.insertId,
    itemsSold: arrayOfProducts,
  };

  return res.status(201).json(sucessResult);
};

const controllerGetAllSales = async (_req, res) => {
  const { message } = await salesService.serviceGetAllSales();
  return res.status(200).json(message);
};

module.exports = {
  controllerInsertSalesProducts,
  controllerGetAllSales,
};
