const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { salesService } = require('../../../src/services');

const salesController = require('../../../src/controllers/sales.controller');

const { 
  rightSaleBody,
  saleCreateResponse,
  nonexistentProductIdBody,
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
});
