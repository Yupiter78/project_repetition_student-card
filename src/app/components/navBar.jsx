import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Card</Link>
            </li>
            <li>
                <Link to="/edit">Edit</Link>
            </li>
        </ul>
    );
};

export default NavBar;
