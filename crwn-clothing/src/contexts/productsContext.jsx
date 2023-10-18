import React, { createContext, useState } from "react";
import PRODUCTS from "../data/shop-data.json";

// as the actual value you want to access
export const ProductsContext = createContext({
  products: null,
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
