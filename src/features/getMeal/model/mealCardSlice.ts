import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "@/App/state/store";
import {fetchMealByIdThunk} from "../index";

const initialState: MealCardState = {
	mealById: {
		mealById: null,
		status: "idle",
		error: null,
	},

};

const mealCardSlice = createSlice({
	name: "mealCard",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
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
// mealById
export const selectMealById = (state: RootState) => state.mealCard.mealById;
export default mealCardSlice.reducer;
