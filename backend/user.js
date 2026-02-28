const bcrypt = require('bcrypt');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Toko_gerabah',
  password: 'postgres',  // GANTI DENGAN PASSWORD POSTGRES KAMU
  port: 5432,
});

async function buatUser() {
  const name = 'User Testing';
  const email = 'test@gerabah.com';
  const password = '123';
  const role = 'kasir';
  
  // Hash password dengan bcrypt
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  
  console.log('📧 Email:', email);
  console.log('🔑 Password asli:', password);
  console.log('🔒 Hash yang disimpan:', hashedPassword);
  
  try {
    await pool.query(
      'INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)',
      [name, email, hashedPassword, role]
    );
    
    console.log('✅ USER BERHASIL DIBUAT!');
    console.log('📧 Email:', email);
    console.log('🔑 Password:', password);
    console.log('🔒 Hash di DB:', hashedPassword);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    pool.end();
  }
}

buatUser();