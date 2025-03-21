type Props = {
	meals: Meal[],
	search: string | null,
	category: string | null,
}
export function useFilteredItems(p: Props) {
	return  p.meals.filter((item) => {
		return (
			(!p.search || item.strMeal.toLowerCase().includes(p.search.toLowerCase())) &&
			(!p.category || item.strCategory === p.category)
		);
	});
}
