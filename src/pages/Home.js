import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to UniProjectHub</h1>
          <p>A platform to showcase and discover innovative projects from students across universities.</p>
          <Link to="/projects" className="btn btn-primary">Explore Projects</Link>
        </div>
      </section>
      
      <section className="features">
        <div className="feature">
          <h2>Peer Learning</h2>
          <p>Explore a wide range of projects from various fields to learn from your peers.</p>
        </div>
        <div className="feature">
          <h2>Collaboration</h2>
          <p>Find potential collaborators or mentors for your projects.</p>
        </div>
        <div className="feature">
          <h2>Knowledge Sharing</h2>
          <p>Contribute your projects to share knowledge and inspire others.</p>
        </div>
      </section>
      
      {/* Add more sections as needed */}
    </div>
  );
};

export default HomePage;
