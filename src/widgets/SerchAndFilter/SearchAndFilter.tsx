import React from "react";
import * as s from "./SearchAndFilter.module.scss"
import {SearchInput} from "@/features/search";
import {CategoryFilter} from "@/features/categoryFilter";
// Type
type PropsType = {

};
// SearchAndFilter
export const SearchAndFilter: React.FC<PropsType> = React.memo((p) => {

	// Return
	return (
		<div className={s.conteiner}>
			<SearchInput/>
			<CategoryFilter/>
		</div>
	)
});