import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {PaginationState} from "@/features/pagination/type";
import {RootState} from "@/App/state/store";

const initialState: PaginationState = {
	currentPage: 1,
};

const paginationSlice = createSlice({
	name: "pagination",
	initialState,
	reducers: {
		setPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload;
		},
	},
});

export const { setPage } = paginationSlice.actions;

// selectCurrentPage
export const selectCurrentPage = (state: RootState) => state.pagination.currentPage;

export default paginationSlice.reducer;
