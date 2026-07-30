import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/Logo.png";

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
    <>
      <nav className={`navbar navbar-expand-lg p-2 luxury-navbar fixed-top ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid px-3 px-md-5">
          <Link className="navbar-brand luxury-brand d-flex align-items-center gap-2" to="/" onClick={() => setIsNavOpen(false)}>
            <img src={Logo} alt="Ariahaus Logo" className="navbar-logo-img" /> 
            <span>Ariahaus</span>
          </Link>

          <button
            className="navbar-toggler border-0 shadow-none p-0 d-lg-none"
            type="button"
            onClick={() => setIsNavOpen(true)}
            aria-label="Toggle Navigation"
          >
            <FaBars size={24} className="text-gold-icon" />
          </button>

          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ms-auto align-items-center gap-5">
              <li className="nav-item">
                <Link className={`nav-link luxury-nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link luxury-nav-link ${location.pathname === '/Property' ? 'active' : ''}`} to="/Property">Properties</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link luxury-nav-link ${location.pathname === '/Aboutpage' ? 'active' : ''}`} to="/Aboutpage">About</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link luxury-nav-link ${location.pathname === '/New' ? 'active' : ''}`} to="/New">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Side Drawer Backdrop */}
      <div 
        className={`side-drawer-backdrop ${isNavOpen ? 'open' : ''}`} 
        onClick={() => setIsNavOpen(false)}
      ></div>

      {/* Side Drawer Menu for Mobile */}
      <div className={`side-drawer-menu ${isNavOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span className="drawer-brand">Ariahaus</span>
          <button className="close-btn" onClick={() => setIsNavOpen(false)} aria-label="Close Menu">
            <FaTimes size={22} className="text-gold-icon" />
          </button>
        </div>

        <ul className="drawer-nav-list">
          <li>
            <Link className={`drawer-link ${location.pathname === '/' ? 'active' : ''}`} to="/" onClick={() => setIsNavOpen(false)}>Home</Link>
          </li>
          <li>
            <Link className={`drawer-link ${location.pathname === '/Property' ? 'active' : ''}`} to="/Property" onClick={() => setIsNavOpen(false)}>Properties</Link>
          </li>
          <li>
            <Link className={`drawer-link ${location.pathname === '/Aboutpage' ? 'active' : ''}`} to="/Aboutpage" onClick={() => setIsNavOpen(false)}>About</Link>
          </li>
          <li>
            <Link className={`drawer-link ${location.pathname === '/New' ? 'active' : ''}`} to="/New" onClick={() => setIsNavOpen(false)}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
}