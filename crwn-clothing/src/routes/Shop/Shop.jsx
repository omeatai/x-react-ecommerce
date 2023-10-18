import React from "react";
import SHOP_DATA from "../../data/shop-data.json";

const Shop = () => {
  return (
    <div>
      <h1>This is the Shop Page</h1>
      <div>
        {SHOP_DATA.map(({ id, name, price, imageUrl }) => (
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
