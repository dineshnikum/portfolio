import { useState, useEffect } from "react";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import "./Header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Navigation items
    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    //Social Links
    const socialLinks = [
        {
            icon: FaGithub,
            href: "https://github.com/dineshnikum",
            label: "GitHub",
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/dinesh-nikum-53ab142a3/",
            label: "LinkedIn",
        },
        {
            icon: FaInstagram,
            href: "https://www.instagram.com/dinesh.nikum18/",
            label: "Instagram",
        },
    ];

    return (
        <header
            className={`header ${
                isScrolled ? "scrolled" : ""
            } animate-slide-in-down visible`}
        >
            <div className="container">
                <div className="header-content">
                    <div className="logo hover-scale">
                        <a href="#home">Portfolio</a>
                    </div>

                    <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
                        <ul className="nav-list">
                            {navItems.map((item, index) => (
                                <li
                                    key={item.name}
                                    className={`animate-fade-in-down animate-stagger-${
                                        index + 1
                                    } visible`}
                                >
                                    <a
                                        href={item.href}
                                        className="nav-link"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`social-link hover-scale hover-rotate animate-fade-in-scale animate-stagger-${
                                        index + 1
                                    } visible`}
                                >
                                    <social.icon />
                                </a>
                            ))}
                        </div>
                    </nav>

                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
