const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Toko_gerabah',  // Nama database kamu
  password: 'postgres',  // GANTI!
  port: 5432,
});

module.exports = pool;