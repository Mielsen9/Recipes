import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "@/App/state/store";
import {SearchState} from "../type";

const initialState: SearchState = {
	query: "",
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setQuery(state, action: PayloadAction<string>) {
			state.query = action.payload;
		},
	}
});

export const {setQuery} = searchSlice.actions;
// selectQuery
export const selectQuery = (state: RootState) => state.search.query;

export default searchSlice.reducer;
