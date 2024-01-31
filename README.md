# API de vendas com Node.js, Express, Typescript, etc

## Objetivo

Esse projeto foi criado com base no curso da Udemy [API Restful Javascript com Node.js, Typescript, TypeORM etc](https://www.udemy.com/course/api-restful-de-vendas/?referralCode=6DDEF85A747CA5CC4135).

Tem por objetivo, colocar em prática conceitos de Node.js, Express, Typescript, TypeORM, Postgres, Redis, Docker, entre outras tecnologias, com a criação de uma aplicação backend para gestão de vendas com funcionalidades para criação de cadastro de produtos, cadastro de clientes, pedidos de compras e uma completa gestão de usuários da aplicação, com autenticação via Token JWT, recuperação de senha por email, atualização de perfil, atualização de avatar, e muito mais.

## Rodando a aplicação no seu PC

Faça um clone deste repositório e instale no seu ambiente de desenvolvimento usando o seguinte comando no seu terminal (escolha um diretório apropriado):

`git clone https://github.com/GabrielleFonseca/api_vendas.git`

Após clonar o conteúdo do repositório, acesse o diretório criado e efetue a instalação das dependências:

1. `cd api-vendas`

2. `npm install`

Após essa instalação execute a aplicação com o comando `npm run dev`. O servidor estará em execução no endereço `http://localhost:3333`.

## Configurando o banco de dados

O banco de dados utilizado nesse projeto é o Postgres, e para configurar o seu banco de forma funcional nessa aplicação, basta criar o banco de acordo com as especificações do arquivo **ormconfig.json**. Dentro do projeto, na pasta **src/shared/typeorm/migrations** temos todos os arquivos de migração para criação das nossas tabelas, basta utilizar o comando `npm run typeorm migration:run` e todas as tabelas irão aparecer dentro do banco de dados **apivendas**.

## Redes Sociais

[LinkedIn](https://www.linkedin.com/in/gabyoof/)
