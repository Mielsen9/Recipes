import React, { useState, useEffect } from "react";

interface Recipe {
	idMeal: string;
	strMeal: string;
}

interface AddToFavoritesButtonProps {
	recipe: Recipe;
	onUpdate?: (selectedRecipes: Recipe[]) => void;
}

const AddToFavoritesButton: React.FC<AddToFavoritesButtonProps> = ({ recipe, onUpdate }) => {
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		const storedRecipes = localStorage.getItem("selectedRecipes");
		const selectedRecipes: Recipe[] = storedRecipes ? JSON.parse(storedRecipes) : [];
		setIsSelected(selectedRecipes.some((r) => r.idMeal === recipe.idMeal));
	}, [recipe.idMeal]);

	const toggleFavorite = () => {
		const storedRecipes = localStorage.getItem("selectedRecipes");
		let selectedRecipes: Recipe[] = storedRecipes ? JSON.parse(storedRecipes) : [];

		if (isSelected) {
			selectedRecipes = selectedRecipes.filter((r) => r.idMeal !== recipe.idMeal);
		} else {
			selectedRecipes.push(recipe);
		}

		localStorage.setItem("selectedRecipes", JSON.stringify(selectedRecipes));
		setIsSelected(!isSelected);

		if (onUpdate) {
			onUpdate(selectedRecipes);
		}
	};

	return (
		<button onClick={toggleFavorite} style={{ padding: "10px", cursor: "pointer" }}>
			{isSelected ? "✅ У вибраних" : "➕ Додати у вибрані"}
		</button>
	);
};

export default AddToFavoritesButton;