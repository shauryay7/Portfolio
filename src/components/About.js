// src/components/About.js
import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about">
            <button className="connect-button">Let's Connect</button>
            <h3>About me</h3>
            <p>
                I'm a 2rd year student at SRM University, pursuing Bachelor
                Of Technology in the field of Computer Science under Artificial
                Intelligence and Machine Learning as my Specialization. I'm also a
                Machine Learning enthusiast and a Web Developer.
            </p>
            <a href="/resume.pdf" download className="download-button">Download Resume</a>
        </section>
    );
}

export default About;