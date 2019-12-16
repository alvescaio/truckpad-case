# truckpad [case]

Este case trata-se de um sistema para simular o cadastro e visualização de motoristas da plataforma truckpad. O usuário é capaz de cadastrar caminhoneiros, visualizar uma listagem dos caminhoneiros cadastrados e, caso queira, editar as informações cadastradas.

## Começando

Segue algumas orientações de como executar o projeto.

### Pré-requisitos

Você precisa ter o [nodejs](https://nodejs.org/) instalado, além disso, é necessário possuir o npm ou yarn para prosseguir com a build do projeto.

### Executando o projeto
Na pasta raíz, execute os seguintes comandos:

Usando npm:

```
# npm install
# npm start
```

Usando yarn:

```
# yarn install
# yarn start
```

## Ferramentas utilizadas no desenvolvimento
O projeto foi criado em React, com a ferramenta 'create-react-app'. Também foram utilizadas algumas bibliotecas JS que facilitaram o desenvolvimento em diversas partes da projeto.

Para suporte na criação do design da aplicação, foi utilitazada a biblioteca [material-ui](https://material-ui.com/), que fornece diversos componentes com a cara do [material design](https://material.io/design/).

Outra biblioteca, a [react router](https://www.npmjs.com/package/react-router) foi utilizada para gerenciar as rotas da aplicação.

[Formik](https://www.npmjs.com/package/formik) e [Yup](https://www.npmjs.com/package/yup) foram essenciais para validação do fomulário.

Para executar os testes escritos para o projeto, foi utilizada a biblioteca [Jets](https://www.npmjs.com/package/jest).

Por fim, e não menos importante, a [Redux](https://www.npmjs.com/package/redux), que serviu para gerenciar o estado da aplicação.

## Testes
Foram escritos alguns testes unitários para funções responsáveis pelo gerenciamento do estado global da aplicação (Actions, Reducers...). Para executar os testes, execute o seguinte comando:

Usando npm:

```
# npm test
```

Usando yarn:

```
# yarn test
```

## Autor

* [**Caio Alves**](https://github.com/alvescaio)

