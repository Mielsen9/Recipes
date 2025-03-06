import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as styles from "./SelectedRecipesPage.module.scss";

interface Ingredient {
	strIngredient: string;
	strMeasure: string;
}

interface Recipe {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	strInstructions: string;
	ingredients?: Ingredient[]; // Додаємо `?` для запобігання помилкам
}

const SelectedRecipesPage = () => {
	const [selectedRecipes, setSelectedRecipes] = useState<Recipe[]>(() => {
		const savedRecipes = localStorage.getItem("selectedRecipes");
		try {
			return savedRecipes ? JSON.parse(savedRecipes) : [];
		} catch (error) {
			console.error("Помилка при парсингу JSON:", error);
			return [];
		}
	});

	// Функція для оновлення списку вибраних рецептів
	const updateSelectedRecipes = (recipes: Recipe[]) => {
		setSelectedRecipes(recipes);
	};

	const getTotalIngredients = () => {
		return selectedRecipes.reduce((total, recipe) => {
			return total + (recipe.ingredients ? recipe.ingredients.length : 0);
		}, 0);
	};

	useEffect(() => {
		localStorage.setItem("selectedRecipes", JSON.stringify(selectedRecipes));
	}, [selectedRecipes]);

	return (
		<div className={styles.container}>
			<h1>Selected Recipes</h1>
			{selectedRecipes.length === 0 ? (
				<p>No recipes selected</p>
			) : (
				<>
					<div className={styles.recipesList}>
						{selectedRecipes.map((recipe) => (
							<div key={recipe.idMeal} className={styles.recipeCard}>
								<img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImage} />
								<h3>{recipe.strMeal}</h3>
								<button
									className={styles.removeButton}
									onClick={() =>
										setSelectedRecipes(selectedRecipes.filter((item) => item.idMeal !== recipe.idMeal))
									}
								>
									Remove
								</button>
								<Link to={`/recipe/${recipe.idMeal}`} className={styles.viewLink}>
									View Recipe
								</Link>
							</div>
						))}
					</div>

					<div className={styles.ingredients}>
						<h3>Total Ingredients: {getTotalIngredients()}</h3>
						<ul>
							{selectedRecipes
								.flatMap((recipe) => recipe.ingredients || []) // Додаємо `|| []`, щоб уникнути `undefined`
								.map((ingredient, index) => (
									<li key={index}>
										{ingredient.strMeasure} {ingredient.strIngredient}
									</li>
								))}
						</ul>
					</div>

					<div className={styles.instructions}>
						<h3>Instructions:</h3>
						{selectedRecipes.map((recipe) => (
							<div key={recipe.idMeal}>
								<h4>{recipe.strMeal}</h4>
								<p>{recipe.strInstructions}</p>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default SelectedRecipesPage;