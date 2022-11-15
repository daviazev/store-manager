const { expect } = require('chai');
const sinon = require('sinon');

const { salesModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

const {
  rightSaleBody,
} = require('./mocks/sales.model.mock')

describe('Testes de unidade para a camada model, endpoint /sales', function () {
  afterEach(sinon.restore)

  it('adiciona uma venda com sucesso', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }])

    const result = await salesModel.modelInsertSalesProducts(rightSaleBody)

    expect(result).to.be.equal(1);
  })
})