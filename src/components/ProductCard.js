import React from 'react';

const ProductCard = ({ image, title }) => {
  return (
    <div className="col-6 col-md-3">
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default ProductCard;
