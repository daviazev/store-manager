const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

const {
  rightSaleBody,
  saleId1,
  allSales,
} = require('./mocks/sales.model.mock')

describe('Testes de unidade para a camada model, endpoint /sales', function () {
  afterEach(sinon.restore)

  it('adiciona uma venda com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }])

    const result = await salesModel.modelInsertSalesProducts(rightSaleBody)

    expect(result).to.be.equal(1);
  })

  it('retorna todas as vendas com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([allSales]);

    const result = await salesModel.modelGetAllSales();

    expect(result).to.be.deep.equal(allSales)
  })

  it('retorna todas as vendas com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([saleId1]);

    const result = await salesModel.modelGetSaleById(1);

    expect(result).to.be.deep.equal(saleId1)
  })
})