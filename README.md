# Task Manager API

A scalable REST API with authentication and role-based access control, built as part of a Backend Developer Internship Assignment.

---

##  Features

###  Authentication
- User Registration & Login
- Password hashing using bcrypt
- JWT-based authentication

###  Role-Based Access
- User & Admin roles
- Protected routes using JWT
- Admin-specific privileges

### Task Management (CRUD)
- Create tasks
- View tasks (user-specific / admin-all)
- Update tasks
- Delete tasks

###  API Design
- RESTful API structure
- API versioning (`/api/v1`)
- Proper HTTP status codes
- Input validation & error handling

---

## Frontend

A simple frontend built using **HTML, CSS, and Vanilla JavaScript** to interact with the APIs.

Features:
- User Registration & Login
- JWT token storage
- Access protected routes
- Perform CRUD operations on tasks
- Display success/error messages

---

##  Tech Stack

### Backend:
- FastAPI (Python)
- PostgreSQL (or SQLite for development)
- JWT Authentication
- Bcrypt for password hashing

### Frontend:
- HTML
- CSS
- JavaScript (Vanilla JS)

---