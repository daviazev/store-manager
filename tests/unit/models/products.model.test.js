const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

const { allProductsResponse } = require('./mocks/products.model.mock');

describe('Testes de unidade do model de produtos', () => {
  afterEach(sinon.restore)

  it('Verifica se o retorno é um array', async function () {
    sinon.stub(connection, 'execute').resolves([allProductsResponse]);

    const result = await productsModel.findAllProducts();

    expect(result).to.be.instanceOf(Array)
  })

  it('Verifica se traz o produto certo se passar o id 1', async function () {
    sinon.stub(connection, 'execute').resolves([[allProductsResponse[0]]]);

    const result = await productsModel.findProductById('1')

    expect(result).to.be.equal(allProductsResponse[0])
  })
})