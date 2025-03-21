import React from "react";
import * as s from "./TotalIngredients.module.scss"
import {useTotalIngredients} from "@/features/getIngredient";
import {TotalIngredientsUi} from "@/features/getIngredient/ui/TotalIngredientsUi";
// Type
type PropsType = {
	selectedMeals: Meal[],
};
// TotalIngredients
export const TotalIngredients: React.FC<PropsType> = React.memo((selectedMeals) => {
	const totalIngredients = useTotalIngredients(selectedMeals)
	// Return
	return (
		<div>
			<TotalIngredientsUi totalIngredients={totalIngredients}/>
		</div>
	)
});