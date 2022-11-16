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

  it('Verifica o insertId do produto inserido', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 10 }])

    const result = await productsModel.insertProduct('Product X')

    expect(result).to.be.equal(10)
  })

  it('Testa a atualização de produtos', async function () {
    sinon.stub()
      .onFirstCall().resolves([[allProductsResponse[0]]])
      .onSecondCall().resolves(1);

    const product = await productsModel.findProductById(1);
    const result = await productsModel.modelUpdateProduct('Firebolt', 1);

    expect(product).to.be.deep.equal({ id: 1, name: 'Firebolt' });
    expect(result).to.be.equal(1);
  })

  it('Testa se ele não atualiza ao passar um produto com id inexistente', async function () {
    sinon.stub()
      .onFirstCall().resolves(undefined)
      .onSecondCall().resolves(undefined);
    
    const product = await productsModel.findProductById(999);
    const result = await productsModel.modelUpdateProduct('Firebolt', 999);


    expect(product).to.be.equal(undefined)
    expect(result).to.be.equal(undefined)
  })
})