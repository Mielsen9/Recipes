import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { setCategory } from "@/state/slices/searchSlice";

export function useCategoryFilter() {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();
	const category = useSelector((state: RootState) => state.search.category);

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

	return { category, setCategory: setCategoryParam };
}
