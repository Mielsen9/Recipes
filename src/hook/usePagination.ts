import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { setPage } from "@/state/slices/searchSlice";

export function usePagination(itemsPerPage: number) {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useDispatch();
	const currentPage = useSelector((state: RootState) => state.search.page);

	const setPageParam = (page: number) => {
		dispatch(setPage(page));
		const newParams = new URLSearchParams(searchParams);
		if (page > 1) {
			newParams.set("page", String(page));
		} else {
			newParams.delete("page");
		}
		setSearchParams(newParams);
	};

	return { currentPage, setPage: setPageParam };
}
