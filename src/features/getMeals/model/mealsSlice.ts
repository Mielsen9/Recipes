import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMeals } from "../api/fetchMeals";
import {RootState} from "@/App/state/store";

const initialState: MealsState = {
	meals: {
		meals: [],
		status: "idle",
		error: null,
	},
};

const mealsSlice = createSlice({
	name: "meals",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMeals.pending, (state) => {
				state.meals.status = "loading";
			})
			.addCase(fetchMeals.fulfilled, (state, action: PayloadAction<Meal[]>) => {
				state.meals.status = "succeeded";
				state.meals.meals = action.payload; // Оновлюємо страви
			})
			.addCase(fetchMeals.rejected, (state, action) => {
				state.meals.status = "failed";
				state.meals.error = action.error.message || "Failed to fetch meals";
			})
	}

});
// meals
export const selectMeals = (state: RootState) => state.meals.meals;
export default mealsSlice.reducer;
