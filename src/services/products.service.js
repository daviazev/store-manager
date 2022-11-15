const { productsModel } = require('../models');
const { validateProductName } = require('./validations/validations.values');

const getAllProducts = async () => {
  const products = await productsModel.findAllProducts();
  return { type: null, message: products };
};

const getProductById = async (productId) => {
  const product = await productsModel.findProductById(productId);

  if (!product) return { type: 'Product not found', message: 'Product not found' };

  return { type: null, message: product };
};

const serviceInsertProduct = async (name) => {
  const error = validateProductName(name);

  if (error.type) return error;

  const product = await productsModel.insertProduct(name);

  return { type: null, message: product };
};

const serviceUpdateProduct = async (newProductName, productId) => {
  const product = await productsModel.modelUpdateProduct(newProductName, productId);

  if (product) return { type: null, message: product };

  return { message: 'Product not found' };
};

module.exports = {
  getAllProducts,
  getProductById,
  serviceInsertProduct,
  serviceUpdateProduct,
};
