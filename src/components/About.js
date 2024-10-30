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
                <a href="https://drive.google.com/file/d/10n3TxAby5gitaeLy6XhYug7XllCtvBsm/view?usp=sharing" download className="c-btn"><span
                    className="c-btn__label">View My Resume</span></a>
            </div>

        </section>
    );
}

export default About;