require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');

const pool = new Pool({
      port: process.env.PGPORT,
      user: process.env.PGUSER,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST,
    });

const initSql = () => {
  const sql = fs.readFileSync('server/productOverview.sql').toString();
  pool.query(sql);
}

const connectDB = async () => {
  try {
    await pool.connect();
    await initSql(pool);
  } catch (err) {
    console.log(err);
  }
}

connectDB();

module.exports = pool;
