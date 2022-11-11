const conn = require('./connection');

const findAllProducts = async () => {
  const [result] = await conn.execute(
    'SELECT * FROM StoreManager.products',
  );

  return result;
};

const findProductById = async (productId) => {
  const [[result]] = await conn.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
  );

  return result;
};

module.exports = {
  findAllProducts,
  findProductById,
};
