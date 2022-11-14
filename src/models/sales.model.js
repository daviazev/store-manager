const connection = require('./connection');

// const { productsModel } = require('./index');

const dateGnerator = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

const modelInsertSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
    [dateGnerator()],
  );

  return insertId;
};

const modelInsertSalesProducts = async (arrayOfProducts) => {
  const insertId = await modelInsertSales();
  
  arrayOfProducts.map(async (product) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, product.productId, product.quantity],
    );
  });
};

module.exports = {
  modelInsertSales,
  modelInsertSalesProducts,
};
