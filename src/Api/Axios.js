import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        setMeals(res.data.meals);
        console.log(res.data.meals);
      });
  }, []);
  return (
    <div>
      {meals.map((meal) => (
        <>
          <h3>{meal.strMeal}</h3>
          <h3>{meal.strArea}</h3>
          <h3>{meal.strCategory}</h3>
          <img src={meal.strMealThumb} alt={meal.strMeal} width={400} />
          {/* <iframe width="420" height="315" src={meal.strYoutube}></iframe> */}
          <p>{meal.strInstructions}</p>
          <span>{meal.strYoutube}</span>
        </>
      ))}
    </div>
  );
};

export default Axios;

