import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/dineshnikum", label: "GitHub" },
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

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section animate-fade-in-up animate-stagger-1 visible">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-description">
              A passionate MERN stack developer creating innovative web
              solutions with modern technologies and best practices.
            </p>
            <div className="footer-social">
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
          </div>

          <div className="footer-section animate-fade-in-up animate-stagger-2 visible">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li
                  key={link.name}
                  className={`animate-fade-in-left animate-stagger-${
                    index + 1
                  } visible`}
                >
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section animate-fade-in-up animate-stagger-3 visible">
            <h4 className="footer-heading">Technologies</h4>
            <div className="tech-tags">
              {[
                "React",
                "Node.js",
                "MongoDB",
                "Express",
                "JavaScript",
                "CSS3",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className={`tech-tag animate-fade-in-scale animate-stagger-${
                    index + 1
                  } visible`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="footer-section animate-fade-in-up animate-stagger-4 visible">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="contact-info">
              <p>dineshnikum1@gmail.com</p>
              <p>+91 7572980384</p>
              <p>Ahmedabad, Gujarat, India</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom animate-fade-in animate-stagger-5 visible">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Portfolio. Dinesh Nikum. All rights reserved.
            </p>
            <p className="footer-note">
              Built with React, CSS Animations & lots of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

