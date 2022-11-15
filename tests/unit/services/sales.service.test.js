const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');

const { salesService } = require('../../../src/services');

const { rightSaleBody } = require('./mocks/sales.service.mock');

describe('Testes para a camada service, rota /sales', function () {
  afterEach(sinon.restore)

  it('Retorna um insertId ao receber uma venda correta', async function () {
    sinon.stub(salesModel, 'modelInsertSalesProducts').resolves(1)

    const result = await salesService.serviceInsertSalesProducts(rightSaleBody);

    expect(result.insertId).to.be.equal(1);
  })
})