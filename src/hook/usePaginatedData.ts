type Pagination = {
	currentPage: number;
	itemsPerPage: number;
};

export function usePaginatedData<T>(data: T[], pagination: Pagination) {
	const { currentPage, itemsPerPage } = pagination;

	const startIndex = (currentPage - 1) * itemsPerPage;
	const visibleItems = data.slice(startIndex, startIndex + itemsPerPage);

	return { visibleItems };
}