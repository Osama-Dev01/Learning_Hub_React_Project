import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="learning-hub-footer">
      <div className="footer-content">
        <p>© 2025 Learning Academy. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-icon"><FaFacebook /></a>
          <a href="#" className="social-icon"><FaTwitter /></a>
          <a href="#" className="social-icon"><FaInstagram /></a>
          <a href="#" className="social-icon"><FaLinkedin /></a>
          <a href="#" className="social-icon"><FaYoutube /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;