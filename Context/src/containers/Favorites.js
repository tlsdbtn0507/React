import React from "react";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "../css/Products.css";
import { useContext } from "react";
import { ProductCtx } from "../context/productCtx";

const Favorites = (props) => {
  const favoriteProducts = useContext(ProductCtx).products.filter(
    (e) => e.isFavorite === true
  );
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favoriteProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
