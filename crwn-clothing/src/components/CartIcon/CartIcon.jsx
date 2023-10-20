import React, { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIconStyle.js";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => setIsCartOpen(!isCartOpen)}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;

//
