# ContactApp - Full Stack Application

### Overview

##### ContactApp is a full-stack web application built to showcase my skills in Spring Boot, PostgreSQL, and TypeScript. This application allows users to manage their contacts through a user-friendly interface.

### Live Demo

##### Frontend: https://contactapp-springboot-frontend.onrender.com/

##### Backend: https://contactapp-springboot.onrender.com

### Features

✅ Full CRUD operations (Create, Read, Update, Delete) for managing contacts✅ RESTful API with Spring Boot backend✅ PostgreSQL database integration✅ Secure API handling with CORS setup✅ TypeScript frontend with React✅ Deployed using Render

### Tech Stack

##### Backend:

Spring Boot (Java)

PostgreSQL (Database)

Spring Data JPA

Spring Web

Docker (for deployment)

##### Frontend:

React (with TypeScript)

Vite (for fast builds)

Axios (for API calls)

Tailwind CSS (for styling)

### Setup Instructions

##### Backend (Spring Boot)

Clone the repository:

git clone https://github.com/YOUR_GITHUB/contactapp-backend.git
cd contactapp-backend

Create a .env file and configure database credentials:

DB_URL=jdbc:postgresql://your-database-url
DB_USERNAME=your-db-username
DB_PASSWORD=your-db-password

Build and run the backend:

./mvnw spring-boot:run

##### Frontend (React + TypeScript)

Clone the frontend repository:

git clone https://github.com/YOUR_GITHUB/contactapp-frontend.git
cd contactapp-frontend

Install dependencies:

npm install

Update API URL in src/api.ts:

export const API_URL = "https://contactapp-springboot.onrender.com";

Start the frontend:

npm run dev

##### API Endpoints

Base URL: https://contactapp-springboot.onrender.com

Method

Endpoint

Description

GET

/contacts

Get all contacts

GET

/contacts/{id}

Get a specific contact

POST

/contacts

Create a new contact

PUT

/contacts/{id}

Update a contact

DELETE

/contacts/{id}

Delete a contact

### Future Improvements

✅ Authentication & Authorization (JWT-based login system)

✅ Improve UI/UX with more features

✅ Deploy with a CI/CD pipeline

💡 Developed by Topias Laatu – A demonstration of Spring Boot, PostgreSQL, and TypeScript skills. 🚀
