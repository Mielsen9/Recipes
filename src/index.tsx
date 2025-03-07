import App from "@/App";
import React from 'react';
import "@/scss/style.scss";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipesPage from "@/pages/RecipesPage/RecipesPage";
import RecipePage from "@/pages/RecipePage/RecipePage";
import SelectedRecipesPage from "@/pages/SelectedRecipesPage/SelectedRecipesPage";

// Імпортуємо Redux та створений store
import { Provider } from 'react-redux';
import { store } from './state/store';

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
    // {
    //     basename: '/Recipes', // Шлях до репозиторію на GitHub
    // }
);

// Підключаємо Redux, QueryClient та маршрути до додатку
container.render(
    <Provider store={store}>
            <RouterProvider router={router} /> {/* Тут ми підключаємо маршрути */}
    </Provider>
);

