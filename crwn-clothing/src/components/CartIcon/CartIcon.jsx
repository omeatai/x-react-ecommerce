import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cartContext";

import "./CartIcon.scss";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen((prev) => !prev)}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;