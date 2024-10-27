// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/experience">
                <button className="nav-button">Experience</button>
            </Link>
            <Link to="/skills">
                <button className="nav-button">Skills</button>
            </Link>
            <Link to="/projects">
                <button className="nav-button">Projects</button>
            </Link>
        </nav>
    );
}

export default NavBar;