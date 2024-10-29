// src/components/Skills.js
import React from 'react';
import './Skills.css';
import { FaGolang } from "react-icons/fa6";
import { FaCogs } from 'react-icons/fa';
import { FaPython, FaJava, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiMysql, SiPandas, SiTensorflow, SiAdobe, SiGooglecloud } from 'react-icons/si';

const Skills = () => {
    return (
        <div className="skills">
            <h1>Skills</h1>
            <div className="skills-container">
                {/* Languages Column */}
                <div className="skills-column">
                    <h2>Languages</h2>
                    <ul>
                        <li className="icon"><FaCogs /></li>
                        <li className="icon"><FaPython /></li>
                        <li className="icon"><FaJava /></li>
                        <li className="icon"><FaJsSquare /></li>
                        <li className="icon"><FaHtml5 /></li>
                        <li className="icon"><FaCss3Alt /></li>
                        <li className="icon"><FaGitAlt /></li>
                        <li className="icon"><FaGolang /></li>
                    </ul>
                </div>

                {/* Technologies Column */}
                <div className="skills-column">
                    <h2>Technologies</h2>
                    <ul>
                        <li className="icon"><SiTailwindcss /></li>
                        <li className="icon"><SiReact /></li>
                        <li className="icon"><SiReact /></li>
                        <li className="icon"><SiNextdotjs /></li>
                        <li className="icon"><SiNodedotjs /></li>
                        <li className="icon"><SiMysql /></li>
                        <li className="icon"><SiPandas /></li>
                        <li className="icon"><SiTensorflow /></li>
                        <li className="icon"><SiAdobe /></li>
                    </ul>
                </div>

                {/* Tools Column */}
                <div className="skills-column">
                    <h2>Tools</h2>
                    <ul>
                        <li className="icon"><SiGooglecloud /></li>
                        <li className="icon"><SiAdobe /></li>
                        <li className="icon"><FaGitAlt /></li>
                        <li className="icon"><FaCogs /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;