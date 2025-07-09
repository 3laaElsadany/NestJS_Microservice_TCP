
# NestJS Microservices with TCP Transport

This project is a microservices-based backend system built with **NestJS** using **TCP transport protocol** for inter-service communication. It consists of the following services:

-  **Users Microservice** – handles user creation and retrieval
-  **Payments Microservice** – handles payment creation and links them to users
-  **API Gateway** – exposes RESTful APIs to interact with the microservices

---

## 📁 Project Structure

```bash
nestjs-microservices-tcp/
│
├── api-gateway/         # Exposes REST APIs
│
├── users/               # Handles user data
│
├── payments/            # Handles payments and emits events
```

---

## 🚀 Features

- ✅ Clean architecture with separation of concerns
- ✅ TCP-based communication using NestJS microservices
- ✅ User creation and retrieval
- ✅ Payment creation linked to users
- ✅ Event-driven communication between services (`paymentCreated` event)
- ✅ Input validation using `ValidationPipe`
- ✅ TypeORM integration with PostgreSQL (or other SQL DBs)
- ✅ DTOs for type-safe data transfer
- ✅ Centralized `.env` for service configs

---

## 🔧 Technologies Used

- **NestJS** (Monorepo structure)
- **Microservices (TCP Transport)**
- **TypeORM**
- **PostgreSQL / MySQL**
- **RxJS**
- **Docker** (optional for future containerization)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/3laaElsadany/NestJS_Microservice_TCP.git

# Go into each folder and install dependencies
cd api-gateway && npm install
cd ../users && npm install
cd ../payments && npm install
```

---

## 🧪 Running the Project

### Start Users Microservice
```bash
cd users
npm run start:dev
```

### Start Payments Microservice
```bash
cd payments
npm run start:dev
```

### Start API Gateway
```bash
cd api-gateway
npm run start:dev
```

---

## 📮 Example API Usage 

- **Create User**
  ```http
  POST /users
  Content-Type: application/json
  {
    "username": "Ali",
    "email": "ali@example.com"
  }
  ```

- **Get User by ID**
  ```http
  GET /users/{id}
  ```

- **Create Payment**
  ```http
  POST /payments
  Content-Type: application/json
  {
    "amount": 100,
    "userId": "user-id"
  }
  ```

---

## 📡 Microservices Communication

| From             | To               | Action                           |
|------------------|------------------|----------------------------------|
| API Gateway      | Users Service    | `send(cmd: 'createUser')`        |
| API Gateway      | Payments Service | `emit('createPayment')`          |
| Payments Service | Users Service    | `send(cmd: 'getUserById')`       |
| Payments Service | Users Service    | `emit('paymentCreated')`         |

