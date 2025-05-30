# 🧑‍💼 Payplex Assignment test- Pages Management System

A **full-stack web application** that enables an **Admin** to create and manage dynamic website pages, and allows **Users** to view those pages based on routing and page status.

---

## 🎯 Project Objectives

### 👨‍💼 Admin Role

- Create pages using a form with:
  - **Logo** (image URL)
  - **Mail ID**
  - **Contact**
  - **Banner Image** (image URL)
  - **Header**
  - **Text**
  - **Address**
- View all pages in a **data table**
- Perform **Insert, Update, Delete**
- Toggle **Active/Inactive** status
- Control which pages are visible to users

### 👨‍💻 User Role

- View only pages with `status = Active`
- Pages are accessed via routes like `/home1`, `/home2`, `/home3`

---

## 🏗️ Tech Stack

| Layer     | Technology                |
|-----------|---------------------------|
| Frontend  | React.js, Axios, CSS Modules |
| Backend   | Node.js, Express.js       |
| Database  | MySQL                     |
| API Style | RESTful APIs              |

---

### Create the database "page_manger_db" in MySQL:## 🗄️ Database Setup

### Create the `user` table in MySQL:

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'user') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO users (email, password, role)
VALUES 
  ('admin@gmail.com', 'admin123', 'admin'),
  ('user@gmail.com', 'user123', 'user');


### Create the `pages` table in MySQL:
```sql
CREATE TABLE pages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  logo VARCHAR(255),
  mail_id VARCHAR(255),
  contact VARCHAR(50),
  banner_image VARCHAR(255),
  header VARCHAR(255),
  text TEXT,
  address TEXT,
  status ENUM('Active', 'Inactive') DEFAULT 'Inactive',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
==========================================================








⚙️ How to Run the Project
1. Clone the Repository

git clone https://github.com/yourusername/pages-management-system.git
cd pages-management-system



2. Start the Backend Server

cd backend
npm install
node server.js
Runs on: http://localhost:5000

⚠️ Configure MySQL credentials in backend/config/db.js

3. Start the Frontend App

cd ../frontend
npm install
npm start
Runs on: http://localhost:3000

🔌 API Endpoints
Method	Endpoint	Description
GET	/api/pages/all	Fetch all pages
POST	/api/pages/create	Create a new page
PUT	/api/pages/update/:id	Update a page
DELETE	/api/pages/delete/:id	Delete a page
PATCH	/api/pages/status/:id	Toggle Active/Inactive



👤 Developer
Sandip Pande

