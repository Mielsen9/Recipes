export function useFilteredItems(
	items: { id: number; name: string; category: string }[], // Додано `id`
	searchQuery: string,
	category: string,
	currentPage: number,
	itemsPerPage: number
) {
	const filteredItems = items.filter(
		(item) =>
			item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
			(category ? item.category === category : true)
	);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

	return { filteredItems, paginatedItems };
}