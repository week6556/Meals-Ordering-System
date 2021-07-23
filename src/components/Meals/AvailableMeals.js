import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealIteam/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Salmon Sushi",
    description: "6 pieces, our salmon is from Tasmania",
    price: 15.99,
  },
  {
    id: "m2",
    name: "Tuna Sushi",
    description: "6 pieces, fresh tuna slice on the top of the sushi rice",
    price: 19.99,
  },
  {
    id: "m3",
    name: "Avocado Sushi",
    description: "Healthy avocado sushi for vegetarians",
    price: 12.99,
  },
  {
    id: "m4",
    name: "King Fish Sashimi",
    description: "Healthy, fresh and affordable",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const meals = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{meals}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
