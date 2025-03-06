
import React from "react";
import { Outlet } from "react-router-dom";
import GoToSelectedRecipesButton from "@/components/GoToSelectedRecipesButton/GoToSelectedRecipesButton";

const App = () => {
    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                fontSize: "50px",
            }}>Recipes App</h1>
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <GoToSelectedRecipesButton buttonText="Go to Home" linkTo="/" />
                <GoToSelectedRecipesButton buttonText="Go to Selected Recipes" linkTo="/selected" />
            </div>

            <Outlet />
        </div>
    );
};

export default App;
