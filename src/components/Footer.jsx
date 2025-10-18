import React, { useState } from "react";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("Please enter your email!");
      return;
    }
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Website Info */}
        <div className="footer-about">
          <h2 className="footer-logo">🎁 Gifymo</h2>
          <p>
            Gifymo is your one-stop destination for personalized, thoughtful,
            and beautiful gifts. Find something special for every occasion!
          </p>
        </div>

        {/* Services / Links */}
        <div className="footer-links">
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href="#">Gift Customization</a>
            </li>
            <li>
              <a href="#">Corporate Gifting</a>
            </li>
            <li>
              <a href="#">Bulk Orders</a>
            </li>
            <li>
              <a href="#">Customer Support</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-subscribe">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest collections and exclusive offers.</p>
          <form onSubmit={handleSubscribe} className="subscribe-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gifymmo. All rights reserved.</p>
      </div>
    </footer>
  );
}
