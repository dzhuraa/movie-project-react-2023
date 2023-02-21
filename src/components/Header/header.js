import {NavLink} from "react-router-dom";

import css from './header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/movies"}>Explore</NavLink>
        </div>
    );
};

export {Header};