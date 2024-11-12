// app.js
const express = require('express');
const cors = require('cors'); // Import cors
const app = express();

app.use(cors()); // Enable CORS for all routes

// Other middleware and routes

const apiRoutes = require('./routes/api');
const path = require('path');

// Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);

// Serve React frontend
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
