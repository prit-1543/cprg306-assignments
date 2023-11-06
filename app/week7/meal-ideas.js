"use client";
import React, { useState, useEffect } from 'react';


function fetchMealIdeas(ingredient) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch meal ideas');
            }
            return response.json();
        })
        .then(data => {
            if (!data.meals) {
                throw new Error('No meals found for the given ingredient');
            }
            const mealPromises = data.meals.map(meal => {
                return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Failed to fetch meal details');
                        }
                        return response.json();
                    })
                    .then(mealData => mealData.meals[0]);
            });
            return Promise.all(mealPromises);
        })
        .catch(error => {
            console.error("Error fetching meals:", error);
            return [];
        });
}


function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    function loadMealIdeas() {
        fetchMealIdeas(ingredient).then(data => setMeals(data));
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    
return (
    <div>
        <h2>Meal Ideas for {ingredient}</h2>
        <ul>
            {meals.map(meal => (
                <li key={meal.idMeal}>
                    {meal.strMeal}
                    <ul>
                        {Array.from({ length: 20 }).map((_, index) => {
                            const ingredient = meal[`strIngredient${index + 1}`];
                            const measure = meal[`strMeasure${index + 1}`];
                            if (ingredient && measure) {
                                return <li key={index}>{ingredient}: {measure}</li>;
                            }
                            return null;
                        })}
                    </ul>
                </li>
            ))}
        </ul>
    </div>
);

}

export default MealIdeas;
