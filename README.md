# STORE MANAGER

## Sobre

Store Manager é um projeto desenvolvido durante o módulo de backend no curso da Trybe. O objetivo é criar uma API RESTful de um sistema de gerenciamento de vendas no formato dropshipping, em que é possível criar, visualizar, deletar e atualizar produtos e vendas, usando MySQL. Além disso, também foi colocado em prática o uso de testes unitários para as camadas model, service e controller. 

Os códigos desenvolvidos por mim podem ser encontrados nas pastas `src` e `tests`.

## Ferramentas usadas

- Docker
- Express
- Node
- MySQL
- Chai 
- Sinon 
- Jest 
- Frisby

## Orientações 

<details>
<summary><strong>🐋 Rodando no Docker vs Localmente</strong></summary><br />

### Com Docker 

- Clone o repositório com o comando `git@github.com:daviazev/store-manager.git`
- Entre na pasta com o comando `cd store-manager`
> Tendo o Docker e o Docker Compose instalados, rode usando o comando `docker-compose up -d`
- Esse serviço irá inicializar um container chamado `store_manager` e outro chamado `store_manager_db`.
- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
> Use o comando `docker exec -it store_manager bash`
- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
> Instale as dependências [Caso existam] com `npm install`
> Execute a aplicação com `npm start` ou `npm run debug`

### Sem Docker

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

  Este projeto já vem configurado e com suas dependências

  ### Executando todos os testes

  Para poder executar os testes que eu fiz, inicie sua aplicação com `npm run debug`, em seguida, basta executar o comando `npm run test:mocha` e **todos** os testes serão executados.

  :warning: **Importante:** os comandos de testes podem ser executados tanto no terminal do seu computador quanto do **_Docker_**.
</details>