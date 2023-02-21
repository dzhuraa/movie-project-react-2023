import React, {createContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/HomePage/HomePage";
import {MoviesPage} from "./pages";
import {Header} from "./components/Header/header";
import "./App.css";
export const ThemeContext = createContext(null);

const App = () => {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="main" id={theme}>
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/movies" element={<MoviesPage/>}/>
                </Routes>
            </div>
        </ThemeContext.Provider>
    );
};

export {App};
