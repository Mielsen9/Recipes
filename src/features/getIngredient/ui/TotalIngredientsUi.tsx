import React from "react";
import * as s from "./TotalIngredientsUi.module.scss"
// Type
type PropsType = {
	totalIngredients: Ingredient[],
};
// TotalIngredientsUi
export const TotalIngredientsUi: React.FC<PropsType> = React.memo((p) => {
	// Return
	return (
		<div className={s.ingredients}>
			<h3>Total Ingredients: {p.totalIngredients.length}</h3>
			<ul>
				{p.totalIngredients.map((ingredient: Ingredient, index: number) => (
					<li key={index}>
						{ingredient.strMeasure} {ingredient.strIngredient}
					</li>
				))}
			</ul>
		</div>
	)
});