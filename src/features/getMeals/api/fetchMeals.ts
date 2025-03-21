
export const fetchMeals = async (searchTerm: string ): Promise<Meal[]> => {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}`);
	if (!response.ok) {
		throw new Error("Failed to fetch recipes");
	}
	const data = await response.json();
	return data.meals; // Повертаємо масив страв
}