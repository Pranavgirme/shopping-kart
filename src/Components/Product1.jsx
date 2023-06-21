import React from 'react';
import './Product1.css';
import 'bootstrap/dist/css/bootstrap.css';

const Product1 = ({ product, addToCart }) => {
  if (!product) {
    return null;
  }

  const { id, title, price, image } = product;

  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">${price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product1;
