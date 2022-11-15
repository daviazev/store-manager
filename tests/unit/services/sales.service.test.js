const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');

const { salesService } = require('../../../src/services');

const { rightSaleBody, allSales, saleId1 } = require('./mocks/sales.service.mock');

describe('Testes para a camada service, rota /sales', function () {
  afterEach(sinon.restore)

  it('Retorna um insertId ao receber uma venda correta', async function () {
    sinon.stub(salesModel, 'modelInsertSalesProducts').resolves(1)

    const result = await salesService.serviceInsertSalesProducts(rightSaleBody);

    expect(result.insertId).to.be.equal(1);
  })

  it('Retorna um type null ao buscar por todas as vendas', async function () {
    sinon.stub(salesModel, 'modelGetAllSales').resolves(allSales);

    const result = await salesService.serviceGetAllSales();

    expect(result.type).to.be.equal(null)
  })

  it('Retorna um type null ao buscar por todas as vendas', async function () {
    sinon.stub(salesModel, 'modelGetSaleById').resolves(saleId1);

    const result = await salesService.serviceGetSaleById(1);

    expect(result.type).to.be.equal(null)
  })

  it('Retorna a mensagem sale not found', async function () {
    sinon.stub(salesModel, 'modelGetSaleById').resolves([]);

    const { message } = await salesService.serviceGetSaleById(5);

    expect(message).to.be.equal('Sale not found')
  })
})