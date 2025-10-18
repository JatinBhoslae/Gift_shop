import React, { useState, useEffect } from "react";
import "./Shop.css";
import MainProducts from "../components/MainProducts";

export default function Shop() {
  // Local product data
  const productData = [
    {
      id: 1,
      title: "Luxury Shirt",
      category: "Garment Care",
      price: 1200,
      image: "/images/shirt.jpg",
    },
    {
      id: 2,
      title: "Designer Vase",
      category: "Home & Living",
      price: 800,
      image: "/images/vase.jpg",
    },
    {
      id: 3,
      title: "Gold Necklace",
      category: "Jewelry & Accessories",
      price: 5000,
      image: "/images/necklace.jpg",
    },
    {
      id: 4,
      title: "Birthday Gift Box",
      category: "Occasion Gifts",
      price: 1500,
      image: "/images/birthday.jpg",
    },
    {
      id: 5,
      title: "Office Notebook",
      category: "Office & Stationery",
      price: 300,
      image: "/images/notebook.jpg",
    },
    {
      id: 6,
      title: "Personalized Mug",
      category: "Personalised Gifts",
      price: 400,
      image: "/images/mug.jpg",
    },
    {
      id: 7,
      title: "Rectangular tray",
      category: "Uncategorized",
      price: 250,
      image: "/images/tray.jpg",
    },
  ];

  const [products] = useState(productData);
  const [filtered, setFiltered] = useState(productData);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(6000);

  // Filter products based on category and price
  useEffect(() => {
    let temp = [...products];
    if (category) temp = temp.filter((p) => p.category === category);
    temp = temp.filter((p) => p.price <= price);
    setFiltered(temp);
  }, [category, price, products]);

  const categories = [
    "Garment Care",
    "Home & Living",
    "Jewelry & Accessories",
    "Occasion Gifts",
    "Office & Stationery",
    "Personalised Gifts",
    "Uncategorized",
  ];

  return (
    <div className="shop-container">
      <div className="shop-page">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <h3 className="sidebar-title">Product Categories</h3>
          <ul className="category-list">
            <li>
              <label>
                <input
                  type="radio"
                  name="category"
                  value=""
                  checked={category === ""}
                  onChange={() => setCategory("")}
                />
                All
              </label>
            </li>
            {categories.map((cat) => (
              <li key={cat}>
                <label>
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={category === cat}
                    onChange={() => setCategory(cat)}
                  />
                  {cat}
                </label>
              </li>
            ))}
          </ul>

          <div className="price-filter">
            <h4>Filter by Price</h4>
            <input
              type="range"
              min="200"
              max="6000"
              step="100"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
            <p>Price: Up to ₹{price}</p>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="shop-products">
          {filtered.length > 0 ? (
            <div className="product-grid">
              {filtered.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-img-wrapper">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-img"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/200x200?text=No+Image";
                      }}
                    />
                  </div>
                  <div className="product-info">
                    <h5 className="product-name">{product.title}</h5>
                    <p className="product-price">₹{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-products">
              No products match the selected filters.
            </p>
          )}
        </main>
      </div>

      <section className="main-products-section">
        <MainProducts />
      </section>
    </div>
  );
}
