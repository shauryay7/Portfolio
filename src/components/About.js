// src/components/About.js
import React from 'react';
import './About.css';

function About() {
    return (
        <section className="about">
            <div className="sec">
                <h3>About me</h3>
                <p className="quote">
                    I'm a 2rd year student at SRM University, pursuing Bachelor
                    Of Technology in the field of Computer Science under Artificial
                    Intelligence and Machine Learning as my Specialization. I'm also a
                    Machine Learning enthusiast and a Web Developer.
                </p>
                <a href="/resume.pdf" download className="c-btn"><span
                    className="c-btn__label">View My Resume</span></a>
            </div>

            <div className="box">
                    <pre><code id="codeBlock"><div className="lineOfCode"><em>Learn </em>Innovate</div><div
                        className="lineOfCode"><strong>Grow </strong> <b>Build</b>  <u></u></div><div
                        className="lineOfCode"><s>#Hacker</s></div></code></pre>
            </div>
        </section>
    );
}

export default About;