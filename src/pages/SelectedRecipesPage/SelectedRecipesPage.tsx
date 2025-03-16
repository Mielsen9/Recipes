// import { Link } from "react-router-dom";
// import * as styles from "./SelectedRecipesPage.module.scss";
//
// import {removeSelectedMeals, selectSelectedMeals} from '@/state/slices/recipesSlice';
// import {useAppDispatch, useAppSelector} from "@/state/hook";
//
// interface Ingredient {
// 	strIngredient: string;
// 	strMeasure: string;
// }
//
// interface Recipe {
// 	idMeal: string;
// 	strMeal: string;
// 	strMealThumb: string;
// 	strInstructions: string;
// 	[key: `strIngredient${number}`]: string | null;
// 	[key: `strMeasure${number}`]: string | null;
// }
//
// const SelectedRecipesPage = () => {
// 	const dispatch = useAppDispatch();
// 	const selectedMeals = useAppSelector(selectSelectedMeals);
//
// 	const getTotalIngredients = () => {
// 		return selectedMeals.reduce((total: any, recipe: any) => {
// 			const ingredients = [];
// 			for (let i = 1; i <= 20; i++) {
// 				const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
// 				const measure = recipe[`strMeasure${i}` as keyof Recipe];
// 				if (ingredient && ingredient !== "") {
// 					ingredients.push({
// 						strIngredient: ingredient,
// 						strMeasure: measure || "",
// 					});
// 				}
// 			}
// 			return total + ingredients.length;
// 		}, 0);
// 	};
//
// 	return (
// 		<div className={styles.container}>
// 			<h1>Selected Recipes</h1>
// 			{selectedMeals.length === 0 ? (
// 				<p>No recipes selected</p>
// 			) : (
// 				<>
// 					<div className={styles.recipesList}>
// 						{selectedMeals.map((recipe: any) => (
// 							<div key={recipe.idMeal} className={styles.recipeCard}>
// 								<img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImage} />
// 								<h3>{recipe.strMeal}</h3>
// 								<button
// 									className={styles.removeButton}
// 									onClick={() => dispatch(removeSelectedMeals(recipe.idMeal))}
// 								>
// 									Remove
// 								</button>
// 								<Link to={`/recipe/${recipe.idMeal}`} className={styles.viewLink}>
// 									View Recipe
// 								</Link>
// 							</div>
// 						))}
// 					</div>
//
// 					<div className={styles.ingredients}>
// 						<h3>Total Ingredients: {getTotalIngredients()}</h3>
// 						<ul>
// 							{selectedMeals.flatMap((recipe: any) => {
// 								const ingredients: Ingredient[] = [];
// 								for (let i = 1; i <= 20; i++) {
// 									const ingredient = recipe[`strIngredient${i}` as keyof Recipe];
// 									const measure = recipe[`strMeasure${i}` as keyof Recipe];
// 									if (ingredient && ingredient !== "") {
// 										ingredients.push({
// 											strIngredient: ingredient,
// 											strMeasure: measure || "",
// 										});
// 									}
// 								}
// 								return ingredients;
// 							}).map((ingredient: Ingredient, index: any) => (
// 								<li key={index}>
// 									{ingredient.strMeasure} {ingredient.strIngredient}
// 								</li>
// 							))}
// 						</ul>
// 					</div>
//
// 					<div className={styles.instructions}>
// 						<h3>Instructions:</h3>
// 						{selectedMeals.map((recipe: any) => (
// 							<div key={recipe.idMeal}>
// 								<h4>{recipe.strMeal}</h4>
// 								<p>{recipe.strInstructions}</p>
// 							</div>
// 						))}
// 					</div>
// 				</>
// 			)}
// 		</div>
// 	);
// };
//
// export default SelectedRecipesPage;
