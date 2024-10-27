// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/experience">
                <button className="connect-button">Experience</button>
            </Link>
            <Link to="/skills">
                <button className="connect-button">Skills</button>
            </Link>
            <Link to="/projects">
                <button className="connect-button">Projects</button>
            </Link>
        </nav>
    );
}

export default NavBar;