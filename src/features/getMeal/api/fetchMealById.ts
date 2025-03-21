// Створення асинхронної операції для отримання рецепт за ID
import {createAsyncThunk} from "@reduxjs/toolkit";

// services/fetchMealById.ts
export const fetchMealById = async (idMeal: string): Promise<Meal> => {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
	const data = await response.json();
	return data.meals[0]; // Повертаємо першу страву з отриманих результатів
};

export const fetchMealByIdThunk = createAsyncThunk(
	'mealCard/fetchMealById',
	async (idMeal: string): Promise<Meal> => {
		return await fetchMealById(idMeal);
	}
);