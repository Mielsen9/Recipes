import {useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "@/services/api";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import Pagination from "@/components/Pagination/Pagination";
import * as styles from "./RecipesPage.module.scss";
interface RecipesData {
	meals: Meal[];
}
export interface Meal {
	idMeal: string;
	strMeal: string;
	strMealThumb: string;
	strCategory: string;
	strArea: string;
}
const RecipesPage = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedCategory, setSelectedCategory] = useState<string>("All");
	const { data, isLoading, error } = useQuery<RecipesData>({
		queryKey: ["recipes"],
		queryFn: fetchRecipes,
	});

	// Фільтрація рецептів за категорією
	const filteredRecipes = useMemo(() => {
		if (!data) return [];

		if (selectedCategory === "All") {
			return data.meals;
		}

		return data.meals.filter((meal) => meal.strCategory === selectedCategory);
	}, [data, selectedCategory]);


	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading recipes</p>;

	// Фільтрація, пагінація та інші функції тут...
	return (
		<div className={styles.container}>
			<h1>Recipes</h1>

			{/* Форма для фільтрації за категорією */}
			<div className={styles.filter}>
				<label htmlFor="category">Filter by Category:</label>
				<select
					id="category"
					value={selectedCategory}
					onChange={(e) => setSelectedCategory(e.target.value)}
				>
					<option value="All">All</option>
					<option value="Chicken">Chicken</option>
					<option value="Beef">Beef</option>
					<option value="Vegetarian">Vegetarian</option>
					{/* Можна додавати більше категорій за потребою */}
				</select>
			</div>

			{/* Відображення рецептів */}
			<div className={styles.grid}>
				{filteredRecipes.map((meal) => (
					<RecipeCard key={meal.idMeal} meal={meal} />
				))}
			</div>

			<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={60}/>
		</div>
	);
};

export default RecipesPage;