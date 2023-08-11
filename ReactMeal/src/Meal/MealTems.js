import { useEffect, useCallback, useState } from "react";
import Card from "../Cart/Card";
import MealItemUl from "./MealItemUl";

import css from "../Css/AvailMeal.module.css";

const MealTems = () => {
  const [totalMeals, setTotalMeals] = useState();

  const getFetchMeals = useCallback(async () => {
    try {
      const data = await fetch(
        "https://react-http-f3119-default-rtdb.firebaseio.com/tasks.json"
      );
      const mapping = Object.values(await data.json());

      const meals = mapping.map((e) => {
        return { id: `m${mapping.indexOf(e) + 1}`, ...e };
      });
      return meals;
    } catch (error) {
      return (
        <section className={css.MealsErr}>
          <b>Error Occured!</b> Error is caused by {error.message}
        </section>
      );
    }
  }, []);

  useEffect(() => {
    const fetching = async function () {
      setTotalMeals(await getFetchMeals());
    };
    fetching();
  }, [getFetchMeals]);

  const content = () => {
    if (totalMeals === undefined)
      return <p className={css.MealsLoading}>getting</p>;
    else {
      return totalMeals.length
        ? totalMeals.map((e) => <MealItemUl meal={e} key={e.id} />)
        : totalMeals;
    }
  };

  return (
    <div className={css.meals}>
      <Card>
        <ul>{content()}</ul>
      </Card>
    </div>
  );
};

export default MealTems;
