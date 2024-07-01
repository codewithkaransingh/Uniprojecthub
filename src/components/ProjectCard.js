// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, description, owner, tags, startDate, endDate, technologies, thumbnail, views, downloads, likes } = project;

  // Check if tags is an array before calling join method
  const tagsString = Array.isArray(tags) ? tags.join(', ') : '';

  return (
    <div className="project-card">
      <div className="thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <p><strong>Owner:</strong> {owner}</p>
        <p><strong>Tags:</strong> {tagsString}</p>
        <p><strong>Start Date:</strong> {startDate}</p>
        <p><strong>End Date:</strong> {endDate}</p>
        <p><strong>Technologies:</strong> {technologies.join(', ')}</p>
        <div className="project-stats">
          <p><strong>Views:</strong> {views}</p>
          <p><strong>Downloads:</strong> {downloads}</p>
          <p><strong>Likes:</strong> {likes}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
