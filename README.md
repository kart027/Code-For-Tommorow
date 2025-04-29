# Code-For-Tommorow


# Category Service API

This Node.js Express API provides functionality for managing categories and services with price options. It uses JWT for authentication and follows MVC architecture with Sequelize ORM and PostgreSQL.

---

## 🔐 Authentication

**Login**

- `POST /login`
- Only available credentials:
  - Email: `admin@codesfortomorrow.com`
  - Password: `Admin123!@#`
- Returns a JWT token on successful login.

**Headers Required for Authenticated Routes**

```
Authorization: Bearer <your_jwt_token>
```

---

## 📂 Category Endpoints

### ➕ Create Category

- `POST /category`
- Body:
```json
{
  "name": "Haircut"
}
```

### 📄 Get All Categories

- `GET /categories`

### ✏️ Update Category

- `PUT /category/:categoryId`
- Body:
```json
{
  "name": "Updated Name"
}
```

### ❌ Delete Empty Category

- `DELETE /category/:categoryId`

> Only deletes categories with no services.

---

## 🛠️ Service Endpoints

### ➕ Add Service to Category

- `POST /category/:categoryId/service`
- Body:
```json
{
  "name": "Premium Cut",
  "type": "VIP",
  "priceOptions": [
    {
      "duration": "30 mins",
      "price": 25.0,
      "type": "Hourly"
    },
    {
      "duration": "1 week",
      "price": 100.0,
      "type": "Weekly"
    }
  ]
}
```

### 📄 Get All Services in a Category

- `GET /category/:categoryId/services`

### ✏️ Update Service

- `PUT /category/:categoryId/service/:serviceId`
- Body:
```json
{
  "name": "Updated Service Name",
  "type": "Normal",
  "priceOptions": [
    {
      "duration": "60 mins",
      "price": 30.0,
      "type": "Hourly"
    }
  ]
}
```

### ❌ Delete Service

- `DELETE /category/:categoryId/service/:serviceId`

---

## 🧱 Database Schema

### 📁 Category

| Field | Type |
|-------|------|
| id | UUID |
| name | STRING |

### 🛠️ Service

| Field | Type |
|-------|------|
| id | UUID |
| categoryId | UUID (FK) |
| name | STRING |
| type | ENUM('Normal', 'VIP') |

### 💵 ServicePriceOption

| Field | Type |
|-------|------|
| id | UUID |
| serviceId | UUID (FK) |
| duration | STRING |
| price | DECIMAL |
| type | ENUM('Hourly', 'Weekly', 'Monthly') |

---

## 🚀 Running the Project

1. Clone the repo and install dependencies:

```bash
npm install
```

2. Configure `.env` file for DB and JWT secret.

3. Run the server:

```bash
npm start
```

4. Import the included Postman collection to test the API.

---

© 2025 Codes for Tomorrow
