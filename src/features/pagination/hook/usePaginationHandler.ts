import { useSearchParams } from "react-router-dom";
import { setPage } from "../model/paginationSlice";
import { useEffect } from "react";
import { useAppDispatch } from "@/App/state/hook";

export function usePaginationHandler() {
	const [searchParams, setSearchParams] = useSearchParams();
	const dispatch = useAppDispatch();

	const getPagination = Number(searchParams.get("page")) || 1;
	const getCategory = searchParams.get("category");
	const getSearch = searchParams.get("search");

	useEffect(() => {
		dispatch(setPage(getPagination));
	}, [getPagination, dispatch]);

	// Скидаємо сторінку до 1 при зміні категорії або пошуку
	useEffect(() => {
		const newParams = new URLSearchParams(searchParams);
		newParams.delete("page"); // Видаляємо параметр сторінки (скидаємо до 1)
		setSearchParams(newParams);
		dispatch(setPage(1));
	}, [getCategory, getSearch, dispatch]);

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


	return { setPage: setPageParam };
}