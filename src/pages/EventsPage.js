import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import EventForm from './EventForm';
import './EventsPage.css';

const EventPage = () => {
  // Sample event data
  const [events] = useState([
    {
      id: 1,
      title: "Webinar: Introduction to React",
      date: "2024-03-15",
      time: "10:00 AM - 12:00 PM",
      location: "Online",
      description: "Join us for an introductory webinar on React.js. Learn the basics of React and how to build dynamic web applications.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      title: "Workshop: Building RESTful APIs with Node.js",
      date: "2024-03-20",
      time: "2:00 PM - 4:00 PM",
      location: "123 Main Street, Cityville",
      description: "Hands-on workshop on building RESTful APIs with Node.js. Learn how to create routes, handle requests, and integrate with databases.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      title: "Webinar: Introduction to React",
      date: "2024-03-15",
      time: "10:00 AM - 12:00 PM",
      location: "Online",
      description: "Join us for an introductory webinar on React.js. Learn the basics of React and how to build dynamic web applications.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      title: "Webinar: Introduction to React",
      date: "2024-03-15",
      time: "10:00 AM - 12:00 PM",
      location: "Online",
      description: "Join us for an introductory webinar on React.js. Learn the basics of React and how to build dynamic web applications.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
    }
    // Add more sample events as needed
  ]);

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Function to show event details modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  // Function to hide event details modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="event-page-container">
      <header className="fixed-header">
        <div className="d-flex justify-content-between">
          <h1>Events</h1>
          <Button variant="primary" onClick={handleShowModal}>Create Event</Button>
        </div>
      </header>
      
      <div className="event-list">
        {events.map(event => (
          <Card key={event.id} className="mb-3">
            <Card.Img variant="top" src={event.image} />
            <Card.Body>
              <Card.Title>{event.title}</Card.Title>
              <Card.Text>
                <strong>Date:</strong> {event.date}<br />
                <strong>Time:</strong> {event.time}<br />
                <strong>Location:</strong> {event.location}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Create Event Modal */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventForm />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EventPage;
