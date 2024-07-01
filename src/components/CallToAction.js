// src/components/CallToAction.js
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <div className="call-to-action">
      <Link to="/submit-project"><button>Submit Your Project</button></Link>
    </div>
  );
};

export default CallToAction;
