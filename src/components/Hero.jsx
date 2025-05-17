import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Transform Your 
          <br />
          <span className="highlight-text">Homeschool Journey</span>
        </h1>
        
        <p className="hero-description">
          Join thousands of families using our innovative platform to create 
          personalized learning experiences that kids love.
        </p>
        
        <div className="hero-cta">
          <button className="cta-btn primary-btn">
            Get Started Free
            <span className="btn-icon">→</span>
          </button>
        </div>
      </div>
      
      <div className="hero-visual">
        <div className="visual-container">
          <div className="image-stack">
            <div className="image-backdrop"></div>
            <img 
              src="./src/assets/study.jpg" 
              alt="Happy student learning" 
              className="main-image"
            />
            <div className="image-overlay"></div>
          </div>
          <div className="learning-path">
            <div className="path-line"></div>
            <div className="path-dot dot-1"></div>
            <div className="path-dot dot-2"></div>
            <div className="path-dot dot-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;