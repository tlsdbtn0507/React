import { useState } from "react";
import classes from "../../Css/Header.module.css";

import MealsSummary from "../MealsSummary";
import HeaderCart from "./HeaderCart";
import AddCartModal from "../../Modal/AddCartModal";

const Header = (props) => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <AddCartModal closeModal={handleCloseModal} />}
      <header className={classes.header}>
        ReactMeals
        <HeaderCart getClick={showModal} />
      </header>
      <div className={classes.mainImage}>
        <img alt="meals" src="img/meals.jpg"></img>
      </div>
      <MealsSummary />
    </>
  );
};

export default Header;
