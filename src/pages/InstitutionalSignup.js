// InstitutionalSignup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './InstitutionalSignup.css'; // Import CSS file

const InstitutionalSignup = () => {
  return (
    <div className="signup-container">
      <h1>Institutional Sign Up</h1>
      <form>
        {/* Form fields */}
      </form>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
  );
};

export default InstitutionalSignup;
