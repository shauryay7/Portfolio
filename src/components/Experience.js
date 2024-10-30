import React from 'react';
import './Experience.css';

function Experience() {
    const experiences = [
        {
            company: 'Delhi Public School, Jaipur',
            position: 'High School Diploma',
            duration: 'June 2023',
            description: '',
            logo: 'https://static.vecteezy.com/system/resources/thumbnails/004/297/596/small/education-logo-open-book-dictionary-textbook-or-notebook-with-sunrice-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-vector.jpg', // You can add a logo here if available
        },

        {
            company: 'SRM UNIVERSITY, Chennai',
            position: 'B.Tech | Computer Science And Programming',
            duration: 'Expected in July 2027',
            description: (
                <ul>
                    <li>Completed online course on Programming Using Python, C++ Programming, and Data Structures.</li>
                    <li>Received industrial training focused on Intel technologies and applications in various fields.</li>
                    <li>B. Tech in Computer Science (Specialization in Artificial Intelligence and Machine Learning)</li>
                </ul>
            ),
            logo: 'https://i.pinimg.com/736x/d7/75/41/d77541e44be753901dc2a9ce403e7f52.jpg', // You can add a logo here if available
        },
        {
            company: 'Warmup Ventures',
            position: 'Web Developer',
            duration: 'June 2024 - July 2024 (2 months)',
            description: 'Developed and maintained websites using modern web technologies.',
            logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGxG-oN6eJKnw/company-logo_200_200/company-logo_200_200/0/1688797105285?e=2147483647&v=beta&t=yDR6xVURwzH6_pd-Fmefo3qlXr7evMth19wXYcVI4Lw', // Add a logo if available
        },
        {
            company: 'Intel Corporation',
            position: 'Intel® Unnati Industrial Training',
            duration: 'May 2024 - July 2024 (3 months)',
            description: 'Received industrial training focused on Intel technologies and applications in various fields.',
            logo: 'https://logos-world.net/wp-content/uploads/2021/09/Intel-Logo.png', // Add a logo if available
        },
        {
            company: 'HacktheBox',
            position: 'Technical Team Member',
            duration: 'March\'24 - present',
            description: 'Because you need continuity',
            logo: 'https://avatars.githubusercontent.com/u/31746234?s=280&v=4',
        },


        {
            company: 'Certifications',
            position: 'Various',
            duration: '',
            description: (
                <ul>
                    <li>Programming Using Python</li>
                    <li>C++ Programming</li>
                    <li>GENESIS</li>
                    <li>Intel® Unnati Industrial Training</li>
                </ul>
            ),
            logo: 'https://m.media-amazon.com/images/I/71D0DjPgJgL.jpg', // You can add a logo here if available
        },
    ];

    return (
        <div className="experience-container">
            <h1 className="experience-title">Experience</h1>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-icon">
                            {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} />}
                        </div>
                        <div className="timeline-content">
                            <h3 className="company">{exp.company}</h3>
                            <h4 className="position">{exp.position}</h4>
                            <p className="duration">{exp.duration}</p>
                            {typeof exp.description === 'string' ? (
                                <p className="description">{exp.description}</p>
                            ) : (
                                exp.description // Render the JSX directly for lists
                            )}
                        </div>
                    </div>
                ))}
                <div className="timeline-line"></div>
            </div>
        </div>
    );
}

export default Experience;