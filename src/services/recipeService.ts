export interface RecipeData {
	meals: Recipe[];
}

export interface Recipe {
	idMeal: string;
	strMeal: string;
	strCategory: string;
	strArea: string;
	strInstructions: string;
	strMealThumb: string;
	strIngredient1: string;
	strIngredient2: string;
	strIngredient3: string;
	strIngredient4?: string;
	strIngredient5?: string;
	strIngredient6?: string;
	strIngredient7?: string;
	strIngredient8?: string;
	strIngredient9?: string;
	strIngredient10?: string;
	// Можна додавати й інші інгредієнти, якщо потрібно
}

// Функція для отримання рецепту
export const fetchRecipeById = async (idMeal: string): Promise<Recipe> => {
	try {
		const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);

		// Перевірка на успішність відповіді
		if (!response.ok) {
			throw new Error('Failed to fetch recipe');
		}

		const data: RecipeData = await response.json();

		// Перевірка на наявність рецептів у відповіді
		if (!data.meals || data.meals.length === 0) {
			throw new Error('Recipe not found');
		}

		return data.meals[0]; // Повертаємо перший рецепт
	} catch (error) {
		console.error(error);
		throw error; // Перекидаємо помилку далі для обробки у компоненті
	}
};
