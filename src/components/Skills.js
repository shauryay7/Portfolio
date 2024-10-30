import React from 'react';
import './Skills.css';
import { FaGolang } from "react-icons/fa6";
import { FaCogs } from 'react-icons/fa';
import { FaPython, FaJava, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiReact, SiNextdotjs, SiNodedotjs, SiMysql, SiPandas, SiTensorflow, SiAdobe, SiGooglecloud } from 'react-icons/si';

const Skills = () => {
    return (
        <div>
            <h1 className="skills-h">Skills</h1>
            <div className="skills-box">
                <div className="skills">
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

                <div className="text-box">
                    <p>
                        I’m a Developer with a strong foundation in JavaScript, Python, Java, HTML, CSS, and Go.
                        I have expertise in technologies like React.js, Next.js, Node.js, TailwindCSS, MySQL, and TensorFlow,
                        and I’m proficient in tools such as Git, Google Cloud, Adobe Suite, Figma, and Jira. I’m highly
                        motivated, detail-oriented, and continuously strive to enhance my skills. I’m also experienced in working with
                        responsive design, handling client feedback, and using modern frameworks and libraries to deliver effective and visually
                        appealing user experiences.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;