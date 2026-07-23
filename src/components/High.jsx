import React from 'react';
import './High.css';

export default function AboutUs() {
  return (
    <section className="about-section-container py-5 mt-5" id="about">
      <div className="container-fluid px-3 px-md-5">
        <div className="row align-items-center g-4 g-lg-5">
          
          {/* Left Text Content */}
          <div className="col-lg-6 about-left-col pe-lg-5">
            <div className="about-text-content">
              <span className="about-tag">WHO WE ARE</span>
              <h2 className="about-heading">About Us</h2>
              
              <p className="about-description">
                Aajneeti is a leading real estate developer dedicated to creating
                exceptional residential and commercial projects. With a focus on
                quality, sustainability, and innovation, we manage every aspect from
                design to construction. Our commitment is to deliver outstanding
                developments that redefine modern living.
              </p>

              <button className="discover-btn">
                Discover More <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="col-lg-6 about-right-col ps-lg-5">
            <div className="about-image-wrapper">
              <img 
                src="https://i.pinimg.com/736x/66/2e/d3/662ed34442c03c5b8b1ea7504f4494a5.jpg" 
                alt="Aajneeti Properties Development" 
                className="about-img img-fluid"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}