Auth Flow (React + Node + MongoDB)

This project implements a basic Authentication Flow using a React frontend and a Node.js + Express backend with MongoDB.
It supports user registration, login, JWT authentication, and email functionality using Nodemailer.

📦 Project Setup

Clone the repository:

git clone https://github.com/sourabh-Kalvium/auth_flow.git
cd auth_flow
Backend Setup
1. Create a .env file

Inside the server folder, create a .env file and add the following variables:

PORT=<port>
MONGODB=<mongodb-url>
SECRET=<secret-key>

ADMIN_NAME=<email-id-for-nodemailer>
ADMIN_PASSWORD=<email-password>

Example:

PORT=8080
MONGODB=mongodb://localhost:27017/authflow
SECRET=mySuperSecretKey

ADMIN_NAME=example@gmail.com
ADMIN_PASSWORD=app-password
2. Install dependencies

Navigate to the server folder and install packages:

npm install
3. Start the backend server
npm start

The server will start on the port specified in the .env file.

Frontend Setup

Navigate to the client folder:

cd client
Install dependencies
npm install
Run the development server
npm run dev

The React app will start on:

http://localhost:5173# Docker-authflow
