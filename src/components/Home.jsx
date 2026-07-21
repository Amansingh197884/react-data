import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

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
    <div className="bg-light min-vh-100 overflow-x-hidden position-relative aman">
      <header
        className="animated-hero text-white"
        style={{ backgroundImage: `url(${heroImages[currentImgIndex]})` }}
      >
        <div className="hero-overlay"></div>

        <div className="container text-center hero-content-wrapper pt-5 mt-5">
          <div className="animate__animated animate__fadeInDown">
            <span className="text-warning text-uppercase mb-2 tracking-wide font-serif">
              Aajneeti Properties
            </span>
            <h1 className="display-4 fw-light mb-4 text-uppercase tracking-wider font-serif" style={{ letterSpacing: '-1px' }}>
              Find Your Place
            </h1>
          </div>

          <div className="row justify-content-center mx-1 animate__animated animate__fadeInUp animate__delay-1s home-form">
            <div className="col-lg-8 search-container mx-auto p-2 rounded shadow-lg backdrop-blur mb-5">
              <form onSubmit={(e) => e.preventDefault()} className="row g-2 align-items-center m-0">
                <div className="col-md-5">
                  <div className="input-group location-ss">
                    <span className="input-group-text bg-transparent border-0 text-white opacity-50"><i className="bi bi-sliders"></i></span>
                    <select className="form-select bg-transparent border-0 text-white-50 custom-select">
                      <option value="Property Type">Property Type</option>
                      <option value="apartment">Apartment</option>
                      <option value="villa">Villa</option>
                    </select>
                  </div>
                </div>

                {/* 2 */}

                <div className="col-md-4">
                  <div className="input-group location-s">
                    <span className="input-group-text bg-transparent border-0 text-white opacity-50"><i className="bi bi-geo-alt"></i></span>
                    <input type="text" className="form-control bg-transparent border-0 text-white custom-input" placeholder="Location" />
                  </div>
                </div>
                <div className="col-md-2 ms-md-auto location-sss">
                  
                  <button className="btn text-white  w-100 py-2  fw-semibold tracking-wide home-search">
                    Search <i className="bi bi-search ms-2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

