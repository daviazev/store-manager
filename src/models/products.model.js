const connection = require('./connection');

const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

const findProductById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
  );

  return result;
};

const insertProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );

  return insertId;
};

const modelUpdateProduct = async (newProductName, productId) => {
  const doesProductExist = await findProductById(productId);

  if (doesProductExist) {
    const [{ affectedRows }] = await connection.execute(
      'UPDATE StoreManager.products SET name = ? WHERE id = ?', [newProductName, productId],
    );

    return affectedRows;
  }

  return doesProductExist;
};

const modelDeleteProductById = async (productId) => {
  const doesProductExist = await findProductById(productId);

  if (doesProductExist) {
    const [{ affectedRows }] = await connection.execute(
      'DELETE FROM StoreManager.products WHERE id = ?', [productId],
    );

    return affectedRows;
  }

  return doesProductExist;
};

const modelGetProductsByQuery = async (query = '') => {
  const [product] = await connection.execute(
    'select * from StoreManager.products where name like ?', [`%${query}%`],
  );

  return product;
};

module.exports = {
  findAllProducts,
  findProductById,
  insertProduct,
  modelUpdateProduct,
  modelDeleteProductById,
  modelGetProductsByQuery,
};
