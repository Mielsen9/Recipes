import React from "react";

// Type
type PropsType = {
	currentPage: number,
	itemsPerPage: number,
	filteredItems: any[],
};
// usePaginationData
export const usePaginationData = (p: PropsType) => {
	const startIndex = (p.currentPage - 1) * p.itemsPerPage;
	return p.filteredItems.slice(startIndex, startIndex + p.itemsPerPage);
};