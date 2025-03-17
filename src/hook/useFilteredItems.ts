export function useFilteredItems(
	items: Meal[],
	searchQuery: string | undefined,
	category: string,
	currentPage: number,
	itemsPerPage: number
) {
	const filteredItems = items.filter((item) => {
		return (
			(!searchQuery || item.strMeal.toLowerCase().includes(searchQuery.toLowerCase())) &&
			(!category || item.strCategory === category)
		);
	});

	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

	return { filteredItems, paginatedItems };
}
