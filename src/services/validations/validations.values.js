const { insertProductValidation } = require('./schema');

const validateProductName = (name) => {
  const { error } = insertProductValidation.validate({ name });

  if (error) return { type: error.message, message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateProductName,
};
