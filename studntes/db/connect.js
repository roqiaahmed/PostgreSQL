const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'roqia',
  host: 'localhost',
  database: 'students',
  password: process.env.PG_PASS,
  port: 5432,
});

module.exports = pool;
