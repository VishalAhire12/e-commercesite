// src/components/ProductCard.js
import React, { useState } from 'react';
import '../styles/ProductCard.css'; // Ensure CSS is correctly imported

const ProductCard = ({ title, description, price, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleImageClick = () => {
    setShowDetails(!showDetails); // Toggle product details visibility
  };

  const handleBuyNow = () => {
    alert(`Buying ${title} for $${price}`);
    // Implement your buy now functionality here
  };

  return (
    <div className="card">
      <div className="image-container" onClick={handleImageClick}>
        <img src={image} alt={title} className="card-img" />
        {showDetails && (
          <div className="card-details">
            <h4>Product Details</h4>
            <p>{description}</p>
          </div>
        )}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-price">{price}</p>
        <button className="buy-now-btn" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
