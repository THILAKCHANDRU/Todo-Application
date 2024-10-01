const db = require("mysql2");
require("dotenv").config();

const pool = db.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  database: "task_manager",
  password: process.env.DBS_PASS,
});

module.exports = pool.promise();
