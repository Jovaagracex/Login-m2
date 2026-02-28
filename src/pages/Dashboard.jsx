import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [filter, setFilter] = useState("semua");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    
    if (!token) {
      navigate("/");
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  // ========== PRODUK TOKO GERABAH ==========
  const products = [
    // KATEGORI GUCI (1-5)
    {
      id: 1,
      name: "Guci Keramik Motif Mega Mendung",
      description: "Guci keramik tinggi 50cm dengan motif mega mendung khas Cirebon",
      price: 375000,
      stock: 8,
      category: "Guci",
      material: "Keramik",
      rating: 4.8,
      terjual: 45
    },
    {
      id: 2,
      name: "Guci Tanah Liat Polos",
      description: "Guci dari tanah liat bakar, finishing natural, tinggi 40cm",
      price: 185000,
      stock: 15,
      category: "Guci",
      material: "Tanah Liat",
      rating: 4.5,
      terjual: 32
    },
    {
      id: 3,
      name: "Guci Klasik Ukir",
      description: "Guci dengan ukiran tangan motif bunga dan daun",
      price: 450000,
      stock: 5,
      category: "Guci",
      material: "Keramik",
      rating: 5.0,
      terjual: 12
    },
    {
      id: 4,
      name: "Guci Mini Hias",
      description: "Guci mini untuk pajangan meja, set isi 3 warna",
      price: 95000,
      stock: 25,
      category: "Guci",
      material: "Keramik",
      rating: 4.3,
      terjual: 78
    },
    {
      id: 5,
      name: "Guci Dragon Tiongkok",
      description: "Guci motif naga, terinspirasi keramik Tiongkok kuno",
      price: 550000,
      stock: 3,
      category: "Guci",
      material: "Porselen",
      rating: 4.9,
      terjual: 7
    },

    // KATEGORI VAS (6-10)
    {
      id: 6,
      name: "Vas Bunga Tinggi",
      description: "Vas tinggi 30cm untuk bunga panjang, warna coklat tua",
      price: 125000,
      stock: 20,
      category: "Vas",
      material: "Tanah Liat",
      rating: 4.6,
      terjual: 56
    },
    {
      id: 7,
      name: "Vas Gantung Macrame",
      description: "Vas kecil + macrame gantung, cocok untuk dekorasi dinding",
      price: 85000,
      stock: 18,
      category: "Vas",
      material: "Keramik",
      rating: 4.7,
      terjual: 42
    },
    {
      id: 8,
      name: "Vas Bonsai Minimalis",
      description: "Vas ceper untuk bonsai atau sukulen",
      price: 65000,
      stock: 30,
      category: "Vas",
      material: "Tanah Liat",
      rating: 4.4,
      terjual: 63
    },
    {
      id: 9,
      name: "Vas Keramik Putih Eropa",
      description: "Vas keramik putih gaya Eropa klasik",
      price: 210000,
      stock: 7,
      category: "Vas",
      material: "Keramik",
      rating: 4.8,
      terjual: 15
    },
    {
      id: 10,
      name: "Vas Abstract Unik",
      description: "Vas bentuk tidak beraturan, edisi terbatas",
      price: 175000,
      stock: 4,
      category: "Vas",
      material: "Keramik",
      rating: 4.9,
      terjual: 9
    },

    // KATEGORI TEKO & GELAS (11-15)
    {
      id: 11,
      name: "Teko Tanah Liat Tradisional",
      description: "Teko untuk menyeduh teh, dilengkapi saringan bambu",
      price: 145000,
      stock: 12,
      category: "Teko",
      material: "Tanah Liat",
      rating: 4.7,
      terjual: 28
    },
    {
      id: 12,
      name: "Teko Keramik Jepang (Kyusu)",
      description: "Teko gaya Jepang dengan handle samping",
      price: 295000,
      stock: 6,
      category: "Teko",
      material: "Keramik",
      rating: 4.9,
      terjual: 11
    },
    {
      id: 13,
      name: "Gelas Gerabah Set 4",
      description: "Set 4 gelas minuman dari tanah liat",
      price: 120000,
      stock: 15,
      category: "Gelas",
      material: "Tanah Liat",
      rating: 4.5,
      terjual: 34
    },
    {
      id: 14,
      name: "Cangkir Kopi Unik",
      description: "Cangkir kopi dengan bentuk tidak simetris",
      price: 55000,
      stock: 22,
      category: "Gelas",
      material: "Keramik",
      rating: 4.6,
      terjual: 47
    },
    {
      id: 15,
      name: "Teko Set + 4 Cangkir",
      description: "1 teko + 4 cangkir motif batik",
      price: 395000,
      stock: 5,
      category: "Teko",
      material: "Keramik",
      rating: 4.8,
      terjual: 8
    },

    // KATEGORI PIRING & MANGKOK (16-20)
    {
      id: 16,
      name: "Piring Hias Motif Batik",
      description: "Piring hias diameter 25cm, motif batik parang",
      price: 85000,
      stock: 25,
      category: "Piring",
      material: "Keramik",
      rating: 4.5,
      terjual: 52
    },
    {
      id: 17,
      name: "Mangkok Saji Besar",
      description: "Mangkok besar untuk salad atau buah",
      price: 95000,
      stock: 14,
      category: "Mangkok",
      material: "Tanah Liat",
      rating: 4.6,
      terjual: 23
    },
    {
      id: 18,
      name: "Piring Makan Set 6",
      description: "Set 6 piring makan diameter 22cm",
      price: 225000,
      stock: 8,
      category: "Piring",
      material: "Keramik",
      rating: 4.7,
      terjual: 16
    },
    {
      id: 19,
      name: "Mangkok Ramen Jepang",
      description: "Mangkok besar untuk ramen atau mie",
      price: 115000,
      stock: 10,
      category: "Mangkok",
      material: "Keramik",
      rating: 4.8,
      terjual: 19
    },
    {
      id: 20,
      name: "Piring Saji Motif Daun",
      description: "Piring saji panjang motif daun pisang",
      price: 135000,
      stock: 7,
      category: "Piring",
      material: "Keramik",
      rating: 4.7,
      terjual: 13
    },

    // KATEGORI CELENGAN & LAINNYA (21-25)
    {
      id: 21,
      name: "Celengan Babi Lucu",
      description: "Celengan bentuk babi, hadiah favorit anak-anak",
      price: 65000,
      stock: 30,
      category: "Celengan",
      material: "Keramik",
      rating: 4.8,
      terjual: 89
    },
    {
      id: 22,
      name: "Celengan Gajah",
      description: "Celengan bentuk gajah, simbol keberuntungan",
      price: 75000,
      stock: 18,
      category: "Celengan",
      material: "Keramik",
      rating: 4.6,
      terjual: 34
    },
    {
      id: 23,
      name: "Lampion Gerabah",
      description: "Lampion hias untuk taman, bisa diletakkan lilin",
      price: 165000,
      stock: 6,
      category: "Dekorasi",
      material: "Tanah Liat",
      rating: 4.7,
      terjual: 11
    },
    {
      id: 24,
      name: "Pot Bunga Gantung",
      description: "Pot gantung dengan tali rami",
      price: 55000,
      stock: 25,
      category: "Pot",
      material: "Keramik",
      rating: 4.5,
      terjual: 42
    },
    {
      id: 25,
      name: "Hiasan Dinding Gerabah",
      description: "Hiasan dinding bentuk wajah etnik",
      price: 95000,
      stock: 9,
      category: "Dekorasi",
      material: "Tanah Liat",
      rating: 4.8,
      terjual: 17
    }
  ];

  // Filter berdasarkan kategori
  const filteredProducts = products
    .filter(product => filter === "semua" ? true : product.category === filter)
    .filter(product => 
      search === "" ? true : 
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
    );

  // Hitung statistik
  const categories = [...new Set(products.map(p => p.category))];
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalTerjual = products.reduce((sum, p) => sum + p.terjual, 0);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>🏺 Toko Gerabah</h1>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
      
      {user && (
        <div className="welcome-text">
          Selamat datang, <strong>{user.name}</strong> 
          <span className={`role-badge role-${user.role}`}>
            {user.role}
          </span>
        </div>
      )}
      
      {/* Statistik */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Produk</h3>
          <p>{products.length}</p>
        </div>
        <div className="stat-card">
          <h3>Kategori</h3>
          <p>{categories.length}</p>
        </div>
        <div className="stat-card">
          <h3>Total Stok</h3>
          <p>{totalStock}</p>
        </div>
        <div className="stat-card">
          <h3>Terjual</h3>
          <p>{totalTerjual}</p>
        </div>
      </div>
      
      {/* Filter & Search */}
      <div className="filter-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="🔍 Cari produk..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="category-filter">
          <button 
            className={filter === "semua" ? "active" : ""}
            onClick={() => setFilter("semua")}
          >
            Semua
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      {/* Info hasil filter */}
      <p className="result-info">
        Menampilkan {filteredProducts.length} dari {products.length} produk
        {filter !== "semua" && ` (Kategori: ${filter})`}
      </p>
      
      {/* Grid Produk */}
      <div className="card-container">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id}
            title={product.name}
            description={product.description}
            price={product.price.toLocaleString()}
            category={product.category}
            stock={product.stock}
            material={product.material}
            rating={product.rating}
            terjual={product.terjual}
          />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="no-results">
          <p>😢 Produk tidak ditemukan</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;