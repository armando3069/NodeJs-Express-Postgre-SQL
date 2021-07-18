const Pool  = require('pg').Pool;

const pool = new Pool({
  host : "localhost",
  server: "PostgreSQL",
  user:  "postgres",
  port:  5432 ,
  password : "123",
  database: "first"
});

module.exports = pool;