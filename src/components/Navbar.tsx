import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-home">
                <p>Konstantina Freri</p>
            </div>
            <div className="nav-links">
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;