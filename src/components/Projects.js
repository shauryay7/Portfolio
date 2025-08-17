// src/components/Projects.js
import React from 'react';
import './Projects.css';
// It's recommended to find and import specific images for each project
import p1 from './p1.jpeg'; // Placeholder for E-Commerce App
import p2 from './p2.png'; // Placeholder for Blog API
import p3 from './p3.png'; // Placeholder for Weather App
import p4 from './p4.png'; // Placeholder for URL Shortener
import p5 from './p5.png'; // Add a new placeholder image for Crypto Tracker

function Projects() {
    return (
        <div className="projects">
            <h1>Key Projects</h1>
            <div className="projects-container">
                <div className="project-card">
                    <img src={p1} alt="E-Commerce Web App" className="project-image"/>
                    <h2>E-Commerce Web App 🛍️</h2>
                    <p>A full-featured MERN stack e-commerce platform with product listings, cart functionality, user authentication, and order processing. Built with MongoDB, Express.js, React, and Node.js.</p>
                </div>
                <div className="project-card">
                    <img src={p2} alt="Backend Blog Application API" className="project-image"/>
                    <h2>Backend Blog Application API 📝</h2>
                    <p>A complete RESTful API for a blog platform using Java and Spring Boot. Implements user authentication, post and comment management, and categories. Uses Hibernate and MySQL.</p>
                </div>
                 <div className="project-card">
                    <img src={p4} alt="URL Shortener Service" className="project-image"/>
                    <h2>URL Shortener Service 🔗</h2>
                    <p>A scalable web service to convert long URLs into shortened links. Focused on an efficient backend architecture using Java, Spring Boot, and REST APIs.</p>
                </div>
                <div className="project-card">
                    <img src={p5} alt="Crypto Tracker" className="project-image"/>
                    <h2>Crypto Tracker 🪙</h2>
                    <p>A cryptocurrency tracking application built with React. It fetches real-time data from the CoinGecko API to display current prices, market caps, and price changes for various cryptocurrencies.</p>
                </div>
                <div className="project-card">
                    <img src={p3} alt="Weather App" className="project-image"/>
                    <h2>Weather App ☀️</h2>
                    <p>A dynamic React application that displays real-time weather data from a third-party API. Features a clean, user-friendly interface to search for cities and view forecasts.</p>
                </div>
            </div>

            {/* GitHub Button */}
            <div className="github-button-container">
                <a href="https://github.com/shauryay7" target="_blank" rel="noopener noreferrer" className="github-button connect-button">
                    View All Projects on GitHub
                </a>
            </div>
        </div>
    );
}

export default Projects;