import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './Components/ProductList';
import Cart1 from './Components/Cart1';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (item) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
      removeItem(item);
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
      );
    }
  };

  const removeItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Link to="/cart" className="btn btn-primary ml-auto">
            Cart ({cartItems.length})
          </Link>
        </nav>
        <div className="container mt-4">
          <Routes>
            <Route
              path="/"
              element={<ProductList products={products} addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <Cart1
                  cartItems={cartItems}
                  clearCart={clearCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
