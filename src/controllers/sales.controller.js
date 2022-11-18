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

const controllerGetSaleById = async (req, res) => {
  const { id } = req.params;
  const { message } = await salesService.serviceGetSaleById(id);

  if (message === 'Sale not found') return res.status(404).json({ message });
  return res.status(200).json(message);
};

const controllerDeleteSaleById = async (req, res) => {
  const { id } = req.params;
  const { message } = await salesService.serviceDeleteSaleById(id);

  if (message === 'Sale not found') return res.status(404).json({ message });
  return res.status(204).json();
};

module.exports = {
  controllerInsertSalesProducts,
  controllerGetAllSales,
  controllerGetSaleById,
  controllerDeleteSaleById,
};
