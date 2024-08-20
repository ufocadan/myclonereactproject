import React from 'react';
import ProductCard from './ProductCard';
import kasko from '../assets/images/kasko.png';
import elektrikliArac from '../assets/images/elektrikli-arac.png';
import trafik from '../assets/images/trafik.png';
// Import other images similarly

const ProductSection = () => {
  return (
    <section className="container">
      <div className="row text-center">
        <ProductCard image={kasko} title="Kasko" />
        <ProductCard image={elektrikliArac} title="Elektrikli Araç Kaskosu" />
        <ProductCard image={trafik} title="Trafik Sigortası" />
        {/* Add other ProductCards here */}
      </div>
      <div className="text-center my-4">
        <a href="#" className="btn btn-link">Tüm Ürünleri Gör</a>
      </div>
    </section>
  );
}

export default ProductSection;
