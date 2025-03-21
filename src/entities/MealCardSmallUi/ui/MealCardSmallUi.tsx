import React, {ReactNode} from "react";
import * as s from "./MealCardSmallUi.module.scss"
// Type
type PropsType = {
	meal: Meal,
	actionSlot: ReactNode,
	actionSlot1: ReactNode,
};
// MealCardSmallUi
export const MealCardSmallUi: React.FC<PropsType> = React.memo((p) => {
	const { strMeal, strMealThumb, strArea, strCategory} = p.meal
	// Return
	return (
		<div className={s.card}>
			<img src={strMealThumb} alt={strMeal} className={s.image}/>
			<h3>{strMeal}</h3>
			<p>{strCategory} | {strArea}</p>
			<div className={s.addFavorite}>
				{p.actionSlot}
			</div>
			<div className={s.link}>
				{p.actionSlot1}
			</div>
		</div>
	)
});