import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaAngleDown, FaEnvelope, FaBell } from 'react-icons/fa';
import logo from '../images/logo.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import './Header.css';

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const closeDropdownOnClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', closeDropdownOnClickOutside);

    return () => {
      document.removeEventListener('mousedown', closeDropdownOnClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  const closeDropdown = () => {
    setShowDropdown(false);
  };
  
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    closeDropdown(); // Close the dropdown after logout
  };
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="UniProjectHub Logo" style={{ width: '50px', height: 'auto' }} />
        </Link>
      </div>
      <div className="site-name">
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>UniProjectHub</Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          {/* <li><Link to="/connect">Connect</Link></li> */}
        </ul>
        <div className="search-bar" onClick={() => console.log("Search bar clicked")}>
          <input type="text" placeholder="Search..." />
          <FaSearch className="search-icon" onClick={() => console.log("Search icon clicked")} />
        </div>
      </nav>
      <div className="user-profile">
        {isAuthenticated ? (
          <div className="user-info" onClick={toggleDropdown}>
            <div className="user-avatar">
              <img src={user.picture} alt={user.name + "'s Avatar"} />
            </div>
            <div className="user-details">
              <span className="user-name">{user.name}</span>
              <span className="user-email">{user.email}</span>
            </div>
            <FaAngleDown className={`dropdown-icon ${showDropdown ? 'open' : ''}`} />
          </div>
        ) : (
          <button onClick={() => loginWithRedirect()} className="btn btn-primary">Login</button>
        )}
        {showDropdown && (
          <div className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
            <ul>
              <li><Link to="/profile" onClick={closeDropdown}>Profile</Link></li>
              <li><Link to="/settings" onClick={closeDropdown}>Settings</Link></li>
              <li><Link to="/faq" onClick={closeDropdown}>FAQ</Link></li>
              <li><Link to="/messages" onClick={closeDropdown}><FaEnvelope /> Messages</Link></li>
              <li><Link to="/notifications" onClick={closeDropdown}><FaBell /> Notifications</Link></li>
              <li><button onClick={handleLogout} className="btn btn-secondary">Logout</button></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
