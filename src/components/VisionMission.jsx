import React from 'react';
import { FaEye, FaBullseye } from 'react-icons/fa';

export default function VisionMission() {
  return (
    <section id="vision" className="py-5 mt-5 vision-yy bg-light border-top border-bottom">
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-6 animate__animated animate__fadeInUp ">
            <div className="card h-100 p-5 border-0 shadow-sm rounded-4 custom-card-glow bg-white card-vi">
              <div className=" text-white rounded-3 p-3 d-inline-block mb-4 d-flex align-items-center justify-content-between">
                <FaEye className='vision' size={50} />
                 <div>
              <button className="btn new-btn">
                Discover More
              </button>
            </div>
                </div>
              <h3 className="fw-bold mb-3">Our Vision</h3>
              <p className="text-muted mb-0">To become the core framework standard for engineering modern premium habitats, removing heavy optimization hurdles while prioritizing responsive layouts and lightweight native CSS physics globally.</p>
              
            </div>
          </div>
          <div className="col-md-6 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="card h-100 p-5 border-0 shadow-sm rounded-4 custom-card-glow card-vi">
              <div className=" text-white rounded-3 p-3 d-inline-block mb-4 d-flex align-items-center justify-content-between"><FaBullseye className='vision' size={50} />
                <div>
              <button className="btn new-btn ">
                Discover More
              </button>
            </div></div>
              <h3 className="fw-bold mb-3">Our Mission</h3>
              <p className="text-muted mb-0">To deliver reliable infrastructure that scales smoothly down to ultra-portable breakpoints. We ensure high-performance execution, accessible components, and beautiful layouts built strictly on clean styling structures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}