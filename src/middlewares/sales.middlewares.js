const {
  validateSaleProductsFields, validateName,
} = require('../services/validations/validations.values');

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

  if (typeValidation) {
    const { message, status } = checkError(typeValidation.message);
    return res.status(status).json({ message });
  }

  return next();
};

const updateNameValidation = (req, res, next) => {
  const { name } = req.body;

  const validation = validateName(name);

  const err1 = '"name" is required';
  const err2 = '"name" length must be at least 5 characters long';

  if (validation.type === err1) return res.status(400).json(validation);
  if (validation.type === err2) return res.status(422).json(validation);

  return next();
};

module.exports = {
  fieldsValidation,
  updateNameValidation,
};
