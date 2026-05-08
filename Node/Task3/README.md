# Smart User Management System

A RESTful API built with Node.js, Express, MongoDB, JWT, and Multer.

---

## Project Structure

```
project/
├── app.js
├── .env
├── package.json
├── uploads/              ← profile pictures saved here
├── controllers/
│   ├── authController.js
│   └── userController.js
├── models/
│   └── userModel.js
├── routes/
│   ├── authRoutes.js
│   └── userRoutes.js
├── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── uploadMiddleware.js
└── utils/
    └── appError.js
```

---

## Setup Instructions

### 1. Install Node.js
Download and install from https://nodejs.org (LTS version recommended)

### 2. Install MongoDB
Download from https://www.mongodb.com/try/download/community
Start the MongoDB service after installation.

### 3. Install dependencies
```bash
cd project
npm install
```

### 4. Configure environment variables
Edit the `.env` file:
```
PORT=3000
MONGO_URI=mongodb://localhost:27017/smart-user-management
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRES_IN=7d
```

### 5. Run the server
```bash
# Development (auto-restart on changes)
npm run dev

# Production
npm start
```

Server runs at: http://localhost:3000

---

## API Endpoints

### Auth Routes (no token required)

| Method | Endpoint             | Description       |
|--------|----------------------|-------------------|
| POST   | /api/auth/register   | Register new user |
| POST   | /api/auth/login      | Login and get JWT |

### User Routes (token required in Authorization header)

| Method | Endpoint                    | Role    | Description              |
|--------|-----------------------------|---------|--------------------------|
| GET    | /api/users/me               | Any     | Get own profile          |
| POST   | /api/users/me/upload-pic    | Any     | Upload profile picture   |
| GET    | /api/users?page=1&limit=10  | Admin   | Get all users (paginated)|
| GET    | /api/users/:id              | Any     | Get user by ID           |
| PUT    | /api/users/:id              | Any/Admin | Update user            |
| DELETE | /api/users/:id              | Admin   | Delete user              |

---

## How to Use

### Register
```
POST /api/auth/register
Body (JSON):
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```
POST /api/auth/login
Body (JSON):
{
  "email": "john@example.com",
  "password": "password123"
}
Response includes a JWT token — save it!
```

### Use protected routes
Add this header to every protected request:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

### Upload profile picture
```
POST /api/users/me/upload-pic
Headers: Authorization: Bearer TOKEN
Body: form-data → key: profilePic, value: (select image file)
```

### Get all users (admin only)
```
GET /api/users?page=1&limit=10
Headers: Authorization: Bearer ADMIN_TOKEN
```

---

## Make yourself an admin

After registering, open MongoDB Compass or the Mongo shell and run:
```js
db.users.updateOne({ email: "your@email.com" }, { $set: { role: "admin" } })
```

---

## jSend Response Format

Success:
```json
{ "status": "success", "data": {} }
```

Fail:
```json
{ "status": "fail", "message": "Error message" }
```
