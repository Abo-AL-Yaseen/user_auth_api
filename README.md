# User Authentication API  
A simple and secure RESTful API for user registration, login, and profile management.  
Built with **Node.js**, **Express**, **MongoDB Atlas**, and **JWT**.

## 🚀 Overview  
This project implements a clean and scalable back-end authentication system.  
It includes essential features found in real-world applications, such as:

- ✅ User Registration  
- ✅ Secure Password Hashing (bcryptjs)  
- ✅ User Login  
- ✅ JWT Authentication  
- ✅ Protected Profile Route  
- ✅ MongoDB Atlas Cloud Integration  
- ✅ Modular MVC Folder Structure  

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- dotenv

## 📁 Project Structure
/models  
&nbsp;&nbsp;&nbsp;&nbsp;user.js  
/routes  
&nbsp;&nbsp;&nbsp;&nbsp;auth.js  
&nbsp;&nbsp;&nbsp;&nbsp;profile.js  
server.js  
.env.example  
package.json  
README.md  

## ⚙️ Installation & Setup

### 1. Clone the repository
git clone https://github.com/YourUsername/user_auth_api.git
cd user_auth_api

shell
نسخ الكود

### 2. Install dependencies
npm install

shell
نسخ الكود

### 3. Create a `.env` file
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=5000

shell
نسخ الكود

### 4. Run the server
npm start

yaml
نسخ الكود

You should see:
Server running on port 5000
Connected to MongoDB

shell
نسخ الكود

## 🔐 API Endpoints

### POST /api/auth/register  
Create a new user.

### POST /api/auth/login  
Authenticate user and return JWT.

### GET /api/profile  
Get user profile (requires Bearer Token).

## 🧑‍💻 Author  
**Mahmoud Yaseen**  
Back-End Developer  
GitHub: https://github.com/Abo-AL-Yaseen
