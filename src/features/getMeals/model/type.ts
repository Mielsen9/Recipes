interface MealsState {
	meals: {
		meals: Meal[];
		status: "idle" | "loading" | "succeeded" | "failed";
		error: string | null;
	}
}