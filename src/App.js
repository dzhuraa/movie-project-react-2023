import React from 'react';
import {Route, Routes} from "react-router-dom";

import {HomePage} from "./pages/HomePage/HomePage";
import {MoviesPage, NotFoundPage} from "./pages";
import "./App.css"
import {MainLayout} from "./layouts/MainLayout";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path="movies" element={<MoviesPage/>}/>
                </Route>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

export {App};
