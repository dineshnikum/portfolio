import React from "react";
import { useInView } from "react-intersection-observer";
import { FaCode, FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";
import "./About.css";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const features = [
        {
            icon: FaCode,
            title: "Clean Code",
            description:
                "I write maintainable, scalable, and well-documented code following best practices and industry standards.",
        },
        {
            icon: FaRocket,
            title: "Fast Development",
            description:
                "Quick to learn new technologies and frameworks, delivering projects on time with high quality.",
        },
        {
            icon: FaUsers,
            title: "Team Player",
            description:
                "Excellent communication skills and collaborative mindset, always ready to help team members.",
        },
        {
            icon: FaLightbulb,
            title: "Problem Solver",
            description:
                "Strong analytical thinking and creative problem-solving abilities to tackle complex challenges.",
        },
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <div
                    ref={ref}
                    className={`about-container ${inView ? "visible" : ""}`}
                >
                    <h2
                        className={`section-title animate-fade-in-up animate-stagger-1 ${
                            inView ? "visible" : ""
                        }`}
                    >
                        About Me
                    </h2>

                    <div className="about-content">
                        <div
                            className={`about-text animate-fade-in-up animate-stagger-2 ${
                                inView ? "visible" : ""
                            }`}
                        >
                            <h3>Passionate Developer & Lifelong Learner</h3>
                            <p>
                                I'm a fresher MERN stack developer with a strong
                                foundation in modern web technologies. My
                                journey in programming started with curiosity
                                and has evolved into a passion for creating
                                innovative solutions that make a difference.
                            </p>
                            <p>
                                I specialize in building full-stack applications
                                using React, Node.js, Express, and MongoDB. My
                                approach combines technical expertise with
                                creative problem-solving to deliver
                                user-friendly and efficient applications.
                            </p>
                            <p>
                                When I'm not coding, you'll find me exploring
                                new technologies, contributing to open-source
                                projects, or working on personal projects that
                                challenge my skills and expand my knowledge.
                            </p>

                            <div className="stats">
                                <div
                                    className={`stat hover-scale animate-fade-in-up animate-stagger-3 ${
                                        inView ? "visible" : ""
                                    }`}
                                >
                                    <span className="stat-number">10+</span>
                                    <span className="stat-label">
                                        Projects Completed
                                    </span>
                                </div>
                                <div
                                    className={`stat hover-scale animate-fade-in-up animate-stagger-4 ${
                                        inView ? "visible" : ""
                                    }`}
                                >
                                    <span className="stat-number">8+</span>
                                    <span className="stat-label">
                                        Months Learning
                                    </span>
                                </div>
                                <div
                                    className={`stat hover-scale animate-fade-in-up animate-stagger-5 ${
                                        inView ? "visible" : ""
                                    }`}
                                >
                                    <span className="stat-number">5+</span>
                                    <span className="stat-label">
                                        Technologies
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="about-features">
                            {features.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className={`feature-card hover-lift animate-fade-in-up animate-stagger-${
                                        index + 3
                                    } ${inView ? "visible" : ""}`}
                                >
                                    <div className="feature-icon">
                                        <feature.icon />
                                    </div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
