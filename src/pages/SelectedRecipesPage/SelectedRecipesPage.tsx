import React from "react";
import * as s from "./SelectedRecipesPage.module.scss";
import {selectSelectedMeals} from '@/features/toggleFavorite/model/selectedSlice';
import {useAppSelector} from "@/App/state/hook";
import {MealInstruction} from "@/entities/MealInstruction";
import {MealsCardsSmall} from "@/widgets/MealsCardsSmall/MealsCardsSmall";
import {TotalIngredients} from "@/widgets/TotalIngredients/TotalIngredients";

const itemsPerPage = 2;

const SelectedRecipesPage = () => {
	const selectedMeals = useAppSelector(selectSelectedMeals);
	// Return
	return (
		<div className={s.container}>
			<div>
				<h1 className={s.title}>Selected Recipes</h1>
			</div>
			<div>
				{selectedMeals.length === 0 ? (
					<p>No recipes selected</p>
				) : (
					<div>
						<MealsCardsSmall filteredItems={selectedMeals} itemsPerPage={itemsPerPage}/>
						<TotalIngredients selectedMeals={selectedMeals}/>
						<MealInstruction selectedMeals={selectedMeals}/>
					</div>
				)}
			</div>

		</div>
	);
};

export default SelectedRecipesPage;
