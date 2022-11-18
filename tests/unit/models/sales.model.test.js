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

  it('retorna um array vazio ao tentar deletar uma venda que não existe', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const result = await salesModel.modelDeleteSaleById(9999)

    expect(result).to.have.length(0)
  })

  it('retorna um array ao deletar uma venda que existe', async function () {
    const mock = [
      { date: '2022-11-18T21:08:50.000Z', productId: 1, quantity: 5 },
      { date: '2022-11-18T21:08:50.000Z', productId: 2, quantity: 10 }
    ]

    sinon.stub(connection, 'execute').resolves([mock]);

    const result = await salesModel.modelDeleteSaleById(2)

    expect(result).to.be.deep.equal(mock)
  })

  it('Retorna sale not found ao tentar atualizar uma venda inexistente', async function () {
    const mock = [{ "productId": 1, "quantity": 10 }, { "productId": 2, "quantity": 50 }];
    
    sinon.stub(connection, 'execute').resolves([[]]);

    const result = await salesModel.modelUpdateSaleById(mock, 1);

    expect(result).to.be.equal('Sale not found');
  })

  it('Retorna null ao tentar atualizar uma venda existente', async function () {
    const mock = [{ "productId": 1, "quantity": 10 }, { "productId": 2, "quantity": 50 }];
    
    sinon.stub(connection, 'execute').resolves([mock]);

    const result = await salesModel.modelUpdateSaleById(mock, 1);

    expect(result).to.be.equal(null);
  })

  it('Retorna undefined ao tentar atualizar uma venda com produto inexistente', async function () {
    const mock = [{ "productId": 999, "quantity": 10 }, { "productId": 2, "quantity": 50 }];
    
    sinon.stub(connection, 'execute').resolves([[undefined]]);

    const result = await salesModel.modelUpdateSaleById(mock, 1);

    expect(result).to.be.equal(undefined);
  })
})