import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "@/App/state/store";
import { fetchCategories } from "../api/fetchCategory";
import {CategoryState} from "../type"

const initialState: CategoryState = {
	category: "",
	categories: {
		list: [],
		status: "idle",
		error:  null,
	},
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		setCategory(state, action: PayloadAction<string>) {
			state.category = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			// Завантаження категорій
			.addCase(fetchCategories.pending, (state) => {
				state.categories.status = "loading";
			})
			.addCase(fetchCategories.fulfilled, (state, action: PayloadAction<{ strCategory: string }[]>) => {
				state.categories.status = "succeeded";

				// Перевірка, що ми отримали масив з об'єктами, що містять strCategory
				if (Array.isArray(action.payload)) {
					state.categories.list = action.payload.map((cat) => cat.strCategory); // Створюємо масив категорій
				} else {
					console.error("API response is not in expected format:", action.payload);
					state.categories.list = []; // Якщо немає правильних даних
				}
			})
			.addCase(fetchCategories.rejected, (state, action) => {
				state.categories.status = "failed";
				state.categories.error = action.error.message || "Failed to fetch categories";
			});
	},
});

export const { setCategory } = categorySlice.actions;
// selectCategory
export const selectCategory = (state: RootState) => state.category.category;
// selectCategories
export const selectCategories = (state: RootState) => state.category.categories;

export default categorySlice.reducer;
