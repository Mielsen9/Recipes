import {useAppDispatch, useAppSelector} from "@/App/state/hook";
import {
	addSelectedMeals,
	removeSelectedMeals,
	selectSelectedMeals,
} from "@/features/toggleFavorite/model/selectedSlice";

// Type
type PropsType = {
	meal: Meal
};
//
export const useAddFavorite= (p: PropsType) => {
	const dispatch = useAppDispatch();
	const selectedMeals = useAppSelector(selectSelectedMeals);
	const isSelected = selectedMeals.some((meal: Meal) => meal.idMeal === p.meal.idMeal);

	const toggleFavorite = () => {
		if (isSelected) {
			dispatch(removeSelectedMeals(p.meal.idMeal));
		} else {
			dispatch(addSelectedMeals(p.meal));
		}
	};
	// Return
	return {toggleFavorite, isSelected}
};