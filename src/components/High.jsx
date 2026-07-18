import React, { useEffect, useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('zoom-in');
        } else {
          entry.target.classList.remove('zoom-in');
        }
      },
      { threshold: 0.2 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="about text-white min-vh-100 d-flex align-items-center overflow-hidden">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch min-vh-100">

          {/* Left Text Column */}
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center px-4 px-md-5 py-5 text-content">
            <h2 className="display-4 fw-bold mb-4">About Us</h2>
            <p className="lead fs-5 mb-5 text-secondary styling-para">
              Aajneeti is a leading real estate developer dedicated to creating exceptional residential and commercial projects. With a focus on quality, sustainability, and innovation, we manage every aspect from design to construction. Our commitment is to deliver outstanding developments that redefine modern living.
            </p>
            <div>
              <button className="btn btn-custom px-4 py-3 rounded-pill fw-semibold">
                Discover More
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="col-12 col-md-6 overflow-hidden position-relative img-container">
            <img
              ref={imageRef}
              src="https://i.pinimg.com/736x/32/c4/1c/32c41c976740c44b8ccd94e9c0c234d8.jpg"
              alt="About Us Wooden Wall"
              className="w-0-initial-img img-fluid w-100 h-100 object-fit-cover scroll-zoom"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;