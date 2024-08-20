import React from 'react';
import ProductCard from './ProductCard';
import kasko from '../assets/images/kasko.png';
// Import other images similarly

const ProductSection = () => {
  return (
    <section className="container">
      <div className="row text-center">
        <ProductCard image={kasko}/>
        {/* Add other ProductCards here */}
      </div>
    </section>
  );
}

export default ProductSection;
