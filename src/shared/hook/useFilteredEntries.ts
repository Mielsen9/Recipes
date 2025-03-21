import { useMemo } from "react";

/**
 * Хук для фільтрації об'єкта за префіксом ключів.
 * @param obj - Об'єкт, у якому потрібно фільтрувати ключі.
 * @param prefix - Префікс, за яким відбираються ключі.
 * @returns Масив значень, що відповідають заданому префіксу.
 */
export const useFilteredEntries = <T extends Record<string, any>>(obj: T, prefix: string): string[] => {
	return useMemo(
		() =>
			Object.entries(obj)
				.filter(([key, value]) => key.startsWith(prefix) && Boolean(value))
				.map(([_, value]) => String(value)), // Приводимо до string, якщо значення не є рядком
		[obj, prefix]
	);
};
