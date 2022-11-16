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

  it('Retorna o produto criado com sucesso - status 201', async function () {
    const req = { body: { name: "Product X" } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, 'serviceInsertProduct')
      .resolves({ type: null, message: 1 });
    
    await productsController.controllerInsertProduct(req, res);

    expect(res.status).to.be.calledWith(201);
  })

  it('Retorna erro - status 400', async function () {
    const req = { body: { } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, 'serviceInsertProduct')
      .resolves({ type: '"name" is required', message: '"name" is required' });
    
    await productsController.controllerInsertProduct(req, res);

    expect(res.status).to.be.calledWith(400);
  })

  it('Retorna erro - status 422', async function () {
    const req = { body: { name: "Prod" } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, 'serviceInsertProduct')
      .resolves({
        type: '"name" length must be at least 5 characters long',
        message: '"name" length must be at least 5 characters long'
      });
    
    await productsController.controllerInsertProduct(req, res);

    expect(res.status).to.be.calledWith(422);
  })

  it('Retorna o status 404 ao tentar atualizar um product com id inexistente', async function () {
    const req = { body: { name: "Mapa do Maroto" }, params: { id: 9999 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, 'serviceUpdateProduct')
      .resolves({
        type: "Product not found",
        message: "Product not found"
      });
    
    await productsController.controllerUpdateProduct(req, res);

    expect(res.status).to.be.calledWith(404);
  })

  it('Retorna o status 404 ao tentar atualizar um product com id inexistente', async function () {
    const req = { body: { name: "Mapa do Maroto" }, params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productsService, 'serviceUpdateProduct')
      .resolves({
        type: null,
        message: [{ id: 1, name: "Mapa do Maroto" }]
      });
    
    await productsController.controllerUpdateProduct(req, res);

    expect(res.status).to.be.calledWith(200);
  })
});
