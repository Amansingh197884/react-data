import React, { useState, useEffect } from 'react';
import { FaSlidersH, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import './Hero.css';


import banner1 from '../assets/banner2.jpeg';
import banner2 from '../assets/banner1.jpeg';
import banner3 from '../assets/banner3.jpeg';

const heroImages = [banner1, banner2, banner3];

export default function Home() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section-container">
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`hero-bg-slide ${index === currentImgIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay-dark"></div>

      <div className="hero-content-box">
        {/* <p className="top-brand-subtitle animate-fade-down">
          Luxury Real Estate
        </p> */}

        <h1 className="main-hero-heading animate-fade-up">
          FIND YOUR PLACE
        </h1>

        <div className="search-glass-wrapper animate-fade-in-scale">
          <form onSubmit={(e) => e.preventDefault()} className="search-inner-form">
            
            <div className="search-item flex-select">
              <FaSlidersH className="search-icon" />
              <select className="glass-select" defaultValue="">
                <option value="" disabled hidden>Property Type</option>
                <option value="villa">Villa</option>
                <option value="flat">Flat</option>
                <option value="plot">Plot</option>
              </select>
            </div>

            <div className="vertical-divider"></div>

            <div className="search-item flex-input">
              <FaMapMarkerAlt className="search-icon" />
              <input
                type="text"
                className="glass-input"
                placeholder="Where are you looking?"
              />
            </div>

            <button type="submit" className="search-gold-btn">
              <FaSearch className="btn-icon" />
              <span>FIND HOME</span>
            </button>
          </form>
        </div>

        <div className="bottom-tagline-group animate-fade-up-delay">
          <h3 className="tagline-title">Luxury Living, Reimagined.</h3>
          <p className="tagline-sub">Discover Your Dream in Pune’s Prime Locations.</p>
        </div>
      </div>
    </div>
  );
}