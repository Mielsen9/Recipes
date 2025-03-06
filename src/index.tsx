import React from 'react';
import { createRoot } from 'react-dom/client';
import "@/scss/style.scss"; // Підключення стилів
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Імпортуємо необхідні компоненти
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Імпортуємо react-query
import RecipesPage from "@/pages/RecipesPage/RecipesPage"; // Ваші компоненти
import RecipePage from "@/pages/RecipePage/RecipePage";
import App from "@/App";
import SelectedRecipesPage from "@/pages/SelectedRecipesPage/SelectedRecipesPage";

// Створюємо інстанс QueryClient для використання в додатку
const queryClient = new QueryClient();

// Ініціалізація root елементу для додатку
const root = document.getElementById('root');

if (!root) {
    throw new Error('Root node not found'); // Виправлена помилка в тексті
}

const container = createRoot(root);

// Створення маршрутів за допомогою createBrowserRouter
const router = createBrowserRouter([
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
    {
        basename: '/Recipes', // Шлях до репозиторію на GitHub
    }
);

// Підключаємо маршрути до компонента RouterProvider
container.render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} /> {/* Тут ми підключаємо маршрути */}
    </QueryClientProvider>
);


