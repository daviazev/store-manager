const { salesService } = require('../services');
// const errorMap = require('../utils/errorMap');

const controllerInsertSalesProducts = async (req, res) => {
  const arrayOfProducts = req.body;
  
  const response = await salesService.serviceInsertSalesProducts(arrayOfProducts);
  
  const sucessResult = {
    id: response.insertId,
    itemsSold: arrayOfProducts,
  };

  return res.status(201).json(sucessResult);

  // console.log('>>>>>>>', response);
};

module.exports = { controllerInsertSalesProducts };
