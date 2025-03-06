import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchRecipeById } from '@/services/recipeService';
import * as styles from './RecipePage.module.scss';

interface Recipe {
	idMeal: string;
	strMeal: string;
	strCategory: string;
	strArea: string;
	strInstructions: string;
	strMealThumb: string;
	strIngredient1: string;
	strIngredient2: string;
	strIngredient3: string;
	strIngredient4?: string;
	strIngredient5?: string;
	strIngredient6?: string;
	strIngredient7?: string;
	strIngredient8?: string;
	strIngredient9?: string;
	strIngredient10?: string;
	// Можна додавати й інші інгредієнти, якщо потрібно
}

const RecipePage: React.FC = () => {
	const { idMeal } = useParams<{ idMeal: string }>(); // Типізація параметрів URL
	// Використовуємо useQuery для отримання рецепт
	const { data, error, isLoading }: UseQueryResult<Recipe, Error> = useQuery(
		{
			queryKey: ['recipe', idMeal], // Правильний формат для queryKey
			queryFn: () => fetchRecipeById(idMeal!), // Функція для отримання даних
		}
	);

	// Обробка станів
	if (isLoading) return <div>Loading...</div>;
	if (error instanceof Error) return <div>Error: {error.message}</div>;

	// Якщо дані рецепту завантажені, показуємо їх
	if (data) {
		const {
			strMeal,
			strCategory,
			strArea,
			strInstructions,
			strMealThumb,
			strIngredient1,
			strIngredient2,
			strIngredient3,
			strIngredient4,
			strIngredient5,
		} = data;

		return (
			<div className={styles['recipe-page']}>
				<h1>{strMeal}</h1>
				<img src={strMealThumb} alt={strMeal} />
				<p><strong>Category:</strong> {strCategory}</p>
				<p><strong>Area:</strong> {strArea}</p>

				<h3>Ingredients</h3>
				<ul>
					<li>{strIngredient1}</li>
					<li>{strIngredient2}</li>
					<li>{strIngredient3}</li>
					{strIngredient4 && <li>{strIngredient4}</li>}
					{strIngredient5 && <li>{strIngredient5}</li>}
				</ul>

				<h3>Instructions</h3>
				<p>{strInstructions}</p>
			</div>
		);
	}

	return null;
};

export default RecipePage;