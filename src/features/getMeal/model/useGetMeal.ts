import {useQuery} from "@tanstack/react-query";
import {fetchMealById} from "../index"

export const useGetMeal = (idMeal: string ) => {
	return useQuery({
		queryKey: ["meals", idMeal],
		queryFn: () => fetchMealById(idMeal),
		enabled: Boolean(idMeal),
	});
};