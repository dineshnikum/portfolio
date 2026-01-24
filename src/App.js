import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./App.css";

// Lazy load components below the fold for better initial load performance
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading fallback component
const LoadingFallback = () => (
    <div style={{ 
        minHeight: "200px", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center" 
    }}>
        <div style={{ 
            width: "40px", 
            height: "40px", 
            border: "4px solid rgba(59, 130, 246, 0.2)", 
            borderTop: "4px solid #3b82f6", 
            borderRadius: "50%", 
            animation: "spin 1s linear infinite" 
        }}></div>
        <style>{`
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `}</style>
    </div>
);

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <Hero />
                <Suspense fallback={<LoadingFallback />}>
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
