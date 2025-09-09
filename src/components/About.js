import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>Our Story</h2>
          <p>We create amazing web experiences using React and modern technologies.</p>
          <p>Our team is passionate about building beautiful and functional websites.</p>
        </div>
        <div className="about-image">
          <div className="placeholder-image">📷</div>
        </div>
      </div>
    </div>
  );
};

export default About;
