import React from "react";

import Card from "../UI/Card";
import "../../css/ProductItem.css";
import { useContext } from "react";
import { ProductCtx } from "../../context/productCtx";

const ProductItem = (props) => {
  const toggleFav = useContext(ProductCtx).favoredFunc;

  const toggleFavHandler = () => {
    toggleFav(props.id);
  };

  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
