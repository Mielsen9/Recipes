import {useQuery} from "@tanstack/react-query";
import {fetchMeals} from "../api/fetchMeals"

export const useGetMeals = (searchTerm: string | "") => {
	return useQuery({
		queryKey: ["meals", searchTerm],
		queryFn: () => fetchMeals(searchTerm),
		// enabled: Boolean(searchTerm), // Запит тільки якщо є пошуковий текст
	});
};