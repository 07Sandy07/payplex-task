// backend/models/pageModel.js
const db = require('../config/db');

// Create a new page
const createPage = (data, callback) => {
  const sql = `INSERT INTO pages (logo, mail, contact, banner, header, text, address, status)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    data.logo,
    data.mail,
    data.contact,
    data.banner,
    data.header,
    data.text,
    data.address,
    data.status || 'inactive'
  ];
  db.query(sql, values, callback);
};

// Get all pages
const getAllPages = (callback) => {
  const sql = 'SELECT * FROM pages';
  db.query(sql, callback);
};

// Update a page
const updatePage = (id, data, callback) => {
  const sql = `UPDATE pages SET logo=?, mail=?, contact=?, banner=?, header=?, text=?, address=? WHERE id=?`;
  const values = [
    data.logo,
    data.mail,
    data.contact,
    data.banner,
    data.header,
    data.text,
    data.address,
    id
  ];
  db.query(sql, values, callback);
};

// Delete a page
const deletePage = (id, callback) => {
  const sql = 'DELETE FROM pages WHERE id=?';
  db.query(sql, [id], callback);
};

// Toggle page status
const togglePageStatus = (id, status, callback) => {
  const sql = 'UPDATE pages SET status=? WHERE id=?';
  db.query(sql, [status, id], callback);
};

// Get only active pages
const getActivePages = (callback) => {
  const sql = `SELECT * FROM pages WHERE status='active'`;
  db.query(sql, callback);
};

module.exports = {
  createPage,
  getAllPages,
  updatePage,
  deletePage,
  togglePageStatus,
  getActivePages,
};
