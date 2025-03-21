import { useSearchParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import {setQuery} from "@/features/search/model/searchSlice";
import {useEffect} from "react";

export function useSearchQuery() {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();

	const getSearchQuery = searchParams.get("search") || "";

	useEffect(() => {
		dispatch(setQuery(getSearchQuery));
	}, [getSearchQuery, dispatch]);

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

	return {setSearchQuery: setQueryParam};
}
