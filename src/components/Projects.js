import React, { useState } from "react";
import {
    FaCode,
    FaDatabase,
    FaExternalLinkAlt,
    FaGithub,
    FaServer,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import "./Projects.css";

const projects = [
    {
        id: 1,
        title: "Real-Time Chat Application",
        description:
            "A full-stack real-time chat application with instant messaging, user authentication, online users highlighting, image sharing and message history for seamless communication.",
        image: "/images/chat-app.png",
        technologies: [
            "React",
            "Node.js",
            "Socket.io",
            "Express",
            "MongoDB",
            "Zustand",
        ],
        category: "fullstack",
        github: "https://github.com/dineshnikum/my_chat-app",
        live: "https://chat-app-h9a7.onrender.com",
        features: [
            "Real-Time Messaging",
            "Image Sharing",
            "Message History",
            "Highlight Online Users",
        ],
    },
    {
        id: 2,
        title: "E-Commerce Platform",
        description:
            "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.",
        image: "/images/ecommerce-platform.png",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
        category: "fullstack",
        github: "https://github.com/dineshnikum/ecommerce-mern-app",
        live: "https://ecommerce-frontend-inky-xi.vercel.app",
        features: [
            "User Authentication",
            "Product Management",
            "Shopping Cart",
            "Payment Integration",
            "Admin Dashboard",
        ],
    },

    {
        id: 3,
        title: "Expense Tracker",
        description:
            "An expense tracking application with expense management, budget tracking, expense categorization, and chart integration for visual analysis.",
        image: "/images/expense-tracker.png",
        technologies: ["React", "Chart.js", "Zustand", "Tailwind CSS"],
        category: "frontend",
        github: "https://github.com/dineshnikum/expense-tracker",
        live: "https://expense-tracker-theta-bay-55.vercel.app",
        features: [
            "Expense Management",
            "Budget Tracking",
            "Expense Categories",
            "Chart Integration",
        ],
    },
    {
        id: 4,
        title: "Food Delivery",
        description:
            "A food delivery application with user authentication, product management, shopping cart, and payment integration.",
        image: "/images/food-delivery-user-panel.png",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
        category: "fullstack",
        github: "https://github.com/dineshnikum/food-delivery__app",
        live: "https://food-delivery-frontend-m9p8.onrender.com",
        features: [
            "User Authentication",
            "Product Management",
            "Shopping Cart",
            "Admin Dashboard",
            "Order Management",
        ],
    },
    {
        id: 5,
        title: "Task Management System",
        description:
            "A full-stack task management application with priority management, deadline tracking, task categorization, and filtering for efficient project workflow.",
        image: "/images/task-management.png",
        technologies: ["React", "Zustand", "Node.js", "Express", "MongoDB"],
        category: "fullstack",
        github: "https://github.com/dineshnikum/Advanced-Task-Manager",
        live: "https://advanced-task-manager-kappa.vercel.app",
        features: [
            "Priority & Deadline Management",
            "Task Categories & Filtering",
            "User Authentication",
        ],
    },

    {
        id: 6,
        title: "Weather Dashboard",
        description:
            "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
        image: "/images/weather-dashboard.png",
        technologies: ["React", "CSS3", "Weather API", "Chart.js"],
        category: "frontend",
        github: "https://github.com/dineshnikum/weather-dashboard",
        live: "https://weather-dashboard-azure-theta.vercel.app",
        features: [
            "Location-based Forecasts",
            "Interactive Maps",
            "Weather Analytics",
            "Real-time Updates",
        ],
    },
];

const categories = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "fullstack", name: "Full Stack" },
];

const Projects = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const [filter, setFilter] = useState("all");

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter((project) => project.category === filter);

    const handleFilterChange = (categoryId) => {
        setFilter(categoryId);
    };

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div
                    ref={ref}
                    className={`projects-container ${inView ? "visible" : ""}`}
                >
                    <h2
                        className={`section-title animate-fade-in-up animate-stagger-1 ${
                            inView ? "visible" : ""
                        }`}
                    >
                        My Projects
                    </h2>

                    <p
                        className={`projects-description animate-fade-in-up animate-stagger-2 ${
                            inView ? "visible" : ""
                        }`}
                    >
                        Here are some of my recent projects that showcase my
                        skills and experience in web development.
                    </p>

                    <div
                        className={`project-filters animate-fade-in-up animate-stagger-3 ${
                            inView ? "visible" : ""
                        }`}
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`filter-btn ${
                                    filter === category.id ? "active" : ""
                                }`}
                                onClick={() => handleFilterChange(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    <div className="projects-grid">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`project-card hover-lift animate-fade-in-up animate-stagger-${
                                    index + 4
                                } ${inView ? "visible" : ""}`}
                            >
                                <div className="project-image">
                                    {project.image &&
                                    project.image !==
                                        "/api/placeholder/400/300" ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="project-image-img"
                                            loading="lazy"
                                            decoding="async"
                                            onError={(e) => {
                                                e.target.style.display = "none";
                                                e.target.nextSibling.style.display =
                                                    "flex";
                                            }}
                                        />
                                    ) : null}
                                    <div
                                        className="image-placeholder"
                                        style={
                                            project.image &&
                                            project.image !==
                                                "/api/placeholder/400/300"
                                                ? { display: "none" }
                                                : {}
                                        }
                                    >
                                        <div className="project-category">
                                            {project.category ===
                                                "frontend" && <FaCode />}
                                            {project.category === "backend" && (
                                                <FaServer />
                                            )}
                                            {project.category ===
                                                "fullstack" && <FaDatabase />}
                                        </div>
                                    </div>
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link hover-scale"
                                                title="View Code"
                                            >
                                                <FaGithub />
                                            </a>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-link hover-scale"
                                                title="Live Demo"
                                            >
                                                <FaExternalLinkAlt />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-content">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="project-features">
                                        {project.features
                                            .slice(0, 4)
                                            .map((feature, featureIndex) => (
                                                <span
                                                    key={featureIndex}
                                                    className="feature-tag"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        {project.features.length > 4 && (
                                            <span className="feature-tag more">
                                                +{project.features.length - 3}{" "}
                                                more
                                            </span>
                                        )}
                                    </div>

                                    <div className="project-technologies">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="tech-tag"
                                                >
                                                    {tech}
                                                </span>
                                            ),
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
