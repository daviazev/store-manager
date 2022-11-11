const { productsModel } = require('../models');

const getAllProducts = async () => {
  const products = await productsModel.findAllProducts();
  return { type: null, message: products };
};

module.exports = {
  getAllProducts,
};
