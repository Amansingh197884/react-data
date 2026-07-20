import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="py-5 pb-0 bg-white">
      
      <div className="container-fluid p-3 my-5">
        
        <div className="row align-items-center gy-4">
          <div className="col-lg-6 animate__animated animate__fadeInLeft">
            <span className="badge   rounded-pill px-3 py-2 mb-3 fw-semibold text-uppercase tracking-wider">Who We Are</span>
            <h2 className="display-4 fw-bold text-dark mb-4">Architecting Spaces, Elevating Standards</h2>
            <p className="lead text-muted mb-4 fw-semibold">We craft environments where design meets human integration seamlessly, bringing structural luxury directly into utility execution without excessive development pipelines.</p>
            <p className="text-muted fw-semibold">Over a decade of foundational engineering ensures our frameworks are stable, performance-driven, and meticulously executed line by line.</p>
          </div>
          <div className="col-lg-6 text-center animate__animated animate__fadeInRight">
            <div className="p-5 box-ten rounded-4 border shadow-sm position-relative overflow-hidden">
              <div className="display-1 fw-bold  mb-2 ten" >10+</div>
              <h4 className="fw-bold text-dark">Years of Infrastructure Mastery</h4>
              <p className="text-muted mb-0 fw-semibold">Delivering bulletproof ecosystems designed across modern responsive layouts.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}