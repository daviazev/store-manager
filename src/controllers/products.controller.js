const { productsService } = require('../services');

const errorMap = require('../utils/errorMap');

const listProducts = async (_req, res) => {
  const { message } = await productsService.getAllProducts();
  return res.status(200).json(message);
};

const listProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(Number(id));

  if (type !== null) return res.status(404).json({ message });

  return res.status(200).json(message);
};

const controllerInsertProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.serviceInsertProduct(name);

  let err = 'INVALID_VALUE';

  if (message === '"name" is required') err = 'NAME_REQUIRED';

  if (type !== null) return res.status(errorMap.mapError(err)).json({ message });

  return res.status(201).json({ name, id: message });
};

module.exports = {
  listProducts,
  listProductById,
  controllerInsertProduct,
};