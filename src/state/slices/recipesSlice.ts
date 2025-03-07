import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchMeals } from "@/services/fetchMeals";
import {RootState} from "@/state/store";
import {fetchMealByIdThunk} from "@/services/fetchMealById";

const initialState: RecipesState = {
	meals: {
		meals: [],
		status: "idle",
		error: null,
	},
	selectedMeals: [],
	mealById: {
		mealById: null,
		status: "idle",
		error: null,
	},

};

const recipesSlice = createSlice({
	name: "recipes",
	initialState,
	reducers: {
		addSelectedMeals: (state, action: PayloadAction<Meal>) => {
			if (!state.selectedMeals.find((recipe) => recipe.idMeal === action.payload.idMeal)) {
				state.selectedMeals.push(action.payload);
			}
		},
		removeSelectedMeals: (state, action: PayloadAction<string>) => {
			state.selectedMeals = state.selectedMeals.filter((recipe) => recipe.idMeal !== action.payload);
		},
	},
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
			.addCase(fetchMealByIdThunk.pending, (state) => {
				state.mealById.status = "loading";
			})
			.addCase(fetchMealByIdThunk.fulfilled, (state, action: PayloadAction<Meal>) => {
				state.mealById.status = "succeeded";
				state.mealById.mealById = action.payload; // Оновлюємо mealById
			})
			.addCase(fetchMealByIdThunk.rejected, (state, action) => {
				state.mealById.status = "failed";
				state.mealById.error = action.error.message || "Failed to fetch meal by id";
			});
	}

});
export const { addSelectedMeals, removeSelectedMeals } = recipesSlice.actions;
// meals
export const selectMeals = (state: RootState) => state.recipes.meals.meals;
export const selectMealsStatus = (state: RootState) => state.recipes.meals.status;
export const selectMealsError = (state: RootState) => state.recipes.meals.error;
// mealById
export const selectMealById = (state: RootState) => state.recipes.mealById.mealById;
export const selectMealByIdStatus = (state: RootState) => state.recipes.mealById.status;
export const selectMealByIdError = (state: RootState) => state.recipes.mealById.error;
// selectedMeals
export const selectSelectedMeals = (state: RootState) => state.recipes.selectedMeals;
export default recipesSlice.reducer;
