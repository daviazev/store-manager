const { validateSaleProductsFields } = require('../services/validations/validations.values');

const checkError = (message) => {
  if (message === '"quantity" must be greater than or equal to 1') {
    return { message, status: 422 };
  }

  if (message === '"quantity" is required') {
    return { message, status: 400 };
  }

  if (message === '"productId" is required') {
    return { message, status: 400 };
  }
};

const fieldsValidation = (req, res, next) => {
  const arrayOfProducts = req.body;

  const validation = arrayOfProducts.map(({ productId, quantity }) =>
    validateSaleProductsFields(productId, quantity));

  const typeValidation = validation.find(({ type }) => type);

  console.log('>>>>>>>>>>>>>>>.', typeValidation);

  if (typeValidation) {
    const { message, status } = checkError(typeValidation.message);
    return res.status(status).json({ message });
  }

  return next();
};

module.exports = {
  fieldsValidation,
};
