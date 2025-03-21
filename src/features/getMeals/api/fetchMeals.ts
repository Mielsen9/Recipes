import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchMeals = createAsyncThunk(
	'meals/fetchMeals',
	async (searchTerm: string ): Promise<Meal[]> => {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
		);
		const data = await response.json();
		return data.meals; // Повертаємо масив страв
	}
);