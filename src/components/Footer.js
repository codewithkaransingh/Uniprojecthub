// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    // <footer>
    //   <nav>
    //     <hr/>
    //     <div className='footer'> 
    //       <li><Link to="/about">About Us</Link></li>
    //       <li><Link to="/contact">Contact</Link></li>
    //       <li><Link to="/privacy-policy">Privacy Policy</Link></li>
    //     </div>
    //   </nav>
    // </footer>
    <footer >
     <div>Questions? Call <a href="">000-800-100-8343</a></div>
      <div class="footer-grid">
      <div class="footer-items">
        <a href="">About</a>
        <a href="">Help</a>
        
      </div>
      <div class="footer-items">
        <a href="">FaQ</a>
        <a href="">Team</a>
       




      </div>
      <div class="footer-items">
        <a href="">Account</a>
        <a href="">Ways to reach</a>
       
      </div>
      <div class="footer-items">
        <a href="">events</a>
        <a href="">Term of uses</a>
       
        




      </div>
    </div>
    </footer>
  );
};

export default Footer;
