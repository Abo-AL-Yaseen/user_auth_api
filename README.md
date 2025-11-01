# User Auth API (Node.js + Express + MongoDB)

Simple authentication API using Node.js, Express, MongoDB, bcrypt and JWT.
Suitable for adding to your GitHub as a strong backend sample for internship applications.

## Features
- Register (hash passwords with bcrypt)
- Login (JWT issuance)
- Protected profile route (requires `Authorization: Bearer <token>`)

## Quick start (local)
1. Copy `.env.example` to `.env` and set values:
   - `MONGODB_URI` (e.g., mongodb://localhost:27017/user_auth_db)
   - `JWT_SECRET` (a long random string)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start server:
   ```bash
   npm run dev    # requires nodemon (dev)
   # or
   npm start
   ```
4. Test with Postman or curl:
   - Register: POST /api/auth/register
   - Login: POST /api/auth/login
   - Profile: GET /api/profile/ (set Authorization header)

## Example requests
Register body (JSON):
```json
{
  "name": "Mahmoud",
  "email": "mahmoud@example.com",
  "password": "StrongPassword123"
}
```

Login body (JSON):
```json
{
  "email": "mahmoud@example.com",
  "password": "StrongPassword123"
}
```

## What to add before pushing to GitHub
- Replace `JWT_SECRET` with a strong secret in `.env` (do NOT commit `.env`).
- Add a short screenshot of Postman responses (optional but recommended).
- Update `README.md` with your GitHub link and short explanation of your role.
