import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import './ContactUs.css'; // Import your CSS file for styling

function ContactUsPage() {
  const [state, handleSubmit] = useForm("xrgnpojv"); // Replace "xrgnpojv" with your actual Formspree form ID
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  // State variables to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    setSubmitted(true); // Set submitted state to true after form submission
  };

  if (state.succeeded || submitted) {
    return (
      <div className="thank-you-container">
        <img src="data:image/png;base64,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" alt="Thank You" />
      </div>
    );
  }

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleFormSubmit} className="contact-form">
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Your Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={state.submitting}>Submit</button>
      </form>
    </div>
  );
}

export default ContactUsPage;
