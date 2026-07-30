import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="luxury-footer py-4">
      <div className="container-fluid px-3 px-md-5">
        <div className="row align-items-center justify-content-between g-3">
          
          {/* Left Side: Copyright Text */}
          <div className="col-md-5 text-center text-md-start">
            <p className="copyright-text mb-0">
              &copy; {currentYear} Areahaus
            </p>
          </div>

          {/* Right Side: Navigation Links */}
          <div className="col-md-7 text-center text-md-end">
            <div className="footer-links-group d-flex flex-wrap justify-content-center justify-content-md-end gap-3 gap-md-4">
              <Link to="/Terms" className="footer-link">Terms and Conditions</Link>
              <Link to="/Privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/Privacy" className="footer-link">System Security</Link>
              
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}