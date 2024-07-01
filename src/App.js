import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import StudentProfilePage from './pages/StudentProfilePage';
import ProjectList from './components/ProjectList';
import MessagesPage from './pages/MessagesPage';
import SubmissionPage from './pages/SubmissionPage';
import FAQPage from './pages/FAQPage';
import SignupPage from './pages/SignupPage'; 
import Forums from './pages/Forums';
import EventsPage from './pages/EventsPage';
import ResourcesPage from './pages/ResourcesPage';
import NotificationsPage from './pages/NotificationsPage';
import StudentSignup from './pages/StudentSignUp';
import EducatorSignup from './pages/EducatorSignup';
import AdministratorSignup from './pages/AdministratorSignup';
import InstitutionalSignup from './pages/InstitutionalSignup';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  // Sample project data
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project 1' },
    { id: 2, title: 'Project 2', description: 'Description of Project 2' },
    { id: 3, title: 'Project 3', description: 'Description of Project 3' },
    { id: 4, title: 'Project 4', description: 'Description of Project 4' },
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about-US" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/profile" element={<StudentProfilePage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/projects" element={<ProjectList projects={projects} />} />
        <Route path="/submit-project" element={<SubmissionPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/signup/student" element={<StudentSignup />} />
        <Route path="/signup/educator" element={<EducatorSignup />} /> {/* Educator signup route */}
        <Route path="/signup/administrator" element={<AdministratorSignup />} /> {/* Administrator signup route */}
        <Route path="/signup/institutional" element={<InstitutionalSignup />} /> {/* Institutional signup route */}
      </Routes>

      <Footer/>
      
    </Router>
  );
};

export default App;
