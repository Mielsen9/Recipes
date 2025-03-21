import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "@/features/search/model/searchSlice";
import categorySlice from "@/features/categoryFilter/model/categoryFilterSlice";
import paginationSlice from "@/features/pagination/model/paginationSlice";
import selectedSlice from "@/features/toggleFavorite/model/selectedSlice";

export const store = configureStore({
	reducer: {
		selected: selectedSlice,
		search: searchSlice,
		category: categorySlice,
		pagination: paginationSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
