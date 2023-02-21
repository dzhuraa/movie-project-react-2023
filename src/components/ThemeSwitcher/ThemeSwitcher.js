import {createContext, useState} from "react";

export const ThemeContext = createContext(null);
const ThemeSwitcher = () => {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme((current) => (current === "light" ? "dark" : "light"));
    };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>

        </ThemeContext.Provider>
    );
};

export {ThemeSwitcher};