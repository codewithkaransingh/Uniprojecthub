import React from 'react';
import './SubmissionPage.css';

const SubmitProject = () => {
  return (
    <div className="submit-project-container">
      <h2 className="submit-project-heading">Submit Your Project</h2>
      <form className="submit-project-form">
        <div className="form-group">
          <label htmlFor="project-title">Project Title:</label>
          <input type="text" id="project-title" name="projectTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="project-description">Project Description:</label>
          <textarea id="project-description" name="projectDescription"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="project-category">Category:</label>
          <input type="text" id="project-category" name="projectCategory" />
        </div>
        <div className="form-group">
          <label htmlFor="institution">Institution:</label>
          <input type="text" id="institution" name="institution" />
        </div>
        <div className="form-group">
          <label htmlFor="start-date">Start Date:</label>
          <input type="date" id="start-date" name="startDate" />
        </div>
        <div className="form-group">
          <label htmlFor="end-date">End Date:</label>
          <input type="date" id="end-date" name="endDate" />
        </div>
        <div className="form-group">
          <label htmlFor="project-files">Project Files:</label>
          <input type="file" id="project-files" name="projectFiles" multiple />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SubmitProject;
