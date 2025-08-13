"use client";

import { useState, useEffect } from "react";

const MealPage = () => {
  const [mealData, setMealData] = useState([]);
  const [search, setSearch] = useState("");
  

  const fetchMeals = (query) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setMealData(data.meals || []); // 
        console.log("Fetched data:", data.meals);
      });
  };

  useEffect(() => {
    fetchMeals(""); 
  }, []);

  const handleSearchClick = () => {
    fetchMeals(search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchMeals(search);
    }
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
          type="text"
          className="border-2 border-cyan-400"
          value={search}
        />
        <button
          onClick={handleSearchClick}
          className="ml-2 px-4 py-1 bg-cyan-400 text-white"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {mealData.length > 0 ? (
          mealData.map((meal) => (
            <div key={meal.idMeal} className="border-2 shadow-lg rounded-lg shadow-cyan-400 border-cyan-400 p-8 my-2">
                <div>
                    <img src={meal.strMealThumb} alt="" />
                </div>
              <h2 className="font-bold">{meal.strMeal}</h2>
              <p>{meal.strInstructions}</p>
            </div>
          ))
        ) : (
          <p className="mt-4 text-red-500">No meals found</p>
        )}
      </div>
    </div>
  );
};

export default MealPage;
