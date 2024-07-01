import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Forums.css';

const Forums = () => {
  // Dummy data for demonstration
  const [threads, ] = useState([]);   //setThreads shpould be added


  // Fetch threads from backend (to be implemented later)
  useEffect(() => {
    // Fetch threads from backend API
    // Example:
    // fetchThreads()
    //   .then(threadsData => setThreads(threadsData))
    //   .catch(error => console.error('Error fetching threads:', error));
  }, []);

  return (
    <div className="forums">
      <h1>Forums</h1>
      {/* Forum categories */}
      <div className="forum-categories">
        <h2>Categories</h2>
        <ul>
          <li><Link to="/forums/javascript">JavaScript</Link></li>
          <li><Link to="/forums/react">React</Link></li>
          <li><Link to="/forums/python">Python</Link></li>
          {/* Add more categories */}
        </ul>
      </div>

      {/* Discussion threads */}
      <div className="discussion-threads">
        <h2>Recent Threads</h2>
        {threads.length === 0 ? (
          <p>No threads found.</p>
        ) : (
          <ul>
            {threads.map(thread => (
              <li key={thread.id}>
                <Link to={`/forums/${thread.category}/${thread.id}`}>
                  <h3>{thread.title}</h3>
                  <p>{thread.author} - {thread.created_at}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Forums;
