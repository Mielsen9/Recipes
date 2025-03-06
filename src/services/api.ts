export const fetchRecipes = async (searchTerm: string) => {
	const response = await fetch(
		`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
	);
	if (!response.ok) throw new Error("Failed to fetch recipes");
	return response.json();
};