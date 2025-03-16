import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { setQuery } from "@/state/slices/searchSlice";

export function useSearchQuery() {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();
	const query = useSelector((state: RootState) => state.search.query);

	const setQueryParam = (value: string) => {
		dispatch(setQuery(value));
		const newParams = new URLSearchParams(searchParams);
		if (value) {
			newParams.set("search", value);
		} else {
			newParams.delete("search");
		}
		setSearchParams(newParams);
	};

	return { searchQuery: query,  setSearchQuery: setQueryParam };
}
