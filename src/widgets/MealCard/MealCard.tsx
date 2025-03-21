import React, {useEffect} from 'react';
import * as s from "./MealCard.module.scss"
import { useParams } from 'react-router-dom';

import {useAppDispatch, useAppSelector} from "@/App/state/hook";
import {fetchMealByIdThunk} from "@/features/getMeal";
import {selectMealById} from "@/features/getMeal";
import {useFilteredEntries} from  "@/shared/hook/useFilteredEntries"
import {MealCardUi} from "@/entities/MealCardUi";
// Type
type PropsType = {

};
// MealCard
export const MealCard: React.FC<PropsType> = React.memo((p) => {
	const { idMeal } = useParams<{ idMeal: string }>();
	const dispatch = useAppDispatch();
	const { mealById, status, error } = useAppSelector(selectMealById);
	const ingredients = useFilteredEntries(mealById || [], "strIngredient")

	useEffect(() => {
		if (idMeal) {
			dispatch(fetchMealByIdThunk(idMeal));
		}
	}, [dispatch, idMeal]);

	// Обробка станів
	if (status === "loading") return <div>Loading...</div>;
	if (status === "failed") return <div>Error: {error}</div>;
	if (mealById) {
		// Return
		return (
			<div>
				<MealCardUi mealById={mealById} ingredients={ingredients}/>
			</div>
		)
	}
});