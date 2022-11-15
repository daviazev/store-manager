const rightSaleBody = [
  {productId:1,quantity:1},
  {productId:2,quantity:5},
];

const saleId1 = [
  {
    date: "2022-11-15T20:35:46.000Z",
    productId: 1,
    quantity: 5
  },
  {
    date: "2022-11-15T20:35:46.000Z",
    productId: 2,
    quantity: 10
  }
]

const allSales = [
  {
    saleId: 1,
    date: "2022-11-15T20:35:46.000Z",
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: "2022-11-15T20:35:46.000Z",
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: "2022-11-15T20:35:46.000Z",
    productId: 3,
    quantity: 15
  }
]

module.exports = {
  rightSaleBody,
  saleId1,
  allSales
}