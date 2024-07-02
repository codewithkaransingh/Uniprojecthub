// AboutUsPage.js

import React, { useEffect } from 'react';
import TeamMember from './TeamMember'; // Import the TeamMember component
import './AboutUs.css'; // Import the CSS file for TeamMember styling

const AboutUsPage = () => {
  useEffect(() => {
    // Add the "animated" class to trigger the fade-in effect
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member) => member.classList.add('animated'));
  }, []);

  return (
    <div>
      {/* Section 1: About the website */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Welcome to UniProjectHub, where innovation and education converge! Our dedicated team of four is on a mission to revolutionize the academic landscape in Indian universities and colleges. We've created a centralized platform that brings together project works from diverse technical and higher educational institutes across the country.
          UniProjectHub goes beyond being a conventional knowledge-sharing platform. We are committed to upholding academic integrity through a robust plagiarism-checking feature, creating a collaborative space for peer learning, and fostering cross-functional research. Imagine a community where students can explore, learn, and collaborate seamlessly across institutions, nurturing a culture of innovation.
          Our technology-driven approach harnesses the power of the MERN stack, Python, Tailwind CSS, and cutting-edge machine learning algorithms. The platform introduces a sophisticated recommendation system, providing users with personalized project suggestions for a tailored learning experience. Additionally, our plagiarism checker ensures the originality and uniqueness of project works, promoting academic authenticity.
          Join us on this exciting journey of academic excellence and innovation at UniProjectHub. It's not just a platform; it's a vibrant community where students can share, learn, and collectively shape the future of education in India. Together, let's unlock the full potential of student projects and redefine the educational landscape.
        </p>
      </section>

      
    </div>
  );
};

export default AboutUsPage;
