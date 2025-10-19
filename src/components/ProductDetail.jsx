import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div className="product-detail">
        <p>Product not found.</p>
        <Link to="/shop" className="back-link">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-detail-card">
        <img
          src={product.image || product.img}
          alt={product.title || product.name}
          className="detail-img"
        />
        <div className="detail-info">
          <h2>{product.title || product.name}</h2>
          <p className="detail-category">{product.category}</p>
          <p className="detail-description">
            {product.description ||
              "A beautifully crafted product, perfect for any occasion."}
          </p>
          <h3 className="detail-price">Price: ₹{product.price}</h3>
          <button className="add-to-cart">Add to Cart</button>
          <Link to="/shop" className="back-link">
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
