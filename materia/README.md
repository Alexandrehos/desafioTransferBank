# 1 - Índice

- [1 - Índice](#1---índice)
- [2 - Conteúdo](#2---conteúdo)
- [3 - Desafio](#3---desafio)
  - [3.1 - Requisito 1](#31---requisito-1)
  - [3.2 - Requisito 2](#32---requisito-2)
  - [3.3 - Requisito 3](#33---requisito-3)
    - [3.3.1 - Animação da barra com progress bar](#331---animação-da-barra-com-progress-bar)
    - [3.3.2 - Gerando um QR code a partir de uma URL](#332---gerando-um-qr-code-a-partir-de-uma-url)
  - [3.4 - Requisito 4](#34---requisito-4)
    - [3.4.1 - Offcanvas - Barra lateral para criação de usuário](#341---offcanvas---barra-lateral-para-criação-de-usuário)
    - [3.4.2 - Containers - Atendendo ao requisito de responsividade](#342---containers---atendendo-ao-requisito-de-responsividade)
- [4 - Bootstrap 5](#4---bootstrap-5)
  - [4.1 - Repositório do curso](#41---repositório-do-curso)
  - [4.2 - Importando biblioteca](#42---importando-biblioteca)
  - [4.3 - Icones do bootstrap](#43---icones-do-bootstrap)
  - [4.4 - Adicionando tooltips](#44---adicionando-tooltips)
- [5 - VueJS + Composition API](#5---vuejs--composition-api)
  - [5.1 - Introdução](#51---introdução)
    - [5.1.1 - Template - Alterando o DOM](#511---template---alterando-o-dom)
    - [5.1.2 - Data - Acessando variáveis dentro do HTML](#512---data---acessando-variáveis-dentro-do-html)
    - [5.1.3 - Click events - Reagindo a ações do usuário](#513---click-events---reagindo-a-ações-do-usuário)
    - [5.1.4 - Exibindo elementos condicionalmente](#514---exibindo-elementos-condicionalmente)
    - [5.1.5 - Outros eventos de mouse](#515---outros-eventos-de-mouse)
    - [5.1.6 - Iterando sobre uma lista para gerar elementos da página](#516---iterando-sobre-uma-lista-para-gerar-elementos-da-página)
    - [5.1.7 - Vinculando variáveis e classes dinâmicas](#517---vinculando-variáveis-e-classes-dinâmicas)
    - [5.1.8 - Computed properties - Variaveis que estão vinculadas a outras variáveis](#518---computed-properties---variaveis-que-estão-vinculadas-a-outras-variáveis)
    - [5.1.9 - Conclusão](#519---conclusão)
  - [5.2 - Vue CLI - Criando projetos baseados em Vue](#52---vue-cli---criando-projetos-baseados-em-vue)
    - [5.2.1 - Configuração inicial](#521---configuração-inicial)
    - [5.2.2 - Anatomia de um componente](#522---anatomia-de-um-componente)
    - [5.2.3 - Template refs](#523---template-refs)
    - [5.2.4 - Focando nosso estilo a um componente](#524---focando-nosso-estilo-a-um-componente)
    - [5.2.5 - Props - Passando alguma informação para outro componente](#525---props---passando-alguma-informação-para-outro-componente)
      - [5.2.5.1 - Prop + binding - Passando variáveis como prop](#5251---prop--binding---passando-variáveis-como-prop)
    - [5.2.6 - `$emit` - Emitindo eventos para o compoente pai](#526---emit---emitindo-eventos-para-o-compoente-pai)
      - [5.2.6.1 - Emitindo eventos com parâmetros](#5261---emitindo-eventos-com-parâmetros)
    - [5.2.7 - Modificadores de eventos](#527---modificadores-de-eventos)
    - [5.2.8 - Slots - Passando HTML como prop](#528---slots---passando-html-como-prop)
      - [5.2.8.1 - Named slots](#5281---named-slots)
    - [5.2.9 - Teleport - Mudando o local onde nossos componentes são renderizados](#529---teleport---mudando-o-local-onde-nossos-componentes-são-renderizados)
    - [5.2.10 - Conclusão](#5210---conclusão)
  - [5.3 - Reaction timer - Nosso primeiro projeto Vue](#53---reaction-timer---nosso-primeiro-projeto-vue)
    - [5.3.1 - Lifecycle hooks](#531---lifecycle-hooks)
    - [5.3.2 - Conclusão](#532---conclusão)
  - [5.4 - Forms e inputs com VueJS](#54---forms-e-inputs-com-vuejs)
    - [5.4.1 - Two way data binding - Vinculando DOM e JS](#541---two-way-data-binding---vinculando-dom-e-js)
    - [5.4.2 - Capturando informações de um select](#542---capturando-informações-de-um-select)
    - [5.4.3 - Capturando informações de um checkbox](#543---capturando-informações-de-um-checkbox)
    - [5.4.4 - Adicionando eventos de teclado](#544---adicionando-eventos-de-teclado)
      - [5.4.4.1 - Removendo uma habilidade da lista](#5441---removendo-uma-habilidade-da-lista)
    - [5.4.5 - O evento submit - Enviando formulários](#545---o-evento-submit---enviando-formulários)
    - [5.4.6 - Conclusão](#546---conclusão)
  - [5.5 - Fetching data](#55---fetching-data)
    - [5.5.1 - Json server - Emulando uma REST API](#551---json-server---emulando-uma-rest-api)
    - [5.5.2 - Fazendo uma requisição GET](#552---fazendo-uma-requisição-get)
  - [5.6 - Composition API](#56---composition-api)
    - [5.6.1 - Justificativa - Por que a composition API?](#561---justificativa---por-que-a-composition-api)
    - [5.6.2 - Nossa primeira página usando Composition API](#562---nossa-primeira-página-usando-composition-api)
    - [5.6.3 - Quando a função `setup()` roda](#563---quando-a-função-setup-roda)
    - [5.6.4 - Usando Ref's na composition API](#564---usando-refs-na-composition-api)
      - [5.6.4.1 - Usando Ref's para referênciar um elemento](#5641---usando-refs-para-referênciar-um-elemento)
      - [5.6.4.2 - Usando Ref's para termos variáveis reativas](#5642---usando-refs-para-termos-variáveis-reativas)
    - [5.6.5 - Usando reactive para termos variáveis reativas](#565---usando-reactive-para-termos-variáveis-reativas)
    - [5.6.6 - Computed values com a Composition API](#566---computed-values-com-a-composition-api)
    - [5.6.7 - `watch()`e `watchEffect()` - Monitorando variáveis reativas](#567---watche-watcheffect---monitorando-variáveis-reativas)
      - [5.6.7.1 - A função `watch()`](#5671---a-função-watch)
      - [5.6.7.2 - A função `watchEffect()`](#5672---a-função-watcheffect)
      - [5.6.7.3 - Diferenças entre `watch()`e `watchEffect()`](#5673---diferenças-entre-watche-watcheffect)
      - [5.6.7.4 - Parando de monitorar as funções `watch()` e `watchEffect()`](#5674---parando-de-monitorar-as-funções-watch-e-watcheffect)
    - [5.6.8 - Usando Props na composition API](#568---usando-props-na-composition-api)
    - [5.6.9 - Lifecycle hooks na composition API](#569---lifecycle-hooks-na-composition-api)
    - [5.6.10 - Fetching na composition API](#5610---fetching-na-composition-api)
    - [5.6.11 - Composable function - criando lógica reutilizavel](#5611---composable-function---criando-lógica-reutilizavel)
    - [5.6.12 - Conclusão](#5612---conclusão)
  - [5.7 - Conclusão](#57---conclusão)
- [6 - Pinia](#6---pinia)
  - [6.1 - Instalação e configuração inicial](#61---instalação-e-configuração-inicial)
  - [6.2 - Aceissando uma store dentro de um componente](#62---aceissando-uma-store-dentro-de-um-componente)
  - [6.3 - Getters - As computed variables do Pinia](#63---getters---as-computed-variables-do-pinia)
  - [6.4 - Actions - Mudando o valor dos estados](#64---actions---mudando-o-valor-dos-estados)
  - [6.5 - Vue Devtools + Pinia](#65---vue-devtools--pinia)
  - [6.6 - Ações assíncronas](#66---ações-assíncronas)
    - [6.6.1 - Armazenando nossas modificações](#661---armazenando-nossas-modificações)

# 2 - Conteúdo

- [Bootstrap 5](https://youtube.com/playlist?list=PL4cUxeGkcC9joIM91nLzd_qaH_AimmdAR&si=EnMNWf0GZhQZ6BMb)
- [Vue + composition](https://youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&si=IVJy6oQBDO18xMoF)
- [Pinia](https://youtube.com/playlist?list=PL4cUxeGkcC9hp28dYyYBy3xoOdoeNw-hD&si=iDs_HRaNH8zPpTbj)

# 3 - Desafio

https://www.figma.com/proto/Uo1reBcBXBVniP7zGlTv02/Design-System?page-id=0%3A1&node-id=1720-2921&node-type=frame&viewport=-2454%2C-9780%2C0.22&t=nrEX4unWUO6U0zDy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1696%3A675

Desafio: Programar o front end de uma tela de pagamentos responsiva, com cálculos e integração de API.

Stack: Vue 3 + composition api, Pinia, Bootstrap 5, SAAS

Entrega: Repositório github com um _readme.md_ explicando o básico do projeto e decisões + um vídeo interagindo com os requisitos propostos.

Dado o link acima, observe a tela “Gerar QR Code”. Seu desafio é programar todo o componente da direita. Programar o menu lateral e a navbar do topo são opcionais.

## 3.1 - Requisito 1

Requisito 1: Observe que a tela possui um campo “Buscar cliente pelo CPF”. Se o cliente existir, complete o cliente abaixo. Se não existir, exiba cliente não encontrado.

Desafio: Cadastre o cliente com a modal vindo da lateral, conforme layout.

**Observação: Back end não está no escopo do desafio, então você deve mockar uma API, sugestão de ferramenta é o Postman. Será avaliada sua habilidade com integrações de API aqui.**

## 3.2 - Requisito 2

Requisito 2: Ao inserir o valor da compra em USD, deve mostrar abaixo quando o cliente vai pagar, considerando todos os custos e uma cotação do momento. Essa cotação pode ser randômica local entre 3 números que você definir. Perceba que o dólar precisa ter 4 casas decimais. A fórmula para calcular o quanto o cliente pagará é:

`imposto_iof = 0.38%`

`tarifa = 10 dólares`

`dolar_vet = cotacao_comercial * (1 + custo_percentual + imposto_iof) + tarifa`

`cliente_pagara = dolar_vet * valor_da_compra`

Observação: Utilize corretamente variáveis computed quando convir.

## 3.3 - Requisito 3

Requisito 3: Ao pressionar “Gerar QR code de pagamento”, gerar QR code na lateral, com animação da barra. Sempre que pressionar o botão, adicionar o histórico à “últimas operações realizadas”. Se “Cancelar pagamento” não é necessário remover o histórico, apenas interromper a animação e exibição do QR code. Seu QR Code deve ser exibido a partir de um base64. Ao dar refresh na tela, últimas operações realizadas deve continuar, exibindo a partir de uma pesquisa no local storage do navegador.

Observação: Utilize corretamente o Pinia para caches e estados.

### 3.3.1 - Animação da barra com progress bar

[Progress bar](https://getbootstrap.com/docs/4.0/components/progress/)

### 3.3.2 - Gerando um QR code a partir de uma URL

[Pergunta no stack overflow](https://pt.stackoverflow.com/questions/339285/como-gerar-um-qrcode-a-partir-de-uma-url)

[Biblioteca para gerar QRcode](https://www.npmjs.com/package/qrcode)

## 3.4 - Requisito 4

Requisito 4: A tela deve ser responsiva. Se estiver em telas menores para smartphones e tablets, exibir apenas a parte da esquerda do componente ("Novo pagamento"), reestruturando o layout para ficar legível para telas pequenas. Ao pressionar “Gerar QR code de pagamento”, deve ser exibido o QR code em tela cheia, com a animação e botão "Cancelar pagamento". Não é necessário exibir "Últimas operações realizadas" na versão mobile.

Observação: Sua versatilidade com UX e bootstrap 5 será avaliada aqui.

### 3.4.1 - Offcanvas - Barra lateral para criação de usuário

Vai ajudar a fazer a janela da direta para cadastro de usuário: [Link aqui](https://getbootstrap.com/docs/5.0/components/offcanvas)

### 3.4.2 - Containers - Atendendo ao requisito de responsividade

[Aqui a parte da documentação que fala sobre containers](https://getbootstrap.com/docs/5.0/layout/containers/)

# 4 - Bootstrap 5

## 4.1 - Repositório do curso

[Repositório do curso](https://github.com/iamshaunjp/bootstrap-5-tutorial), as branches são as lições, seguindo a ordem das aulas.

## 4.2 - Importando biblioteca

[Aonde pegar os links](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

Adicionar isso ao `<head>`:

```html
<head>
  ...
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
  />
</head>
```

Adicionar isso ao final do corpo:

```html
<body>
  ...
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"
  ></script>
</body>
```

## 4.3 - Icones do bootstrap

[Aonde pegar o link](https://getbootstrap.com/docs/5.0/getting-started/introduction/). Só colocar no `<head>`:

```html
<head>
  ...
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  />
</head>
```

## 4.4 - Adicionando tooltips

Para adicionar tooltips a gente precisa colocar um script na página:

```html
<script>
  const tooltips = document.querySelectorAll(".tt");
  tooltips.forEach((t) => {
    new bootstrap.Tooltip(t);
  });
</script>
```

Depois a gente só precisa colocar esse `<tt>` ao redor do que a gente quiser colocar uma tooltip, veja como adicionamos uma a imagem do livro:

```html
<span class="tt" data-bs-placement="bottom" title="Net ninja book cover">
  <img src="asssets/ebook-cover.png" class="img-fluid" alt="ebook"
/></span>
```

Como já estamos fazendo uma query pegando tudo que tenha `<tt>`, bastou adicionar essa classe ao redor da imagem.

# 5 - VueJS + Composition API

## 5.1 - Introdução

Primeiramente nós vamos ver como podemos usar o VueJS sem instalar nenhum pacote, para isso podemos acessar o script do VueJS a partir de uma CDN:

```html
<html lang="en">
  <head>
    ...
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  </head>
  <body>
    <div id="app"></div>
    <script src="app.js"></script>
  </body>
</html>
```

Veja que a gente importa a CDN no `<head>` da página e, no final dela a gente coloca o nosso próprio script que fica junto com o arquivo html da página. Esse `<div>` com um id _app_ dentro é o segredo, a gente vai capturar e controlar ele dentro do _app.js_:

```js
const app = Vue.createApp({...});

app.mount("#app");
```

### 5.1.1 - Template - Alterando o DOM

O template permite que a gente coloque coisas dentro desse `<div>` que esta na nossa página:

```js
const app = Vue.createApp({
  template: "<h2>Aqui é o template22</h2>",
});
```

Dessa maneira o Vue vai pegar o `<div>` e colocar dentro dele esse `<h2>`.

### 5.1.2 - Data - Acessando variáveis dentro do HTML

Outra coisa que podemos fazer é definir variáveis no arquivo _app.js_ e acessa-las dentro do html, vamos primeiro criar elas dentro do arquivo js:

```js
const app = Vue.createApp({
  data() {
    return {
      title: "The final empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
});
```

Veja, temos três variáveis, agora vamos coloca-las dentro do html:

```html
<div id="app">
  <ul>
    <li>Titulo do livro: {{title}}</li>
    <li>Nome do autor: {{author}}</li>
    <li>Idade do autor: {{age}}</li>
  </ul>
</div>
```

Única coisa que a gente precisou fazer foi colocar o nome dela entre duas chaves! Molezinha.

### 5.1.3 - Click events - Reagindo a ações do usuário

Podemos reagir a eventos de duas maneiras, direto do html ou a partir do arquivo js. Vamos ver como podemos fazer isso direto do html:

```html
<div id="app">
  <ul>
    <li>Idade: {{age}}</li>
  </ul>
  <button v-on:click="age++">Aumentar idade</button>
  <button @click="age--">Diminuir idade</button>
</div>
```

`v-on` é uma diretiva que fará o aplicativo escutar eventos no DOM e rodar algum js quando o evento for disparado. Veja que a gente colocou `v-on:click="age++"`, ou seja, no event o de _click_ a gente fvai pegar a variável `age` e adicionar 1 a ela, a gente literalmente colocou um código js dentro das aspas! Como o `v-on` é mnuito utilizado, existe a abreviação dele, que usamos no botão seguinte, o `@`, pode ver que o resto ficou da mesma maneira.

A segunda maneira de reagir a eventos é chamando funções! Vamos ver primeiro o lado do js, depois, quando a gente for olhar o html será mais fácil de entender:

```js
const app = Vue.createApp({
  ...
  methods: {
    mudarTitulo(title) {
      this.title = title;
    },
  },
});
```

O que fizemos aqui foi criar, dentro do objeto `app`, uma propriedade _methods_. Nela a gente definiu a função `mudarTitulo()`. O `this.title` é porque estamos acessando a variável `title` que definimos anteriormente. Agora veja como a gente chama essa função a partir do html:

```html
<div id="app">
  <ul>
    <li>Titulo do livro: {{title}}</li>
  </ul>
  <button @click="mudarTitulo('Words of Randiance')">Mudar livro</button>
</div>
```

Nós só precisamos passar ela para o evento `@click`! Molezinha.

> Essa diretiva `@click` pode ser colocada em outros eleventos, pode ser um `<div>`, `<a>`, qualquer coisa que a gente quiser! E o funcionamento será o esperado, na hora que o usuário clicar no elemento, vai acontecer o evendo que a gente definiu para aquele clique.

### 5.1.4 - Exibindo elementos condicionalmente

Outra coisa que podemos fazer é exibir ou esconder elementos dentro da nossa página. Vamos ver como podemos fazer isso dentro da nossa página. Priemeira coisa que fizemos foi, junto com as propriedades `title`, `author` e `age`, adicionamos a propriedade `showbook` e definimos ela como verdadeira:

```js
data() {
    return {
      showBook: true,
      title: "The final empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
```

Agora podemos acessa-la dentro da página e usar ela para controlar a exibição ou não dos dados do livro:

```html
<div id="app">
  <div v-if="showBook">
    <ul>
      <li>Titulo do livro: {{title}}</li>
      <li>Nome do autor: {{author}}</li>
      <li>Idade do autor: {{age}}</li>
    </ul>
  </div>
  ...
  <button @click="showBook=!showBook">Exibir/esconder livro</button>
</div>
```

Veja que a gente usou a diretiva `v-if` para controlar se esse `<div>` será ou não exibido. Ai a gente tem o botão que, quando clicado, exibe ou não essa `<div>`. Agora vamos ver como podemos fazer isso com o uso de uma função dentro do _app.js_, primeiramente o arquivo js:

```js
const app = Vue.createApp({
  methods: {
    toggleShowBooks() {
      this.showBook = !this.showBook;
    },
  },
});
```

A gente definiu o método igual fizemos dentro do botão. Agora olha o que podemos faze:

```html
<div id="app">
  <div v-if="showBook">
    <ul>
      <li>Titulo do livro: {{title}}</li>
      <li>Nome do autor: {{author}}</li>
      <li>Idade do autor: {{age}}</li>
    </ul>
  </div>
  <button @click="toggleShowBooks">
    <span v-if="showBook">Exibir livro</span>
    <span v-else>Esconder livro</span>
  </button>
</div>
```

A gente fez a mesma coisa, só que olha como é o botão, a gente colocou um `<span>` dentro dele e, dependendo do estado da variável `showBook`, será exibido uma coisa ou outra. E veja que temos o `v-if` e o `v-else`, estamos dizendo que, se o _if_ não for renderizado, é para renderizar o _else_!

Eu testei algumas coisas a respeito dessa construção, pelo que eu entendi, a gente precisa ter 2 elementos no mesmo nivel e em sequencia. Se tiver algum no meio, já não funciona, tem que ser exatamente como esta no código que estamos analisando! Ai ele olha os dois e decide qual vai aparecer.

Outra maneira que podemos esconder elementos é com o `v-show`:

```html
<div v-show="showBook">O livro esta sendo exibido</div>
```

Os dois fazem a mesma tarefa, esonder/exibir elementos, mas a maneira que alcançam isso é diferente. O `v-if` vai colocar o elemento na tela ou remover ele, dependendo da condição. Já o `v-show` vai usar CSS para exibir/remover o elemento da tela.

### 5.1.5 - Outros eventos de mouse

Na sequência ele fala sobre outros eventos de mouse, clique duplo, hover, etc, a gente pode usar eles para chamar funções:

```html
<div class="box" @mouseover="handleEvent($event, 5)">mouseover (enter)</div>
<div class="box" @mouseleave="handleEvent">mouseleave</div>
<div class="box" @dblclick="handleEvent">double click me</div>
<div class="box" @mousemove="handleMousemove">position {{ x }} {{ y }}</div>
```

Única coisa que eu acho que vale destacar é esse método `handleEvent($event, 5)`, que que acontece, dentro do arquivo js temos essa função:

```js
handleEvent(e, data) {},
```

Veja que ela recebe dois parâmetros, mas nem sempre a gente passa dois parâmetros pra ela, na verdade a gente chega a não passar nenhum. Isso acontece porque essas funções terão acesso ao objeto `event`, tem MUITA coisa dentro dele, e podemos acessar as propriedades que ele carrega.

Mas na primeira função a gente quer passar ele e um segundo argumento. Então, para que o objeto `event` não se perca, a gente avisa o vue que queremos que ele seja passado para a função usando o `$event`.

No mais, nada incrivel foi dito, mas o código esta no arquivo e comentado.

### 5.1.6 - Iterando sobre uma lista para gerar elementos da página

Agora vamos ver como a gente vai mapear, por exemplo, um array de variáveis. Vamos supor que temos uma lista de livros dentro do app.js:

```js
const app = Vue.createApp({
  data() {
    return {
      books: [
        { title: "name of the wind", author: "patrick rothfuss" },
        { title: "the way of kings", author: "brandon sanderson" },
        { title: "the final empire", author: "brandon sanderson" },
      ],
    };
  },
});
```

A gente pode iterar sobre esse array usando a diretiva v-for:

```html
<div v-for="book in books">
  <ul>
    <li>Titulo do livro: {{book.title}}</li>
    <li>Nome do autor: {{book.author}}</li>
  </ul>
</div>
```

É praticamente como se a gente fizesse um `for(i in list)`. Molezinha.

### 5.1.7 - Vinculando variáveis e classes dinâmicas

Nem sempre a gente vai conseguir usar a sintaxe de chaves duplas, por exemplo, se a gente tem o argumento de um elemento, a origem de uma imagem por exemplo, nesse caso a gente não pode passar isso com chaves duplas. Pra isso a gente pode usar "binding expressions" para vincular o que vamos colocar a uma variável. Vamos ver nossa lista de livros novamente, mas dessa vez atribuindo uma imagem a eles. Primeiro a lista de livros que estará no _app.js_:

```js
books2: [
  {
    title: "name of the wind",
    author: "patrick rothfuss",
    img: "assets/1.jpg",
    isFav: true,
  },
  {
    title: "the way of kings",
    author: "brandon sanderson",
    img: "assets/2.jpg",
    isFav: false,
  },
  {
    title: "the final empire",
    author: "brandon sanderson",
    img: "assets/3.jpg",
    isFav: true,
  },
];
```

Agora vamos iterar sobre esse array:

```html
<ul>
  <li v-for="book in books2" :class="{ fav: book.isFav }">
    <img v-bind:src="book.img" :alt="book.title" />
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }}</p>
  </li>
</ul>
```

Como foi dito, o `v-bind` existe para solucionar o problema da gente ter que passar a variável como atributo. Então a gente usa o `v-bind` e consegue passar a variável direto, sem precisar colocar as chaves duplas. E outra coisa que vale ser observada é que, assim como o `v-on`, o `v-bind`, por também ser muito utilizado, também tem uma abrevisação, nesse caso é usar dois pontos(`:`), como podemos ver quando a gente passou a variável para o atributo _alt_, usamos `:alt`.

Por fim, vamos observar como a gente adiciona a classe _fav_ ao `<li>`. Veja que a gente faz o bind e depois a gente passa um objeto para a classe, nesse objeto a gente tem o nome da classe, nesse caso o nome dela é _fav_, e a variável que controla se irá aparecer ou não, que é a propriedade `isFav` do objeto.

Se a gente quiser adicionar outra classe que não seja dinâmica, podemos colocar apenas mais um `class="nomeDaClasse"` dentro do elemento, ficaria assim:

<li ... :class="{ fav: book.isFav }" class="nomeDaClasse">

### 5.1.8 - Computed properties - Variaveis que estão vinculadas a outras variáveis

E se a gente quiser ter uma lista dos livros favoritos em outra parte do site? Para isso a gente pode usar as chamadas computed properties, que nada mais são que variáveis que dependem de outras variáveis. Vamos ver como a gente cria elas dentro do js:

```js
const app = Vue.createApp({
  ...
  computed: {
    favoriteBooks() {
      return this.books2.filter((book) => book.isFav);
    },
  },
});
```

Aqui a gente pega a lista que vimos a cima e filtra os livros favoritos. A gente guarda esse valor dentro do que aparenta ser uma função. Para usar essa nova variável no html fazemos assim:

```html
<ul>
  <li
    v-for="book in favoriteBooks"
    :class="{ fav: book.isFav }"
    @click="book.isFav = !book.isFav"
  >
    <img v-bind:src="book.img" :alt="book.title" />
    <h3>{{ book.title }}</h3>
    <p>{{ book.author }}</p>
  </li>
</ul>
```

A gente usou ela como se fosse uma... Variável normal, da mesma maneira que usamos a lista de livros!

### 5.1.9 - Conclusão

Agora sabemos o básico do Vue, deu para perceber que, pelo menos até aqui, ele é significativamente diferente do React. O conteúdo que foi visto nesse tópico esta na pasta: _01-introducao_.

## 5.2 - Vue CLI - Criando projetos baseados em Vue

Até agora a gente aprendeu a como criar um projeto usando a CDN do Vue. Acontece que, se a gente quiser fazer um projeto de verdade, a gente precisa de algo mais sofisticado, o que vimos até agora é interessante caso a gente queira ter um componente dentro da nossa página que funcione com o Vue.

### 5.2.1 - Configuração inicial

Para projetos mais elaborados a gente usa o Vue CLI, que é um pacote que vai otimizar nossa experiência, o que é importante se a gente for fazer um site inteiro em Vue. Primeiro a gente precisa instalar o pacote globalmente:

```bash
npm i -g @vue/cli
```

Veja que estamos instalando ele globalmente, então a gente só vai fazer isso na primeira vez, depois podemos pular direto para a configuração de um novo projeto:

```bash
vue create nome-do-projeto
```

Eu só consegui rodar isso usando o command prompt, nem no powershell foi... Na hora que a gente coloca esse comando, aparecem uma série de opções na tela e escolhemos as nossas preferências para o projeto. Como esse projeto é muito básico, não irei colocar aqui quais foram, até porque ele fez a configuração manual e provavelmente a automatica já deve resolver praticamente tudo.

Depois de executado, temos a seguinte estrutura de pastas e arquivos:

- 📁 node_modules
- 📁 public
  - 📄 favicon.ico
  - 📄 index.html
- 📁 src
  - 📁 assets
    - 📄 logo.png
  - 📁 components
    - 📄 HelloWorld.vue
  - 📄 App.vue
  - 📄 main.js
- ...

Algumas pastas e arquivos foram ocultados. Vamos entender o que são alguns deles...

- 📁 public - Aqui é o que será enviado inicialmente ao browser.
  - 📄 index.html - Veja que temos esse arquivo, por ser um SPA, só temos uma página e, dentro dela, iremos encontrar nosso `<div id="app"></div>`, que será controlado pelo Vue.
- 📁 src - Aqui é onde vai morar nosso código, os componentes, templates, css, etc.
  - 📄 main.js - Aqui é o ponto de partida da nossa aplicação.
  - 📄 App.vue - Aqui é um componente de verdade, vamos analisar ele com mais calma

### 5.2.2 - Anatomia de um componente

Vamos agora olhar o componente que foi criado para nós:

```jsx
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
  import HelloWorld from "./components/HelloWorld.vue";

  export default {
    name: "App",
    components: {
      HelloWorld,
    },
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
```

Todo componente Vue pode ter até essas 3 partes:

- `<template>`
- `<script>`
- `<style>`

Todo componente precisa ter pelo menos o `<template>`. Antes a gente fez um `template` dentro do arquivo JS, agora veja que temos um `<template>` dentro do arquivo .vue. Isso acontece porque cada componete terá o seu próprio `<template>` e eles não necessáriamente estarão na tela ao mesmo tempo, uma vez que isso iria gerar uma bagunça dentro da aplicação.

Dentro do `<script>` a gente importa o outro componente que usamos e exportamos esse componente que estamos criando. Veja que aqui a gente também lista o componente que usamos dentro deste. Sempre que a gente quiser usar um componente dentro de outro a gente vai fazer isso, importar o componente e depois avisar ao Vue que vamos usa-lo dentro do componente. Veja como é o `<script>` do `<HelloWorld />`:

```jsx
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
```

Aqui a gente esta também exportando um objeto, mas veja que aqui a gente determina a prop que esse componente recebe, além do tipo dela.

E por fim temos o `<style>` que, como podemos imaginar, vai conter os estilos, mas os estilos globais!! Tudo que a gente colocar aqui será aplicado a todo o site.

Aqui podemos inclusive fazer um paralelo com o que foi visto anteiormente, veja:

```js
<template>
  <h1>{{ frase }}</h1>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      frase: "Meu primeiro componente",
    };
  },
};
</script>
```

A gente passou uma variável para o `<h1>` e um objeto com a propriedade `data()`, que irá retornar nosso objeto de variáveis.

### 5.2.3 - Template refs

Quando a gente esta usando js + html, fazemos nossas querys para selecionar elementos da página, certo? Com Vue a gente também seleciona elementos, mas elementos do `<template>` e, para isso, usamos _refs_. Veja um exemplo:

```jsx
<template>
  <input type="text" ref="name" />
  <button @click="handleClick">Focar input</button>
</template>

<script>
export default {
  ...
  methods: {
    handleClick() {
      this.$refs.name.focus();
      console.log(this.$refs.name.value);
    },
  },
};
</script>
```

Nesse exemplo, nós capturamos o elemento input e, quando o usuário clica no botão a gente coloca ele em foco e joga no console o que tem dentro do input. Para alcançar esse objetivo, primeiro colocamos, dentro do input, isso: `ref="name"`. Como podemos imaginar, essa é a nossa ref.

Para usar ela, veja como fizemos dentro da função, usamos `this.$refs.name`. Como é possivel imaginar, `this.$refs` permite que a gente acesse todas as refs do template deste componente, e usamos o `.name` para filtrar o elemento especifico. Depois a gente pode tratar como se fosse uma variável que selecionamos com uma query.

> Nós vamos ver sobre refs lá na parte de composition API...

### 5.2.4 - Focando nosso estilo a um componente

Como dissemos antes, quando a gente coloca um estilo dentro da tag style, esse estilo será aplicado a toda a página, mas e se a gente quiser aplicar o estilo individualmente? Para que determinado estilo se aplique a apenas aquele componente, como podemos atingir isso? É molezinha, veja:

```css
<style scoped>
/* Estilos aqui */
</style>
```

A gente só adicionou essa flag, _scoped_. Com ela, o Vue vai adicionar caracteres a esses estilos, de maneira que eles sejam únicos na página. Isso tem um impacto pequeno na performance, mas tem, então uma outra solução seria aumentar a especificidade dos estilos. Quando a gente faz isso, os estilos definidos não serão aplicados nem aos componentes filhos nem nos componentes pais!

Para resolver isso, caso a gente queira ter estilos globais dentro da nossa aplicação, ele deu a solução de criar um arquivo, por exemplo, _global.css_, dentro da pasta assets e apenas importar ele desta maneira no _main.js_:

```jsx
import "./assets/global.css";
```

É literalmente só isso. Fiz no projeto deste módulo para ficar de exemplo.

### 5.2.5 - Props - Passando alguma informação para outro componente

Novamente, já vimos como fazer isso, mas vamos reforçar. Usar props é muito fácil, a gente só precisa avisar ao componente quais props ele aceita e, é claro, passar essa prop para ele. Vamos ver a primeira parte:

```jsx
<script>
export default {
  props: ["header"],
};
</script>
```

Molezinha, só passar para essa propriedade _props_ um array com as props. O nome da prop precisa estar entre aspas, tem que ser um array de strings! E se a gente tiver mais de uma, só coloca-las todas nesse array. Para usar a prop é como se a gente estivesse usando uma variável normal dentro do componente:

```jsx
<template>
  ...
  <h1>{{ header }}</h1>
  ...
</template>
```

E, no final, para passar esse valor para o componente, só adicionar a prop no momento que estamos usando ele:

```jsx
<template>
  <Modal header="Se cadastre para concorrer a prêmios" />
</template>
```

#### 5.2.5.1 - Prop + binding - Passando variáveis como prop

Quando a gente quer passar uma variável como prop, nós temos que fazer o binding dos dados, veja o mesmo exemplo, mas ao invés de passar direto a string, vamos passa-la como uma variável:

```jsx
<template>
  <Modal :header="header" />
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  ...
  data() {
    return {
      header: "Se cadastre para concorrer a prêmios",
    };
  },
  ...
};
</script>
```

Molezinha. No resto do curso ele deve utilizar mais essa abordagem, uma vez que fica mais limpa e fácil de manter. Se a gente quisesse passar um array, fariamos assim:

```jsx
<template>
  <CompoenteX :propX="['header', 1]" />
</template>
```

Mas, provavelmente estariamos usando variáveis para isso, então não teriamos tantos problemas...

### 5.2.6 - `$emit` - Emitindo eventos para o compoente pai

Agora vamos ver como a gente pode criar um evento customizado que irá invocar alguma coisa no compoente pai. A proposta aqui é que a gente tem um modal e quer que, quando o usuário toque na tela, o modal seja fechado. Vamos primeiro olhar o modal:

```jsx
<template>
  <div class="backdrop" @click="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <h1>{{ heading }}</h1>
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["heading", "text", "theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
```

Aqui temos o componenten praticamente inteiro. Temos as props e um método, `closeModal()`. Veja que esse método é chamado quando a gente clica no `<div>`. Agora veja como o método é definido:

```jsx
closeModal() {
  this.$emit("close");
}
```

Tem esse `$emit` que recebe um parâmetro... Estranho né? Mas agora olha o componente pai:

```jsx
<template>
  <div v-if="showModal">
    <Modal :heading="heading" :text="text" theme="sale" @close="toggleModal" />
  </div>
  <button @click="toggleModal">open modal</button>
</template>

<script>
...
export default {
  ...
  data() {
    return {
      ...
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
```

Aqui a gente tem basicamente uma variável que controla se o modal vai ou não aparecer e um método que muda o valor dessa variável. Veja que a gente abre o modal usando o botão, temos o evento `@click="toggleModal"` que chama a função de mudança do estado da variável `showModal`.

E agora olha como a gente fecha, pra isso a gente tem o evento `@close="toggleModal"`, só que... Que evento é esse `@close`?? É um clique de mouse? Um pássaro? Um avião?? Não, esse é o evento que a gente emitiu no componente `<Modal />`!

Ou seja, se lá no modal a gente tivesse emitido esse evento:

```jsx
closeModal() {
  this.$emit("eventoXYZ");
}
```

A gente usaria esse evento para invocar o método `toggleModal()`:

```jsx
<Modal ... @eventoXYZ="toggleModal" />
```

#### 5.2.6.1 - Emitindo eventos com parâmetros

A gente pode passar parâmetros usando o $emit, a gente só precisa passar eles como parâmetros para o... $emit, veja:

```jsx
closeModal() {
  this.$emit("eventoXYZ", parametro1, parametro2);
}
```

A utilização do componente continuaria da mesma maneira:

```jsx
<Modal ... @eventoXYZ="toggleModal" />
```

A diferença muda na utilização do script, lembre que o que esse evento esta fazendo é chamar um método toggleModal. Agora, com os parâmetros, esse método ficaria assim:

```jsx
toggleModal(param1, param2) {
    ...
  }
```

Veja que eles não precisam ter o mesmo nome.

### 5.2.7 - Modificadores de eventos

A gente pode colocar modificadores nos nossos eventos:

```jsx
<button @click.right="toggleModal">open modal</button>
<button @click.alt="toggleModal">open modal</button>
<button @click.self="toggleModal">open modal</button>
```

Aqui estão alguns exemplos. Por exemplo, com o `.right` o evento só dispara se o usuário clicar com o botão direito. Com o `.alt` só dispara quando o usuário também esta pressionando a tecla _alt_. O `.self` só dispara quando o usuário clica no elemento especificado, não dispara se a gente clicar em um elemento filho.

### 5.2.8 - Slots - Passando HTML como prop

Nem sempre a gente sabe o que os nossos componentes vão conter, por conta disso a gente pode usar sltos, dessa maneira nós podemos passar o conteúdo do componmente no momento em que ele é usado. Para isso nós usamos slots, é praticamente o mesmo conceito de containment que a gente tem no React.Vamos ver como isso funciona, primeiramente do lado do componente pai:

```jsx
<Modal :heading="heading" :text="text" theme="sale" @close="toggleModal">
  <h1>Ninja Givaway!</h1>
  <p>Grab your ninja swag for half price!</p>
</Modal>
```

Agora estamos usando o componente abrindo e fechando as tags dele, e o que estamos colocando ali no meio vai para o `<slot>` do componente:

```jsx
<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>Conteúdo default</slot>
    </div>
  </div>
</template>
```

Toda essa parte do `<slot>Conteúdo default</slot>` será substituida pelo que colocamos entre as tags do `<Modal>`. E se a gente não passar nada entre as tags, o que entra no slot o que esta entre as tags dele.

Agora deu para entender melhor o propósito dos slots, se eventualmente a gente usasse esse modal em outra parte do nosso código, nós poderiamos só mudar o que esta entre as tags no momento da utilização do componente e ele já teria outra cara.

#### 5.2.8.1 - Named slots

Essa parte é legal, pois permite que a gente reutilize nossos componentes de maneira mais flexivel. A ideia aqui é que a gente tenha dentro do nosso componente slots que nem sempre vão aparecer! Só quando a gente colocar eles no componente pai. Veja como ficaria do lado do componente pai:

```jsx
<Modal :heading="heading" :text="text" theme="sale" @close="toggleModal">
    <template v-slot:links>
      <a href="#">sign up now</a>
      <a href="#">more info</a>
    </template>
    <h1>Ninja Givaway!</h1>
    <p>Grab your ninja swag for half price!</p>
  </Modal>
```

Veja que agora a gente tem um `<template>` e, dentro dele, temos essa diretiva `v-slot`, quando a gente quiser fazer isso, precisamos fazer dessa maneira, esse elemento com essa diretiva. Agora vamos ver o componente filho:

```jsx
<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>Conteúdo default</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>
```

Agora temos dois slots, um é o padrão, `<slot>...</slot>` e o outro é o named slot, `<slot name="links">...</slot>`. O Vue vai fazer dessa maneira:

- `<slot>`: Nesse ele vai colocar aqui tudo que não estiver fora do do `<template>` no componente pai.
  - Inclusive, vale destacar que, se a gente só mandar o `<template>` para ele, ele vai colocar na tela "Conteúdo default"!! Te liga nisso.
- `<slot name="links">`: Nesse outro, tudo que estiver dentro do template vem pra ca.
  - Se a gente colocar alguma coisa entre os named slots, essa coisa vai aparecer quando a gente não passar um `<template>` para o componente.
  - Veja que no componente pai a gente define o `<template>` antes do `<h1>` e do `<p>`, só que o named slot vem depois no componente filho. Na hora de colocar na tela vale o que esta no componente em si, então o conteúdo do `<slot>` vai aparecer antes do `<slot name="links">`, mesmo que na hora da chamada do componente a gente tenha feito da outra maneira.

> Acho que vale destacar novamente que devemos ter cuidado com o que a gente coloca entre as tags do slot, uma vez que, sempre que a gente não passa nada para o slot, elas serão renderizadas.

### 5.2.9 - Teleport - Mudando o local onde nossos componentes são renderizados

Lembra que a gente esta pegando um div lá no HTML e colocando tudo isso dentro dele? Então, o Vue permite que a gente coloque algumas coisas fora desse div, para isso a gente usa o elemento teleport.

Primeira coisa que a gente tem que fazer é colocar no arquivo HTML aonde a gente quer renderizar determinada coisa:

```html
<body>
  <div id="app"></div>
  <div id="modals"></div>
</body>
```

Veja, agora temos o nosso `<div>` com id _app_ e o `<div>` com id _modals_, que é onde nossos modals irão ficar. Para colocar eles ali nós faremos o seguinte:

```jsx
<teleport to="#modals" v-if="showModal">
  <Modal theme="sale" @close="toggleModal">
    <template v-slot:links>
      <a href="#">sign up now</a>
      <a href="#">more info</a>
    </template>
    <h1>Ninja Givaway!</h1>
    <p>Grab your ninja swag for half price!</p>
  </Modal>
</teleport>
```

A gente usa a tag `<teleport>` e, junto dela, a gente fala para o Vue para onde queremos que esse código seja teletransportado, pra isso a gente tem o `to="#modals"`. Dentro desse _to_ a gente passou um seletor CSS, então, se a gente tivesse `<div class="modals"></div>`, noss _to_ teria que ser assim: `to=".modals"`, percebe que na maioria das vezes a gente esta usando esse tipo de seletor...

Vale observar que a gente ainda esta exibindo esse componente de maneira condicional e, desta vez, a gente colocou a diretiva `v-if` dentro do elemento `<teleport>`. Outro ponto é que precisamos ter atenção aos estilos quando for fazer isso, uma vez que, se a gente estiver usando estilos mais especificos, pelo fato desse componente ser renderizado fora do `<div id="app"></div>`, ele pode acabar não recebendo os mesmos estilos.

### 5.2.10 - Conclusão

Nesse tópico aprendemos conceitos importantes do Vue. Agora sabemos passar props entre componentes, eventos, slots, teleport, etc. O conteúdo desse tópico esta na pasta: _02-modal-project_.

## 5.3 - Reaction timer - Nosso primeiro projeto Vue

Nesse tópico nós iremos montar um jogo que testa o tempo de reação do usuário. Aqui vamos colocar os novos conceitos que forem abordados. A pasta do desse projeto é: _reaction-timer_.

### 5.3.1 - Lifecycle hooks

Todo componente que criamos no Vue possui um ciclo de vida como o descrito na imagem abaixo:

<img src="imgs/lifecycle-hooks.png" />

A gente tem a linha principal, que começa lá no _Renderer_ e termina no _Unmounted_. Olhando o diagrama com calma fica fácil entender o processo. Nesse tópico nós vamos abordar os _lifecycle hooks_, que são os quadrados em vermelho.

Esses hooks permitem que a gente execute código em determinados momentod do processo. Por exemplo, se a gente quiser rodar algum pedaço de código entre a renderização inicial(_initial render create & insert DOM nodes_), e a montagem do componente(_Mounted_), a gente tem o hook `mounted()`. Outro exemplo, quando o componente já esta montado, temos um processo que fica analisando eventuais atualizações do conteúdo do componente e re-renderiza ele, aqui temos dois hooks, `beforeUpdate()` e `updated()`. [A documentação sobre o assunto pode ser acessada aqui](https://vuejs.org/guide/essentials/lifecycle).

> Ele falou algo interessante... Quando estamos usando Vue Routing, que é algo que vamos ver mais para frente, ele não muda de página, ele desmonta o componente que o usuário ve e monta outro componente.

Para acessar esses hooks é muito simples, veja como podemos rodar um código antes do componente ser montado, usando o hook `mounted()`:

```jsx
<template>
  <div class="block" v-if="showBlock">
    Esse é o div
  </div>
</template>


<script>
export default {
  data() {
    return {
      showBlock: false,
    }
  },
  mounted() {
    console.log('Componente entra no DOM')
    setTimeout(() => {
      this.showBlock = true
      console.log("Componente aparece")
    }, 3000)
  },
}
</script>
```

Aqui temos um componente que cria um `<div>` na tela. Inicialmente esse componente não esta na tela, mas temos um botão que, quando clicado, dispara um método que irá exibir esse `<div>`, veja como é o código no componente pai:

```jsx
<template>
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" />
</template>
```

Quando o usuário clicar no botão, o `v-if` muda e agora o Vue precisa montar o componente. Primeiro ele faz a renderização inicial, como é indicado no diagrama e, entre isso e a fase _Mounted_, a gente tem nosso hook.

Veja como montamos ele, a gente primeiro coloca no console uma frase e, 3 segundos depois, outra. Quando a gente olha no console, acontece da seguinte maneira, na hora que o usuário clica no botão a gente ve a primeira frase("Componente entra no DOM") e, 3 segundos depois, a frase seguinte("Componente aparece"), e o componente aparece na tela.

### 5.3.2 - Conclusão

Nesse tópico a gente aprendeu que podemos e como podemos usar o ciclo de vida dos componentes a nosso favor. A pasta do projeto final desse tópico é a pasta: _03-reaction-timer_.

## 5.4 - Forms e inputs com VueJS

Nesse tópico vamos aprender a montar formulários utilizando Vue.

### 5.4.1 - Two way data binding - Vinculando DOM e JS

Afinal, o que é two way data binding? Vamos começar com o seguinte código:

```jsx
<template>
  <form>
    <label>Email:</label>
    <input type="email" v-model="email"/>
  </form>
  <p>Email: {{ email }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
};
</script>
```

Vamos começar esclarecendo o uso da diretiva `v-model`, ela é usada para fazer o two way binding.

Two way binding é a conexão do DOM(View) com o JavaScript(Model), e a conexão do JavaScript(Model) com o DOM(View), ou seja nós estamos conectando essas variáveis nos dois sentidos! Por isso o novo two way binding!!

Então, quando a gente usa o v-model para dizer ao Vue que queremos vincular aquele `<input>` a variável `email`, isso é um vinculo de uma direção, esta indo do DOM para o JS. Agora, quando o valor dessa variável fica disponivel para ser usado na página, o valor da variável esta indo do JS para o DOM, ou seja, estamos vinculando no sentido contrário!

### 5.4.2 - Capturando informações de um select

Acabamos de ver como podemos capturar informações de um input, agora vamos ver como podemos fazer o mesmo com o elemento `<select>`. Vamos analisar o código abaixo:

```jsx
<template>
  <form>
    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>
  </form>
  <p>Your role: {{ role }}</p>
</template>

<script>
export default {
  data() {
    return {
      role: "developer",
    };
  },
};
</script>
```

Veja, a gente inicia o select e coloca as opções dentro dela. No select a gente usa a diretiva v-model para determinar qual variável esta vinculada a esse select. O usuário pode selecionar duas opções "Web Developer" e "Web Designer", se ele selecionar "Web Developer", `role` terá o valor de _developer_, se ele selecionar a outra, o valor será _designer_.

Por fim, podemos notar que a variável role inicia com um valor, _developer_, isso significa que, quando a página carregar pela primeira vez, a opção "Web Developer" estará selecionada! Se a gente tivesse definido o valor da variável como designer, ai teríamos a outra variável selecionada.

### 5.4.3 - Capturando informações de um checkbox

Podemos capturar as informações de checkboxes de duas maneiras, vamos ver as duas nesse tópico. A primeira é, por exemplo, quando temos um termo de serviço, nesse caso ou o usuário aceita ou ele recusa. Nessa situação, a gente faz o seguinte:

```jsx
<template>
  <form>
    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>
  </form>
  <p>Terms accepted: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      terms: false,
    };
  },
};
</script>
```

Nós colocamos a diretiva `v-model` dentro do `<input>` do tipo _checkbox_. Quando o usuário marcar a caixinha, o valor da variável terms se tornará `true`. Caso a caixinha fique desmarcada, o valor continuará sendo `false`. Aqui vale a mesma regra que vimos anteriormente, se a gente quiser que a página abra com essa checkbox desmarcada, a gente deixa o valor da variável vinculada a ela como `false`, se a gente quiser que ela inicie checkada, ai a gente deixa o valor da variável como `true`.

A segunda situação que podemos ter é o usuário tendo a possibilidade de selecionar várias checkboxes, nesse caso, a gente captura o valor do que foi selecionado desta maneira:

```jsx
<template>
  <form>
    <div>
      <input type="checkbox" value="shaun" v-model="names" />
      <label>shaun</label>
    </div>
    <div>
      <input type="checkbox" value="yoshi" v-model="names" />
      <label>yoshi</label>
    </div>
    <div>
      <input type="checkbox" value="mario" v-model="names" />
      <label>mario</label>
    </div>
  </form>
  <p>Names: {{ names }}</p>
</template>

<script>
export default {
  data() {
    return {
      names: [],
    };
  },
};
</script>
```

Primeira coisa que podemos observar é que todos os `v-model`'s tem o mesmo nome, isso já deixa claro que todos estão vinculados a uma e apenas uma variável. Depois, percebe que a gente passou um array para a variável, dessa maneira, o Vue vai entender que não temos apenas um valor, mas vários.

Dentro desse array serão armazenadas o que esta na propriedade _value_ de cada checkbox. Por exemplo, na hipotese do usuário selecionar yoshi e mario, nosso array teria esse valor: `["yoshi", "mario"]`. E, claro, se a gente quiser que alguma dessas checkboxes inicie selecionada, é só colocar dentro do array o valor das que queremos deixar marcadas.

### 5.4.4 - Adicionando eventos de teclado

Agora vamos aprender como a gente pode adicionar eventos que ficam observando o que o usuário faz e reagir a eles. Vamos fazer um componente que permite que o usuário liste seus habilidades:

```jsx
<template>
  <form>
    <label>Skills (press Enter to add):</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div v-for="skill in skills" :key="skill" class="pill">
      {{ skill }}
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      skills: [],
      tempSkill: "",
    };
  },
  methods: {
    addSkill($event) {
      console.log($event);
      if ($event.key === "Enter") {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
  },
};
</script>
```

Veja, nosso objeto de estudo nesse tópico é a diretiva `@keyup`. Quando o usuário estiver digitando, toda vez que ele soltar uma tecla, key up, um evento dispara, chamando a função `addSkill()`. Essa função recebe um parâmetro, que é o evento em si, `$event` e, dentro dela, a gente pega a propriedade _key_ do evento e verifica se a tecla pressionada foi o _enter_. Em caso positivo, a gente adiciona essa habilidade ao array de habilidades, mas antes usamos um `if()` para analisar se essa habilidade já existe no array. Por fim a gente limpa a entrada, usando a variável vinculada ao input, `tempSkill`.

Na sequencia temos um `<div>` com uma diretiva `v-for`, para iterar pelo array de habilidades e lista-las na página. Veja que colocamos uma chave nesse `<div>`, `:key="skill"`. Fizemos isso porque, sempre que estamos iterando sobre uma lista de coisas para colocar vários elementos na tela, idealmente a gente precisa que cada um tenha uma chave única.

Isso acontece porque, numa situação em que o Vue precise re-renderizar alguma coisa da lista, ele vai usar essas chaves para identificar o elemento certo e conseguir fazer com que eles não saiam da ordem. Existem outros motivos também, mas esse é o mais importante.

Bom, depois de ver e entender como ele resolveu esse desafio de listar as habilidaes, podemos ver outra maneira de resolver isso, veja:

```jsx
<template>
  ...
  <input type="text" v-model="tempSkill" @keyup.enter="addSkill" />
  ...
</template>

<script>
export default {
  data() {...},
  methods: {
    addSkill($event) {
      console.log($event);
      if (!this.skills.includes(this.tempSkill)) {
        this.skills.push(this.tempSkill);
      this.tempSkill = "";
      }
    },
  },
};
</script>
```

O Vue permite que a gente adicione modificadores nesses eventos para já capturar o evento certo, sem precisar fazer um código mais elaborado. No exemplo dele o usuário tem que digitar _alt + ,_ para adicionar uma habilidade a lista, pra isso o método é chamado assim: `@keyup.enter="addSkill"`, e dentro do `if()` ele usa essa comparação: `$event.key === ","`, bem mais complicado do que precisaria ser, mas mostrou duas possibilidades de uso dos eventos de teclado...

> No finaleu vi que ele estava certo, não totalmente podeeria ter usado uma combinação de teclas que fizesse mais sentido, mas ele estava certo. Isso porque, quando a gente aperta o Enter, o comportamento é dar enviar o formulário, isso ocasionou que a adição de habilidades se

#### 5.4.4.1 - Removendo uma habilidade da lista

Na sequencia nós vimos como podemos fazer para remover um item da lista, achei interessante coloca-lo aqui, veja como ficou o código:

```jsx
<template>
  <form>
    ...
    <label>Skills (press alt + comma to add):</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
    <div
      v-for="skill in skills"
      :key="skill"
      class="pill"
      @click="deleteSkill(skill)"
    >
      <span>{{ skill }}</span>
    </div>
  </form>
</template>

export default {
  data() {
    return {
      ...
      skills: [],
      tempSkill: "",
    };
  },
  methods: {
    addSkill($event) {
      console.log($event);
      this.skills.push(this.tempSkill);
      this.tempSkill = "";
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
  },
};
```

Aqui temos toda a funcionalidade de adicionar e remover habilidades. Anteriormente foi visto como podemos adicionar habilidades, agora vamos ver como remove-las...

A diretiva de click, `@click`, já vimos, mas observe como ela é usada, nós usamos ela para chamar a função que remove uma habilidade, `deleteSkill()`, já passando essa habilidade para ela. Atingimos esse objetivo aproveitando o fato que estamos iterando sobre a lista, dessa maneira a gente já consegue passar o elemento que queremos remover.

### 5.4.5 - O evento submit - Enviando formulários

Quando a gente tem o formulário, o comportamento padrão dele quando a gente da o submit é fazer alguma coisa e atualizar a página. As vezes a gente até pode querer isso, mas faze-lo de uma maneira difente. Agora vamos ver como a gente pode controlar e manipular um formulário HTML. Vamos ver o código e depois entender o que foi feito:

```jsx
<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" v-model="email" required />

    <label>Password:</label>
    <input type="password" v-model="password" required />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "developer",
      passwordError: "",
    };
  },
  methods: {
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 characters long";

      if (!this.passwordError) {
        // make request to database to save user
        console.log({
          email: this.email,
          password: this.password,
          role: this.role,
        });
      }
    },
  },
};
</script>
```

O que fará tudo funcionar da maneira que a gente quer é essa linha: `<form @submit.prevent="handleSubmit">`, nela a gente fala para o Vue previnir que o formulário faça sua ação padrão no momnento do submit e, em seu lugar, chame a função `handleSubmit`.

A gente começa fazendo uma validação da senha, caso ela tenha mais de 5 digitos, o código continua, se não tiver, vai aparecer um `<div>` com uma mensagem de erro para o usuário. Caso esteja tudo certo, a gente tem o `console.log()`, aqui a gente poderia, por exemplo, ter alguma função que faça um fetch e salve as informações em um banco de dados.

### 5.4.6 - Conclusão

Neste capitulo vimos conceitos importantes para nosso proejto. Aprendemos a conectar o DOM(View) ao JavaScript(Model), e o JavaScript ao DOM, além de como podemos trabalhar com diferentes tipos de entrada de dados em nossas páginas. O conteúdo deste módulo esta na pasta: _04-web-form_.

## 5.5 - Fetching data

Neste tópico nós vamos ver como podemos buscar informações externas a nossa aplicação. Ele só mostrou como fazer requisições do tipo GET, mas a gente sabe que, sabendo isso, o resto vem fácil.

### 5.5.1 - Json server - Emulando uma REST API

Para esse tópico nós vamos usar a biblioteca JSON Server:

```bash
npm i json-server
```

Ela nada mais faz do que emular uma RESTO API, criando os endpoins a partir de um arquivo json. Para usar ela a gente criou uma pasta _data_ e, dentro dela, um arquivo json:

- 📁 data
  - 📄 db.json

Dentro desse arquivo nós colocamos um... JSON, é claro. No nosso caso, esse é o JSON que mora lá dentro:

```json
{
  "jobs": [
    { "title": "Ninja UX Designer", "id": 1, "details": "lorem" },
    { "title": "Ninja Web Developer", "id": 2, "details": "lorem" },
    { "title": "Ninja Vue Developer", "id": 3, "details": "lorem" }
  ]
}
```

Depois a gente inicia o JSON Server apontando para esse arquivo:

```bash
json-server --watch data/db.json
```

Agora a gente tem acesso a essas rotas:

```
GET    /jobs
GET    /jobs/:id
POST   /jobs
PUT    /jobs/:id
PATCH  /jobs/:id
DELETE /jobs/:id
```

Molezinha!!

### 5.5.2 - Fazendo uma requisição GET

Vamos ver como ele faz uma requisição GET para buscar algum dado e depois coloca-lo na tela:

```jsx
<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id" class="job">
        <h2>{{ job.title }}</h2>
    </div>
  </div>
  <div v-else>
    <p>Loading jobs...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
```

A gente faz o fetch dos dados no momento anterior a montagem do elemento. Transforma a resposta em um JSON e coloca ela pra dentro da variável que estamos controlando na página. Em caso de erro a gente faz o log desse erro.

Na sequência temos a exibição das informações na tela, veja que primeiro a gente verifica se a variável jobs possui alguma coisa dentro e, se ela possuir, nós iteramos sobre ela, caso contrário, a gente coloca um parágrafo avisando o usuário que as informações estão sendo carregadas. Ele não falou nada de side effects...

## 5.6 - Composition API

Nesse tópico vamos aprendera usar a composition API. Ela nada mais é que uma maneira diferente de escrever nossos `<scripts>` no Vue.

### 5.6.1 - Justificativa - Por que a composition API?

Primeiro vamos entender de onde veio a necessidade de mudar a maneira que escreviamos a lógica dos nossos componentes. Até agora, o nome do que aprendemos é chamada de "Options API", e abaixo temos um comparativo das duas:

<img src="imgs/options-v-composition.jpg" />

Quando estamos usando a options API, a gente separa as funções do nosso script, as variáveis em um lugar, métodos em outro, hooks, tudo separado. Agora imagina que temos um projeto grande, então teremos várias coisas acontecendo ao mesmo tempo, então as funções que lidam com uma mesma tarefa acabam ficando separadas umas das outras. Veja o que esta destacado, a gente tem a lista de livros, uma função para mapear ela e outra para fazer um fetch dos livros, e se a gente estivesse lidando com várias listas, tentando cumprir várias tarefas, imagina o vai e vem que faríamos no código...

A compositions API veio para resolver isso, permitindo que a gente agrupe tudo sobre determinada tarefa perto uma das outras. Além disso, ela tem outras vantagens em relação a options API, uma delas é que podemos usar lógicas reutilizaveis! Mas isso é um assunto que veremos mais para frente.

> Nós podemos ter uma combinação dos dois funcionando no nosso código, isso vai inclusive acontecer ao longo do resto do curso, algumas coisas vamos resolver com options API, mas 80% das coisas serão resolvidas com composition API.

### 5.6.2 - Nossa primeira página usando Composition API

Agora vamos para um exemplo bem simples usando composition API:

```jsx
<template>
  <div class="home">
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    let name = "mario";
    let age = 30;

    const handleClick = (e) => {
      console.log("you clicked me");
    };

    return { name, age, handleClick };
  },
};
</script>
```

Veja que a parte do `<template>` continua a mesma coisa, o que muda mesmo é a parte do `<script>`. Percebe que agora não temos mais um `data()`, nem `method()`, temos apenas um `setup()` e, dentro dele, colocamos variáveis e métodos.

A gente declara as variáveis, cria o método e no final a gente precisa retornar um objeto com eles. Como eles tem o mesmo nome do que é exportado, a gente não precisa colocar `name: name, age: age`, etc. Dentro do template a gente acessa essas variáveis e métodos da mesma maneira que nós já faziamos!

### 5.6.3 - Quando a função `setup()` roda

Tem um ponto que ele abordou que acredito que merece um tópico a parte. Se a gente retornar para o diagrama de cilco de vida do componente, podemos ver que a função `setup()` roda antes mesmo do hook `beforeCreate()`, que até então era o primeiro hook a ser executado, ela é a primeira coisa que vai acontecer quando o Vue tiver que renderizar algum componente na tela.

Isso traz várias consequências, uma delas é que os valores que estão dentro do `setup()` não são reativos! A gente vai ver como podemos torna-los mais para frente. Outra coisa, como essa esta rodando antes de tudo, nós não vamos ver nada com `this.`, isso porque... Não existe o "this" ainda kkkkkk

Mas calma que pra tudo se da um jeito, e vamos aprender a como usa-la durante os próximos tópicos.

### 5.6.4 - Usando Ref's na composition API

#### 5.6.4.1 - Usando Ref's para referênciar um elemento

A maneira que usamos refs na composition API é um pouco diferente, não dentro do `<template>`, mas dentro do `<scipt>`. Vamos ver um trecho de código para ver como podemos fazer uma ref usando composition API:

```jsx
<template>
  <div class="home">
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    ...
    const p = ref();
    const handleClick = (e) => {
      p.value.classList.add("test");
      p.value.textContent = "hello, ninjas";
    };
    return { name, age, handleClick, p };
  },
};
</script>
```

Primeiro que a gente começa com um import que não é um outro componente... Isso é estranho, mas é algo que surgiu com a composition API, foram adicionadas novas partes ao Vue, que iremos importar conforme nossa demanda.

Dentro do `setup()` a gente cria a ref, `const p = ref()`, e no final exportamos ela. Na hora de utilizar, nada muda. O nome da nossa variável é o mesmo nome que nós colocamos dentro do elemento HTML, dessa maneira o Vue vai determinar qual ref pertence a qual elemento. Antes, quando a gente queria acessar as propriedades do elemento ao qual a ref fazia referência, nós usávemos essa sintaxe: `this.$refs.nomeRef.propriedade`, mas agora não temos mais acessso ao `this`, então essa sintaxe mudou, como podemos ver, ficou até mais simples.

Para finalizar, vamos modificar um pouco o código, veja:

```jsx
...
const p = ref();
console.log("Valor p:" + p);
console.log("Valor p.value: " + p.value);
const handleClick = (e) => {
  console.log("Valor p:" + p);
  console.log("Valor p.value: " + p.value);
}
...
```

Vamos colocar alguns `console.log()` e observar o comportamento deles. Como dissemos antes, o `setup()` roda antes de tudo, por conta disso, no momento em que a gente declara essa variável e o interpretador passa por ela, o `<p>` ainda não existe na tela. Então, nesse primeiro momento, o valor da const `p` é um objeto de referência vazio e, `p.value` é `undefined`.

Depois que a gente clica no botão, ai o componente foi montado, então o valor de `p` passa a ser um objeto de referência que agora faz referência ao `<p>`, e `p.value` é tem o valor de `<p class="test">hello, ninjas</p>`, ou seja, é o objeto ao qual a variável faz referência de fato!

> Por esse motivo, se a gente tivesse feito algo com `p.value.textContent = "..."` em seguida a declaração da variável, isso não teria efeito, uma vez que a variável `<p>` estaria fazendo referência a algo que não existe.

#### 5.6.4.2 - Usando Ref's para termos variáveis reativas

Como dissemos antes, as variáveis que a gente cria dentro do setup() não são reativas, por conta disso, se o valor de alguma delas mudar, isso não será refletido na página. Mas existe uma maneira de contornar isso usando ref's! Vamos analisar o código abaixo:

```jsx
<template>
  <div class="home">
    <h1>Home</h1>
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    const name = ref("mario");
    const age = ref(30);
    const handleClick = (e) => {
      name.value = "luigi";
      age.value = 35;
    };
    return { name, age, handleClick };
  },
};
</script>
```

Veja que agora a gente esta criando as ref's com valores dentro. Acontece que, quando a gente falou no final do último tópico que o valor da propriedade _value_ da variável era `undefined` logo após sua criação, isso aconteceu porque a gente não tinha passado nada como parâmetro para ela. Agora a gente passou valores para cada uma das referências que a gente criou, então se logo depois da criação da variável `name` a gente tivesse feito um `console.log(name.value)`, teriamos "mario" no console!

E ref's são elementos reativos, pudemos ver isso no tópico anterior, quando a gente adicionou uma classe ao elemento que estavamos fazendo referência. Então, quando a gente altera o valor do _value_ da referência name para "luigi", o Vue vai reavaliar o que esta na tela e, nesse caso, irá atualizar o nome do Mario para Luigi.

Por fim, veja que a implementação da variável é a mesma dentro do `<template>`. Quando a gente queria colocar o valor do _value_ da referência _name_ na tela, a gente só colocou {{ name }}, da mesma maneira, se a gente tivesse alguma outra coisa fazendo referência a `name.value`, usaríamos só `name`, por exemplo, um `<input>`, ficaria assim: `<input type="text" v-model="name" />`. Então, normalmente, quando a gente vai lidar com algum dado que será exibido para o usuário, nós normalmente usamos ref's.

> Outra coisa que a gente pode fazer é passar um objeto pra função `ref()`, por exemplo, `const person = ref({ name: 'mario', age: 30 })`. Nesse caso, se a gente quiser acessar o valor dentro do `setup()`, a gente conseguiria isso fazendo `person.value.name` para acessar o valor do nomw e, dentro do `<template>`, usariamos `person.name` para fazer a mesma coisa. Veja que dentro do template a gente sempre oculta o "value".

### 5.6.5 - Usando reactive para termos variáveis reativas

No tópico anterior nós vimos como podemos criar variáveis reativas dentro do `setup()` usando ref's. Neste tópico vamos abordar como resolver o mesmo problema, só que usando o método `reactive()`.

```jsx
<template>
  <div class="home">
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "Home",
  setup() {
    const ninjaOne = reactive({ name: 'luigi', age: 35 })
    const updateNinjaOne = () => {
      ninjaOne.age = 40
    }
    return { ninjaOne, updateNinjaOne }
  },
};
</script>
```

O que muda é que, basicamente, a gente não precisa mais a propriedade _value_ da variável. Veja que dentro do `setup()` nós usamos `ninjaOne.age` para acessar a idade e, no `<template>`, usamos a mesma sintaxe para acessar a mesma propriedade. Ta, mas se é a mesma coisa e deixa o código menos verboroso, por que então usamos ref's para fazer isso??

Acontece que usar `reactive()` tem algumas desvantagens. Por exemplo, nós não podemos ter valores primitivos nessas variáveis, porque nesse caso, como a gente alteria o valor de alguma variável, podemos pensar que seria desta maneira:

```jsx
// ESSE CÓDIGO ESTA ERRADO
let name = reactive("mario");
name = "luigi";
// ESSE CÓDIGO ESTA ERRADO
```

A gente até conseguiria fazer "mario" aparecer na página, só usar ``{{ name }}`, só que na hora de alterar isso não daria certo. Porque pensa, name não possui uma string dentro, possui um objeto que essa função `reactive()` retorna então, quando a gente muda o valor desse objeto para uma string... A variável não é mais um objeto, é uma string, e não tem as propriedades que fazem com que ela gere uma atualização na tela.

Depois ele fala de funções de composição externas, falando que essas variáveis vão manter a reatividade mesmo depois de serem expostas a essas funções, mas esse tópico ainda não foi abordando, então não sei do que se trata.

### 5.6.6 - Computed values com a Composition API

A mudança aqui é minima, e a funcionalidade é a mesma, veja como a gente poderia filtrar uma lista baseados em uma entrada do usuário:

```jsx
<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
    const matchingNames = computed(() => {
      return names.value.filter(name => name.includes(search.value))
    })
    return { names, search, matchingNames }
  },
}
</script>
```

Primeiro a gente começa importando a função `computed()`, é claro, depois definimos as variáveis e veja que temos uma lista de nomes. A função `computed()` recebe um objeto, no nosso caso é um array de nomes filtrados. Como pode ser observado, a gente usa um `<input>` cara capturar os termos que serão utilizados para filtrar a lista.

### 5.6.7 - `watch()`e `watchEffect()` - Monitorando variáveis reativas

Dentro do Vue a gente possui essas duas funções que servem para monitorar mudanças no valor de variáveis reativas. Por exemplo, imagina que a gente precisa executar algum pedaço de código quando uma de nossas variáveis reativas muda de valor, como a gente pode saber que teve uma mudança? O próprio `computed()` já faz isso, mas apenas para quando os valores que ele usa como base mudam. As funções `watch()`e `watchEffect()` vão permitir que a gente execute qualquer coisa quando alguma coisa que esta sendo monitorada mudar.

#### 5.6.7.1 - A função `watch()`

Vamos primeiro ver como funciona a função `watch()`:

```jsx
<template>
    <input type="text" v-model="search" />
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref("");
    watch(search, () => {
      console.log("watch function ran");
    });
    return { search };
  },
};
</script>
```

Aqui temos um trecho bem simples, a gente tem uma variável ligada que pegando o valor de um `<input>`. Toda vez que a gente digitar alguma coisa no input vamos printar "watch function ran" no console. Veja que a função `watch()` recebe dois armentos, o primeiro é o que estamos monitorando e o segundo é o que queremos executar.

> Se a gente quiser monitorar mais de uma variável, temos que passar elas em um array.

#### 5.6.7.2 - A função `watchEffect()`

Agora vamos ver como funciona a função `watchEffect()`:

```jsx
<template>
  <input type="text" v-model="search" />
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref("");
    watchEffect(() => {
      console.log("watchEffect function ran", search.value);
    });
    return { search };
  },
};
</script>
```

Veja que temos diferenças sensiveis na implementação. Veja que a função recebe apenas o código que a gente quer executar. Dentro dela a gente colocou o valor de `search.value`, então toda vez que o valor de `search.value` mudar, a gente vai printar no console "watchEffect function ran" mais o valor de `search.value`. No próximo tópico vamos abordar a diferença entre os dois.

#### 5.6.7.3 - Diferenças entre `watch()`e `watchEffect()`

Agora vamos entender qual a diferença entre as duas... A primeira que podemos citar é que asddf vai monitorar a ou as variáveis que a gente passar para ela como parâmetro, enquanto isso, `watchEffect()` vai monitorar todas as variáveis que estão dentro delas, não precisamos explicita-las.

Então, se a gente quer que apenas algumas variáveis que estamos mudando dentro da função sejam monitoradas, a gente usa `watch()`, mas se a gente quiser que todas sejam monitoradas, faz mais sentido usar `watchEffect()`, por isso inclusive ele disse que costuma usar mais a função `watchEffect()`.

Outro ponto importante, a função `watch()` executa só quando a variável que ela esta controlando for alterada, já a função `watchEffect()` vai executar também no momento em que a página é carregada pela primeira vez! Logo, podemos um uso muito comum da função `watchEffect()` é para fazer fetch de dados de alguma fonte externa!

#### 5.6.7.4 - Parando de monitorar as funções `watch()` e `watchEffect()`

E se a gente quiser, por algum motivo, parar de fazer o monitoramento de determinada variável? Agora vamos ver como a gente pode interromper esse monitoramento, veja como isso é feito:

```jsx
<template>
  <div class="home">
    <input type="text" v-model="search" />
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from "vue";

export default {
  name: "Home",
  setup() {
    const search = ref("");

    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect ran", search.value);
      console.log(names.value);
    });

    const handleClick = () => {
      stopWatch();
      stopEffect();
    };

    return { names, search, matchingNames, handleClick };
  },
};
</script>
```

É muito simples, a gente só precisa colocar as funções dentro de variáveis e, quando a gente quiser parar algum monitoramento, só precisamos executar essa função. Nesse caso, quando o usuário clicar no botão, as funções `stopWatch()` e `stopEffect()` são executadas e, por conta disso, o Vue para de fazer o monitoramento.

### 5.6.8 - Usando Props na composition API

Bom, agora vamos ver como a gente pode passar props entre componentes. É bem simples, vamos ver primeiro como a gente passaria uma prop que apenas serviria para renderizar conteúdo no componente filho, aqui esta o componente pai:

```jsx
<template>
  <div class="home">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref } from "vue";

import PostList from "../components/PostList.vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        id: 1,
      },
      {
        title: "top 5 CSS tips",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        id: 2
      },
    ]);
    return { posts };
  },
};
</script>
```

Aqui a gente esta criando um array com uma lista de posts e passando ele como uma ref para um outro componente, nesse caso, o componente `<PostList />`. Agora vamos ver como a gente faria para listar esses posts no componente `<PostList />`:

```jsx
<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["posts"],
  setup() {},
};
</script>
```

Veja que nesse caso não mudou nada! A gente recebe a prop e itera sobre ela. A única coisa que temos que fazer diferente é se a gente quiser usar algum valor da prop dentro da função `setup()`. Vamos supor que queremos renderizar apenas os 15 primeiros caracteres do corpo do post:

```jsx
<template>
  <div class="post-list">
    <div v-for="post in modifiedPosts" :key="post.id">
      <div class="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.textSnippet }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["posts"],
  setup(props) {
    const modifiedPosts = computed(() => {
      return props.posts.map((post) => {
        return {
          title: post.title,
          textSnippet: post.body.substring(0, 15) + "...",
        };
      });
    });
    return { modifiedPosts };
  },
};
</script>
```

A diferença aqui é que estamos pegando o corpo dos textos e reduzindo o tamanho deles, colocando um preview do que o texto fala. Nesse caso, veja que a diferença é que passamos as `props` como parâmetro para a função `setup()`. Dentro dela a gente cria um novo objeto, no qual o corpo do texto tem apenas os primeiros caracteres do mesmo. Dava pra fazer isso direto no template? Claro, mas ai a gente não teria aprendido a criar usar as props dentro do `setup()` kkkkk.

> Ele não manipulou o corpo dentro do componente `<PostList>`, na real ele criou outro componente e dentro dele alterou o tamanho do corpo do texto.

### 5.6.9 - Lifecycle hooks na composition API

A gente ainda pode usar a Options API junto a Composition API, mas agora vamos ver como a gente pode fazer tudo dentro da Composition API. O que muda é basicamente o nome e o local do métod, veja:

```jsx
import { onMounted, onUnmounted, onUpdated } from "vue";
...
export default {
  setup() {
    onMounted(() => console.log("component mounted"));
    onUnmounted(() => console.log("component unmounted"));
    onUpdated(() => console.log("component updated"));
  },
};
```

Se a gente quisesse usar a Options API, colocariamos as funções `mounted()`, `unmounted()`, `updated()`, etc, lado a lado com a função `setup()`, mas se a gente quiser acessar o mesmo ponto do ciclo de vida do componente, nesse caso a gente usa essas outras funções dentro da função `setup()`. Aqui estamos basicamente criando logs nos respectivos pontos de vida.

### 5.6.10 - Fetching na composition API

Agora vamos ver como podemos buscar dados de fontes externas dentro da função `setup()`. Não tem muito mistério, veja o código abaixo:

```jsx
<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
...
export default {
  ...
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("no available data");
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    load();
    return { posts, error };
  },
};
</script>
```

A gente começa criando duas variáveis, na primeira vamos colocar o conteúdo que iremos buscar, na segunda um eventual erro. Depois a gente cria uma função que irá fazer o fetch. Aqui, `if (!data.ok)`, estamos verificando se o fetch ocorreu bem, pois a variável `data` irá ter essa propriedade _ok_ dentro dela que, se tudo der certo, terá o valor de `true`.

Caso a operação de fetch ocorra bem, a gente pega o conteúdo dela, transforma em objeto e passa para a variável `post`, note que usamos `post.value`! Caso de erro, nós colocamos o erro dentro da variável `error`. A gente termina executando a função que criamos, e depois retornando as duas variávels.

Dentro do `<template>` a gente vai exibir uma mensagem de erro caso tenha um erro e, nesse caso, a variável `posts` não terá tamanho nenhum logo, a lista não vai aparecer, mas vai aparecer o "Loading...", o que não faz muito sentido, porque já foi carregado e deu erro, mas isso é a maneira que ele fez o código dele.

### 5.6.11 - Composable function - criando lógica reutilizavel

Imagina que a gente vai fazer o fetch que fizemos no tópico anterior em outros componentes, a gente teria que repetir todo esse código em cada um deles, certo? Errado! Usando a composition API nós podemos usar o as chamadas "composable functions"(não é um nome oficial), pra criar uma função que pode ser utilizada em várias partes do nosso código.

Primeiro passo é a configurar nossa estrutura de pastas, no caso, ele sugere criar uma pasta dentro do _src_ chamada _composables_, e colocar cada função em um arquivo com o nome da função:

- ...
- 📁 src
  - 📁 composables
    - 📄 nomeDaFuncao.js
- ...

Veja que é um arquivo JS! Agora vamos ver como é a função que esta dentro deste arquivo:

```jsx
import { ref } from "vue";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/posts");
      if (!data.ok) {
        throw Error("no available data");
      }
      posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
```

Veja, aquela função toda de fetch agora esta em um arquivo separado! Se eventualmente a gente precisasse reutilizar a mesma lógica, seria só importar essa função.

A gente inicia importando a função `ref()` do Vue, isso porque nós vamos utiliza-la aqui. Declaramos a função e, sem seguida, já criamos as mesmas duas variáveis, uma para as informações e outra para os possiveis erros. Depois temos a ciação da função que de fato faz o fetch dos dados.

Por fim temos o `return`, percebe que aqui a gente devolve as duas variáveis e a função, a gente não executou ela aqui dentro, porque faremos isso dentro do componente.

Agora vamos para o uso dela dentro do compoente, veja como é mais simples e limpo:

```jsx
<script>
import getPosts from '../composables/getPosts'
export default {
  ...
  setup() {
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  },
}
</script>
```

A gente importa a função que criamos e desconstruimos ela em 3 variáveis. Depois a gente executa a função que foi importada dentro da `getPosts()` e retorna as variáveis, que ficam acessiveis da mesma forma que antes na parte de `<template>`. Perceba que a gente nem precisou importar a função `ref()`, uma vez que ela já é importada na função que criamos antes. Molezinha.

### 5.6.12 - Conclusão

Nesse tópico aprendemos um assunto fundamental para o desafio que cumpriremos em breve. Vimos que a composition API realmente melhorou a construção da parte do JS no Vue, mas ainda sim podemos utilizar a options API. A pasta em que esta o código desse tópico é a: _06-dojo-blog_.

## 5.7 - Conclusão

Bom, agora eu sei Vue, vamos ver o que muda quando a gente coloca o Pinia

# 6 - Pinia

O que é Pinia? Pinia é uma solução para gerenciamento de estados para o Vue.js. Ela permite que a gente armazene estados globais em "sotes". Quando um desses estados é alterado, todos os componentes que possuem ele são avisados e, consequentemente atualizados.

Se a gente for pensar, isso faz até mais sentido, uma vez que separa as preocupações, a gente se preocupa com o estado da aplicação em uma parte especifica do nosso código.

## 6.1 - Instalação e configuração inicial

Bom, a gente começa instalando o pacote:

```bash
npm i -s pinia
```

Depois temos que colocar ela como middleware na nossa aplicação, vamos fazer isso no arquivo principal, _main.js_:

```jsx
import { createPinia } from "pinia";
...
createApp(App).use(createPinia()).mount("#app");
```

Por fim a gente cria as "_stores_", é nelas que vão morar os estados da nossa aplicação:

- 📁 src
  - 📁 stores
    - 📄 NomeDoEstadoStore.js

Idealmente a gente vai criar um arquivo para cada estado que estivermos controlando. Por exemplo, na nossa aplicação nós temos as tarefas, então criamos o arquivo _TaskStore.js_, mas se por acaso a gente também estivesse usando um estado pra controlar se o usuário esta logado ou não, teríamos outro arquivo, _UserStore.js_, por exemplo.

Dentro deste arquivo teremos uma estrutura mais ou menos assim:

```jsx
import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "buy some milk", isFav: false },
      { id: 2, title: "play Gloomhaven", isFav: true },
    ],
    name: "Mario",
  }),
});
```

A gente importa a função defineStore da pinia. Depois podemos ver que a gente usa essa função e pega o que ela vai retornar para nós dentro de um variável e exporta. Dessa maneira a gente vai conseguir acessar esse estado importando essa variável dentro dos nossos componentes.

Essa função recebe dois parâmetros, esse primeiro, a string, até onde eu entendi, é mais para que a gente consiga debuggar eventuais problemas. O segundo argumento é um objeto e esse objeto possui a propriedade _state_, veja que ela é uma função e, dentro dela, a gente definiu um objeto. Como podemos imaginar, é aqui que esta o estado que esse arquivo vai controlar de fato. Esse `name: "Mario"` ele colocou mais com o intuito de mostrar que a gente pode ter mais de uma coisa nesse objeto.

> O nome da função que exportamos é `useTaskStore()` por conta de uma convenção. Sempre que a gente usa funções customizadas dentro dos componentes, por convenção, a gente inicia o nome dessas funções com "use".

## 6.2 - Aceissando uma store dentro de um componente

Pra acessar a store que criamos é bem simples, vamos ver como a gente poderia fazer para exibir a lista de tarefas que criamos:

```jsx
<template>
  <div v-for="task in taskStore.tasks" :key="task.id">
    ...
  </div>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";

export default {
  ...
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>
```

Veja como é bem simples, a gente importou a função que exportamos no arquivo e, dentro da função `setup()`, a gente instanciou ela em uma variável e depois exportou essa variável. A partir do momento que temos essa variável, veja que o uso dela dentro do HTML é normal.

## 6.3 - Getters - As computed variables do Pinia

Os getters são funções que a gente pode definir dentro das nossas stores, que tem uma função muito parecida com as computed variables, elas irão gerar novas variáveis, derivando elas das que já temos no nosso estado. Vamos ver como a gente poderia fazer dois getters dentro do nosso estado, um filtra apenas as tasks sinalizadas como favoritas e outro para contas quantas tarefas temos:

```jsx
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    ...
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
    totalCount: (state) => {
      return state.tasks.length;
    },
  },
});
```

Nós criamos uma propriedade _getters_ dentro do objeto e agora temos coisas que são derivadas da nossa lista de tarefas. A utilização é bem simples, na verdade não poderia ser mais simples do que isso, veja como a gente faria para iterar sobre o array de tarefas favoritas:

```jsx

<template>
  <div v-for="task in taskStore.favs" :key="task.id">
    ...
  </div>
</template>

<script>
import TaskDetails from "./components/TaskDetails.vue";
...
export default {
  ...
  setup() {
    const taskStore = useTaskStore();
    return { taskStore };
  },
};
</script>
```

Veja que a gente acessou como se fosse um valor normal do nosso estado. Molezinha.

## 6.4 - Actions - Mudando o valor dos estados

Nós vamos usar tasks para modificar o valor dos estados que a nossa store esta controlando. O setup é muito parecido com as funções getters:

```jsx
export const useTaskStore = defineStore("taskStore", {
  state: () => (...),
  getters: {...},
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });
    },
    toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;
    },
  },
});
```

Veja que é basicamente a mesma coisa, apenas criamos funções dentro de uma propriedade do objeto. Vamos ver como duas dessas ações foram implementadas:

```jsx
<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)">
        delete
      </i>
      <i
        class="material-icons"
        :class="{ active: task.isFav }"
        @click="taskStore.toggleFav(task.id)"
      >
        favorite
      </i>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/TaskStore";

export default {
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>
```

Veja com é simples, dentro do `setup()` a gente basicamente importou a store e, no HTML, a gente chama a função normalmente, nesse caso passando o ID do elemento em questão. Molezinha.

## 6.5 - Vue Devtools + Pinia

Video bem interessante mostrando como a gente pode usar o Vue.

[Link da extensão](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
[Link do video](https://youtu.be/hEDdK0L654w?si=6YQ-ML0RSC2-eRZX)

## 6.6 - Ações assíncronas

De que adianta a gente mudar o estado da página se essa mudança não é persistente, certo? Então nesse tópico nós vamos resolver isso, vamos aprender a como buscar nossas tarefas com um fetch. Para isso nós vamos usar actions novamente, veja como fica o código da action:

```jsx
export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [],
    loading: false,
  }),
  getters: {...},
  actions: {
    async getTasks() {
      this.loading = true;
      const res = await fetch("http://localhost:3000/tasks");
      const data = await res.json();
      this.tasks = data;
      this.loading = false;
    },
    ...
  },
});
```

Para fins de estudo, vamos usar o pacote json-server novamente. Fizemos algumas alterações no estado, primeiro que a lista de tarefas agora incia vazia, a segunda é que adiconamos uma propriedade "loading".

Sobre a função, primeiramente podemos notar que declaramos ela como uma função assíncrona, desta maneira a gente consegue fazer as requisições de maneira assíncrona dentro dela. A gente começa definindo `loading` como verdadeiro, fazemos o fetch separamos a resposta em um json e colocamos dentro da variável de tarefas e, pra finalizar, mudamos o estado de `loading` para `false`.

Agora vamos ver como é que fazemos no componente. Aqui tem uma diferença importante, veja:

```jsx
<template>
  <div v-for="task in taskStore.tasks" :key="task.id">
    ...
  </div>
</template>

<script>
import { useTaskStore } from "./stores/TaskStore";

export default {
  ...
  setup() {
    const taskStore = useTaskStore();
    taskStore.getTasks();
    return { taskStore };
  },
};
</script>
```

Veja, a gente precisa chamar a ação `getTasks()`, dessa maneira o Vue fará a requisição e populara o array com as tarefas, afinal, as ações não se chamam sozinhas...

### 6.6.1 - Armazenando nossas modificações

Bom, agora quem não chorou vai chorar. Como a gente faz pra tornar tudo isso que estamos fazendo algo persistente? A resposta é obvia, precisamos mandar isso de volta pra onde buscamos as informações. Só que olha que beleza, a gente não precisa mexer em nada além da store. Isso porque, lá no vue, a gente só chama um método da store, então se esse método agora é persistente, a ação também o será!! Veja como ficou o código:

```jsx
export const useTaskStore = defineStore("taskStore", {
  state: () => (...),
  getters: {...},
  actions: {
    async getTasks() {...},
    async addTask(task) {
      this.tasks.push(task);

      const res = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) {
        console.log(res.error);
      }
    },
    async deleteTask(id) {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== id;
      });

      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "DELETE",
      });

      if (res.error) {
        console.log(res.error);
      }
    },
    async toggleFav(id) {
      const task = this.tasks.find((t) => t.id === id);
      task.isFav = !task.isFav;

      const res = await fetch("http://localhost:3000/tasks/" + id, {
        method: "PATCH",
        body: JSON.stringify({ isFav: task.isFav }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) {
        console.log(res.error);
      }
    },
  },
});
```

Molezinha!

---
