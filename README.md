#  Task Manager API (Full Stack Project)

A scalable **Task Manager REST API** with **JWT Authentication**, **Role-Based Access Control (RBAC)**, and a simple frontend UI to interact with the system.

---

##  Features

###  Authentication & Authorization

* User Registration & Login
* Password hashing using bcrypt
* JWT-based authentication
* Role-based access control:

  * **User** → Access only own tasks
  * **Admin** → Access all tasks

---

###  Task Management (CRUD)

* Create Task
* Read Tasks
* Update Task
* Delete Task

---

###  Backend Highlights

* RESTful API design (`/api/v1/...`)
* Input validation using Pydantic
* Proper error handling & status codes
* Modular & scalable project structure
* PostgreSQL database with SQLAlchemy ORM
* Dockerized setup for easy deployment

---

###  Frontend (Vanilla JS)

* Register & Login UI
* JWT-based protected dashboard
* Perform CRUD operations on tasks
* Displays API responses (success/errors)

---

## 🛠 Tech Stack

### Backend

* FastAPI
* PostgreSQL
* SQLAlchemy
* JWT (python-jose)
* Passlib (bcrypt)

### Frontend

* HTML
* CSS
* Vanilla JavaScript

### DevOps

* Docker
* Docker Compose

---

##  Project Structure

```
TASK-MANAGER-API/
├── frontend/        # UI (HTML, CSS, JS)
├── src/app/
│   ├── api/v1/      # Routes (auth, tasks, users)
│   ├── core/        # Config & security
│   ├── db/          # Models, schemas, DB connection
│   ├── services/    # Business logic (optional)
│   └── main.py      # Entry point
├── Dockerfile
├── docker-compose.yml
└── requirements.txt
```

---

##  Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

---

### 2️⃣ Run with Docker

```bash
docker-compose up --build
```

---

### 3️⃣ Access the app

* Backend API:

  ```
  http://localhost:8000
  ```

* Swagger Docs:

  ```
  http://localhost:8000/docs
  ```

* Frontend:
  Open `frontend/index.html` in your browser

---

##  API Endpoints

### Auth

* `POST /api/v1/auth/register`
* `POST /api/v1/auth/login`

### Tasks

* `GET /api/v1/tasks/`
* `POST /api/v1/tasks/`
* `PUT /api/v1/tasks/{id}`
* `DELETE /api/v1/tasks/{id}`

---

##  Authentication Flow

1. User logs in → receives JWT token
2. Token stored in browser (localStorage)
3. Token sent in headers:

   ```
   Authorization: Bearer <token>
   ```
4. Backend verifies token & role before granting access

---

##  Role-Based Access Control

| Role  | Permissions           |
| ----- | --------------------- |
| User  | Manage own tasks only |
| Admin | Manage all tasks      |

---

##  Testing

You can test APIs using:

* Swagger UI → `/docs`
* Postman (import endpoints manually)

---

##  Scalability Considerations

This project can be scaled by:

* 🔹 Using **Redis** for caching frequently accessed data
* 🔹 Implementing **Load Balancers** for horizontal scaling
* 🔹 Splitting into **Microservices** (Auth Service, Task Service)
* 🔹 Adding **Message Queues** (Kafka/RabbitMQ) for async tasks
* 🔹 Deploying with **Docker + Kubernetes**

---

##  Security Practices

* Password hashing using bcrypt
* JWT authentication with expiration
* Protected routes using dependency injection
* Input validation using Pydantic

---

##  Future Improvements

* Pagination & filtering
* Refresh tokens
* Logging & monitoring
* CI/CD pipeline
* Deployment on cloud (AWS/GCP)

---

##  Author

Built as part of a Backend Developer Internship Assignment.

---

##  License

This project is licensed under the MIT License.
