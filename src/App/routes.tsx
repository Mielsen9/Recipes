import { createBrowserRouter } from "react-router-dom";
import RecipesPage from "@/pages/RecipesPage/RecipesPage";
import RecipePage from "@/pages/RecipePage/RecipePage";
import SelectedRecipesPage from "@/pages/SelectedRecipesPage/SelectedRecipesPage";
import App from "@/App/App";

// Створення маршрутів за допомогою createBrowserRouter
export const router = createBrowserRouter([
		{
			path: "/",
			element: <App/>,
			children: [
				{ path: "/", element: <RecipesPage /> },
				{ path: "/recipe/:idMeal", element: <RecipePage /> },
				{ path: "/selected", element: <SelectedRecipesPage /> },
			],
		},
	],
	// {
	//     basename: '/Recipes', // Шлях до репозиторію на GitHub
	// }
);