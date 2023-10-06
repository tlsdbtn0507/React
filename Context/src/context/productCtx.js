import React, { useState } from "react";

export const ProductCtx = React.createContext({
  products: [],
  favoredFunc: (id) => {},
});

const ProductsProvider = (props) => {
  const [productList, setProductList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const producFav = (id) => {
    setProductList((prevProdut) => {
      const changeIndex = prevProdut.findIndex((e) => e.id === id);

      const toggle = !prevProdut[changeIndex].isFavorite;

      const toReturn = [...prevProdut];

      toReturn[changeIndex].isFavorite = toggle;

      return toReturn;
    });
  };

  return (
    <ProductCtx.Provider
      value={{
        products: productList,
        favoredFunc: producFav,
      }}
    >
      {props.children}
    </ProductCtx.Provider>
  );
};

export default ProductsProvider;
