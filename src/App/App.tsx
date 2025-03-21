import React from "react";
import * as s from "./App.module.scss";
import { Outlet } from "react-router-dom";
import {Header} from "@/widgets/Header/Header";

const App = () => {
    return (
        <div className={s.conteiner}>
            <Header/>
            <Outlet />
        </div>
    );
};

export default App;
