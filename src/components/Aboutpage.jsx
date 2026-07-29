import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    FaChevronDown, 
    FaEye, 
    FaBullseye, 
    FaBuilding, 
    FaShieldAlt, 
    FaHeadset, 
    FaArrowRight 
} from 'react-icons/fa';
import './About.css';

export default function AboutUs() {
    const [openFaq, setOpenFaq] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="aria-about-page">
            
            {/* Hero Banner Header */}
            <header className="aria-contact-hero">
                <div className="aria-hero-overlay">
                    <div className="aria-hero-content text-center">
                        <div className="aria-breadcrumb mb-2">
                            <Link to="/" className="text-decoration-none">HOME</Link>
                            <span> / ABOUT US</span>
                        </div>
                        <h1 className="mv-section-title">ABOUT US</h1>
                    </div>
                </div>
            </header>

            {/* Intro Section */}
            <section className="aria-section py-5">
                <div className="container py-lg-4">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <span className="aria-gold-badge mb-3 d-inline-block">
                                ABOUT US
                            </span>
                            <h2 className="mv-section-title fs-2">
                                Crafting Unforgettable Stay Experiences
                            </h2>
                            <p className="aria-text-muted lead mb-4">
                                Discover premium apartments, curated spaces, and flexible living options built around your comfort and lifestyle.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Link to="/Property" className="aria-btn-gold">Explore Properties</Link>
                                <a href="#our-story" className="aria-btn-outline">Our Story</a>
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
                                    <div className="p-3 text-white aria-card-box rounded-4 text-center">
                                        <h4 className="fw-bold aria-gold-text mb-0">100%</h4>
                                        <small className="aria-text-muted">Verified Properties</small>
                                    </div>
                                </div>
                                <div className="col-6 pt-4">
                                    <div className="p-3 text-white aria-card-box rounded-4 text-center mb-3">
                                        <h4 className="fw-bold aria-gold-text mb-0">4.9 ★</h4>
                                        <small className="aria-text-muted">Guest Satisfaction</small>
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

            {/* Our Story Section */}
            <section id="our-story" className="aria-section py-5 my-3 aria-bg-card-wrap">
                <div className="container">
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
                                <span className="aria-gold-badge mb-2 d-inline-block">OUR MISSION</span>
                                <h2 className="mv-section-title fs-2">Redefining Short-Term Living</h2>
                                <p className="aria-text-muted leading-relaxed">
                                    From a room for a night to a loft for as long as you like, there’s a RoamStay for every occasion. We combine the comfort of a home with the quality and consistency of a boutique hotel.
                                </p>
                                <p className="aria-text-muted leading-relaxed mb-4">
                                    Founded with a vision to make travel seamless, our spaces are thoughtfully designed, centrally located, and backed by 24/7 localized support.
                                </p>

                                <div className="d-flex gap-3 pt-2">
                                    <Link to="/Property" className="aria-btn-gold">
                                        Explore Properties
                                    </Link>
                                    <Link to="/New" className="aria-btn-outline">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Counter Section */}
            <section className="aria-section py-5">
                <div className="container py-3">
                    <div className="row g-4 text-center">
                        <div className="col-6 col-md-3">
                            <div className="p-4 aria-card-box rounded-4 h-100 stat-card">
                                <h3 className="mv-section-title aria-gold-text mb-1">2,500+</h3>
                                <p className="aria-text-muted mb-0 small">Handpicked Apartments</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-4 aria-card-box rounded-4 h-100 stat-card">
                                <h3 className="mv-section-title aria-gold-text mb-1">50k+</h3>
                                <p className="aria-text-muted mb-0 small">Happy Guests Served</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-4 aria-card-box rounded-4 h-100 stat-card">
                                <h3 className="mv-section-title aria-gold-text mb-1">15+</h3>
                                <p className="aria-text-muted mb-0 small">Cities Worldwide</p>
                            </div>
                        </div>
                        <div className="col-6 col-md-3">
                            <div className="p-4 aria-card-box rounded-4 h-100 stat-card">
                                <h3 className="mv-section-title aria-gold-text mb-1">4.9 ★</h3>
                                <p className="aria-text-muted mb-0 small">Average Guest Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="mission-vision-section py-5 mt-5" id="mission-vision">
                 <div className="container-fluid px-3 px-md-5">
                   
                   {/* Section Header */}
                   <div className="text-center mb-5">
                     <span className="mv-section-tag">OUR PURPOSE</span>
                     <h2 className="mv-section-title">Driving Real Estate Excellence</h2>
                   </div>
           
                   {/* Mission & Vision Cards Grid */}
                   <div className="row g-4 justify-content-center">
                     
                     {/* Our Vision Card */}
                     <div className="col-lg-6 col-md-12">
                       <div className="mv-card h-100">
                         <div className="mv-card-header d-flex align-items-center justify-content-between mb-4">
                           <div className="mv-icon-box">
                             <FaEye className="mv-icon" />
                           </div>
                           <button className="mv-discover-btn">
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
           
                     {/* Our Mission Card */}
                     <div className="col-lg-6 col-md-12">
                       <div className="mv-card h-100">
                         <div className="mv-card-header d-flex align-items-center justify-content-between mb-4">
                           <div className="mv-icon-box">
                             <FaBullseye className="mv-icon" />
                           </div>
                           <button className="mv-discover-btn">
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

            {/* Featured Projects Section */}
            <section className="aria-section py-5">
                <div className="container-fluid px-5">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="mv-section-title">Featured Projects</h2>
                        </div>
                        <Link to="/Property" className="aria-btn-outline d-none d-md-inline-block">
                            View All Projects <FaArrowRight />
                        </Link>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="aria-project-card">
                                <img 
                                    src="https://i.pinimg.com/736x/66/2e/d3/662ed34442c03c5b8b1ea7504f4494a5.jpg" 
                                    alt="Luxury Residency" 
                                />
                                <div className="aria-project-overlay">
                                    <h4>Luxury Residency</h4>
                                    <small>Delhi / NCR</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="aria-project-card">
                                <img 
                                    src="https://i.pinimg.com/736x/9c/57/93/9c5793a7622d418c655551ed90774d84.jpg" 
                                    alt="Sky Villas" 
                                />
                                <div className="aria-project-overlay">
                                    <h4>Sky Villas & Suites</h4>
                                    <small>Mumbai Central</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="aria-project-card">
                                <img 
                                    src="https://i.pinimg.com/736x/9e/a6/f2/9ea6f210710c28863bb3009105687db7.jpg" 
                                    alt="Private Estates" 
                                />
                                <div className="aria-project-overlay">
                                    <h4>Private Estates</h4>
                                    <small>Bengaluru Hills</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Cards Section */}
            <section className="aria-section py-5 aria-bg-card-wrap">
                <div className="container">
                    <div className="text-center mx-auto mb-5">
                        <span className="aria-gold-sub">WHY CHOOSE US</span>
                        <h2 className="mv-section-title text-white fs-2 mt-2">Designed for comfort, built for peace of mind</h2>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="aria-card-box h-100 p-4 rounded-4 text-center feature-card">
                                <div className="aria-icon-circle mx-auto mb-3">
                                    <FaBuilding />
                                </div>
                                <h4 className="h5 text-white aria-font-serif mb-2">Prime Locations</h4>
                                <p className="aria-text-muted small mb-0">
                                    Every stay is situated in vibrant neighborhoods, steps away from top dining and transit hubs.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="aria-card-box h-100 p-4 rounded-4 text-center feature-card">
                                <div className="aria-icon-circle mx-auto mb-3">
                                    <FaShieldAlt />
                                </div>
                                <h4 className="h5 text-white aria-font-serif mb-2">Verified Standards</h4>
                                <p className="aria-text-muted small mb-0">
                                    High-speed Wi-Fi, professional cleaning, and premium amenities guaranteed in every booking.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="aria-card-box h-100 p-4 rounded-4 text-center feature-card">
                                <div className="aria-icon-circle mx-auto mb-3">
                                    <FaHeadset />
                                </div>
                                <h4 className="h5 text-white aria-font-serif mb-2">24/7 Concierge</h4>
                                <p className="aria-text-muted small mb-0">
                                    Our dedicated local support team is always available to help you during your stay.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section className="aria-section py-5">
                <div className="container py-3">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="text-center mb-5">
                                <span className="aria-gold-sub">QUESTIONS & ANSWERS</span>
                                <h2 className="mv-section-title text-white display-6">Frequently Asked Questions</h2>
                                <p className="aria-text-muted">Everything you need to know about booking with us</p>
                            </div>

                            <div className="aria-faq-container">
                                <div className={`aria-faq-item ${openFaq === 0 ? 'active' : ''}`} onClick={() => toggleFaq(0)}>
                                    <div className="aria-faq-header">
                                        <h5>How does check-in work at RoamStay properties?</h5>
                                        <FaChevronDown className="aria-faq-arrow" />
                                    </div>
                                    {openFaq === 0 && (
                                        <div className="aria-faq-body">
                                            All our properties feature 24/7 keyless self check-in. You'll receive your unique entry code 24 hours prior to arrival.
                                        </div>
                                    )}
                                </div>

                                <div className={`aria-faq-item ${openFaq === 1 ? 'active' : ''}`} onClick={() => toggleFaq(1)}>
                                    <div className="aria-faq-header">
                                        <h5>Are high-speed internet and workspaces available?</h5>
                                        <FaChevronDown className="aria-faq-arrow" />
                                    </div>
                                    {openFaq === 1 && (
                                        <div className="aria-faq-body">
                                            Yes! Every apartment is equipped with high-speed fiber Wi-Fi and dedicated workspace setups for remote work.
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}