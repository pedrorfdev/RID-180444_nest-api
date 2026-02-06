<div align="center">

# 🚀 Titan Core API

**API REST moderna e robusta construída com NestJS para autenticação e gerenciamento de usuários**

[![NestJS](https://img.shields.io/badge/NestJS-11.0-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

**📖 Read in other languages:** [🇺🇸 English](README.en-US.md)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Configuração](#-configuração)
- [Executando o Projeto](#-executando-o-projeto)
- [Documentação da API](#-documentação-da-api)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

**Titan Core API** é uma API REST completa desenvolvida com NestJS, oferecendo um sistema robusto de autenticação baseado em JWT e gerenciamento completo de usuários. O projeto foi construído seguindo as melhores práticas de desenvolvimento, utilizando arquitetura modular e TypeScript para garantir código limpo e escalável.

### ✨ Principais Funcionalidades

- 🔐 **Autenticação JWT** - Sistema seguro de autenticação com tokens
- 👥 **Gerenciamento de Usuários** - CRUD completo para usuários
- 🔒 **Rotas Protegidas** - Middleware de autenticação para endpoints sensíveis
- 🔄 **Reset de Senha** - Funcionalidade para redefinição de senha
- 📦 **Arquitetura Modular** - Código organizado e fácil de manter
- 🗄️ **TypeORM** - ORM moderno para gerenciamento de banco de dados

---

## 🛠️ Tecnologias

- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[TypeORM](https://typeorm.io/)** - ORM para TypeScript e JavaScript
- **[MySQL](https://www.mysql.com/)** - Sistema de gerenciamento de banco de dados
- **[JWT](https://jwt.io/)** - JSON Web Tokens para autenticação
- **[Passport](http://www.passportjs.org/)** - Middleware de autenticação
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)** - Hash de senhas
- **[Docker](https://www.docker.com/)** - Containerização

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/) (opcional, para banco de dados)

---

## ⚙️ Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/titan-core-api.git
cd titan-core-api
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Porta da aplicação
PORT=3000

# Configurações do Banco de Dados
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=seu_usuario
MYSQL_PASSWORD=sua_senha
MYSQL_NAME=titan_core_db
MYSQL_ROOT_PASSWORD=senha_root

# JWT
JWT_SECRET=seu_jwt_secret_super_seguro_aqui

# phpMyAdmin
PHPMYADMIN_PORT=8080
```

### 4. Configure o Docker (Opcional)

Se você quiser usar Docker para o banco de dados:

```bash
docker-compose up -d
```

Isso irá iniciar:
- **MySQL** na porta `3306`
- **phpMyAdmin** na porta configurada em `PHPMYADMIN_PORT` (padrão: `8080`)

---

## 🚀 Executando o Projeto

### Modo Desenvolvimento

```bash
npm run start:dev
```

A API estará disponível em `http://localhost:3000` (ou na porta especificada na variável de ambiente `PORT`).

### Modo Produção

```bash
# Build do projeto
npm run build

# Iniciar em produção
npm run start:prod
```

### Outros Comandos

```bash
# Iniciar normalmente
npm run start

# Executar testes
npm run test

# Executar testes com cobertura
npm run test:cov

# Linting
npm run lint

# Formatação de código
npm run format
```

---

## 📚 Documentação da API

### 🔐 Autenticação

Todas as rotas protegidas requerem o header `Authorization` com o token JWT:

```
Authorization: Bearer <seu_access_token>
```

### 📍 Endpoints Disponíveis

#### **Rotas de Autenticação**

##### `POST /auth/register`
Registra um novo usuário e retorna um token de acesso.

**Não requer autenticação**

**Corpo da Requisição:**
```json
{
  "name": "João Silva",
  "username": "joaosilva",
  "email": "joao@example.com",
  "password": "senha123"
}
```

**Resposta:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Exemplo usando cURL:**
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "username": "joaosilva",
    "email": "joao@example.com",
    "password": "senha123"
  }'
```

**Exemplo usando JavaScript (fetch):**
```javascript
const response = await fetch('http://localhost:3000/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'João Silva',
    username: 'joaosilva',
    email: 'joao@example.com',
    password: 'senha123'
  })
});

const data = await response.json();
const token = data.access_token;
```

---

##### `PATCH /auth/reset-password`
Redefine a senha de um usuário usando um token de reset.

**Não requer autenticação**

**Corpo da Requisição:**
```json
{
  "token": "token_de_reset",
  "password": "nova_senha123"
}
```

---

#### **Rotas de Usuários**

**Todas as rotas de usuários são protegidas e requerem autenticação.**

##### `GET /users`
Lista todos os usuários cadastrados.

**Requer autenticação** 🔒

```bash
curl http://localhost:3000/users \
  -H "Authorization: Bearer SEU_ACCESS_TOKEN"
```

---

##### `GET /users/:id`
Busca um usuário específico por ID.

**Requer autenticação** 🔒

```bash
curl http://localhost:3000/users/1 \
  -H "Authorization: Bearer SEU_ACCESS_TOKEN"
```

---

##### `POST /users`
Cria um novo usuário.

**Requer autenticação** 🔒

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_ACCESS_TOKEN" \
  -d '{
    "name": "Maria Santos",
    "username": "mariasantos",
    "email": "maria@example.com",
    "password": "senha123"
  }'
```

---

##### `PUT /users/:id`
Atualiza um usuário existente.

**Requer autenticação** 🔒

```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer SEU_ACCESS_TOKEN" \
  -d '{
    "name": "Nome Atualizado",
    "email": "novoemail@example.com"
  }'
```

---

##### `DELETE /users/:id`
Deleta um usuário.

**Requer autenticação** 🔒

```bash
curl -X DELETE http://localhost:3000/users/1 \
  -H "Authorization: Bearer SEU_ACCESS_TOKEN"
```

---

### 🔄 Exemplo Completo do Fluxo

```bash
# 1. Registrar um usuário e salvar o token
REGISTER_RESPONSE=$(curl -s -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "username": "joaosilva",
    "email": "joao@example.com",
    "password": "senha123"
  }')

TOKEN=$(echo $REGISTER_RESPONSE | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

# 2. Usar o token para acessar rotas protegidas
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer $TOKEN"

# 3. Criar um novo usuário (rota protegida)
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Maria Santos",
    "username": "mariasantos",
    "email": "maria@example.com",
    "password": "senha123"
  }'

# 4. Atualizar um usuário (rota protegida)
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Nome Atualizado"
  }'

# 5. Deletar um usuário (rota protegida)
curl -X DELETE http://localhost:3000/users/1 \
  -H "Authorization: Bearer $TOKEN"
```

---

## 📁 Estrutura do Projeto

```
titan-core-api/
├── src/
│   ├── modules/
│   │   ├── auth/              # Módulo de autenticação
│   │   │   ├── domain/        # DTOs e contratos
│   │   │   ├── infra/         # Controllers
│   │   │   └── service/       # Lógica de negócio
│   │   └── users/             # Módulo de usuários
│   │       ├── domain/        # Entidades, DTOs e repositórios
│   │       ├── infra/         # Controllers e implementações
│   │       └── services/      # Serviços de negócio
│   ├── shared/                # Recursos compartilhados
│   │   └── guards/            # Guards de autenticação
│   ├── app.module.ts          # Módulo principal
│   └── main.ts                # Arquivo de entrada
├── docker-compose.yml         # Configuração Docker
├── package.json
├── tsconfig.json
└── README.pt-BR.md
```

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT.

---

<div align="center">

**Desenvolvido com ❤️ usando NestJS**

[⬆ Voltar ao topo](#-titan-core-api)

</div>
