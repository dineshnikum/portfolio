import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import "./Contact.css";

const contactInfo = [
    {
        icon: FaEnvelope,
        title: "Email",
        value: "dineshnikum1@gmail.com",
        link: "mailto:dineshnikum1@gmail.com",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Location",
        value: "Ahmedabad, Gujarat, India",
        link: "#",
    },
];

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

const Contact = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
            alert("Thank you for your message! I'll get back to you soon.");
        }, 2000);
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <div
                    ref={ref}
                    className={`contact-container ${inView ? "visible" : ""}`}
                >
                    <h2
                        className={`section-title animate-fade-in-up animate-stagger-1 ${
                            inView ? "visible" : ""
                        }`}
                    >
                        Get In Touch
                    </h2>

                    <p
                        className={`contact-description animate-fade-in-up animate-stagger-2 ${
                            inView ? "visible" : ""
                        }`}
                    >
                        I'm always interested in new opportunities and exciting
                        projects. Let's discuss how we can work together!
                    </p>

                    <div className="contact-content">
                        <div
                            className={`contact-info animate-fade-in-up animate-stagger-3 ${
                                inView ? "visible" : ""
                            }`}
                        >
                            <h3>Let's Connect</h3>
                            <p>
                                Feel free to reach out if you're looking for a
                                developer, have a question, or just want to say
                                hi!
                            </p>

                            <div className="contact-details">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={info.title}
                                        href={info.link}
                                        className={`contact-item hover-scale animate-fade-in-up animate-stagger-${
                                            index + 4
                                        } ${inView ? "visible" : ""}`}
                                    >
                                        <div className="contact-icon">
                                            <info.icon />
                                        </div>
                                        <div className="contact-text">
                                            <h4>{info.title}</h4>
                                            <p>{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="social-links">
                                <h4>Follow Me</h4>
                                <div className="social-icons">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`social-link hover-scale hover-rotate animate-fade-in-scale animate-stagger-${
                                                index + 7
                                            } ${inView ? "visible" : ""}`}
                                        >
                                            <social.icon />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <form
                            className={`contact-form animate-fade-in-up animate-stagger-4 ${
                                inView ? "visible" : ""
                            }`}
                            onSubmit={handleSubmit}
                        >
                            <h3>Send Message</h3>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="form-textarea"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary form-submit hover-scale"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
