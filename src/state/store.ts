import { configureStore } from "@reduxjs/toolkit";
import earchReducer from './slices/earchSlice';
import recipeSlice from "./slices/recipesSlice";
import searchSlice from "@/features/search/model/searchSlice";

export const store = configureStore({
	reducer: {
		earch: earchReducer,
		recipes: recipeSlice,
		search: searchSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
