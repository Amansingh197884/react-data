import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container my-5">
        <h2 className="display-5 fw-bold text-center text-dark mb-5">Trusted Ecosystem Reviews</h2>
        <div className="row g-4">
          <div className="col-lg-6 animate__animated animate__fadeInUp">
            <div className="card border-0 bg-white p-4 p-md-5 rounded-4 h-100 position-relative shadow-sm">
              <FaQuoteLeft className="text-primary-subtle position-absolute opacity-25 end-0 bottom-0 m-4" size={70} />
              <div className="text-warning mb-3 d-flex gap-1">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="fs-5 text-dark mb-4 position-relative z-1">"The responsive breakdown updates across screen sizes instantly without compiling messy utility classes. A straightforward configuration."</p>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{width:'45px', height:'45px'}}>AS</div>
                <div>
                  <h6 className="fw-bold mb-0">Aman Singh</h6>
                  <small className="text-muted">Lead Frontend Architect</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="card border-0 bg-white p-4 p-md-5 rounded-4 h-100 position-relative shadow-sm">
              <FaQuoteLeft className="text-primary-subtle position-absolute opacity-25 end-0 bottom-0 m-4" size={70} />
              <div className="text-warning mb-3 d-flex gap-1">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <p className="fs-5 text-dark mb-4 position-relative z-1">"Building layouts on native Bootstrap classes with Swiper state hooks delivers beautiful framerates on target hardware profiles."</p>
              <div className="d-flex align-items-center gap-3">
                <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{width:'45px', height:'45px'}}>RD</div>
                <div>
                  <h6 className="fw-bold mb-0">Rohan Das</h6>
                  <small className="text-muted">Operations Director</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}