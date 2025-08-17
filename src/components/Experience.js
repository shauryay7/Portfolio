import React, { useEffect, useRef } from 'react';

function Experience() {
    const timelineRef = useRef(null);

    const experiences = [
        {
            company: 'Yaksh Consultancy Services',
            position: 'Software Developer',
            duration: 'April 2025 - June 2025',
            type: 'work',
            description: 'Developed and integrated core backend features for client applications using Java and Python, improving overall product functionality and performance.',
            skills: ['Java', 'Python', 'Backend Development'],
            logo: '💼',
        },
        {
            company: 'CodeAlpha',
            position: 'Frontend Developer',
            duration: 'October 2024 - November 2024',
            type: 'work',
            description: [
                'Engineered responsive and visually engaging user interfaces, resulting in a 40% boost to website load speed and a better user experience.',
                'Collaborated with backend developers to integrate REST APIs seamlessly.'
            ],
            skills: ['Frontend', 'React', 'REST APIs', 'UI/UX'],
            logo: '💻',
        },
        {
            company: 'Warmup Ventures',
            position: 'Web Developer',
            duration: 'May 2024 - July 2024',
            type: 'work',
            description: [
                'Developed and launched over 10 responsive websites for various clients, significantly improving their online presence and user engagement.',
                'Spearheaded a code quality initiative that led to a 20% reduction in production errors through rigorous code reviews and implementation of best practices.'
            ],
            skills: ['Web Development', 'Responsive Design', 'Code Review'],
            logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQGxG-oN6eJKnw/company-logo_200_200/company-logo_200_200/0/1688797105285?e=2147483647&v=beta&t=yDR6xVURwzH6_pd-Fmefo3qlXr7evMth19wXYcVI4Lw',
        },
        {
            company: 'Intel Corporation',
            position: 'Intel Unnati Industrial Training',
            duration: 'May 2024 - July 2024',
            type: 'training',
            description: "Finished in the top 5% of participants in Intel's intensive technical training program, excelling in modules on software development and project management.",
            skills: ['Software Development', 'Project Management', 'Technical Training'],
            logo: 'https://logos-world.net/wp-content/uploads/2021/09/Intel-Logo.png',
        },
        {
            company: 'SRM Institute of Science and Technology',
            position: 'B.Tech in Computer Science (AI & Machine Learning)',
            duration: 'Expected Graduation: August 2027',
            type: 'education',
            description: 'Pursuing comprehensive education in computer science with specialization in artificial intelligence and machine learning technologies.',
            skills: ['AI', 'Machine Learning', 'Computer Science', 'Data Structures'],
            logo: 'https://i.pinimg.com/736x/d7/75/41/d77541e44be753901dc2a9ce403e7f52.jpg',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
        timelineItems?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    const getTypeColor = (type) => {
        switch (type) {
            case 'work': return '#00d4aa';
            case 'training': return '#ff6b6b';
            case 'education': return '#4ecdc4';
            default: return '#00b4d8';
        }
    };

    const getTypeIcon = (type) => {
        switch (type) {
            case 'work': return '💼';
            case 'training': return '🎯';
            case 'education': return '🎓';
            default: return '📍';
        }
    };

    return (
        <div className="experience-container">
            <div className="header-section">
                <h1 className="experience-title">Professional Journey</h1>
                <div className="title-underline"></div>
            </div>
            
            <div className="timeline" ref={timelineRef}>
                <div className="timeline-line"></div>
                {experiences.map((exp, index) => (
                    <div 
                        className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
                        key={index}
                        style={{ '--type-color': getTypeColor(exp.type) }}
                    >
                        <div className="timeline-content">
                            <div className="content-header">
                                <div className="company-logo">
                                    {exp.logo.startsWith('http') ? 
                                        <img src={exp.logo} alt={`${exp.company} logo`} /> :
                                        <span className="emoji-logo">{exp.logo}</span>
                                    }
                                </div>
                                <div className="company-info">
                                    <h3 className="company">{exp.company}</h3>
                                    <h4 className="position">{exp.position}</h4>
                                </div>
                                <div className="type-badge">
                                    <span className="type-icon">{getTypeIcon(exp.type)}</span>
                                </div>
                            </div>
                            
                            <p className="duration">{exp.duration}</p>
                            
                            <div className="description">
                                {Array.isArray(exp.description) ? (
                                    <ul>
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{exp.description}</p>
                                )}
                            </div>
                            
                            <div className="skills-container">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="timeline-dot">
                            <div className="dot-inner"></div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .experience-container {
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
                    background: transparent;
                    min-height: 100vh;
                    padding: 4rem 2rem;
                    position: relative;
                    overflow-x: hidden;
                }

                .experience-container::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-image: 
                        radial-gradient(circle at 20% 50%, rgba(0, 180, 216, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(0, 212, 170, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 40% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%);
                    pointer-events: none;
                }

                .header-section {
                    text-align: center;
                    margin-bottom: 4rem;
                    position: relative;
                    z-index: 2;
                }

                .experience-title {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    background: linear-gradient(135deg, #00d4aa 0%, #00b4d8 50%, #ff6b6b 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    font-weight: 800;
                    margin-bottom: 1rem;
                    letter-spacing: -0.02em;
                }

                .title-underline {
                    width: 100px;
                    height: 4px;
                    background: linear-gradient(90deg, #00d4aa, #00b4d8);
                    margin: 0 auto;
                    border-radius: 2px;
                }

                .timeline {
                    position: relative;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .timeline-line {
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 3px;
                    background: linear-gradient(180deg, #00d4aa 0%, #00b4d8 50%, #ff6b6b 100%);
                    transform: translateX(-50%);
                    z-index: 1;
                    border-radius: 1.5px;
                }

                .timeline-item {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    margin: 3rem 0;
                    position: relative;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
                }

                .timeline-item.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .timeline-item.left {
                    justify-content: flex-end;
                    padding-right: 3rem;
                }

                .timeline-item.right {
                    justify-content: flex-start;
                    padding-left: 3rem;
                }

                .timeline-item.left .timeline-content {
                    text-align: right;
                    transform-origin: right center;
                }

                .timeline-item.right .timeline-content {
                    text-align: left;
                    transform-origin: left center;
                }

                .timeline-content {
                    background: rgba(255, 255, 255, 0.05);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 2rem;
                    border-radius: 20px;
                    max-width: 450px;
                    position: relative;
                    transition: all 0.3s ease;
                    box-shadow: 
                        0 8px 32px rgba(0, 0, 0, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1);
                }

                .timeline-content::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(135deg, 
                        rgba(var(--type-color), 0.1) 0%, 
                        transparent 50%);
                    border-radius: 20px;
                    pointer-events: none;
                }

                .timeline-content:hover {
                    transform: scale(1.02);
                    box-shadow: 
                        0 12px 40px rgba(0, 0, 0, 0.4),
                        inset 0 1px 0 rgba(255, 255, 255, 0.2);
                    border-color: rgba(var(--type-color), 0.3);
                }

                .content-header {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    position: relative;
                    z-index: 1;
                }

                .company-logo {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    flex-shrink: 0;
                }

                .company-logo img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .emoji-logo {
                    font-size: 1.5rem;
                }

                .company-info {
                    flex: 1;
                    min-width: 0;
                }

                .company {
                    font-size: 1.3rem;
                    margin: 0 0 0.5rem 0;
                    color: #ffffff;
                    font-weight: 700;
                    line-height: 1.2;
                }

                .position {
                    font-size: 1rem;
                    color: var(--type-color);
                    margin: 0;
                    font-weight: 600;
                }

                .type-badge {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: rgba(var(--type-color), 0.2);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid rgba(var(--type-color), 0.3);
                    flex-shrink: 0;
                }

                .type-icon {
                    font-size: 0.9rem;
                }

                .duration {
                    font-size: 0.9rem;
                    color: #b2b2b2;
                    margin-bottom: 1rem;
                    font-weight: 500;
                    position: relative;
                    z-index: 1;
                }

                .description {
                    color: #e1e1e1;
                    line-height: 1.6;
                    margin-bottom: 1.5rem;
                    position: relative;
                    z-index: 1;
                }

                .description p {
                    margin: 0;
                    font-size: 0.95rem;
                }

                .description ul {
                    margin: 0;
                    padding-left: 1.2rem;
                    list-style: none;
                }

                .description li {
                    margin-bottom: 0.5rem;
                    position: relative;
                    font-size: 0.95rem;
                }

                .description li::before {
                    content: '▸';
                    position: absolute;
                    left: -1rem;
                    color: var(--type-color);
                    font-weight: bold;
                }

                .skills-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    position: relative;
                    z-index: 1;
                }

                .skill-tag {
                    background: rgba(var(--type-color), 0.2);
                    color: #ffffff;
                    padding: 0.3rem 0.8rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 500;
                    border: 1px solid rgba(var(--type-color), 0.3);
                    transition: all 0.2s ease;
                }

                .skill-tag:hover {
                    background: rgba(var(--type-color), 0.3);
                    transform: translateY(-2px);
                }

                .timeline-dot {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 20px;
                    height: 20px;
                    background: var(--type-color);
                    border-radius: 50%;
                    z-index: 2;
                    border: 4px solid #1a1a2e;
                    box-shadow: 0 0 0 4px rgba(var(--type-color), 0.3);
                    transition: all 0.3s ease;
                }

                .timeline-item:hover .timeline-dot {
                    transform: translateX(-50%) scale(1.3);
                    box-shadow: 0 0 0 8px rgba(var(--type-color), 0.4);
                }

                .dot-inner {
                    width: 6px;
                    height: 6px;
                    background: #ffffff;
                    border-radius: 50%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                /* Mobile Responsive */
                @media (max-width: 768px) {
                    .experience-container {
                        padding: 2rem 1rem;
                    }

                    .timeline-line {
                        left: 2rem;
                    }

                    .timeline-item {
                        justify-content: flex-start !important;
                        padding-left: 4rem !important;
                        padding-right: 0 !important;
                        margin: 2rem 0;
                    }

                    .timeline-item.left .timeline-content,
                    .timeline-item.right .timeline-content {
                        text-align: left;
                    }

                    .timeline-content {
                        max-width: 100%;
                        padding: 1.5rem;
                    }

                    .timeline-dot {
                        left: 2rem;
                    }

                    .content-header {
                        flex-direction: column;
                        gap: 1rem;
                        align-items: flex-start;
                    }

                    .company-info {
                        order: -1;
                    }

                    .skills-container {
                        justify-content: flex-start;
                    }
                }

                /* Add CSS custom properties for type colors */
                .timeline-item[style*="--type-color: #00d4aa"] {
                    --type-color: 0, 212, 170;
                }
                .timeline-item[style*="--type-color: #ff6b6b"] {
                    --type-color: 255, 107, 107;
                }
                .timeline-item[style*="--type-color: #4ecdc4"] {
                    --type-color: 78, 205, 196;
                }
                .timeline-item[style*="--type-color: #00b4d8"] {
                    --type-color: 0, 180, 216;
                }
            `}</style>
        </div>
    );
}

export default Experience;