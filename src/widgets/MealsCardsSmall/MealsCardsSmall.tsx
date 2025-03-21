import React from "react";
import * as s from "./MealsCardsSmall.module.scss";
import { ToggleFavorite } from "@/features/toggleFavorite";
import {Button} from "@/shared/components/Button/Button";
import {MealCardSmallUi} from "@/entities/MealCardSmallUi";
import {selectCurrentPage, usePaginationData} from "@/features/pagination";
import {useAppSelector} from "@/App/state/hook";
import Pagination from "@/features/pagination/ui/Pagination";
// Type
type PropsType = {
	status?:  boolean | undefined,
	error?:  Error | null,
	filteredItems: Meal[],
	itemsPerPage: number
};
// MealCardSmall
export const MealsCardsSmall: React.FC<PropsType> = React.memo((p) => {
	const { filteredItems, itemsPerPage } = p
	const currentPage = useAppSelector(selectCurrentPage);
	const paginatedItems = usePaginationData({currentPage, itemsPerPage, filteredItems});
	// Return
	if (p.status) return <div>Loading...</div>;
	if (p.error) return <div>Error: {p.error.message}</div>;
	if (paginatedItems) {
		return (
			<div>
				<ul className={s.grid}>
					{paginatedItems.length > 0 ? (
						paginatedItems.map((meal) =>
							<li key={meal.idMeal}>
								<MealCardSmallUi meal={meal}
							                     actionSlot={
								                     <ToggleFavorite meal={meal}/>
							                     }
							                     actionSlot1={
								                     <Button linkTo={`/recipe/${meal.idMeal}`}
								                             buttonText="View Recipe"/>
							                     }/>
							</li>)
					) : (
						<p>No results found</p>
					)}
				</ul>
				<div className={s.pagination}>
					<Pagination totalCount={filteredItems.length} itemsPerPage={itemsPerPage}/>
				</div>
			</div>
		);
	}
});

