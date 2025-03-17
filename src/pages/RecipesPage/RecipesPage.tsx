import {useCategoryFilter} from "@/features/categoryFilter/hook/useCategoryFilter";
import {usePagination} from "@/hook/usePagination";
import {useFilteredItems} from "@/hook/useFilteredItems";
import {useAppDispatch, useAppSelector} from "@/state/hook";
import {selectMeals} from "@/state/slices/recipesSlice";
import { useEffect } from "react";
import {fetchMeals} from "@/services/fetchMeals";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import {SearchInput, selectQuery} from "@/features/search";
import * as s from "./RecipesPage.module.scss";

const itemsPerPage = 4;

const RecipesPage = () => {
	const meal = useAppSelector(selectMeals);
	const searchQuery  = useAppSelector(selectQuery);
	const dispatch = useAppDispatch();
	const { category, setCategory } = useCategoryFilter();
	const { currentPage, setPage } = usePagination(itemsPerPage);
	useEffect(() => {
			dispatch(fetchMeals(searchQuery));
	}, []);
	const { filteredItems, paginatedItems } = useFilteredItems(meal, searchQuery, category, currentPage, itemsPerPage);

	return (
		<div className={s.container}>
			<SearchInput/>

			<select value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value="">All Categories</option>
				<option value="fruit">Fruits</option>
				<option value="vegetable">Vegetables</option>
			</select>

			<ul className={s.grid}>
				{paginatedItems.length > 0 ? (
					paginatedItems.map((meal) => <li><RecipeCard key={meal.idMeal} meal={meal} /></li>)
				) : (
					<p>No results found</p>
				)}
			</ul>

			<div>
				<button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
					Previous
				</button>
				<span>
          Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}
        </span>
				<button
					onClick={() => setPage(currentPage + 1)}
					disabled={currentPage >= Math.ceil(filteredItems.length / itemsPerPage)}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default RecipesPage;
