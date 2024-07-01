// Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css'; // Import CSS file

const Signup = () => {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <p>Select your role:</p>
      <ul className="role-list">
        <li><Link to="/signup/student">Student</Link></li>
        <li><Link to="/signup/educator">Educator</Link></li>
        <li><Link to="/signup/institutional">Institutional</Link></li>
        <li><Link to="/signup/administrator">Administrator</Link></li>
      </ul>
    </div>
  );
};

export default Signup;
