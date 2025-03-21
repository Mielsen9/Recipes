import React from "react";
import * as s from "./MealInstruction.module.scss"
// Type
type PropsType = {
	selectedMeals: Meal[],
};
// MealInstruction
export const MealInstruction: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div className={s.instructions}>
			<h3>Instructions:</h3>
			{p.selectedMeals.map((recipe) => (
				<div key={recipe.idMeal}>
					<h4>{recipe.strMeal}</h4>
					<p>{recipe.strInstructions}</p>
				</div>
			))}
		</div>
	)
});