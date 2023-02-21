import {NavLink} from "react-router-dom";
import ReactSwitch from "react-switch";
import React, {createContext, useState} from "react";


export const ThemeContext = createContext(null);
const Header = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className="header" id={theme}>
                <NavLink to={""}>Home</NavLink>
                <NavLink to={"movies"}>Explore</NavLink>
                <ReactSwitch checked={theme === "dark"} onChange={toggleTheme}/>
            </div>
        </ThemeContext.Provider>
    );
};

export {Header};