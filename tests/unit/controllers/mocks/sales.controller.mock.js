const nonexistentProductIdBody = [{productId:9999,quantity:1}];

const rightSaleBody = [
  {productId:1,quantity:1},
  {productId:2,quantity:5},
];

const saleCreateResponse = {
  id: 3,
  itemsSold: [
    {productId:1,quantity:1},
    {productId:2,quantity:5},
  ]
}

module.exports = {
  nonexistentProductIdBody,
  rightSaleBody,
  saleCreateResponse,
}
