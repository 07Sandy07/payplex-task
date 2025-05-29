// backend/controllers/pageController.js
const {
  createPage,
  getAllPages,
  updatePage,
  deletePage,
  togglePageStatus,
  getActivePages,
} = require('../models/pageModel');

// Create a new page
const create = (req, res) => {
  const data = req.body;
  createPage(data, (err, result) => {
    if (err) return res.status(500).send('Server error');
    res.status(201).send('Page created successfully');
  });
};

// Get all pages (Admin)
const getAll = (req, res) => {
  getAllPages((err, result) => {
    if (err) return res.status(500).send('Server error');
    res.json(result);
  });
};

// Update page
const update = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  updatePage(id, data, (err, result) => {
    if (err) return res.status(500).send('Update failed');
    res.send('Page updated successfully');
  });
};

// Delete page
const remove = (req, res) => {
  const id = req.params.id;
  deletePage(id, (err, result) => {
    if (err) return res.status(500).send('Delete failed');
    res.send('Page deleted successfully');
  });
};

// Toggle status (Active/Inactive)
const toggleStatus = (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  togglePageStatus(id, status, (err, result) => {
    if (err) return res.status(500).send('Status update failed');
    res.send(`Page marked as ${status}`);
  });
};

// Get only active pages (User)
const getActive = (req, res) => {
  getActivePages((err, result) => {
    if (err) return res.status(500).send('Error fetching active pages');
    res.json(result);
  });
};

module.exports = {
  create,
  getAll,
  update,
  remove,
  toggleStatus,
  getActive,
};
