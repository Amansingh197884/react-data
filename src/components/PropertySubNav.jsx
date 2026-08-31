import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.png";

export default function PropertySubNav() {
  const [activeTab, setActiveTab] = useState('about-us');

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActiveTab(id);
    const target = document.getElementById(id);
    if (target) {
      const topOffset = target.offsetTop - 70;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about-us', 
        'amenities', 
        'unit-features', 
        'gallery-section', 
        'floor-plans', 
        'pricing-plans', 
        'location-map', 
        'book-tour'
      ];
      const scrollPos = window.scrollY + 100;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          if (scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
            setActiveTab(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky-top" style={{ backgroundColor: '#15110b', borderBottom: '1px solid rgba(201, 164, 91, 0.35)', zIndex: 99999 }}>
      <div className="container-fluid px-3 px-md-5">
        <div className="d-flex align-items-center justify-content-between overflow-auto" style={{ height: '60px', scrollbarWidth: 'none' }}>
          
          <ul className="d-flex align-items-center m-0 p-0 list-unstyled" style={{ gap: '22px', whiteSpace: 'nowrap' }}>
            
            <li>
              <Link 
                to="/" 
                style={{
                  color: '#f6efde',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <img 
                  src={Logo} 
                  alt="Ariahaus Logo" 
                  style={{ height: '28px', width: 'auto', objectFit: 'contain' }} 
                />
                <span>Home</span>
              </Link>
            </li>

            <li style={{ color: 'rgba(201, 164, 91, 0.4)' }}>|</li>

            <li>
              <a
                href="#about-us"
                style={{
                  color: activeTab === 'about-us' ? '#c9a45b' : '#f6efde',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: activeTab === 'about-us' ? '2px solid #c9a45b' : '2px solid transparent'
                }}
                onClick={(e) => scrollToSection(e, 'about-us')}
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#amenities"
                style={{
                  color: activeTab === 'amenities' ? '#c9a45b' : '#f6efde',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: activeTab === 'amenities' ? '2px solid #c9a45b' : '2px solid transparent'
                }}
                onClick={(e) => scrollToSection(e, 'amenities')}
              >
                Highlights
              </a>
            </li>

            <li>
              <a
                href="#unit-features"
                style={{
                  color: activeTab === 'unit-features' ? '#c9a45b' : '#f6efde',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: activeTab === 'unit-features' ? '2px solid #c9a45b' : '2px solid transparent'
                }}
                onClick={(e) => scrollToSection(e, 'unit-features')}
              >
                Amenities
              </a>
            </li>

            <li>
              <a
                href="#gallery-section"
                style={{
                  color: activeTab === 'gallery-section' ? '#c9a45b' : '#f6efde',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: activeTab === 'gallery-section' ? '2px solid #c9a45b' : '2px solid transparent'
                }}
                onClick={(e) => scrollToSection(e, 'gallery-section')}
              >
                Gallery
              </a>
            </li>

            <li>
              <a
                href="#floor-plans"
                style={{
                  color: activeTab === 'floor-plans' ? '#c9a45b' : '#f6efde',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: activeTab === 'floor-plans' ? '2px solid #c9a45b' : '2px solid transparent'
                }}
                onClick={(e) => scrollToSection(e, 'floor-plans')}
              >
                Floor Plans
              </a>
            </li>

            <li>
              <a
                href="#pricing-plans"
                style={{
                  color: activeTab === 'pricing-plans' ? '#c9a45b' : '#f6efde',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: activeTab === 'pricing-plans' ? '2px solid #c9a45b' : '2px solid transparent'
                }}
                onClick={(e) => scrollToSection(e, 'pricing-plans')}
              >
                Pricing Plans
              </a>
            </li>

            <li>
              <a
                href="#location-map"
                style={{
                  color: activeTab === 'location-map' ? '#c9a45b' : '#f6efde',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: activeTab === 'location-map' ? '2px solid #c9a45b' : '2px solid transparent'
                }}
                onClick={(e) => scrollToSection(e, 'location-map')}
              >
                Location & Map
              </a>
            </li>

            <li>
              <a
                href="#book-tour"
                style={{
                  color: activeTab === 'book-tour' ? '#c9a45b' : '#f6efde',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  paddingBottom: '4px',
                  borderBottom: activeTab === 'book-tour' ? '2px solid #c9a45b' : '2px solid transparent'
                }}
                onClick={(e) => scrollToSection(e, 'book-tour')}
              >
                Contact Us
              </a>
            </li>

          </ul>

          <div className="d-none d-md-block ms-3">
            <a
              href="#book-tour"
              style={{
                background: '#c9a45b',
                color: '#15110b',
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '8px 20px',
                borderRadius: '50px',
                textDecoration: 'none'
              }}
              onClick={(e) => scrollToSection(e, 'book-tour')}
            >
              Book Private Tour
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}