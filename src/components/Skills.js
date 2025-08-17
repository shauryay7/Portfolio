import React from 'react';
import './Skills.css';
// Updated and added necessary icons
import { FaJava, FaPython, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiSpringboot, SiExpress, SiMysql, SiMongodb, SiHibernate, SiApachemaven } from 'react-icons/si';

const Skills = () => {
    return (
        <div>
            <h1 className="skills-h">Technical Skills</h1>
            <div className="skills-box">
                <div className="skills">
                    <div className="skills-container">
                        {/* Languages Column */}
                        <div className="skills-column">
                            <h2>Languages</h2>
                            <ul>
                                <li className="icon"><FaJava /></li>
                                <li className="icon"><FaPython /></li>
                                <li className="icon"><FaJsSquare /></li>
                                <li className="icon"><FaHtml5 /></li>
                                <li className="icon"><FaCss3Alt /></li>
                            </ul>
                        </div>

                        {/* Frontend & Backend Column */}
                        <div className="skills-column">
                            <h2>Frontend & Backend</h2>
                            <ul>
                                <li className="icon"><FaReact /></li>
                                <li className="icon"><SiSpringboot /></li>
                                <li className="icon"><FaNodeJs /></li>
                                <li className="icon"><SiExpress /></li>
                                <li className="icon"><FaBootstrap /></li>
                            </ul>
                        </div>

                        {/* Databases & Tools Column */}
                        <div className="skills-column">
                            <h2>Databases & Tools</h2>
                            <ul>
                                <li className="icon"><SiMysql /></li>
                                <li className="icon"><SiMongodb /></li>
                                <li className="icon"><SiHibernate /></li>
                                <li className="icon"><FaGitAlt /></li>
                                <li className="icon"><FaGithub /></li>
                                <li className="icon"><SiApachemaven /></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-box">
                    <p>
                    I am a versatile software developer skilled in Java, Python, and JavaScript, with a focus on creating high-performance applications. My backend expertise includes leveraging frameworks like Spring Boot, Node.js, and Express.js to build powerful APIs, while I use React.js, HTML, CSS, and Bootstrap  to create engaging, responsive frontends. I manage data efficiently with MySQL, MongoDB, and Hibernate and maintain code quality and collaboration through tools like Git, GitHub, and Maven
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;