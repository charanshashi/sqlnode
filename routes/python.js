// routes/python.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/process-data', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.PYTHON_SERVER_URL}/process`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Python service error" });
  }
});

module.exports = router;
