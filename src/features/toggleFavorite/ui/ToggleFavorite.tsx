import React from "react";
import {useAddFavorite} from "@/features/toggleFavorite/hook/useAddFavorite";

interface AddFavoriteProps {
	meal: Meal,
}

export const ToggleFavorite: React.FC<AddFavoriteProps> = React.memo((p) => {
	const {toggleFavorite, isSelected } = useAddFavorite({meal: p.meal})
	return (
		<button onClick={toggleFavorite}>
			{isSelected ? "✅ У вибраних" : "➕ Додати у вибрані"}
		</button>
	);
});
