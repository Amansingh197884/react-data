import React from 'react';
import './WhoWeAre.css';

export default function WhoWeAre() {
  return (
    <section className="who-we-are-section py-5 mb-5" id="who-we-are">
      <div className="container-fluid px-3 px-md-5">
        <div className="row align-items-center g-4 g-lg-5">
          
          {/* Left Text Content */}
          <div className="col-lg-7 wwa-left-col pe-lg-5">
            <div className="wwa-text-content">
              <span className="wwa-tag">WHO WE ARE</span>
              <h2 className="wwa-heading">
                Architecting Spaces, <br className="d-none d-md-block" /> Elevating Standards
              </h2>
              
              <p className="wwa-description">
                We craft environments where design meets human integration seamlessly,
                bringing structural luxury directly into utility execution without excessive
                development pipelines.
              </p>

              <p className="wwa-subtext">
                Over a decade of foundational engineering ensures our frameworks are stable, performance-driven, and meticulously executed line by line.
              </p>
            </div>
          </div>

          {/* Right Experience / Stats Glass Card */}
          <div className="col-lg-5 wwa-right-col ps-lg-4">
            <div className="experience-glass-card text-center">
              <div className="stat-number">10+</div>
              <h3 className="stat-title">Years of Infrastructure Mastery</h3>
              <p className="stat-description">
                Delivering bulletproof ecosystems designed across modern responsive layouts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}