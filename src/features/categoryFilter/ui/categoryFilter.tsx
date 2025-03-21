import React, {useEffect} from "react";
import * as s from "./categoryFilter.module.scss"
import {useCategoryFilter} from "@/features/categoryFilter/hook/useCategoryFilter";
import {useAppDispatch, useAppSelector} from "@/App/state/hook";
import {selectCategory} from "@/features/categoryFilter";
import {selectCategories} from "@/features/categoryFilter/model/categoryFilterSlice";
import {fetchCategories} from "@/features/categoryFilter/api/fetchCategory";
// Type
type PropsType = {

};
// categoryFilter
export const CategoryFilter: React.FC<PropsType> = React.memo((p) => {
	const dispatch = useAppDispatch();
	const { setCategory } = useCategoryFilter();
	const category  = useAppSelector(selectCategory);
	const { list, status, error } = useAppSelector(selectCategories);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);
	// Return
	return (
		<div className={s.categoryFilter}>
			<select className={s.categorySelect} value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value="">All Categories</option>
				{status === "loading" && <option value="">Loading categories...</option>}
				{status === "failed" && <option value="">Error loading categories {error}</option>}
				{list && list.length > 0 ? (
					list.map((categoryName) => (
						<option key={categoryName} value={categoryName}>
							{categoryName}
						</option>
					))
				) : (
					<option value="">No categories available</option>
				)}
			</select>
		</div>
	)
});