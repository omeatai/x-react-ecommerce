import React, { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

// as the actual value you want to access
export const CategoriesContext = createContext({
  categoriesMap: null,
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const value = { categoriesMap, setCategoriesMap };

  //Get Categories collection with documents
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

// // as the actual value you want to access
// export const ProductsContext = createContext({
//   products: null,
//   setProducts: () => null,
// });

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);
//   const value = { products, setProducts };

//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };
