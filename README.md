# truckpad [case]

Este case trata-se de um sistema para simular o cadastro e visualização de motoristas da plataforma truckpad. O usuário é capaz de cadastrar caminhoneiros, visualizar uma listagem dos caminhoneiros cadastrados e, caso queira, editar as informações cadastradas.

Para verificar como ficou a aplicação rodando em produção, acesse [alvescaio.github.io/truckpad-case](https://alvescaio.github.io/truckpad-case)

## Começando

Segue algumas orientações de como executar o projeto.

### Pré-requisitos

Você precisa ter o [nodejs](https://nodejs.org/) instalado, além disso, é necessário possuir o npm ou yarn para prosseguir com a build do projeto.

### Obtendo uma cópia do projeto

É possível obter uma cópia deste projeto baixando e descompactando o arquivo .zip disponível neste [link](https://github.com/alvescaio/truckpad-case/archive/master.zip). Depois, abra o terminal e navegue até a pasta raiz do projeto.

Também é possível obter uma cópia dos arquivos com o comando a seguir, caso tenha o git instalado:

```
# git clone https://github.com/alvescaio/truckpad-case.git
```

### Executando o projeto

Primeiramente, precisamos instalar todas as dependências necessárias para funcionamento do código. Para isso, na pasta raiz do projeto, execute o comando:

```
# npm install
```
ou
```
# yarn install
```
Estando todas as dependências instaladas, basta rodar o projeto com o comando:

```
# npm install
```
ou
```
# yarn install
```
## Estrutura de diretórios da aplicação

<!-- AUTO-GENERATED-CONTENT:START (DIRTREE:dir=./) -->
```
truckpad-case/
├─┬ build/
│ ├─┬ static/
│ │ ├─┬ css/
│ │ │ ├── main.6ae0c75a.chunk.css
│ │ │ └── main.6ae0c75a.chunk.css.map
│ │ ├─┬ js/
│ │ │ ├── 2.f75606c7.chunk.js
│ │ │ ├── 2.f75606c7.chunk.js.LICENSE
│ │ │ ├── 2.f75606c7.chunk.js.map
│ │ │ ├── main.56967b5c.chunk.js
│ │ │ ├── main.56967b5c.chunk.js.map
│ │ │ ├── runtime-main.2e952ead.js
│ │ │ └── runtime-main.2e952ead.js.map
│ │ └─┬ media/
│ │   ├── clear.bd326b2f.gif
│ │   ├── trucker.50f2bca3.png
│ │   └── truckpad-logo.4a7cc5e3.svg
│ ├── asset-manifest.json
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ ├── precache-manifest.c1354d43cda4909cbe39b02461f2fd54.js
│ ├── robots.txt
│ └── service-worker.js
├─┬ public/
│ ├── favicon.ico
│ ├── index.html
│ ├── logo192.png
│ ├── logo512.png
│ ├── manifest.json
│ └── robots.txt
├─┬ src/
│ ├─┬ assets/
│ │ ├─┬ profile_pictures/
│ │ │ ├── trucker-1.jpg
│ │ │ ├── trucker-bino.png
│ │ │ ├── trucker-default.jpg
│ │ │ ├── trucker-icon.png
│ │ │ └── trucker.png
│ │ └─┬ utils/
│ │   ├── clear.gif
│ │   ├── truckpad-logo.png
│ │   └── truckpad-logo.svg
│ ├─┬ components/
│ │ ├─┬ Footer/
│ │ │ └── index.js
│ │ ├─┬ FormDefault/
│ │ │ ├─┬ InputsFields/
│ │ │ │ ├── index.js
│ │ │ │ └── statesBR.js
│ │ │ ├── formValidations.js
│ │ │ ├── index.js
│ │ │ ├── InitialValues.js
│ │ │ └── style.js
│ │ └─┬ Header/
│ │   └── index.js
│ ├─┬ data/
│ │ └── truckers.json
│ ├─┬ Pages/
│ │ ├─┬ AddTrucker/
│ │ │ └── index.js
│ │ ├─┬ EditTrucker/
│ │ │ └── index.js
│ │ └─┬ Home/
│ │   ├── index.js
│ │   ├── msgClearBox.js
│ │   └── style.js
│ ├─┬ store/
│ │ ├─┬ ducks/
│ │ │ ├── index.js
│ │ │ ├── truckers.js
│ │ │ └── truckers.test.js
│ │ └── index.js
│ ├── App.js
│ ├── index.css
│ └── index.js
├── .babelrc
├── babel.config.js
├── debug.log
├── doc-directory-create.js
├── doc-directory-tree.js
├── package-lock.json
├── package.json
├── README.md
├── yarn-error.log
└── yarn.lock
```
<!-- AUTO-GENERATED-CONTENT:END -->


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

