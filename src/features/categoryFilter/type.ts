export interface CategoryState {
	category: string;
	categories: {
		list: string[];
		status: "idle" | "loading" | "succeeded" | "failed";
		error: string | null;
	};
}