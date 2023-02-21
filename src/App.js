import React from 'react';
import {Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/HomePage/HomePage";
import {MoviesPage} from "./pages";
import {Header} from "./components/Header/header";
import {ThemeSwitcher} from "./components/ThemeSwitcher/ThemeSwitcher";
import css from './ThemeSwitcher.module.css'


const App = () => {
    return (
        <ThemeSwitcher>
            <div className={css.Theme}>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/movies" element={<MoviesPage/>}/>
                </Routes>
            </div>
        </ThemeSwitcher>
    );
};

export {App};
