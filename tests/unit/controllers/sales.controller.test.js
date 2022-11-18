const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { salesService } = require('../../../src/services');

const salesController = require('../../../src/controllers/sales.controller');

const { 
  rightSaleBody,
  saleCreateResponse,
  nonexistentProductIdBody,
  saleId1,
  allSales
} = require('./mocks/sales.controller.mock')

const { expect } = chai;
chai.use(sinonChai);

describe('Testes para a camada service, rota /sales', function () {
  afterEach(sinon.restore);

  it('Retorna status 201', async function () {
    const req = { body: rightSaleBody };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'serviceInsertSalesProducts')
      .resolves({ insertId: 3 });
    
    await salesController.controllerInsertSalesProducts(req, res)

    expect(res.status).to.have.been.calledWith(201)
    expect(res.json).to.have.been.calledWith(saleCreateResponse)
  })

  it('Retorna status 404', async function () {
    const req = { body: nonexistentProductIdBody };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'serviceInsertSalesProducts')
      .resolves({ insertId: undefined });
    
    await salesController.controllerInsertSalesProducts(req, res)

    expect(res.status).to.have.been.calledWith(404)
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' })
  })

  it('Retorna todas as vendas', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'serviceGetAllSales')
      .resolves({ type: null, message: allSales })
    
    await salesController.controllerGetAllSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allSales)
  })

  it('Retorna a venda correta pelo seu id', async function () {
    const req = { params: { id: 1 }};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'serviceGetSaleById')
      .resolves({ type: null, message: saleId1 })
    
    await salesController.controllerGetSaleById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleId1)
  })

  it('Retorna a venda correta pelo seu id', async function () {
    const req = { params: { id: 100 }};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'serviceGetSaleById')
      .resolves({ message: 'Sale not found' })
    
    await salesController.controllerGetSaleById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found'})
  })

  it('retorna sale not found ao tentar deletar uma venda inexistente', async function () {
    const req = { params: { id: 100 }};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'serviceDeleteSaleById')
      .resolves({ message: 'Sale not found' });
    
    await salesController.controllerDeleteSaleById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found'})
  })

  it('retorna status 204 ao deletar uma venda', async function () {
    const req = { params: { id: 1 }};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(salesService, 'serviceDeleteSaleById')
      .resolves({ status: 204 });
    
    await salesController.controllerDeleteSaleById(req, res);

    expect(res.status).to.have.been.calledWith(204);
  })
});
