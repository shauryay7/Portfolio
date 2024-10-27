// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Create a CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
                <ul className="social-links">
                    <li><a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;