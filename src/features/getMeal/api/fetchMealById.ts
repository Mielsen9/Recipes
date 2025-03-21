// Створення асинхронної операції для отримання рецепт за ID

export const fetchMealById = async (idMeal: string): Promise<Meal> => {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
	if (!response.ok) {
		throw new Error("Failed to fetch recipe");
	}
	const data = await response.json();
	return data.meals[0]; // Повертаємо першу страву з отриманих результатів
};