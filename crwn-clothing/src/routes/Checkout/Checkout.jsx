import React, { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import "./Checkout.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <span>
                <button onClick={() => removeItemFromCart(cartItem)}>
                  decrement
                </button>
              </span>
              <span>
                <button onClick={() => addItemToCart(cartItem)}>
                  increment
                </button>
              </span>
            </div>
          );
        })}
        <span className="total">Total: 0</span>
      </div>
    </div>
  );
};

export default Checkout;
