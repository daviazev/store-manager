const { salesModel } = require('../models');

const serviceInsertSalesProducts = async (arrayOfProducts) => {
  const insertId = await salesModel.modelInsertSalesProducts(arrayOfProducts);

  return { insertId };
};

const serviceGetAllSales = async () => {
  const sales = await salesModel.modelGetAllSales();
  return { type: null, message: sales };
};

const serviceGetSaleById = async (saleId) => {
  const sales = await salesModel.modelGetSaleById(saleId);
  if (sales.length === 0) return { message: 'Sale not found' };
  return { type: null, message: sales };
};

const serviceDeleteSaleById = async (saleId) => {
  const sale = await salesModel.modelDeleteSaleById(saleId);

  if (sale.length === 0) return { message: 'Sale not found' };

  return { type: null, message: sale };
};

const serviceUpdateSaleById = async (arrayOfProducts, saleId) => {
  const result = await salesModel.modelUpdateSaleById(arrayOfProducts, saleId);

  return result;
};

//   const xablau = [
//   {
//     productId: 1,
//     quantity: 1,
//   },
//   {
//     productId: 2,
//     quantity: 5,
//   },
// ];

// serviceUpdateSaleById(xablau, 1);

module.exports = {
  serviceInsertSalesProducts,
  serviceGetAllSales,
  serviceGetSaleById,
  serviceDeleteSaleById,
  serviceUpdateSaleById,
};
