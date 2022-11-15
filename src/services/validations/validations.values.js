const { insertProductValidation, insertProductSaleValidation, updateProduct } = require('./schema');

const validateProductName = (name) => {
  const { error } = insertProductValidation.validate({ name });

  if (error) return { type: error.message, message: error.message };

  return { type: null, message: '' };
};

const validateSaleProductsFields = (productId, quantity) => {
  const { error } = insertProductSaleValidation.validate({ productId, quantity });

  if (error) return { type: error.message, message: error.message };

  return { type: null, message: '' };
};

const validateName = (name) => {
  console.log('aaaaaaaaa', name);
  const { error } = updateProduct.validate({ name });

  console.log(error);

  if (error) return { type: error.message, message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateProductName,
  validateSaleProductsFields,
  validateName,
};
