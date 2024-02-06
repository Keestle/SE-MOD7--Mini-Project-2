import React from "react";
import { useContext } from "react";
import { MyThemeContext } from "../context/ThemeContext (Navbar)";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    const {theme} = useContext(MyThemeContext);
    return (
    <nav className="NavBar"
    style={{backgroundColor: theme.background, color: theme.foreground}}>
    <ul className="menu">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/aboutMe">About Me</NavLink></li>
    <li><NavLink to="/projects">Projects</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    </ul> {/* ++ Add another page with route and component */}
    </nav>
    )
    }
    