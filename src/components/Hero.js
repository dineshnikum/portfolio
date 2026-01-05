import { FaArrowDown } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import "./Hero.css";

const Hero = () => {
  const typedStrings = [
    "MERN Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Full Stack Developer",
    "JavaScript Developer",
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title fade-in-up delay-200">
              Hi, I'm <span className="highlight">Dinesh</span>
            </h1>

            <div className="hero-subtitle fade-in-up delay-400">
              <ReactTyped
                strings={typedStrings}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="typed-text"
              />
            </div>

            <p className="hero-description fade-in-up delay-600">
              Passionate fresher developer with expertise in modern web
              technologies. I build scalable applications using React, Node.js,
              Express, and MongoDB. Always eager to learn and contribute to
              innovative projects.
            </p>

            <div className="hero-buttons fade-in-up delay-800">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>

          <div className="hero-image fade-in-scale delay-400">
            <div className="image-container">
              <div className="image-placeholder">
                <div className="image-content">
                  <div className="avatar">
                    <div className="avatar-inner">
                      <img
                        src="/images/profile-picture.png"
                        alt="Dinesh Nikum"
                        className="profile-image"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "block";
                        }}
                      />
                      <span style={{ display: "none" }}>DN</span>
                    </div>
                  </div>
                </div>
                <div className="floating-elements">
                  <div className="floating-element element-1">MongoDB</div>
                  <div className="floating-element element-2">Node.js</div>
                  <div className="floating-element element-3">React</div>
                  <div className="floating-element element-4">Express</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator fade-in delay-1500">
          <a href="#about" className="scroll-link">
            <FaArrowDown />
            <span>Scroll Down</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

