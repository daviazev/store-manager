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

  console.log(insertId);

  return { insertId };
};

// serviceInsertSalesProducts(xablau);

module.exports = {
  serviceInsertSalesProducts,
};
