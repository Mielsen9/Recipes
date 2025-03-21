import React from "react";
import * as s from "./SearchInput.module.scss"
import {useSearchQuery} from "../hook/useSearchQuery";
import {useAppSelector} from "@/App/state/hook";
import {selectQuery} from "@/features/search";
// Type
type PropsType = {
	
};
// SearchInput
export const SearchInput: React.FC<PropsType> = React.memo((p) => {
	const { setSearchQuery } = useSearchQuery();
	const searchQuery = useAppSelector(selectQuery)

	// Return
	return (
		<input className={s.input}
			type="text"
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			placeholder="Search..."
		/>
	)
});