const connection = require('./connection');

const findAllProducts = async () => {
  try {
    const [result] = await connection.execute(
      'SELECT * FROM StoreManager.products',
    );
    return result;
  } catch (error) {
    console.log('ERRO:::::::', error.message);
  }
};

const findProductById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
  );

  return result;
};

module.exports = {
  findAllProducts,
  findProductById,
};
