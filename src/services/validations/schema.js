const Joi = require('joi');

const insertProductValidation = Joi.object({
  name: Joi.string().min(5).required(),
});

const insertProductSaleValidation = Joi.object({
  productId: Joi.number().min(1).required(),
  quantity: Joi.number().min(1).required(),
});

module.exports = {
  insertProductValidation,
  insertProductSaleValidation,
};
