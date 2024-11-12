// config/db.js
const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'sylasya',
  password: 'sylasya',
  database: 'application',
  insecureAuth: true, // Allow legacy authentication

});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected!");
});

module.exports = db;
