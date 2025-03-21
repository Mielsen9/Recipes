// Асинхронний запит для отримання категорій
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCategories = createAsyncThunk(
	"category/fetchCategories",
	async (): Promise<{ strCategory: string }[]> => {
		const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
		const data = await response.json();
		return data.meals;
	}
);