export const fetchRecipes = async () => {
	const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
	if (!response.ok) throw new Error("Failed to fetch recipes");
	return response.json();
};