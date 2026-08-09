import React, { useState, useEffect } from 'react';

export default function PropertySubNav() {
  const [activeTab, setActiveTab] = useState('about-us');

  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about-us', 'unit-features', 'amenities', 'pricing-plans', 'location-map', 'book-tour'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className="sticky-top" 
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#15110b',
        borderBottom: '1px solid rgba(201, 164, 91, 0.35)',
        zIndex: 99999,
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.7)',
        width: '100%'
      }}
    >
      <div className="container-fluid px-3 px-md-5">
        <div className="d-flex align-items-center justify-content-between overflow-auto" style={{ height: '60px', scrollbarWidth: 'none' }}>
          
          <ul className="d-flex align-items-center m-0 p-0 list-unstyled" style={{ gap: '28px', whiteSpace: 'nowrap' }}>
            <li>
              <a 
                href="#about-us" 
                style={{
                  color: activeTab === 'about-us' ? '#c9a45b' : '#f6efde',
                  fontWeight: 500,
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  padding: '18px 0',
                  borderBottom: activeTab === 'about-us' ? '2px solid #c9a45b' : 'none'
                }}
                onClick={(e) => handleScrollTo(e, 'about-us')}
              >
                About Us
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
                  padding: '18px 0',
                  borderBottom: activeTab === 'unit-features' ? '2px solid #c9a45b' : 'none'
                }}
                onClick={(e) => handleScrollTo(e, 'unit-features')}
              >
                Unit Features
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
                  padding: '18px 0',
                  borderBottom: activeTab === 'amenities' ? '2px solid #c9a45b' : 'none'
                }}
                onClick={(e) => handleScrollTo(e, 'amenities')}
              >
                Amenities
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
                  padding: '18px 0',
                  borderBottom: activeTab === 'pricing-plans' ? '2px solid #c9a45b' : 'none'
                }}
                onClick={(e) => handleScrollTo(e, 'pricing-plans')}
              >
                Pricing & Floor Plan
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
                  padding: '18px 0',
                  borderBottom: activeTab === 'location-map' ? '2px solid #c9a45b' : 'none'
                }}
                onClick={(e) => handleScrollTo(e, 'location-map')}
              >
                Location & Map
              </a>
            </li>
          </ul>

          <div className="d-none d-md-block">
            <a 
              href="#book-tour" 
              style={{
                background: 'linear-gradient(180deg, #c9a45b 0%, #9e7a37 100%)',
                color: '#15110b',
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '8px 20px',
                borderRadius: '50px',
                textDecoration: 'none'
              }}
              onClick={(e) => handleScrollTo(e, 'book-tour')}
            >
              Book Private Tour
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}