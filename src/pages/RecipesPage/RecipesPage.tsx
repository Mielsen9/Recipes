import { useState } from "react";
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
	const { data, isLoading, error } = useQuery<RecipesData>({
		queryKey: ["recipes"],
		queryFn: fetchRecipes,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading recipes</p>;

	// Фільтрація, пагінація та інші функції тут...
	return (
		<div className={styles.container}>
			<h1>Recipes</h1>
			<div className={styles.grid}>
				{data?.meals.map((meal: Meal) => (
					<RecipeCard key={meal.idMeal} meal={meal} />
				))}
			</div>
			<Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={60}/>
		</div>
	);
};

export default RecipesPage;