import React, { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import { ShoppingIcon, CartIconContainer, ItemCount } from "./CartIconStyle.js";

const CartIcon = () => {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  return (
    <CartIconContainer onClick={() => setIsCartOpen((prev) => !prev)}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
