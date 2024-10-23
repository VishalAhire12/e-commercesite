// src/pages/Electronics.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import productelec1 from '../assets/kid1.jfif';
import productelec2 from '../assets/kid2.jfif';
import productelec3 from '../assets/kid3.jfif';
import productelec4 from '../assets/kid4.jfif';
import productelec5 from '../assets/kid5.jfif';
import productelec6 from '../assets/kid6.jfif';
import '../styles/ProductCard.css'; 

const Electronics = () => { // Removed props destructuring
  return (
    <div><h1 className='head1'>Kids Wears</h1>
    <div className="product-page">
     
      <div className="product-grid">
        <ProductCard
          title="Small wear"
          description="Latest model with advanced features."
          price={699}
          image={productelec1}
        />
        <ProductCard
          title="Samsung TV"
          description="Noise-cancelling, high-quality sound."
          price={1999}
          image={productelec2}
        />
        <ProductCard
          title="Smart Watch"
          description="Track your fitness and notifications."
          price={299}
          image={productelec3}
        />
        <ProductCard
          title="Smart Watch"
          description="Track your fitness and notifications."
          price={299}
          image={productelec4}
        />
        <ProductCard
          title="Blue Wireless Bluetooth On-Ear Headphones"
          description="Noise-cancelling, high-quality sound."
          price={999}
          image={productelec5}
        />
        <ProductCard
          title="Smart Watch"
          description="Track your fitness and notifications."
          price={299}
          image={productelec6}
        />
      </div>
    </div></div>
  );
};

export default Electronics;
