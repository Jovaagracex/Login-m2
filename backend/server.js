const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");  // Tambahkan bcrypt
const pool = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// API LOGIN (pakai bcrypt.compare)
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Cari user berdasarkan email
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Email tidak ditemukan" });
    }

    const user = result.rows[0];
    
    // Bandingkan password dengan hash di database
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return res.status(401).json({ message: "Password salah" });
    }

    // Buat token JWT
    const token = jwt.sign(
      { 
        id: user.id, 
        email: user.email,
        name: user.name,
        role: user.role 
      },
      "RAHASIA_BANGET",
      { expiresIn: "8h" }
    );

    res.json({
      message: "Login berhasil",
      token: token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(5000, () => {
  console.log("✅ Server Toko Gerabah jalan di http://localhost:5000");
});