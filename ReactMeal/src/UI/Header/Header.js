import { useContext, useState } from "react";
import classes from "../../Css/Header.module.css";

import MealsSummary from "../MealsSummary";
import HeaderCart from "./HeaderCart";
import AddCartModal from "../../Modal/AddCartModal";
import CartContext from "../../store/CartContext";

const Header = (props) => {
  const [modal, setModal] = useState(false);
  const ctx = useContext(CartContext);

  const showModal = () => {
    ctx.cart === undefined ? alert("Add Your Cart!") : setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <AddCartModal onCloseModal={handleCloseModal} />}
      <header className={classes.header}>
        ReactMeals
        <HeaderCart getClick={showModal} />
      </header>
      <div className={classes.mainImage}>
        <img alt="meals" src="img/meals.jpg"></img>
        {/* img를 로컬로 쓰는게 아니라면 단순히 src에 url을 넣으면 됨 ex)src={} */}
      </div>
      <MealsSummary />
    </>
  );
};

export default Header;
