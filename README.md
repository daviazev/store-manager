# STORE MANAGER

[Leia em Português](#português-) | [Read in English](#english-)

---

## Português 🇧🇷

### Sobre

Store Manager é um projeto desenvolvido durante o módulo de backend no curso da Trybe. O objetivo é criar uma API RESTful de um sistema de gerenciamento de vendas no formato dropshipping, em que é possível criar, visualizar, deletar e atualizar produtos e vendas, usando MySQL. Além disso, também foi colocado em prática o uso de testes unitários para as camadas model, service e controller.

Os códigos desenvolvidos por mim podem ser encontrados nas pastas `src` e `tests`.

### Ferramentas usadas

- Docker
- Express
- Node
- MySQL
- Chai 
- Sinon 
- Jest 
- Frisby

### Orientações

<details>
<summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />

#### Com Docker 

- Clone o repositório com o comando `git@github.com:daviazev/store-manager.git`
- Entre na pasta com o comando `cd store-manager`
> Tendo o Docker e o Docker Compose instalados, rode usando o comando `docker-compose up -d`
- Esse serviço irá inicializar um container chamado `store_manager` e outro chamado `store_manager_db`.
- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
> Use o comando `docker exec -it store_manager bash`
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
> Instale as dependências [Caso existam] com `npm install`
> Execute a aplicação com `npm start` ou `npm run debug`

#### Sem Docker

- Clone o repositório com o comando `git@github.com:daviazev/store-manager.git`
- Entre na pasta com o comando `cd store-manager`
- Instale as dependências [Caso existam] com `npm install`

1. Para rodar o projeto desta forma, obrigatoriamente você deve ter o node instalado em seu computador.

2. O avaliador espera que a versão do node utilizada seja a 16.

3. A versão do `Node.js` e `NPM` a ser utilizada é `"node": ">=16.0.0"` e `"npm": ">=7.0.0"`, como descrito a chave `engines` no arquivo `package.json`. Idealmente deve-se utilizar o Node.js na `versão 16.14`, a versão na que esse projeto foi testado.

</details>

<details>
<summary><strong>⚒️ Testes</strong></summary><br />

  O projeto usa as ferramentas [Jest](https://jestjs.io/pt-BR/) e o [Frisby](https://docs.frisbyjs.com/) para fazer os testes de API.

  Este projeto já vem configurado e com suas dependências.

  #### Executando todos os testes

  Para poder executar os testes que eu fiz, inicie sua aplicação com `npm run debug`, em seguida, basta executar o comando `npm run test:mocha` e **todos** os testes serão executados.

  :warning: **Importante:** os comandos de testes podem ser executados tanto no terminal do seu computador quanto do **_Docker_**.
</details>

---

## English 🇺🇸

### About

Store Manager is a project developed during the backend module of the Trybe course. The goal is to create a RESTful API for a dropshipping sales management system, where it is possible to create, view, delete, and update products and sales using MySQL. Additionally, unit testing was also implemented for the model, service, and controller layers.

The code developed by me can be found in the `src` and `tests` folders.

### Tools Used

- Docker
- Express
- Node
- MySQL
- Chai 
- Sinon 
- Jest 
- Frisby

### Instructions

<details>
<summary><strong>🐋 Running on Docker vs Locally</strong></summary><br />

#### With Docker 

- Clone the repository using the command `git@github.com:daviazev/store-manager.git`
- Navigate to the folder using the command `cd store-manager`
> With Docker and Docker Compose installed, run it using the command `docker-compose up -d`
- This service will start a container named `store_manager` and another named `store_manager_db`.
- From here, you can run the container via CLI or open it in VS Code.
> Use the command `docker exec -it store_manager bash`
- It will give you access to the interactive terminal of the container created by the compose, which is running in the background.
> Install the dependencies [if any] using `npm install`
> Run the application using `npm start` or `npm run debug`

#### Without Docker

- Clone the repository using the command `git@github.com:daviazev/store-manager.git`
- Navigate to the folder using the command `cd store-manager`
- Install the dependencies [if any] using `npm install`

1. To run the project this way, you must have Node installed on your computer.

2. The evaluator expects the Node version used to be 16.

3. The `Node.js` and `NPM` versions to be used are `"node": ">=16.0.0"` and `"npm": ">=7.0.0"`, as described in the `engines` key in the `package.json` file. Ideally, you should use Node.js version `16.14`, the version in which this project was tested.

</details>

<details>
<summary><strong>⚒️ Tests</strong></summary><br />

  The project uses [Jest](https://jestjs.io/) and [Frisby](https://docs.frisbyjs.com/) to perform API tests.

  This project is already configured and comes with its dependencies.

  #### Running all tests

  To run the tests I wrote, start your application with `npm run debug`, then simply run the command `npm run test:mocha` and **all** tests will be executed.

  :warning: **Important:** The test commands can be run in both your computer's terminal or the **_Docker_** terminal.
</details>
