import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaGlobe, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="luxury-footer-main">
      <div className="container-fluid px-3 px-md-5 py-5">
        <div className="row g-4 g-lg-5 pb-5">
          
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="footer-brand-wrap d-flex align-items-center gap-2 mb-3">
              <img src={Logo} alt="Ariahaus Logo" className="footer-logo-img" />
              <span className="footer-brand-text">ARIAHAUS</span>
            </Link>
            <p className="footer-about-text mb-4">
              Architecting sustainable luxury habitats and curated living spaces across prime Indian corridors. Elevation without compromise.
            </p>
            <div className="footer-social-row d-flex align-items-center gap-3">
              <a href="#facebook" className="footer-social-btn" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#instagram" className="footer-social-btn" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://wa.me/918147775092" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="https://ariahausvillas.in" target="_blank" rel="noreferrer" className="footer-social-btn" aria-label="Website"><FaGlobe /></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 ps-lg-4">
            <h6 className="footer-column-heading">NAVIGATION</h6>
            <ul className="footer-nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Property">Residences</Link></li>
              <li><Link to="/Aboutpage">About Us</Link></li>
              <li><Link to="/PropertySearch">Search Properties</Link></li>
              <li><Link to="/New">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-column-heading">PORTFOLIO</h6>
            <ul className="footer-nav-links">
              <li><Link to="/PropertySearch?type=flat">Luxury Apartments</Link></li>
              <li><Link to="/PropertySearch?type=villa">Estate Villas</Link></li>
              <li><Link to="/PropertySearch?type=plot">Coffee Plantation Land</Link></li>
              <li><Link to="/Property">Exclusive Penthouses</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="footer-column-heading">REACH US</h6>
            <div className="footer-contact-details d-flex flex-column gap-3">
              <div className="footer-contact-item d-flex align-items-start gap-3">
                <FaMapMarkerAlt className="footer-contact-icon mt-1" />
                <span>Sakleshpur, Coffee Corridor, Karnataka, India</span>
              </div>
              <div className="footer-contact-item d-flex align-items-center gap-3">
                <FaPhoneAlt className="footer-contact-icon" />
                <a href="tel:8147775092">+91 81477 75092</a>
              </div>
              <div className="footer-contact-item d-flex align-items-center gap-3">
                <FaEnvelope className="footer-contact-icon" />
                <a href="mailto:info@amyrafarms.com">info@amyrafarms.com</a>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-sub-bar pt-4 border-top-glass">
          <div className="row align-items-center g-3">
            <div className="col-md-6 text-center text-md-start">
              <span className="footer-copy-text">
                &copy; {currentYear} Ariahaus Luxury Real Estate. All rights reserved.
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-legal-links d-inline-flex gap-4">
                <Link to="/terms">Terms and Conditions</Link>
                <Link to="/Privacy">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}