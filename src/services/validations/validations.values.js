const { insertProductValidation } = require('./schema');

const validateProductName = (name) => {
  const { error } = insertProductValidation.validate({ name });

  if (error) return { type: 'INVALID_VALUE', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  validateProductName,
};
