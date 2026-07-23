import React, { useState, useEffect } from 'react';
import { FaSlidersH, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import './Hero.css';

const heroImages = [
  "https://i.pinimg.com/1200x/2e/8c/f4/2e8cf45d4b5980b2110944dfe2afe4d8.jpg",
  "https://i.pinimg.com/1200x/69/fb/af/69fbaf394b30a03d673865eb3c661584.jpg",
  "https://i.pinimg.com/1200x/c5/6e/94/c56e940486969a64984fdf3e3d1f2f14.jpg"
];

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
      {/* Background Image Carousel */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`hero-bg-slide ${index === currentImgIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay-dark"></div>

      <div className="hero-content-box">
        {/* <p className="top-brand-subtitle">AAJNEETI PROPERTIES</p> */}

        <h1 className="main-hero-heading">FIND YOUR PLACE</h1>

        <div className="search-glass-wrapper">
          <form onSubmit={(e) => e.preventDefault()} className="search-inner-form">
            
            <div className="search-item flex-select">
<i className="bi bi-sliders text-white me-2"></i>              <select className="glass-select">
                <option value="">Property Type</option>
                <option value="villa">Villa</option>
                <option value="flat">Flat</option>
                <option value="plot">Plot</option>
              </select>
            </div>

            <div className="vertical-divider"></div>

            <div className="search-item flex-input">
<i className="bi bi-geo-alt me-2 text-white"></i>              <input
                type="text"
                className="glass-input"
                placeholder="Where are you looking?"
              />
            </div>

            <button type="submit" className="search-gold-btn">
              <i className="bi bi-search ms-2"></i>
              <span>FIND HOME</span>
            </button>
          </form>
        </div>

        <div className="bottom-tagline-group">
          <h3 className="tagline-title">Luxury Living, Reimagined.</h3>
          <p className="tagline-sub">Discover Your Dream in Pune’s Prime Locations.</p>
        </div>
      </div>
    </div>
  );
}