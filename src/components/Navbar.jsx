import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import './Hero.css'; 

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg luxury-navbar fixed-top ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        
        {/* Brand Logo */}
        <Link className="navbar-brand luxury-brand" to="/" onClick={() => setIsNavOpen(false)}>
          Aajneeti
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 text-gold shadow-none"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Collapsible Nav Links */}
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show mobile-luxury-menu' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-center gap-3 gap-lg-4 py-3 py-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link luxury-nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                to="/" 
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className={`nav-link luxury-nav-link ${location.pathname === '/Property' ? 'active' : ''}`} 
                to="/Property" 
                onClick={() => setIsNavOpen(false)}
              >
                Properties
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className={`nav-link luxury-nav-link ${location.pathname === '/Aboutpage' ? 'active' : ''}`} 
                to="/Aboutpage" 
                onClick={() => setIsNavOpen(false)}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className={`nav-link luxury-nav-link ${location.pathname === '/New' ? 'active' : ''}`} 
                to="/New" 
                onClick={() => setIsNavOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}