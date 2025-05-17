import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../assets/title.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="learning-hub-header">
      <div className="header-container">
        {/* Logo - Left side */}
        <div className="logo-container">
          <img 
            src={logo} 
            alt="GreenWisdom Learning Hub" 
            className="logo"
          />
        </div>

        {/* Navigation - Center */}
        <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" className="nav-link">Courses</a>
          <a href="#" className="nav-link">About Us</a>
        </nav>

        {/* Search Bar - Right side */}
        <div className="search-container">
          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
            />
            <button className="search-button">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Header;