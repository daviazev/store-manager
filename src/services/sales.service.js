const { salesModel } = require('../models');
const { validateSaleProductsFields } = require('./validations/validations.values');

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
  const validation = arrayOfProducts.map(({ productId, quantity }) =>
    validateSaleProductsFields(productId, quantity));

  const typeValidation = validation.some(({ type }) => type);

  if (typeValidation) {
    return validation.find(({ type }) => type);
  }

  await salesModel.modelInsertSalesProducts(arrayOfProducts);

  return validation;
};

// serviceInsertSalesProducts(xablau);

module.exports = {
  serviceInsertSalesProducts,
};
