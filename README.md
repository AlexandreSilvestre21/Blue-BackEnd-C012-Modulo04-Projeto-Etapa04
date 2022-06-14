# Api - Game Catálogo <img src="https://user-images.githubusercontent.com/95504029/151560441-2e792d97-fd65-462c-8fd7-70f581de5674.gif" width="100">

### Projeto Módulo 4 (Backend) - Blue EdTech

## 🎆 Funcionalidades

O objetivo do projeto é simular uma plataforma de games onde cada usuário possui diferentes perfis em que adiciona jogos de seu interesse. Esses perfis podem ser usados para gerenciar os jogos de diferentes membros de uma família ou simplesmente separá-los por estado de humor 😉.

O Game Center é organizado de maneira muito simples, abaixo é possível ver como funcionam as relações entre contas administradoras, usuários e seus perfis. <br><br>

- Como visitante, você terá acesso a lista de jogos criados pelo admin, a lista de gêneros com seus respectivos jogos e ao cadastro de nova contato
- Depois de cadastrada, será possível criar diferentes perfis de usuário, cada um com seus próprios jogos e sua lista de favoritos.
- Para transformar uma conta em admin, é necessário usar a rota de 'PATCH' na tag 'user-admin' (swagger) utilizando a conta de exemplo na rota de 'login'.
- Como admin, você terá acesso a informações como quais contas adicionaram determinado jogo à seus perfis, quantidade de jogos por conta, entre outros.

Você pode ver seu funcionamento a partir do [Swagger Docs](https://projetomod4backendgamecenter-production.up.railway.app/api/)

## 👯‍♀️ Clonando

```bash
git clone https://github.com/AlexandreSilvestre21/Blue-BackEnd-C012-Modulo04-Projeto-Etapa04.git
```

## ⚙ Instalação

```bash
$ npm install
```

## 👨🏽‍💻 Rodando o App

```bash
# watch mode
$ npm run start:dev

# Prisma studio
$ npx prisma studio
```

Com esses comandos será possível acessar o Swagger Docs e o Prisma studio que estiverem atribuídos no seu arquivo '.env'

## 🛠️ CONSTRUÍDO COM:

NodeJs | Prisma | NestJs | PostgreeSQL | TypeScript | JavaScript
