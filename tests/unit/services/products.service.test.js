const { expect } = require('chai');
const sinon = require('sinon');

const { productsModel } = require('../../../src/models');

const { productsService } = require('../../../src/services');

const { allProductsResponse } = require('./mocks/products.service.mock');

describe('Testando camada service - products', function () {
  afterEach(sinon.restore);

  it('Retorna todos os produtos', async function () {
    sinon.stub(productsModel, 'findAllProducts').resolves(allProductsResponse);

    const result = await productsService.getAllProducts();

    expect(result.type).to.be.equal(null)
  })

  it('Retorna o type como null, caso passe um id válido', async function () {
    sinon.stub(productsModel, 'findProductById').resolves(allProductsResponse[1]);

    const result = await productsService.getProductById(1);

    expect(result.type).to.be.equal(null)
  })

  it('Retorna a mensagem "Product not found" ao passar um id que nao existe', async function () {
    sinon.stub(productsModel, 'findProductById').resolves(allProductsResponse[5]);

    const result = await productsService.getProductById(5);

    expect(result.message).to.be.equal('Product not found')
  })
})
