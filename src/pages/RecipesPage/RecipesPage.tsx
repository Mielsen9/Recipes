
import {useSearchQuery} from "@/hook/useSearchQuery";
import {useCategoryFilter} from "@/hook/useCategoryFilter";
import {usePagination} from "@/hook/usePagination";
import {useFilteredItems} from "@/hook/seFilteredItems";

const items = [
	{ id: 1, name: "Apple", category: "fruit" },
	{ id: 2, name: "Banana", category: "fruit" },
	{ id: 3, name: "Carrot", category: "vegetable" },
	{ id: 4, name: "Broccoli", category: "vegetable" },
	{ id: 5, name: "Grapes", category: "fruit" },
	{ id: 6, name: "Lemon", category: "fruit" },
];

const itemsPerPage = 2;

const RecipesPage = () => {
	const { searchQuery, setSearchQuery } = useSearchQuery();
	const { category, setCategory } = useCategoryFilter();
	const { currentPage, setPage } = usePagination(itemsPerPage);

	const { filteredItems, paginatedItems } = useFilteredItems(items, searchQuery, category, currentPage, itemsPerPage);

	return (
		<div>
			<input
				type="text"
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder="Search..."
			/>

			<select value={category} onChange={(e) => setCategory(e.target.value)}>
				<option value="">All Categories</option>
				<option value="fruit">Fruits</option>
				<option value="vegetable">Vegetables</option>
			</select>

			<ul>
				{paginatedItems.length > 0 ? (
					paginatedItems.map((item) => <li key={item.id}>{item.name}</li>)
				) : (
					<p>No results found</p>
				)}
			</ul>

			<div>
				<button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
					Previous
				</button>
				<span>
          Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}
        </span>
				<button
					onClick={() => setPage(currentPage + 1)}
					disabled={currentPage >= Math.ceil(filteredItems.length / itemsPerPage)}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default RecipesPage;
