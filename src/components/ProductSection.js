import React from 'react';
import ProductCard from './ProductCard';
import kasko from '../assets/images/kasko.png';
import dask from '../assets/images/dask.png';
import elektrikliarac from '../assets/images/elektrikli-arac.png';
import imm from '../assets/images/imm.png';
import ozelsaglik from '../assets/images/ozel-saglik.png';
import saglik from '../assets/images/saglik.png';
import seyahat from '../assets/images/seyahat.png';
import trafik from '../assets/images/trafik.png';

// Import other images similarly

const ProductSection = () => {
  return (
    <section className="container">
      <div className="row text-center">
        <ProductCard image={kasko}/>
        <ProductCard image={dask}/>
        <ProductCard image={elektrikliarac}/>
        <ProductCard image={imm}/>
        <ProductCard image={ozelsaglik}/>
        <ProductCard image={saglik}/>
        <ProductCard image={seyahat}/>
        <ProductCard image={trafik}/>
        {/* Add other ProductCards here */}
      </div>
    </section>
  );
}

export default ProductSection;
