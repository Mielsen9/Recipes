interface MealCardState {
	mealById: {
		mealById: Meal | null,
		status: "idle" | "loading" | "succeeded" | "failed";
		error: string | null;
	},
}