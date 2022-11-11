const { productsService } = require('../services');

const listProducts = async (_req, res) => {
  const { message } = await productsService.getAllProducts();
  return res.status(200).json(message);
};

module.exports = {
  listProducts,
};