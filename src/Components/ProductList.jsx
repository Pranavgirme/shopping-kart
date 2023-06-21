import React from 'react';
import Product1 from './Product1';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-lg-3 col-md-6" key={product.id}>
          <Product1 product={product} addToCart={addToCart} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
