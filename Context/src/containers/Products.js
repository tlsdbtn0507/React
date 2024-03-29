import React from "react";

import { useContext } from "react";
import { ProductCtx } from "../context/productCtx";

import ProductItem from "../components/Products/ProductItem";
import "../css/Products.css";

const Products = (props) => {
  const productList = useContext(ProductCtx).products;

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
