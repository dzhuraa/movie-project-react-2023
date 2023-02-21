import {NavLink} from "react-router-dom";

// import css from './header.module.css'

const Header = () => {
    return (
        <div className="header">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/movies"}>Explore</NavLink>
        </div>
    );
};

export {Header};