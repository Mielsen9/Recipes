import {ChangeEvent, useEffect, useState} from "react";
import {fetchMeals} from "@/services/fetchMeals";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import * as styles from "./RecipesPage.module.scss";
import { useDebounce } from 'use-debounce';

import {useAppDispatch, useAppSelector} from "@/state/hook";
import {selectMeals, selectMealsError, selectMealsStatus} from "@/state/slices/recipesSlice";

const RecipesPage = () => {
	const dispatch = useAppDispatch();
	const meals = useAppSelector(selectMeals);
	const status = useAppSelector(selectMealsStatus);
	const error = useAppSelector(selectMealsError);

	const [searchTerm, setSearchTerm] = useState<string>("");

	// Затримка пошукового терміну
	const [debouncedSearchTerm] = useDebounce(searchTerm, 1000);

	useEffect(() => {
		if (debouncedSearchTerm) {
			dispatch(fetchMeals(debouncedSearchTerm));
		}
	}, [debouncedSearchTerm, dispatch]);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};


	// const filteredRecipes = useMemo(() => {
	// 	let filtered = meals;
	//
	// 	if (selectedCategory !== 'All') {
	// 		filtered = filtered.filter((meal) => meal.strCategory === selectedCategory);
	// 	}
	//
	// 	if (isSearchFocused && debouncedSearchTerm) {
	// 		filtered = filtered.filter((meal) =>
	// 			meal.strMeal.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
	// 		);
	// 	}
	//
	// 	return filtered;
	// }, [meals, selectedCategory, debouncedSearchTerm, isSearchFocused]);
	//
	// const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);
	//
	// const currentRecipes = useMemo(() => {
	// 	const start = (currentPage - 1) * itemsPerPage;
	// 	const end = start + itemsPerPage;
	// 	return filteredRecipes.slice(start, end);
	// }, [filteredRecipes, currentPage]);
	// Return
	if (status === "loading") {
		return <div>Loading...</div>;
	}

	if (status === "failed") {
		return <div>Error: {error}</div>;
	}

	return (
		<div className={styles.container}>
			<h1>Recipes</h1>

			<div className={styles.search}>
				<input
					type="text"
					value={searchTerm}
					onChange={handleSearchChange}
					placeholder="Search for meals"
					className={styles.searchInput}
				/>
			</div>

			{/*<div className={styles.filter}>*/}
			{/*	<label htmlFor="category">Filter by Category:</label>*/}
			{/*	<select*/}
			{/*		id="category"*/}
			{/*		value={selectedCategory}*/}
			{/*		onChange={(e) => dispatch(setCategory(e.target.value))}*/}
			{/*	>*/}
			{/*		<option value="All">All</option>*/}
			{/*		<option value="Chicken">Chicken</option>*/}
			{/*		<option value="Beef">Beef</option>*/}
			{/*		<option value="Vegetarian">Vegetarian</option>*/}
			{/*	</select>*/}
			{/*</div>*/}

			<div className={styles.grid}>
				{meals && meals.length > 0 ? (
					meals.map((meal) => (
						<RecipeCard key={meal.idMeal} meal={meal} />
					))
				) : (
					<p>No meals found</p>
				)}
			</div>

			{/*{filteredRecipes.length > 0 && (*/}
			{/*	<Pagination*/}
			{/*		currentPage={currentPage}*/}
			{/*		totalPages={totalPages}*/}
			{/*		setCurrentPage={(page) => dispatch(setCurrentPage(page))}*/}
			{/*	/>*/}
			{/*)}*/}
		</div>
	);
};

export default RecipesPage;
