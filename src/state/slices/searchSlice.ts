import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
	query: string;
	category: string;
	page: number;
}

const initialState: SearchState = {
	query: "",
	category: "",
	page: 1,
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setQuery(state, action: PayloadAction<string>) {
			state.query = action.payload;
			state.page = 1; // Скидаємо сторінку при зміні пошуку
		},
		setCategory(state, action: PayloadAction<string>) {
			state.category = action.payload;
			state.page = 1; // Скидаємо сторінку при зміні категорії
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
	},
});

export const { setQuery, setCategory, setPage } = searchSlice.actions;
export default searchSlice.reducer;
