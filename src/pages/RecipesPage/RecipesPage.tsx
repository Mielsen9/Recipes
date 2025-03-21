import React, {useEffect} from "react";
import * as s from "./RecipesPage.module.scss";
import {selectQuery} from "@/features/search";
import {MealsCardsSmall} from "@/widgets/MealsCardsSmall/MealsCardsSmall";
import {useAppDispatch, useAppSelector} from "@/App/state/hook";
import {fetchMeals, selectMeals} from "@/features/getMeals";
import {selectCategory} from "@/features/categoryFilter";
import {useFilteredItems} from "@/shared/hook/useFilteredItems";
import {SearchAndFilter} from "@/widgets/SerchAndFilter/SearchAndFilter";

const itemsPerPage = 4;

const RecipesPage = () => {
	const dispatch = useAppDispatch();
	const { meals, status, error } = useAppSelector(selectMeals);
	const search  = useAppSelector(selectQuery);
	const category  = useAppSelector(selectCategory);
	const filteredItems = useFilteredItems({ meals, search, category });

	useEffect(() => {
		dispatch(fetchMeals(search));
	}, []);
	// Return
	return (
		<div className={s.container}>
			<SearchAndFilter/>
			<MealsCardsSmall status={status}
			                 error={error}
			                 filteredItems={filteredItems}
			                 itemsPerPage={itemsPerPage}/>
		</div>
	);
}

export default RecipesPage;
