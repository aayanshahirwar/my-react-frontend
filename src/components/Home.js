import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to My React Website</h1>
        <p>Beautiful, modern, and responsive design</p>
        <button className="cta-button">Get Started</button>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <h3>🚀 Fast & Modern</h3>
          <p>Built with latest React technology</p>
        </div>
        <div className="feature-card">
          <h3>🎨 Beautiful UI</h3>
          <p>Clean and professional design</p>
        </div>
        <div className="feature-card">
          <h3>📱 Responsive</h3>
          <p>Works on all devices</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
