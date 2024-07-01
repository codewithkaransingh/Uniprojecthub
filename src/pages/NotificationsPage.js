import React, { useState, useEffect } from 'react';
import './NotificationsPage.css';

const NotificationsPage = () => {
  // Sample notification data
  const [notifications, ] = useState([]); //setNotifications

  // Fetch notifications from backend (to be implemented later)
  useEffect(() => {
    // Fetch notifications from backend API
    // Example:
    // fetchNotifications()
    //   .then(notificationsData => setNotifications(notificationsData))
    //   .catch(error => console.error('Error fetching notifications:', error));
  }, []);

  return (
    <div className="notifications">
      <h1>Notifications</h1>
      {notifications.length === 0 ? (
        <p>No notifications found.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map(notification => (
            <li key={notification.id} className="notification-item">
              <p>{notification.message}</p>
              {/* Add additional notification details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationsPage;
