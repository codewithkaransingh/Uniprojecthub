// EducatorSignup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './EducatorSignup.css'; // Import CSS file

const EducatorSignup = () => {
  return (
    <div className="signup-container">
      <h1>Educator Sign Up</h1>
      <form>
        {/* Form fields */}
      </form>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
  );
};

export default EducatorSignup;
