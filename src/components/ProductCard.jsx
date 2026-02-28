function ProductCard({ title, description, price, category, stock, material, rating, terjual }) {
  return (
    <div className="product-card">
      <div className="product-header" />
      
      <h3>🏺 {title}</h3>
      
      <div className="product-badges">
        {category && (
          <span className="category-badge">{category}</span>
        )}
        {material && (
          <span className="material-badge">{material}</span>
        )}
      </div>
      
      <p className="product-description">{description}</p>
      
      <div className="product-stats">
        {rating && (
          <span className="rating">⭐ {rating}</span>
        )}
        {terjual && (
          <span className="sold">Terjual {terjual}</span>
        )}
      </div>
      
      <div className="product-footer">
        <span className="price">Rp {price}</span>
        
        {stock !== undefined && (
          <span className={`stock stock-${stock > 10 ? 'high' : stock > 0 ? 'medium' : 'low'}`}>
            Stok: {stock}
          </span>
        )}
      </div>
      
      <div className="product-actions">
        <button className="buy-btn">🛒 Beli</button>
        <button className="detail-btn">🔍 Detail</button>
      </div>
    </div>
  );
}

export default ProductCard;