import React from 'react';
import './Projects.css';

function Projects() {
    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="project-card">
                    <img src="path-to-chatgpt-image.jpg" alt="ChatGPT 4.0 ChatBot" className="project-image" />
                    <h2>ChatGPT 4.0 ChatBot</h2>
                    <p>Flamingo ChatBot is a ChatGPT 4.0 bot. Users can sign in with Github. I am currently updating this project, so please feel free to give me advice and add issues on my Github repository. Enjoy using Flamingo ChatBot.</p>
                </div>
                <div className="project-card">
                    <img src="path-to-swap-image.jpg" alt="SWOM Swap Your Home" className="project-image" />
                    <h2>SWOM Swap Your Home</h2>
                    <p>Swom is a members-only global travel community where you can exchange homes for free. Travel, work, or have fun without rent, hidden fees, or hassle. Make memories worldwide!</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;
