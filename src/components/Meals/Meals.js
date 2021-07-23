import { Fragment } from "react";
import MealsList from "./MealsList";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsList />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
