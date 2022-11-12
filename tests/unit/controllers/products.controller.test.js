const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { productsService } = require('../../../src/services');

const productsController = require('../../../src/controllers/products.controller');

const { allProductsResponse } = require('./mocks/products.controller.mock')

const { expect } = chai;
chai.use(sinonChai);

describe('Testes de unidade do controller - products', async function () {
  afterEach(sinon.restore);

  it('Retorna todos os produtos', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAllProducts').resolves({type: null, message: allProductsResponse});

    await productsController.listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsResponse)
  })

  it('Retorna um produto pelo seu id', async function () {
    const req = { params: { id: '1' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById')
      .resolves({ type: null, message: allProductsResponse[0] });
  
    await productsController.listProductById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProductsResponse[0])
  })

  it('Retorna uma mensagem de erro ao passar um id inexistente', async function () {
    const req = { params: { id: '100' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductById')
      .resolves({ type: 'Product not found', message: 'Product not found' });
  
    await productsController.listProductById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' })
  })
});
