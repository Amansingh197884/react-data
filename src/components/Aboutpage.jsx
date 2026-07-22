import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function AboutUs() {
    return (
        <div className="about-page">
           <div className="contact-container">
                           <header className="contact-heroo">
                               <div className="hero-overlayy">
                                   <div className="hero-contentt">
                                       <Link to="/" className="text-decoration-none text-white me-1">HOME</Link>
                                       <span>/ About Us</span>
                                       <h1 className='font-serif'>About us</h1>
                                   </div>
                               </div>
                           </header>
                       </div>
            <section className="bg-light py-5">
                <div className="container py-lg-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <span className="badge  px-3 py-2 rounded-pill mb-3">
                                About us
                            </span>
                            <h2 className="display-5 fw-bold font-serif text-dark mb-3">
                                Crafting Unforgettable Stay Experiences
                            </h2>
                            <p className="lead text-muted mb-4">
                                Discover premium apartments, curated spaces, and flexible living options built around your comfort and lifestyle.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Link to="/Property" className="btn new-btnb btn-lg px-4 rounded-pill">Explore Properties</Link>
                                <a href="#our-story" className="btn btn-outline-dark btn-lg px-4 rounded-pill">Our Story</a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <img 
                                        src="https://i.pinimg.com/736x/66/2e/d3/662ed34442c03c5b8b1ea7504f4494a5.jpg" 
                                        alt="Luxury Interior" 
                                        className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover mb-3 grid-img"
                                    />
                                    <div className="p-3 text-white new rounded-4 shadow-sm text-center">
                                        <h4 className="fw-bold  mb-0">100%</h4>
                                        <small className="text-white">Verified Properties</small>
                                    </div>
                                </div>
                                <div className="col-6 pt-4">
                                    <div className="p-3 text-white new rounded-4 shadow-sm text-center mb-3">
                                        <h4 className="fw-bold  mb-0">4.9 ★</h4>
                                        <small className="text-light">Guest Satisfaction</small>
                                    </div>
                                    <img 
                                        src="https://i.pinimg.com/736x/9c/57/93/9c5793a7622d418c655551ed90774d84.jpg" 
                                        alt="Modern Living" 
                                        className="img-fluid rounded-4 shadow-sm w-100 object-fit-cover grid-img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="our-story" className="container py-5 my-3">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div className="position-relative pe-lg-3">
                            <img 
                                src="https://i.pinimg.com/736x/b1/d0/c3/b1d0c3926eb7b9c10f6200fc4f68c517.jpg" 
                                alt="Modern Living Room" 
                                className="img-fluid rounded-4 shadow-lg w-100 object-fit-cover story-img"
                            />
                          
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="ps-lg-3">
                            <span className="badge  px-3 py-2 rounded-pill ">Our Mission</span>
                            <h2 className="display-6 fw-bold my-3">Redefining Short-Term </h2>
                            <p className="text-muted leading-relaxed">
                                From a room for a night to a loft for as long as you like, there’s a RoamStay for every occasion. We combine the comfort of a home with the quality and consistency of a boutique hotel.
                            </p>
                            <p className="text-muted leading-relaxed mb-4">
                                Founded with a vision to make travel seamless, our spaces are thoughtfully designed, centrally located, and backed by 24/7 localized support.
                            </p>

                            <div className="d-flex gap-3 pt-2">
                                <Link to="/Property" className="btn new-btnb btn-lg px-4 fs-6 rounded-pill">
                                    Explore Properties
                                </Link>
                                <Link to="/New" className="btn btn-outline-dark btn-lg px-4 fs-6 rounded-pill">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container Apa py-3">
                    <div className="row g-4 text-center">
                        <div className="col-6 col-md-3">
                            <div className="p-3  bg-white rounded-3 shadow-sm h-100 border-0 stat-card">
                                <h3 className="display-6 fw-bold  mb-1">2,500+</h3>
                                <p className="text-muted mb-0 small">Handpicked Apartments</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-3 bg-white rounded-3 shadow-sm h-100 border-0 stat-card">
                                <h3 className="display-6 fw-bold  mb-1">50k+</h3>
                                <p className="text-muted mb-0 small">Happy Guests Served</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-3 bg-white rounded-3 shadow-sm h-100 border-0 stat-card">
                                <h3 className="display-6 fw-bold  mb-1">15+</h3>
                                <p className="text-muted mb-0 small">Cities Worldwide</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-3 bg-white rounded-3 shadow-sm h-100 border-0 stat-card">
                                <h3 className="display-6 fw-bold  mb-1">4.9 ★</h3>
                                <p className="text-muted mb-0 small">Average Guest Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container part py-5 my-4">
                <div className="text-center mx-auto mb-5 header-container">
                    <span className="text-black fw-bold text-uppercase small">Why Choose Us</span>
                    <h2 className="fw-bold fs-2 mt-2">Designed for comfort, built for peace of mind</h2>
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100 p-4 rounded-4 text-center feature-card">
                            <div className="bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3 icon-wrapper">
                                <i className="bi bi-house-door fs-3"></i>
                            </div>
                            <h4 className="h5 fw-bold mb-2">Prime Locations</h4>
                            <p className="text-muted small mb-0">
                                Every stay is situated in vibrant neighborhoods, steps away from top dining and transit hubs.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100 p-4 rounded-4 text-center feature-card">
                            <div className="bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3 icon-wrapper">
                                <i className="bi bi-shield-check fs-3"></i>
                            </div>
                            <h4 className="h5 fw-bold mb-2">Verified Standards</h4>
                            <p className="text-muted small mb-0">
                                High-speed Wi-Fi, professional cleaning, and premium amenities guaranteed in every booking.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm h-100 p-4 rounded-4 text-center feature-card">
                            <div className="bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center mx-auto mb-3 icon-wrapper">
                                <i className="bi bi-headset fs-3"></i>
                            </div>
                            <h4 className="h5 fw-bold mb-2">24/7 Concierge</h4>
                            <p className="text-muted small mb-0">
                                Our dedicated local support team is always available to help you during your stay.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

          

            <section className="bg-light py-5">
                <div className="container py-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-4">
                                <h2 className="fw-bold">Frequently Asked Questions</h2>
                                <p className="text-muted">Everything you need to know about booking with us</p>
                            </div>

                            <div className="accordion accordion-flush rounded-4 overflow-hidden shadow-sm" id="aboutFaq">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            How does check-in work at RoamStay properties?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#aboutFaq">
                                        <div className="accordion-body text-muted">
                                            All our properties feature 24/7 keyless self check-in. You'll receive your unique entry code 24 hours prior to arrival.
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            Are high-speed internet and workspaces available?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#aboutFaq">
                                        <div className="accordion-body text-muted">
                                            Yes! Every apartment is equipped with high-speed fiber Wi-Fi and dedicated workspace setups for remote work.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}