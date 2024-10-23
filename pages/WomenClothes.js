// src/pages/Electronics.js
import React from 'react';
import ProductCard from '../components/ProductCard';
import productelec1 from '../assets/women1.jpg';
import productelec2 from '../assets/women2.webp';
import productelec3 from '../assets/women3.jpg';
import productelec4 from '../assets/women4.webp';
import productelec5 from '../assets/women5.jfif';
import productelec6 from '../assets/women6.webp';
import '../styles/ProductCard.css'; 
const Electronics = () => {
  return (<div ><h1 className='head1'>Women Clothes</h1>
    <div className="product-page">
 
      <div className="product-grid">
        <ProductCard
          title="Printed Women's Casual Wear Western Dress"
          description="Latest model with advanced features."
          price={699}
          image={productelec1}
        />
        <ProductCard
          title="Buy Off White Lehenga Set With Banarasi Border Work | Shreeman"
          description="Noise-cancelling, high-quality sound."
          price={199}
          image={productelec2}
        />
        <ProductCard
          title="Latest Women's Formal Wear Trends — G3+ Fashion"
          description="Track your fitness and notifications."
          price={299}
          image={productelec3}
        />
        <ProductCard
          title="Shop Beige Sequins Embroidered Party Wear Saree In Organza"
          description="Track your fitness and notifications."
          price={299}
          image={productelec4}
        />
         <ProductCard
          title="Right Women Devika Silk Festive Wear Saree Online Wholesaler New Catalog"
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
