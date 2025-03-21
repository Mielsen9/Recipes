import React from 'react';
import * as s from "./MealCard.module.scss"
import { useParams } from 'react-router-dom';
import {useGetMeal} from "@/features/getMeal";
import {useFilteredEntries} from  "@/shared/hook/useFilteredEntries"
import {MealCardUi} from "@/entities/MealCardUi";
// Type
type PropsType = {

};
// MealCard
export const MealCard: React.FC<PropsType> = React.memo((p) => {
	const { idMeal } = useParams<{ idMeal: string }>();
	if (!idMeal) {
		return <div>Invalid meal ID</div>;
	}
	const { data: mealById, isLoading, error } = useGetMeal(idMeal);
	const ingredients = useFilteredEntries(mealById || [], "strIngredient")

	// Обробка станів
	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	if (mealById) {
		// Return
		return (
			<div>
				<MealCardUi mealById={mealById} ingredients={ingredients}/>
			</div>
		)
	}
});