import React, { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

// import "./Checkout.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>Checkout Page</h1>
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
      </div>
    </div>
  );
};

export default Checkout;
