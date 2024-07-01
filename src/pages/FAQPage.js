// FAQPage.js

import React from 'react';
import './FAQPage.css';

const FAQPage = () => {
  return (
    <div className="faq-page">
      <div className="heading">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq-section">
        <h2>Ques. 1 What is the purpose of this integrated platform for student projects?</h2>
        <p>Ans. Our platform aims to create a centralized knowledge hub for projects undertaken by students in Indian universities and colleges. It facilitates peer learning, cross-functional research, and the discovery of unique and innovative project works.</p>
      </div>
      <div className="faq-section">
        <h2>Ques. 2 How does the platform ensure the authenticity and originality of the projects ?</h2>
        <p>Ans. We incorporate a plagiarism checker that compares submitted projects with existing works in our database, ensuring the uniqueness and originality of each project.</p>
      </div>
      <div className="faq-section">
        <h2>Ques 3 What benefits does the recommendation system offer to users ?</h2>
        <p>Ans. The recommendation system provides personalized suggestions to users, enhancing their browsing experience by suggesting similar or interesting projects in their field of interest. This feature promotes learning from peers and facilitates collaboration and mentorship opportunities.</p>
      </div>
      <div className="faq-section">
        <h2>Ques. 4 How does the recommendation system work ?</h2>
        <p>Ans. Our recommendation system utilizes machine learning algorithms to analyze user preferences and project attributes, generating tailored project recommendations for each user based on their interests and past interactions with the platform.</p>
      </div>
      <div className="faq-section">
        <h2>Ques. 5 How can universities and colleges contribute to the platform ?</h2>
        <p>Ans. Educational institutions can share information about student projects undertaken at various levels, enriching the platform's database and fostering collaboration and knowledge exchange among students and educators nationwide.</p>
      </div>
      <div className="faq-section">
        <h2>Ques. 6 Can users interact with project creators or mentors through the platform ?</h2>
        <p>Ans. Yes, our platform enables users to connect with project creators, mentors, and collaborators, facilitating discussions, feedback exchange, and potential partnerships for future projects.</p>
      </div>
      <div className="faq-section">
        <h2>Ques. 7 Is there a mechanism for users to report plagiarism or inappropriate content ?</h2>
        <p>Ans. Yes, we have implemented a reporting feature that allows users to flag any instances of plagiarism or inappropriate content, which are promptly reviewed and addressed by our moderation team.</p>
      </div>
      <div className="faq-section">
        <h2>Ques. 8 How can I contribute my project to the platform ?</h2>
        <p>Ans. Students can submit their projects to the platform through a simple submission process, providing relevant details and documentation to showcase their work to the community.</p>
      </div>
      <div className="faq-section">
        <h2>Ques. 9 Is the platform accessible to users from all educational institutions in India ?</h2>
        <p>Ans. Yes, our platform is open to students and educators from all universities and colleges across India, promoting inclusivity and collaboration within the academic community.</p>
      </div>
      <div className="faq-section">
        <h2>Ques. 10 How can I stay updated on new projects and platform developments?</h2>
        <p>Ans. Users can subscribe to our newsletter or follow our social media channels to receive updates on new projects, platform features, and upcoming events or initiatives.</p>
      </div>
      {/* Rest of the FAQ content */}
    </div>
  );
};

export default FAQPage;
