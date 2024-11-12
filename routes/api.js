// routes/api.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to insert data
router.post('/insert', (req, res) => {
  console.log('Received POST request to /insert');  // Add this line for debugging
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
  db.query(query, [name, email], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ success: true, message: 'User added successfully' });
    }
  });
});

// Route to display all rows
router.get('/display', (req, res) => {
  const query = 'SELECT * FROM users';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results); // Send JSON response
    }
  });
});


module.exports = router;
