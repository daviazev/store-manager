const { productsModel } = require('../models');

const getAllProducts = async () => {
  const products = await productsModel.findAllProducts();
  return { type: null, message: products };
};

const getProductById = async (productId) => {
  const product = await productsModel.findProductById(productId);

  if (!product) return { type: 'Product not found', message: 'Product not found' };

  return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  getProductById,
};
