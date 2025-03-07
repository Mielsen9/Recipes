import {FC} from "react";
import {useAppDispatch, useAppSelector} from "@/state/hook";
import {addSelectedMeals, removeSelectedMeals, selectSelectedMeals} from "@/state/slices/recipesSlice";

interface AddToFavoritesButtonProps {
	meal: Meal;
}

const AddToFavoritesButton: FC<AddToFavoritesButtonProps> = ({ meal}) => {
	const dispatch = useAppDispatch();
	const selectedMeals = useAppSelector(selectSelectedMeals);
	const isSelected = selectedMeals.some((r) => r.idMeal === meal.idMeal);

	const toggleFavorite = () => {
		if (isSelected) {
			dispatch(removeSelectedMeals(meal.idMeal));
		} else {
			dispatch(addSelectedMeals(meal));
		}
	};

	return (
		<button onClick={toggleFavorite} style={{ padding: "10px", cursor: "pointer" }}>
			{isSelected ? "✅ У вибраних" : "➕ Додати у вибрані"}
		</button>
	);
};

export default AddToFavoritesButton;
