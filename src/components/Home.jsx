import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSlidersH, FaMapMarkerAlt, FaSearch, FaSpinner } from 'react-icons/fa';
import './Hero.css';

import banner1 from '../assets/banner2.jpeg';
import banner2 from '../assets/banner1.jpeg';
import banner3 from '../assets/banner3.jpeg';

const heroImages = [banner1, banner2, banner3];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [type, setType] = useState('flat');
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loadingLoc, setLoadingLoc] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const searchWrapperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Real-time location auto-suggest
  useEffect(() => {
    if (!location.trim() || location.trim().length < 2) {
      setSuggestions([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(async () => {
      setLoadingLoc(true);
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}&countrycodes=in&addressdetails=1&limit=6`
        );
        const data = await res.json();
        
        const formatted = (data || []).map((item) => ({
          id: item.place_id,
          name: item.display_name.split(',').slice(0, 3).join(', ')
        }));

        setSuggestions(formatted);
        setIsOpen(formatted.length > 0);
      } catch (err) {
        setSuggestions([]);
      } finally {
        setLoadingLoc(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  const handleSelect = (item) => {
    setLocation(item.name);
    setSuggestions([]);
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const finalLocation = location.trim() || 'Sakleshpur';
    setIsOpen(false);
    navigate(`/PropertySearch?type=${type}&location=${encodeURIComponent(finalLocation)}`);
  };

  return (
    <div className="hero-section-container">
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`hero-bg-slide ${i === index ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay-dark" />

      <div className="hero-content-box">
        <h1 className="main-hero-heading animate-fade-up">
          FIND YOUR PLACE
        </h1>

        <div className="search-glass-wrapper animate-fade-in-scale" ref={searchWrapperRef}>
          <form onSubmit={handleSearch} className="search-inner-form">
            <div className="search-item flex-select">
              <FaSlidersH className="search-icon" />
              <select 
                className="glass-select" 
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="flat">Flat</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
              </select>
            </div>

            <div className="vertical-divider" />

            <div className="search-item flex-input">
              <FaMapMarkerAlt className="search-icon" />
              <input
                type="text"
                className="glass-input"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => suggestions.length > 0 && setIsOpen(true)}
                autoComplete="off"
                required
              />
              {loadingLoc && <FaSpinner className="spinner-icon ms-2" />}
            </div>

            <button type="submit" className="search-gold-btn">
              <FaSearch className="btn-icon" />
              <span>FIND HOME</span>
            </button>
          </form>

          {/* Clean Solid-Glass Dropdown */}
          {isOpen && suggestions.length > 0 && (
            <div className="api-suggestions-dropdown">
              <div className="dropdown-header">Matching Indian Locations</div>
              {suggestions.map((item) => (
                <div
                  key={item.id}
                  className="suggestion-item"
                  onClick={() => handleSelect(item)}
                >
                  <div className="sugg-icon"><FaMapMarkerAlt /></div>
                  <span className="sugg-text">{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bottom-tagline-group animate-fade-up-delay">
          <h3 className="tagline-title">Luxury Living, Reimagined.</h3>
          <p className="tagline-sub">Discover Verified Real Estate across India.</p>
        </div>
      </div>
    </div>
  );
}