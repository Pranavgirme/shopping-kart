import React from 'react';
import './Cart1.css';

const Cart1 = ({ cartItems, clearCart, increaseQuantity, decreaseQuantity }) => {
  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="item-info">
                      <img src={item.image} alt={item.title} className="item-image" />
                      <div className="item-details">
                        <p>{item.title}</p>
                        <p className="item-category">{item.category}</p>
                      </div>
                    </div>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="quantity-btn"
                      onClick={() => decreaseQuantity(item)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button className="quantity-btn" onClick={() => increaseQuantity(item)}>
                      +
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Total: ${calculateTotal(cartItems)}</p>
          <button className="btn btn-danger mt-3" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

const calculateTotal = (cartItems) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return totalPrice.toFixed(2);
};

export default Cart1;
