# payplex-task

🧑‍💼 Pages Management System
A full-stack web application that enables an Admin to create and manage dynamic website pages, and allows Users to view those pages based on routing and page status.

🎯 Project Objectives
👨‍💼 Admin Role
Admin can create pages using a form with:

Logo (image URL)

Mail ID

Contact

Banner Image (image URL)

Header

Text

Address

Admin can view all pages in a table.

Admin can Insert, Update, Delete, and toggle Active/Inactive status.

Admin controls which pages are visible to users by managing their status.
==============================================================
👨‍💻 User Role
Users can access only active pages.

=============================================================

🏗️ Tech Stack
Layer	Technology
Frontend	React.js, Axios, CSS Modules
Backend	Node.js, Express.js
Database	MySQL
API Style	RESTful APIs
===================================================================
Create the pages table:

sql

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


==================================
⚙️ How to Run the Project
1. Clone the Repo
   
git clone https://github.com/yourusername/pages-management-system.git
cd pages-management-system
3. Start the Backend Server

===============================================================================
cd backend
npm install
npm start
Runs at: http://localhost:5000
======================================================================================
⚠️ Configure your MySQL credentials in backend/config/db.js.
===================================================================================
3. Start the Frontend App

cd ../frontend
npm install
npm start
Runs at: http://localhost:3000
=================================================================
🔌 API Endpoints
Method	Endpoint	Description
GET	/api/pages/all	Fetch all pages
POST	/api/pages/create	Create a new page
PUT	/api/pages/update/:id	Update a page
DELETE	/api/pages/delete/:id	Delete a page
PATCH	/api/pages/status/:id	Toggle Active/Inactive

=============================================
🎨 UI Features
Admin Dashboard:

Add new page

Edit/Update in-line

Delete page

Toggle Active/Inactive status

User View:

Displays active content on route-based pages



👤 Developer
Sandip Pande
