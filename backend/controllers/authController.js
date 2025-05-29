// backend/controllers/authController.js
const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../models/userModel');

const login = (req, res) => {
  const { email, password } = req.body;

  findUserByEmail(email, (err, result) => {
    if (err) return res.status(500).send('Server error');
    if (result.length === 0) return res.status(401).send('User not found');

    const user = result[0];

    // Plain text password comparison
    if (password !== user.password) {
      return res.status(401).send('Invalid password');
    }

    const token = jwt.sign({ id: user.id, role: user.role }, 'secretkey');
    res.json({ token, role: user.role });
  });
};

module.exports = { login };
