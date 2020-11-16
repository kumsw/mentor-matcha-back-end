const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,git 
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (sql, value, cb) => {
    return pool.query(sql, value, cb);
  },
};
