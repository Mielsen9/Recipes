import {useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipes } from "@/services/api";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import Pagination from "@/components/Pagination/Pagination";
import * as styles from "./RecipesPage.module.scss";
import { useDebounce } from 'use-debounce';

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
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [isSearchFocused, setIsSearchFocused] = useState(false); // Стан фокусу пошуку
	const itemsPerPage = 8; // Скільки рецептів відображати на сторінці

	// Використовуємо debounce для searchTerm з затримкою в 500ms
	const [debouncedSearchTerm] = useDebounce(searchTerm, 1000); // 500ms debounce

	// Використовуємо query з debouncedSearchTerm тільки якщо пошук у фокусі
	const { data, isLoading, error } = useQuery<RecipesData>({
		queryKey: ["recipes", debouncedSearchTerm],
		queryFn: () => fetchRecipes(debouncedSearchTerm),
		  // Запит тільки, коли пошук у фокусі і є текст
	});

	// Перевірка на наявність data та meals
	const meals = data?.meals || [];

	// Фільтрація рецептів за категорією та пошуковим запитом
	const filteredRecipes = useMemo(() => {
		let filtered = meals;

		if (selectedCategory !== "All") {
			filtered = filtered.filter((meal) => meal.strCategory === selectedCategory);
		}

		if (isSearchFocused && debouncedSearchTerm) {
			filtered = filtered.filter((meal) =>
				meal.strMeal.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
			);
		}

		return filtered;
	}, [meals, selectedCategory, debouncedSearchTerm, isSearchFocused]);

	// Обчислюємо кількість сторінок для пагінації
	const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

	// Розраховуємо індекси для поточної сторінки
	const currentRecipes = useMemo(() => {
		const start = (currentPage - 1) * itemsPerPage;
		const end = start + itemsPerPage;
		return filteredRecipes.slice(start, end);
	}, [filteredRecipes, currentPage]);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading recipes</p>;

	return (
		<div className={styles.container}>
			<h1>Recipes</h1>

			{/* Пошуковий інпут */}
			<div className={styles.search}>
				<input
					type="text"
					placeholder="Search for a recipe..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					onFocus={() => setIsSearchFocused(true)}  // При фокусі на полі
					onBlur={() => setIsSearchFocused(false)}  // При втраті фокусу
					className={styles.searchInput}
				/>
			</div>

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
				{currentRecipes?.map((meal) => (
					<RecipeCard key={meal.idMeal} meal={meal} />
				))}
			</div>

			{filteredRecipes.length > 0 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					setCurrentPage={setCurrentPage}
				/>
			)}
		</div>
	);
};

export default RecipesPage;