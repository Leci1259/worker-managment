const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: process.env.user,
    // MySQL password
    password: process.env.password,
    database: process.env.name
  });

module.exports = db;
