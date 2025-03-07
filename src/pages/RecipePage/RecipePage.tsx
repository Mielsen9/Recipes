import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import * as styles from './RecipePage.module.scss';

import {useAppDispatch, useAppSelector} from "@/state/hook";
import {fetchMealByIdThunk} from "@/services/fetchMealById";
import {selectMealById, selectMealByIdError, selectMealByIdStatus} from "@/state/slices/recipesSlice";

const RecipePage: React.FC = () => {
	const { idMeal } = useParams<{ idMeal: string }>();
	const dispatch = useAppDispatch();
	const mealById = useAppSelector(selectMealById);
	const status = useAppSelector(selectMealByIdStatus);
	const error = useAppSelector(selectMealByIdError);

	useEffect(() => {
		if (idMeal) {
			dispatch(fetchMealByIdThunk(idMeal));
		}
	}, [dispatch, idMeal]);

	// Обробка станів
	if (status === "loading") return <div>Loading...</div>;
	if (status === "failed") return <div>Error: {error}</div>;

	// Якщо дані рецепту завантажені, показуємо їх
	if (mealById) {
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
		} = mealById;

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
