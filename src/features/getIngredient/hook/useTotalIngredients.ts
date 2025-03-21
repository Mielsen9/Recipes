// Type
type PropsType = {
	selectedMeals: Meal[],
};
// useTotalIngredients
export const useTotalIngredients = (p: PropsType) => {
	return p.selectedMeals.flatMap((meal) => {
		const ingredients: Ingredient[] = [];

		// Проходимо по всіх властивостях
		for (const key in meal) {
			if (key.startsWith('strIngredient')) {
				const index = key.replace('strIngredient', ''); // Отримуємо індекс інгредієнта
				const ingredient= meal[key as keyof Meal];
				const measure = meal[`strMeasure${index}` as keyof Meal];

				if (ingredient && ingredient !== '') {
					// Перевіряємо, чи вже є цей інгредієнт у списку
					const existingIngredient = ingredients.find(
						(item) => item.strIngredient === ingredient
					);

					if (existingIngredient) {
						// Якщо інгредієнт вже є, додаємо до його strMeasure нову кількість
						existingIngredient.strMeasure += `, ${measure || ''}`;
					} else {
						// Якщо інгредієнт ще не доданий, додаємо новий
						ingredients.push({
							strIngredient: ingredient,
							strMeasure: measure || '',
						});
					}
				}
			}
		}

		return ingredients;
	});
};