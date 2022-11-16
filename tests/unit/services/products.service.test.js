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

  it('Retorna null ao inserir um produto com nome válido', async function () {
    sinon.stub(productsModel, 'insertProduct').resolves({ insertId: 1 });

    const result = await productsService.serviceInsertProduct('Product X');

    expect(result.type).to.be.equal(null)
    expect(result.message.insertId).to.be.equal(1)
  })

  it('Retorna a mensagem "name is required" ao omitir o nome', async function () {
    sinon.stub(productsModel, 'insertProduct').resolves();

    const result = await productsService.serviceInsertProduct();

    expect(result.message).to.be.equal('"name" is required')
  })

  it('Retorna a mensagem "name length must be at least 5 characters long" ao passar um nome com length menor que 5', async function () {
    sinon.stub(productsModel, 'insertProduct').resolves({ insertId: 1 });

    const result = await productsService.serviceInsertProduct('Prod');

    expect(result.message).to.be.equal('"name" length must be at least 5 characters long')
  })

  // it('Retorna type null', async function () {
  //   sinon.stub(productsModel, 'modelUpdateProduct')
  //     .resolves({ type: null, message: allProductsResponse[0] })

  //   const result = await productsService.serviceUpdateProduct('Nimbus 2000', 1)

  //   expect(result.type).to.be.equal(null)
  // })

  // it('Retorna product not found', async function () {
  //   sinon.stub(productsModel, 'modelUpdateProduct').resolves(undefined)

  //   const result = await productsService.serviceUpdateProduct('Nimbus', 2000)

  //   expect(result.message).to.be.equal('Product not found')
  // })
})

// commitando de novo porque os testes quebraram no github
