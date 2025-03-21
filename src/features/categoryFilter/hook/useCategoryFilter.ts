import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../model/categoryFilterSlice";
import {useEffect} from "react";

export function useCategoryFilter() {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();

	const getCategoryFilter = searchParams.get("category") || "";

	useEffect(() => {
		dispatch(setCategory(getCategoryFilter));
	}, [getCategoryFilter, dispatch]);

	const setCategoryParam = (value: string) => {
		dispatch(setCategory(value));
		const newParams = new URLSearchParams(searchParams);
		if (value) {
			newParams.set("category", value);
		} else {
			newParams.delete("category");
		}
		setSearchParams(newParams);
	};

	return { setCategory: setCategoryParam };
}
