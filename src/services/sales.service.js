const { salesModel } = require('../models');

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

const serviceInsertSalesProducts = async (arrayOfProducts) => {
  const insertId = await salesModel.modelInsertSalesProducts(arrayOfProducts);

  // console.log(insertId);

  return { insertId };
};

const serviceGetAllSales = async () => {
  const sales = await salesModel.modelGetAllSales();
  return { type: null, message: sales };
};

// serviceInsertSalesProducts(xablau);

module.exports = {
  serviceInsertSalesProducts,
  serviceGetAllSales,
};
