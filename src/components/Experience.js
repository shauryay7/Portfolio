import React from 'react';
import './Experience.css';

function Experience() {
    const experiences = [
        {
            company: 'Busy&Organised (B&O)',
            position: 'Web Developer Intern',
            duration: '1st February\'24 - 31st February\'24',
            description: 'Because you need a start',
            logo: 'B&O-logo.png',
        },
        {
            company: 'NullClass',
            position: 'Web Developer Intern',
            duration: '10th June\'24 - 9th July\'24',
            description: 'Because it’s awesome!',
            logo: 'NullClass-logo.png',
        },
        {
            company: 'Blockchain Club SRM',
            position: 'Technical Team Member',
            duration: 'October\'24 - present',
            description: 'the CULT',
            logo: 'Blockchain-logo.png',
        },
        {
            company: 'The Product House (TPHxSRMIST)',
            position: 'Technical Team Member',
            duration: 'December\'23 - present',
            description: 'Because you need guidance',
            logo: 'TPH-logo.png',
        },
        {
            company: 'HacktheBox',
            position: 'Technical Team Member',
            duration: 'March\'24 - present',
            description: 'Because you need continuity',
            logo: 'HacktheBox-logo.png',
        },
    ];

    return (
        <div className="experience-container">
            <h1 className="experience-title">Experience</h1>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <div className="timeline-icon">
                            <img src={exp.logo} alt={`${exp.company} logo`} />
                        </div>
                        <div className="timeline-content">
                            <h3 className="company">{exp.company}</h3>
                            <h4 className="position">{exp.position}</h4>
                            <p className="duration">{exp.duration}</p>
                            <p className="description">{exp.description}</p>
                        </div>
                    </div>
                ))}
                <div className="timeline-line"></div>
            </div>
        </div>
    );
}

export default Experience;
