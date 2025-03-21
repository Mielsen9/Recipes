import React from 'react';
import * as s from './MealCardUi.module.scss';
// Type
type PropsType = {
	mealById: Meal,
	ingredients: string[],
};
// MealCardUi
export const MealCardUi: React.FC<PropsType> = React.memo((p) => {
	const {strMeal, strCategory, strArea, strInstructions, strMealThumb} = p.mealById
	// Return
	return (
		<div className={s.recipePage}>
			<h1>{strMeal}</h1>
			<img src={strMealThumb} alt={strMeal}/>
			<p><strong>Category:</strong> {strCategory}</p>
			<p><strong>Area:</strong> {strArea}</p>

			<h3>Ingredients</h3>
			<ul>
				{p.ingredients.map((ingredient, index) => (
					<li key={index}>{ingredient}</li>
				))}
			</ul>

			<h3>Instructions</h3>
			<p>{strInstructions}</p>
		</div>
	);
});

