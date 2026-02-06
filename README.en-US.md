<div align="center">

# 🚀 Titan Core API

**Modern and robust REST API built with NestJS for authentication and user management**

[![NestJS](https://img.shields.io/badge/NestJS-11.0-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

**📖 Read in other languages:** [🇧🇷 Português](README.md)

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Technologies](#-technologies)
- [Prerequisites](#-prerequisites)
- [Configuration](#-configuration)
- [Running the Project](#-running-the-project)
- [API Documentation](#-api-documentation)
- [Project Structure](#-project-structure)
- [License](#-license)

---

## 🎯 About the Project

**Titan Core API** is a complete REST API developed with NestJS, offering a robust JWT-based authentication system and complete user management. The project was built following best development practices, using modular architecture and TypeScript to ensure clean and scalable code.

### ✨ Key Features

- 🔐 **JWT Authentication** - Secure authentication system with tokens
- 👥 **User Management** - Complete CRUD for users
- 🔒 **Protected Routes** - Authentication middleware for sensitive endpoints
- 🔄 **Password Reset** - Password reset functionality
- 📦 **Modular Architecture** - Organized and maintainable code
- 🗄️ **TypeORM** - Modern ORM for database management

---

## 🛠️ Technologies

- **[NestJS](https://nestjs.com/)** - Progressive Node.js framework
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript superset with static typing
- **[TypeORM](https://typeorm.io/)** - ORM for TypeScript and JavaScript
- **[MySQL](https://www.mysql.com/)** - Database management system
- **[JWT](https://jwt.io/)** - JSON Web Tokens for authentication
- **[Passport](http://www.passportjs.org/)** - Authentication middleware
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)** - Password hashing
- **[Docker](https://www.docker.com/)** - Containerization

---

## 📦 Prerequisites

Before you begin, make sure you have installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) (optional, for database)

---

## ⚙️ Configuration

### 1. Clone the repository

```bash
git clone https://github.com/your-username/titan-core-api.git
cd titan-core-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root with the following variables:

```env
# Application Port
PORT=3000

# Database Configuration
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=your_user
MYSQL_PASSWORD=your_password
MYSQL_NAME=titan_core_db
MYSQL_ROOT_PASSWORD=root_password

# JWT
JWT_SECRET=your_super_secure_jwt_secret_here

# phpMyAdmin
PHPMYADMIN_PORT=8080
```

### 4. Configure Docker (Optional)

If you want to use Docker for the database:

```bash
docker-compose up -d
```

This will start:
- **MySQL** on port `3306`
- **phpMyAdmin** on the port configured in `PHPMYADMIN_PORT` (default: `8080`)

---

## 🚀 Running the Project

### Development Mode

```bash
npm run start:dev
```

The API will be available at `http://localhost:3000` (or on the port specified in the `PORT` environment variable).

### Production Mode

```bash
# Build the project
npm run build

# Start in production
npm run start:prod
```

### Other Commands

```bash
# Start normally
npm run start

# Run tests
npm run test

# Run tests with coverage
npm run test:cov

# Linting
npm run lint

# Code formatting
npm run format
```

---

## 📚 API Documentation

### 🔐 Authentication

All protected routes require the `Authorization` header with the JWT token:

```
Authorization: Bearer <your_access_token>
```

### 📍 Available Endpoints

#### **Authentication Routes**

##### `POST /auth/register`
Registers a new user and returns an access token.

**No authentication required**

**Request Body:**
```json
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Example using cURL:**
```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Example using JavaScript (fetch):**
```javascript
const response = await fetch('http://localhost:3000/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    password: 'password123'
  })
});

const data = await response.json();
const token = data.access_token;
```

---

##### `PATCH /auth/reset-password`
Resets a user's password using a reset token.

**No authentication required**

**Request Body:**
```json
{
  "token": "reset_token",
  "password": "new_password123"
}
```

---

#### **User Routes**

**All user routes are protected and require authentication.**

##### `GET /users`
Lists all registered users.

**Requires authentication** 🔒

```bash
curl http://localhost:3000/users \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

##### `GET /users/:id`
Fetches a specific user by ID.

**Requires authentication** 🔒

```bash
curl http://localhost:3000/users/1 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

##### `POST /users`
Creates a new user.

**Requires authentication** 🔒

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "name": "Jane Smith",
    "username": "janesmith",
    "email": "jane@example.com",
    "password": "password123"
  }'
```

---

##### `PUT /users/:id`
Updates an existing user.

**Requires authentication** 🔒

```bash
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -d '{
    "name": "Updated Name",
    "email": "newemail@example.com"
  }'
```

---

##### `DELETE /users/:id`
Deletes a user.

**Requires authentication** 🔒

```bash
curl -X DELETE http://localhost:3000/users/1 \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

### 🔄 Complete Flow Example

```bash
# 1. Register a user and save the token
REGISTER_RESPONSE=$(curl -s -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "password": "password123"
  }')

TOKEN=$(echo $REGISTER_RESPONSE | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

# 2. Use the token to access protected routes
curl -X GET http://localhost:3000/users \
  -H "Authorization: Bearer $TOKEN"

# 3. Create a new user (protected route)
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Jane Smith",
    "username": "janesmith",
    "email": "jane@example.com",
    "password": "password123"
  }'

# 4. Update a user (protected route)
curl -X PUT http://localhost:3000/users/1 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Updated Name"
  }'

# 5. Delete a user (protected route)
curl -X DELETE http://localhost:3000/users/1 \
  -H "Authorization: Bearer $TOKEN"
```

---

## 📁 Project Structure

```
titan-core-api/
├── src/
│   ├── modules/
│   │   ├── auth/              # Authentication module
│   │   │   ├── domain/        # DTOs and contracts
│   │   │   ├── infra/         # Controllers
│   │   │   └── service/       # Business logic
│   │   └── users/             # Users module
│   │       ├── domain/        # Entities, DTOs and repositories
│   │       ├── infra/         # Controllers and implementations
│   │       └── services/      # Business services
│   ├── shared/                # Shared resources
│   │   └── guards/            # Authentication guards
│   ├── app.module.ts          # Main module
│   └── main.ts                # Entry file
├── docker-compose.yml         # Docker configuration
├── package.json
├── tsconfig.json
└── README.en-US.md
```

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

**Developed with ❤️ using NestJS**

[⬆ Back to top](#-titan-core-api)

</div>
