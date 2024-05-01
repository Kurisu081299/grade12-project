"use strict";
const mysql = require("mysql2");
const dotenv = require("dotenv").config();
//local mysql db connection
const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'personalinfo',
  connectTimeout: 8000 // Timeout in milliseconds
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;