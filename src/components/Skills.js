import { useInView } from "react-intersection-observer";

import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaGithub,
    FaDatabase,
    FaServer,
    FaMobile,
    FaCloud,
    FaCode,
} from "react-icons/fa";
import {
    SiMongodb,
    SiExpress,
    SiRedux,
    SiTailwindcss,
    SiBootstrap,
    SiMui,
} from "react-icons/si";
import "./Skills.css";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            {
                name: "React",
                icon: FaReact,
                level: 85,
                color: "#61DAFB",
            },
            {
                name: "JavaScript",
                icon: FaJs,
                level: 80,
                color: "#F7DF1E",
            },
            {
                name: "HTML5",
                icon: FaHtml5,
                level: 90,
                color: "#E34F26",
            },
            {
                name: "CSS3",
                icon: FaCss3Alt,
                level: 85,
                color: "#1572B6",
            },
            {
                name: "Redux",
                icon: SiRedux,
                level: 70,
                color: "#764ABC",
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
                level: 75,
                color: "#06B6D4",
            },
            {
                name: "Zustand",
                icon: FaCode,
                level: 75,
                color: "#FF6B6B",
            },
            {
                name: "Material-UI",
                icon: SiMui,
                level: 70,
                color: "#007FFF",
            },
            {
                name: "Bootstrap",
                icon: SiBootstrap,
                level: 70,
                color: "#7952B3",
            },
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Node.js",
                icon: FaNodeJs,
                level: 80,
                color: "#339933",
            },
            {
                name: "Express",
                icon: SiExpress,
                level: 75,
                color: "#000000",
            },
            {
                name: "MongoDB",
                icon: SiMongodb,
                level: 70,
                color: "#47A248",
            },
            {
                name: "REST APIs",
                icon: FaServer,
                level: 75,
                color: "#FF6B6B",
            },
            {
                name: "Database Design",
                icon: FaDatabase,
                level: 65,
                color: "#4ECDC4",
            },
        ],
    },
    {
        title: "Tools & Others",
        skills: [
            {
                name: "Git",
                icon: FaGitAlt,
                level: 80,
                color: "#F05032",
            },
            {
                name: "GitHub",
                icon: FaGithub,
                level: 85,
                color: "#181717",
            },
            {
                name: "Responsive Design",
                icon: FaMobile,
                level: 90,
                color: "#FF6B6B",
            },
            {
                name: "Cloud Deployment",
                icon: FaCloud,
                level: 60,
                color: "#4285F4",
            },
        ],
    },
];

const Skills = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div
                    ref={ref}
                    className={`skills-container ${inView ? "visible" : ""}`}
                >
                    <h2
                        className={`section-title animate-fade-in-up animate-stagger-1 ${inView ? "visible" : ""}`}
                    >
                        Skills & Technologies
                    </h2>

                    <p
                        className={`skills-description animate-fade-in-up animate-stagger-2 ${inView ? "visible" : ""}`}
                    >
                        Here are the technologies and tools I work with. I'm
                        always learning and expanding my skill set.
                    </p>

                    <div className="skills-content">
                        {skillCategories.map((category, categoryIndex) => (
                            <div
                                key={category.title}
                                className={`skill-category animate-fade-in-up animate-stagger-${categoryIndex + 3} ${inView ? "visible" : ""}`}
                            >
                                <h3 className="category-title">
                                    {category.title}
                                </h3>
                                <div className="skills-grid">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <div
                                                key={skill.name}
                                                className={`skill-card animate-fade-in-up animate-stagger-${skillIndex + 4} ${inView ? "visible" : ""}`}
                                            >
                                                <div
                                                    className="skill-icon"
                                                    style={{
                                                        color: skill.color,
                                                    }}
                                                >
                                                    <skill.icon />
                                                </div>
                                                <div className="skill-info">
                                                    <h4>{skill.name}</h4>
                                                    <div className="skill-level">
                                                        <div className="level-bar">
                                                            <div
                                                                className={`level-fill ${inView ? "animate" : ""}`}
                                                                style={{
                                                                    backgroundColor:
                                                                        skill.color,
                                                                    "--progress-width": `${skill.level}%`,
                                                                }}
                                                            />
                                                        </div>
                                                        <span className="level-percentage">
                                                            {skill.level}%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
