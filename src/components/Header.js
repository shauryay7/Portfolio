// src/components/Header.js
// src/components/Header.js
import React from 'react';
import './Header.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Header() {
    return (
        <header className="header">
            <div className="logo">SY</div>

            <div className="social-icons">
                <FaFacebook className="icon"/>
                <FaTwitter className="icon"/>
                <FaLinkedin className="icon"/>
                <FaInstagram className="icon"/>
            </div>
        </header>
    );
}

export default Header;