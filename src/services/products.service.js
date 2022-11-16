const { productsModel } = require('../models');
const { validateProductName } = require('./validations/validations.values');

const PRODUCT_NOT_FOUND = 'Product not found';

const getAllProducts = async () => {
  const products = await productsModel.findAllProducts();
  return { type: null, message: products };
};

const getProductById = async (productId) => {
  const product = await productsModel.findProductById(productId);

  if (!product) return { type: PRODUCT_NOT_FOUND, message: PRODUCT_NOT_FOUND };

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

  return { type: PRODUCT_NOT_FOUND, message: PRODUCT_NOT_FOUND };
};

const serviceDeleteProductById = async (productId) => {
  const product = await productsModel.modelDeleteProductById(productId);

  if (product) return { type: null, message: product };

  return { type: PRODUCT_NOT_FOUND, message: PRODUCT_NOT_FOUND };
};

module.exports = {
  getAllProducts,
  getProductById,
  serviceInsertProduct,
  serviceUpdateProduct,
  serviceDeleteProductById,
};
