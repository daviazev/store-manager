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
  const insertId = await modelInsertSales();

  const products = await Promise.all(arrayOfProducts.map((product) =>
    getProductById(product.productId)));

  const erro = products.some((e) => !e);

  if (erro) return;
  
  await Promise.all(arrayOfProducts.map(async (product) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
      [insertId, product.productId, product.quantity],
    );
  }));

  return insertId;
};

// modelInsertSalesProducts(
//     [
//   {
//     productId: 1,
//     quantity: 1,
//   },
//   {
//     productId: 2,
//     quantity: 5,
//   },
// ],
// );

module.exports = {
  modelInsertSales,
  modelInsertSalesProducts,
};
