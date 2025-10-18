import React, { useState } from "react";
import "./MainProducts.css";
import cake from "../assets/cake.jpg";
import candle from "../assets/candle.webp";
import roseCombo from "../assets/roseCombo.jpg";
import nameMug from "../assets/mug.jpg";
import Hamperbasket from "../assets/Hamper.webp";
import Necklace from "../assets/necklace.webp";
import PhotoFrame from "../assets/PhotoFrame.jpg";
import TeedyCombo from "../assets/teddyCombo.jpg";

// Dummy product data
const products = [
  {
    id: 1,
    name: "Birthday Cake",
    price: "₹1000",
    category: "Birthday Gifts",
    img: cake,
  },
  {
    id: 2,
    name: "Holiday Candle Set",
    price: "₹1200",
    category: "Holiday Gifts",
    img: candle,
  },
  {
    id: 3,
    name: "Anniversary Rose Combo",
    price: "₹1500",
    category: "Anniversary Gifts",
    img: roseCombo,
  },
  {
    id: 4,
    name: "Custom Name Mug",
    price: "₹700",
    category: "Personalized Gifts",
    img: nameMug,
  },
  {
    id: 5,
    name: "Holiday Hamper Basket",
    price: "₹2000",
    category: "Holiday Gifts",
    img: Hamperbasket,
  },
  {
    id: 6,
    name: "Personalized Necklace",
    price: "₹1800",
    category: "Personalized Gifts",
    img: Necklace,
  },
  {
    id: 7,
    name: "Romantic Photo Frame",
    price: "₹1300",
    category: "Anniversary Gifts",
    img: PhotoFrame,
  },
  {
    id: 8,
    name: "Birthday Teddy Combo",
    price: "₹1100",
    category: "Birthday Gifts",
    img: TeedyCombo,
  },
];

const MainProducts = ({ initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    initialCategory || "All"
  );

  const categories = [
    "All",
    "Birthday Gifts",
    "Holiday Gifts",
    "Anniversary Gifts",
    "Personalized Gifts",
  ];

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="main-products-container">
      <h2 className="main-products-title">Our Main Products</h2>

      {/* Filter Buttons */}
      <div className="filter-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.img} alt={item.name} className="product-img" />
            <div className="product-info">
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainProducts;
