import React from 'react';
import { FaEye, FaBullseye, FaArrowRight } from 'react-icons/fa';
import { usePopup } from './PopupContext';
import './MissionVision.css';

export default function MissionVision() {
  let openPopup;
  try {
    const popup = usePopup();
    openPopup = popup?.openPopup || (() => alert("Opening Inquiry Form..."));
  } catch (err) {
    openPopup = () => alert("Opening Inquiry Form...");
  }

  return (
    <section className="mission-vision-section py-5" id="mission-vision">
      <div className="container-fluid px-3 px-md-5">
        <div className="text-start mb-5">
          <span className="mv-section-tag">OUR PURPOSE</span>
          <h2 className="mv-section-title">Driving Real Estate Excellence</h2>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="mv-card h-100">
              <div className="mv-card-header d-flex align-items-center justify-content-between mb-4">
                <div className="mv-icon-box">
                  <FaEye className="mv-icon" />
                </div>
                <button 
                  type="button" 
                  className="mv-discover-btn"
                  onClick={() => openPopup('MissionVision-OurVision')}
                >
                  <span>Discover More</span>
                  <FaArrowRight className="btn-arrow" />
                </button>
              </div>

              <div className="mv-card-body">
                <h3 className="mv-card-title">Our Vision</h3>
                <p className="mv-card-text">
                  To become the core framework standard for engineering modern premium habitats,
                  removing heavy optimization hurdles while prioritizing responsive layouts and
                  delivering sustainable native architectural brilliance globally.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="mv-card h-100">
              <div className="mv-card-header d-flex align-items-center justify-content-between mb-4">
                <div className="mv-icon-box">
                  <FaBullseye className="mv-icon" />
                </div>
                <button 
                  type="button" 
                  className="mv-discover-btn"
                  onClick={() => openPopup('MissionVision-OurMission')}
                >
                  <span>Discover More</span>
                  <FaArrowRight className="btn-arrow" />
                </button>
              </div>

              <div className="mv-card-body">
                <h3 className="mv-card-title">Our Mission</h3>
                <p className="mv-card-text">
                  To deliver reliable infrastructure that scales smoothly to ultra-luxury standards.
                  We ensure high-performance execution, accessible components, and beautiful layouts
                  built strictly on clean, transparent, and customer-centric values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}