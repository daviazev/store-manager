const camelize = require('camelize');
const connection = require('./connection');

const dateGnerator = () => new Date().toISOString().slice(0, 19).replace('T', ' ');

const modelInsertSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
    [dateGnerator()],
  );

  return insertId;
};

// esta função existe no outro arquivo, mas coloquei ela aqui porque estava dando erro 
// e nao entendi o porquê
const getProductById = async (productId) => {
  try {
    const [[result]] = await connection.execute(
      'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
    );
    return result;
   } catch (error) {
     return error;
   }
};

const modelInsertSalesProducts = async (arrayOfProducts) => {
  const products = await Promise.all(arrayOfProducts.map((product) =>
    getProductById(product.productId)));

  const erro = products.some((e) => !e);

  if (erro) return;

  const insertId = await modelInsertSales();

  await Promise.all(arrayOfProducts.map(async (product) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, product.productId, product.quantity],
    );
  }));

  return insertId;
};

const modelGetAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT SP.sale_id, S.date, SP.product_id, SP.quantity
      FROM StoreManager.sales AS S INNER JOIN 
      StoreManager.sales_products AS SP ON SP.sale_id = S.id
      ORDER BY SP.sale_id ASC, SP.product_id`,
  );

  return camelize(result);
};

const modelGetSaleById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT D.date, SP.product_id, SP.quantity FROM
    StoreManager.sales AS D
    INNER JOIN StoreManager.sales_products AS SP 
    ON D.id = SP.sale_id WHERE D.id = ?`, [saleId],
  );

  return camelize(result);
};

const modelDeleteSaleById = async (saleId) => {
  const sale = await modelGetSaleById(saleId);

  if (sale.length > 0) {
    await connection.execute(
      'DELETE FROM StoreManager.sales WHERE id = ?', [saleId],
    );
  }

  return sale;
};

const modelUpdateSaleById = async (arrayOfProducts, saleId) => {
  const sale = await modelGetSaleById(saleId);

  if (sale.length === 0) return 'Sale not found';

  const products = await Promise.all(arrayOfProducts.map((product) =>
    getProductById(product.productId)));
  
  const areThereAnyInvalidProduct = products.some((product) => !product);

  if (areThereAnyInvalidProduct) return;

  await Promise.all(arrayOfProducts.map((product) => connection.execute(
    `UPDATE StoreManager.sales_products SET product_id = ?, quantity = ? 
      WHERE sale_id = ? AND product_id = ?`,
    [product.productId, product.quantity, saleId, product.productId],
  )));

  return null;
};

// const xablau = [
//   {
//     productId: 1,
//     quantity: 99,
//   },
//   {
//     productId: 2,
//     quantity: 44,
//   },
// ];

// modelUpdateSaleById(xablau, 11);

module.exports = {
  modelInsertSales,
  modelInsertSalesProducts,
  getProductById,
  modelGetAllSales,
  modelGetSaleById,
  modelDeleteSaleById,
  modelUpdateSaleById,
};
