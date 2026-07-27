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
        <div className="container-fluid">
          <Link className="navbar-brand luxury-brand" to="/" onClick={() => setIsNavOpen(false)}>
          <img src={Logo} alt="Logo" /> Ariahaus
          </Link>

          <button
            className="navbar-toggler border-0 shadow-none p-0"
            type="button"
            onClick={() => setIsNavOpen(true)}
          >
            <FaBars size={26} className="text-white" />
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

      <div 
        className={`side-drawer-backdrop ${isNavOpen ? 'open' : ''}`} 
        onClick={() => setIsNavOpen(false)}
      ></div>

      <div className={`side-drawer-menu ${isNavOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <span className="drawer-brand">Aajneeti</span>
          <button className="close-btn" onClick={() => setIsNavOpen(false)}>
            <FaTimes size={24} className="text-white" />
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