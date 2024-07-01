// StudentProfilePage.js

import React from 'react';
import './ProfilePage.css';


const StudentProfilePage = () => {
  // User data
  const user = {
    profilePicture: 'https://media.licdn.com/dms/image/D4D03AQFrLOpUCYeyrQ/profile-displayphoto-shrink_400_400/0/1693813520047?e=1712793600&v=beta&t=fXRVzVnETGu2_EbqKOeWMwMkP1UlnBDDOKggxh1rYjc',
    username: 'Harsh Jangra',
    email: 'harsh2002jangra@gmail.com',
    phoneNumber: '6376852698',
    college: 'MITRC Alwar',
    educationStatus: 'Pursuing',
    graduationYear: '2024',
    bio: 'A passionate learner and developer.',
    projects: ['Project 1', 'Project 2', 'Project 3'],
    followingCount: 10000,
    followersCount: 200,
    activities: ['Liked Project 1', 'Commented on Project 2'],
  };

  return (
    <div className='student-profile-container'>
      <h2>Student Profile</h2>
      <div>
        <img className='profile-picture' src={user.profilePicture} alt="Profile" />
        <div className='profile-details'>
        <h3 >{user.username}</h3>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.phoneNumber}</p>
        <p>College: {user.college}</p>
        <p>Education: {user.educationStatus} - {user.graduationYear}</p>
        <p>Bio: {user.bio}</p>
        <h3>Projects</h3>
        </div>
        <ul className='projects-list '>
          {user.projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
        <p>Following: {user.followingCount} | Followers: {user.followersCount}</p>
        <h3>Activity Feed</h3>
        <ul className='activities-list'>
          {user.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        <button className='edit-profile-button'>Edit Profile</button>
      </div>
    </div>
  );
};

export default StudentProfilePage;
