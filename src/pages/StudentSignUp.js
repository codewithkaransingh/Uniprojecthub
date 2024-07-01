// StudentSignup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StudentSignUp.css'; // Import CSS file

const StudentSignup = () => {
  return (
    <div className="signup-container">
      <h1>Student Sign Up</h1>
      <form>
        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="url" id="profilePicture" name="profilePicture" placeholder="Enter URL of your profile picture" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required />
        </div>
        <div className="form-group">
          <label htmlFor="college">College</label>
          <input type="text" id="college" name="college" placeholder="Enter your college/university" required />
        </div>
        <div className="form-group">
          <label htmlFor="educationStatus">Education Status</label>
          <input type="text" id="educationStatus" name="educationStatus" placeholder="Enter your education status (e.g., pursuing, graduated)" required />
        </div>
        <div className="form-group">
          <label htmlFor="graduationYear">Graduation Year</label>
          <input type="number" id="graduationYear" name="graduationYear" placeholder="Enter your graduation year" required />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" placeholder="Write something about yourself"></textarea>
        </div>
        <button type="submit" className="btn-signup">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Log In</Link></p>
    </div>
  );
};

export default StudentSignup;
