export function useFilteredItems(
	items: Meal[], // Додано `id`
	searchQuery: string,
	category: string,
	currentPage: number,
	itemsPerPage: number
) {
	const filteredItems = items.filter(
		(item) =>
			item.strMeal.toLowerCase().includes(searchQuery.toLowerCase()) &&
			(category ? item.strCategory === category : true)
	);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

	return { filteredItems, paginatedItems };
}