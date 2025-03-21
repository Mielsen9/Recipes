import React from "react";
import * as s from "./RecipesPage.module.scss";
import {selectQuery} from "@/features/search";
import {MealsCardsSmall} from "@/widgets/MealsCardsSmall/MealsCardsSmall";
import {useAppSelector} from "@/App/state/hook";
import {selectCategory} from "@/features/categoryFilter";
import {useFilteredItems} from "@/shared/hook/useFilteredItems";
import {SearchAndFilter} from "@/widgets/SerchAndFilter/SearchAndFilter";
import {useGetMeals} from "@/features/getMeals"

const itemsPerPage = 4;

const RecipesPage = () => {
	const search  = useAppSelector(selectQuery);
	const category  = useAppSelector(selectCategory);
	const { data: meals, isLoading, error } = useGetMeals(search || "");
	const filteredItems = useFilteredItems({ meals, search, category });

	// Return
	return (
		<div className={s.container}>
			<SearchAndFilter/>
			<MealsCardsSmall status={isLoading}
			                 error={error}
			                 filteredItems={filteredItems}
			                 itemsPerPage={itemsPerPage}/>
		</div>
	);
}

export default RecipesPage;
