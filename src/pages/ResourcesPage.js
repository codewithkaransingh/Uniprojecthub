import React, { useState, useEffect } from 'react';
import './ResourcesPage.css';

const ResourcesPage = () => {
  // Sample resource data
  const [resources, ] = useState([]);   //setResources

  // Fetch resources from backend (to be implemented later)
  useEffect(() => {
    // Fetch resources from backend API
    // Example:
    // fetchResources()
    //   .then(resourcesData => setResources(resourcesData))
    //   .catch(error => console.error('Error fetching resources:', error));
  }, []);

  return (
    <div className="resources">
      <h1>Resources</h1>
      {resources.length === 0 ? (
        <p>No resources found.</p>
      ) : (
        <ul className="resource-list">
          {resources.map(resource => (
            <li key={resource.id} className="resource-item">
              <h2>{resource.title}</h2>
              <p>{resource.description}</p>
              {/* Add additional resource details as needed */}
              <a href={resource.url} className="btn btn-primary">View</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResourcesPage;
