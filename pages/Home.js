// src/pages/Home.js

import product5 from '../assets/post2.jpg';
import product6 from '../assets/post3.png';
import ProductCard from '../components/ProductCard';
import product1 from '../assets/img3.webp';
import product2 from '../assets/img4.webp';
import product4 from '../assets/poster.png';
import product3 from '../assets/img5.webp';
import product11 from '../assets/find.png';
import '../styles/home.css'; // Optional: Create a CSS file for styling
import React, { useState, useEffect } from 'react';
const Home = () => {  const images = [product4, product5, product6];
  const [currentImage, setCurrentImage] = useState(product4);
  const [fade, setFade] = useState(false);

  // Preload images
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  const handleImageClick = () => {
    setFade(true);
    setTimeout(() => {
      let newImage = currentImage;
      while (newImage === currentImage) {
        const randomIndex = Math.floor(Math.random() * images.length);
        newImage = images[randomIndex];
      }
      setCurrentImage(newImage);
      setFade(false);
    }, 100);
  };
  return (<div>

       <img className='img4'
        src={currentImage}
        className1={`product4 ${fade ? 'fade-out' : 'fade-in'}`}
        alt="Featured Product"
        onClick={handleImageClick}
        tabIndex="0"
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleImageClick();
          }
        }}
        aria-label="Click to change featured product image"
      />
    <div className="home">
  
      <header className="header">
      <img src={product11} alt="Product 11" style={{ width: '100%', height: '500px' }} />
        <p>Welcome to Our E-Commerce Store! Find the Best Deals on Clothing, Electronics, Toys, and More.</p>
      </header>
      <section className="product-section">
      
        <h2>Featured Products</h2>
        <div className="product-grid">
          <ProductCard image={product1} title="Product 1" price="29.99" />
          <ProductCard image={product2} title="Product 2" price="39.99" />
          <ProductCard image={product3} title="Product 3" price="49.99" />
          <ProductCard image={product1} title="Product 3" price="49.99" />
          <ProductCard image={product3} title="Product 3" price="49.99" />
          <ProductCard image={product3} title="Product 3" price="49.99" />
          <ProductCard image={product3} title="Product 3" price="49.99" />
          <ProductCard image={product1} title="Product 3" price="49.99" />
          <ProductCard image={product3} title="Product 3" price="49.99" />
          <ProductCard image={product3} title="Product 3" price="49.99" />
          <ProductCard image={product3} title="Product 3" price="49.99" />
          <ProductCard image={product3} title="Product 3" price="49.99" />
          <ProductCard image={product1} title="Product 3" price="49.99" />
          <ProductCard image={product3} title="Product 3" price="49.99" />
          <ProductCard image={product3} title="Product 3" price="49.99" />
        </div>
      </section>
    
    </div></div>
  );
};

export default Home;
