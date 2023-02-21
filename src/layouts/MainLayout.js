import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/header";

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    );
};

export {MainLayout};