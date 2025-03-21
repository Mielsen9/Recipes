import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "@/App/state/store";

const initialState: SelectedState = {
	selectedMeals: [],
};

const selectedSlice = createSlice({
	name: "selected",
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
});
export const { addSelectedMeals, removeSelectedMeals } = selectedSlice.actions;
// selectedMeals
export const selectSelectedMeals = (state: RootState) => state.selected.selectedMeals;
export default selectedSlice.reducer;
