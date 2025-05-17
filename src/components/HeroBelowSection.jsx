import React from 'react';
import '../styles/HeroBelowSection.css';
import studentImage from '../assets/studying.jpg';

function HeroBelowSection() {
  return (
    <div className="hero-below-section">
      <div className="hero-below-content">
        <div className="hero-below-image">
          <img 
            src={studentImage} 
            alt="Student with colorful pencils" 
            className="student-image" 
          />
          <div className="diamond-accent"></div>
        </div>
        
        <div className="hero-below-text">
          <h2 className="hero-below-title">
            For every student,
            <br />
            every classroom.
            <br />
            Real results.
          </h2>
          
          <p className="hero-below-description">
            We're a nonprofit with the mission to provide a free, world-class 
            education for anyone, anywhere.
          </p>
          
          <div className="hero-below-buttons">
            <button className="btn btn-learners">Learners</button>
            <button className="btn btn-teachers">Teachers</button>
            <button className="btn btn-parents">Parents</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBelowSection;