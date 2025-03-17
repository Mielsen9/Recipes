import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './slices/searchSlice';
import recipeSlice from "./slices/recipesSlice";

export const store = configureStore({
	reducer: {
		search: searchReducer,
		recipes: recipeSlice
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
