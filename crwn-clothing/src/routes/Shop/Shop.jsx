import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <h1>This is the Shop Page</h1>
      <div>
        {products.map(({ id, name, price, imageUrl }) => (
          <div key={id}>
            <h2>
              {id}. {name}
            </h2>
            <h3>Price: {price} </h3>
            <img src={imageUrl} alt="product" width={"200px"}></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
