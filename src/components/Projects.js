// src/components/Projects.js
import React from 'react';
import './Projects.css';
import p1 from './p1.jpeg';
import p2 from './p2.png';
import p3 from './p3.png';
import p4 from './p4.png';

function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="project-card">
                    <img src={p1} alt="Weather Dashboard" className="project-image"/>
                    <h2>Weather Dashboard 🌙</h2>
                    <p>The Weather Dashboard is a user-friendly application that allows you to search for any city's current
                        weather and five-day forecast. It provides real-time weather updates, temperature conversions between Celsius
                        and Fahrenheit, and a visual representation of the temperature trends.</p>
                </div>
                <div className="project-card">
                    <img src={p2} alt="YouTube Transcript Generator" className="project-image"/>
                    <h2>YouTube Transcript Generator 🎥</h2>
                    <p>This project extracts and processes YouTube video transcripts, including support for chapter
                        parsing, punctuation restoration, and customizable output formats. It utilizes the YouTube Data API and
                        YouTube Transcript API to fetch video metadata and transcripts.</p>
                </div>
                <div className="project-card">
                    <img src={p3} alt="React Calculator Project " className="project-image"/>
                    <h2>React Calculator Project ➗</h2>
                    <p>This is a simple calculator built using React, HTML, CSS, and JavaScript. The calculator can
                        perform basic arithmetic operations like addition, subtraction, multiplication, and division.</p>
                </div>
                <div className="project-card">
                    <img src={p4} alt="Music Player" className="project-image"/>
                    <h2>Music Player 🎵 </h2>
                    <p>A simple, aesthetically pleasing web-based music player built with HTML, CSS, and
                        JavaScript. This player allows you to play, pause, and skip tracks, and displays album art,
                        song title, and artist information.</p>
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