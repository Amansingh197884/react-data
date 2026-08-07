import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
    FaRulerCombined,
    FaBed,
    FaBath,
    FaCompass,
    FaArrowRight,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaClock,
    FaCheck, 
    FaCrown, 
    FaBuilding, 
    FaGem,
    FaStar,
    FaTree,
    FaSwimmingPool,
    FaShieldAlt,
    FaSubway,
    FaPlane,
    FaHospital,
    FaFacebookF, 
  FaInstagram, 
  FaWhatsapp, 
  FaGlobe, 
  FaArrowUp
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Logo from "../assets/Logo.png";
import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';
import './DetailsFooter.css';

const galleryImages = [
    { id: 1, url: "https://i.pinimg.com/236x/c3/e9/c0/c3e9c03dc28256bf151861402f86a64b.jpg", caption: "Exterior Architectural View" },
    { id: 2, url: "https://i.pinimg.com/736x/e6/46/51/e646510afdef4bde6ad87324f2c56a9b.jpg", caption: "Grand Entrance & Hallway" },
    { id: 3, url: "https://i.pinimg.com/736x/ae/ac/3e/aeac3ea759cc35792286ffab3946bdc4.jpg", caption: "Living Room with Panoramic View" },
    { id: 4, url: "https://i.pinimg.com/736x/8b/07/b1/8b07b191b3ba0d33497bf8c01500b2ba.jpg", caption: "Italian Show Kitchen & Dining" },
    { id: 5, url: "https://i.pinimg.com/736x/94/9a/37/949a375cb4562db2209c97e06b5aa568.jpg", caption: "Infinity Pool Deck" }
];

const propertyHighlights = [
    { icon: <FaTree />, title: "20-Acre Coffee Estate", desc: "Private eco-luxury living immersed in natural greenery." },
    { icon: <FaSwimmingPool />, title: "Private Temperature Pool", desc: "Dedicated plunge pool with direct sun lounge access." },
    { icon: <FaShieldAlt />, title: "3-Tier Smart Security", desc: "Biometric access, 24/7 CCTV, and guarded perimeter." },
    { icon: <FaStar />, title: "5-Star Hospitality", desc: "Fully managed rental, housekeeping, and private chef." }
];

const locationLandmarks = [
    { icon: <FaPlane />, title: "International Airport", distance: "45 Mins Drive" },
    { icon: <FaSubway />, title: "Metro & Transit Hub", distance: "10 Mins Walk" },
    { icon: <FaHospital />, title: "Super Specialty Hospital", distance: "15 Mins Drive" },
    { icon: <FaBuilding />, title: "Business & Tech Park", distance: "20 Mins Drive" }
];

const unitFeatures = [
    { img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Bedrooms_0.png?itok=2BVMNNzU", title: "5 Master Bedrooms" },
    { img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/All%20bedrooms%20en%20suite_0.png?itok=_FRit2AT", title: "En-suite Bathrooms" },
    { img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Bathrooms_3.png?itok=L6aWyNGV", title: "6 Spa-Luxury Baths" },
    { img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/BOH-Kitchen.png?itok=7k0C6ce7", title: "Italian Show Kitchen" },
    { img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/Terrace.png?itok=jqqaZHWC", title: "Sky View Terrace" },
    { img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/Garden.png?itok=0MtIWwBN", title: "Private Lawn & Park View" },
    { img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Parking%20for%20%202%20cars.png?itok=uqcm4Edv", title: "4 Covered Parkings" },
    { img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Maid%20%26%20Driver%20rooms.png?itok=cxufmeNZ", title: "Staff Quarters" }
];

const FloorImages = [
    {
        id: 1,
        url: "https://i.pinimg.com/1200x/d0/fc/eb/d0fceb317febcbf0368beb6db1ebeab1.jpg",
        title: "Ground Floor Layout",
        bhk: "3 BHK Villa",
        area: "1,850 Sq.Ft.",
        baths: "3 Baths",
        facing: "East Facing",
        features: ["Double Height Living", "Private Deck", "Lawn Access", "2 Car Parking"]
    },
    {
        id: 2,
        url: "https://i.pinimg.com/736x/b5/a5/10/b5a510c9eafaa5f3c6a172021af5bf0f.jpg",
        title: "First Floor Suite Plan",
        bhk: "2 BHK + Study",
        area: "1,420 Sq.Ft.",
        baths: "2 Baths",
        facing: "North-East",
        features: ["Master Bedroom", "Private Balcony", "Work Lounge"]
    },
    {
        id: 3,
        url: "https://i.pinimg.com/736x/0d/db/82/0ddb821540197828c6f3aab237db7f2f.jpg",
        title: "Penthouse & Sky Deck",
        bhk: "4 BHK Duplex",
        area: "2,600 Sq.Ft.",
        baths: "4 Baths",
        facing: "Panoramic View",
        features: ["Plunge Pool Deck", "Island Kitchen", "Terrace Garden"]
    }
];

const heroSlides = [
    {
        title: "20-Acre Eco-Luxury Estate in Sakleshpur",
        subtitle: "Exclusive 2, 3, 4 & 5 BHK Private Villas nestled in serene coffee plantations with private plunge pools, 5-star hospitality, and 3-tier security.",
        highlight: "Starting at ₹1.15 Cr Onwards",
        image: "https://i.pinimg.com/1200x/8d/28/34/8d2834c2c580401ba7f836145be43484.jpg"
    },
    {
        title: "Elevated Living Amidst Coffee Corridors",
        subtitle: "Spacious Italian Show Kitchens, Double-Height Living Areas, Sky View Terraces, and 24/7 Managed Concierge Services.",
        highlight: "RERA Registered · K-RERA/11/BLG/0013/2026",
        image: "https://i.pinimg.com/1200x/27/ce/7b/27ce7bf6c7768ba02de43ba8e4ad1cbd.jpg"
    }
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImgIndex, setSelectedImgIndex] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isYearly, setIsYearly] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqNX2aA79Ijv9g8zxL5TmP_b8BrSs3-uo2SRsZOFCmQ_R6XNlFvaKpbkobnt84ZxbXzg/exec";

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`.trim(),
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                })
            });

            setSent(true);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
            setTimeout(() => setSent(false), 4000);
        } catch (error) {
            alert("Something went wrong. Please try again!");
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <div className="home-wrapper">
            
            {/* 1. HERO SPLIT SECTION */}
         {/* 1. HERO SPLIT SECTION */}
<section className="hero-split-container">
    <div className="hero-overlay-dark"></div>

    <div className="hero-left-panel">
        <div key={currentSlide} className="hero-content-box animate-text">
            <span className="hero-tag-sub mb-2 d-block">ARIAHAUS ESTATE • SAKLESHPUR</span>
            <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
            <p className="hero-subtitle">{heroSlides[currentSlide].subtitle}</p>

            <div className="hero-property-badge">
                <FaGem className="me-2 text-gold" />
                <span>{heroSlides[currentSlide].highlight}</span>
            </div>
        </div>
    </div>

    <div className="hero-right-panel">
        {heroSlides.map((slide, index) => (
            <img
                key={index}
                src={slide.image}
                alt={slide.title}
                className={`hero-slide-img ${index === currentSlide ? 'active' : ''}`}
            />
        ))}

        <div className="hero-nav-controls">
            <button className="nav-btn prev-btn" onClick={() => setCurrentSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)}>
                <FaChevronLeft />
            </button>
            <button className="nav-btn next-btn" onClick={() => setCurrentSlide((currentSlide + 1) % heroSlides.length)}>
                <FaChevronRight />
            </button>
        </div>
    </div>
</section>

            {/* 2. ABOUT US SECTION */}
            <section className="about-section-container py-5" id="about">
                <div className="container-fluid px-3 px-md-5">
                    <div className="row align-items-center g-4 g-lg-5">
                        <div className="col-lg-6 about-left-col pe-lg-5">
                            <div className="about-text-content">
                                <span className="section-tag-gold d-block mb-2">OUR PHILOSOPHY</span>
                                <h2 className="about-heading-dark mb-3">About Us</h2>
                                <blockquote className="villa-quote mb-4">
                                    This villa is more than a home—it's an elevated lifestyle defined by space, privacy, and uninterrupted vistas.
                                </blockquote>
                                <p className="about-description-dark mb-4">
                                    Standing out in its step-up design, all primary daily living spaces are located on one principal level. The upper level is a private sanctuary, home to four generous en-suite bedrooms and a master suite designed for serenity.
                                </p>

                                <button className="discover-btn-gold">
                                    Discover More <FaArrowRight className="ms-2" />
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-6 about-right-col ps-lg-5">
                            <div className="about-image-wrapper border-gold-light">
                                <img
                                    src="https://i.pinimg.com/736x/66/2e/d3/662ed34442c03c5b8b1ea7504f4494a5.jpg"
                                    alt="Luxury Estate"
                                    className="about-img img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HIGHLIGHTS SECTION */}
            <section className="highlights-section py-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="text-center mb-5">
                        <span className="section-tag-gold d-block mb-1">KEY FEATURES</span>
                        <h2 className="about-heading-light">Property Highlights</h2>
                    </div>

                    <div className="row g-4">
                        {propertyHighlights.map((item, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <div className="highlight-card h-100">
                                    <div className="highlight-icon mb-3">
                                        {item.icon}
                                    </div>
                                    <h4 className="highlight-title">{item.title}</h4>
                                    <p className="highlight-desc">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. UNIT FEATURES SECTION */}
            <section className="unit-features-section-paper py-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="text-center mb-5">
                        <span className="section-tag-gold d-block mb-1">SPECIFICATIONS</span>
                        <h2 className="about-heading-dark">Unit Features</h2>
                    </div>

                    <div className="row g-4">
                        {unitFeatures.map((feature, index) => (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                                <div className="feature-item-paper h-100">
                                    <div className="feature-img-wrapper mb-3">
                                        <img src={feature.img} alt={feature.title} className="feature-icon-img-dark" />
                                    </div>
                                    <p className="feature-text-dark m-0">{feature.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. ELEVATED GALLERY SECTION */}
            <section className='Galleryall'>
                <section className="gallery-section-dark py-5">
                    <div className="container-fluid px-3 px-md-5 py-2">
                        <div className="d-flex justify-content-between align-items-end mb-4">
                            <div>
                                <span className="section-tag-gold d-block mb-1">VISUAL TOUR</span>
                                <h2 className="about-heading-light m-0">Gallery</h2>
                            </div>

                            <div className="swiper-custom-navigation gap-2 d-flex">
                                <button className="swiper-prev-btn nav-btn-dark" aria-label="Previous Photo">
                                    <FaChevronLeft />
                                </button>
                                <button className="swiper-next-btn nav-btn-dark" aria-label="Next Photo">
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>

                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={24}
                            slidesPerView={1}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            navigation={{
                                prevEl: '.gallery-section-dark .swiper-prev-btn',
                                nextEl: '.gallery-section-dark .swiper-next-btn',
                            }}
                            breakpoints={{
                                640: { slidesPerView: 1.8 },
                                768: { slidesPerView: 2.5 },
                                1024: { slidesPerView: 3 }
                            }}
                            className="gallery-swiper"
                        >
                            {galleryImages.map((img, index) => (
                                <SwiperSlide key={img.id}>
                                    <div className="gallery-card-luxury" onClick={() => setSelectedImgIndex(index)}>
                                        <img src={img.url} alt={img.caption} />
                                        <div className="gallery-card-overlay">
                                            <span className="gallery-tag">CLICK TO ENLARGE</span>
                                            <p className="gallery-caption-title">{img.caption}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

                {/* LIGHTBOX MODAL */}
                {selectedImgIndex !== null && (
                    <div className="luxury-lightbox-modal" onClick={() => setSelectedImgIndex(null)}>
                        <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
                            <span className="lightbox-counter">
                                {selectedImgIndex + 1} / {galleryImages.length}
                            </span>
                            <button className="lightbox-close-btn" onClick={() => setSelectedImgIndex(null)}>
                                <FaTimes />
                            </button>
                        </div>

                        <button 
                            className="lightbox-arrow-btn lightbox-arrow-left" 
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
                            }}
                            aria-label="Previous image"
                        >
                            <FaChevronLeft />
                        </button>

                        <div className="lightbox-image-container animate-zoom-in" onClick={(e) => e.stopPropagation()}>
                            <img
                                src={galleryImages[selectedImgIndex].url}
                                alt={galleryImages[selectedImgIndex].caption}
                                className="lightbox-main-img"
                            />
                            <div className="lightbox-caption-bar">
                                <p className="lightbox-caption-text">{galleryImages[selectedImgIndex].caption}</p>
                            </div>
                        </div>

                        <button 
                            className="lightbox-arrow-btn lightbox-arrow-right" 
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
                            }}
                            aria-label="Next image"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                )}
            </section>

            {/* 6. ELEVATED FLOOR PLAN SECTION */}
            <section className="fn-section-paper py-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="d-flex justify-content-between align-items-end mb-4">
                        <div>
                            <span className="section-tag-gold d-block mb-1">ARCHITECTURAL LAYOUTS</span>
                            <h2 className="about-heading-dark m-0">Floor Plans</h2>
                        </div>

                        <div className="swiper-custom-navigation gap-2 d-flex">
                            <button type="button" className="swiper-prev-btn nav-btn-light" aria-label="Previous Floor">
                                <FaChevronLeft />
                            </button>
                            <button type="button" className="swiper-next-btn nav-btn-light" aria-label="Next Floor">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1.2}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        navigation={{
                            prevEl: '.fn-section-paper .swiper-prev-btn',
                            nextEl: '.fn-section-paper .swiper-next-btn',
                        }}
                        breakpoints={{
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1200: { slidesPerView: 3 }
                        }}
                        className="gallery-swiper"
                    >
                        {FloorImages.map((plan) => (
                            <SwiperSlide key={plan.id}>
                                <div className="floor-card-paper" onClick={() => setSelectedPlan(plan)}>
                                    <div className="floor-card-img-box">
                                        <img src={plan.url} alt={plan.title} />
                                    </div>
                                    <div className="floor-card-body">
                                        <span className="floor-bhk-badge">{plan.bhk}</span>
                                        <h4 className="floor-title">{plan.title}</h4>
                                        <p className="floor-area-text">{plan.area} • {plan.facing}</p>
                                        <button className="floor-preview-btn">View Interactive Plan <FaArrowRight /></button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Floor Plan Modal */}
                {selectedPlan && (
                    <div className="fp-modal-backdrop" onClick={() => setSelectedPlan(null)}>
                        <div className="fp-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button type="button" className="fp-modal-close" onClick={() => setSelectedPlan(null)}>
                                <FaTimes />
                            </button>

                            <div className="row g-0 align-items-center">
                                <div className="col-lg-7">
                                    <div className="fp-preview-box">
                                        <img src={selectedPlan.url} alt={selectedPlan.title} />
                                    </div>
                                </div>

                                <div className="col-lg-5">
                                    <div className="fp-details-panel p-4 p-md-5">
                                        <span className="badge-gold mb-2 d-inline-block">{selectedPlan.bhk}</span>
                                        <h3 className="fp-detail-title">{selectedPlan.title}</h3>

                                        <div className="fp-stats-grid my-4">
                                            <div className="fp-stat-item">
                                                <FaRulerCombined className="fp-icon" />
                                                <div>
                                                    <small>Total Area</small>
                                                    <h6>{selectedPlan.area}</h6>
                                                </div>
                                            </div>
                                            <div className="fp-stat-item">
                                                <FaBed className="fp-icon" />
                                                <div>
                                                    <small>Type</small>
                                                    <h6>{selectedPlan.bhk}</h6>
                                                </div>
                                            </div>
                                            <div className="fp-stat-item">
                                                <FaBath className="fp-icon" />
                                                <div>
                                                    <small>Baths</small>
                                                    <h6>{selectedPlan.baths}</h6>
                                                </div>
                                            </div>
                                            <div className="fp-stat-item">
                                                <FaCompass className="fp-icon" />
                                                <div>
                                                    <small>Facing</small>
                                                    <h6>{selectedPlan.facing}</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="fp-features-list">
                                            <h5 className="mb-2">Key Highlights:</h5>
                                            <ul>
                                                {selectedPlan.features.map((feat, i) => (
                                                    <li key={i}>{feat}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* 7. LOCATION & CONNECTIVITY SECTION */}
            <section className="location-section py-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-5">
                            <span className="section-tag-gold d-block mb-1">CONNECTIVITY</span>
                            <h2 className="about-heading-light mb-3">Prime Location</h2>
                            <p className="aria-text-stone text-white mb-4">
                                Situated in the heart of Sakleshpur coffee estate corridor, offering seamless access to airports, business hubs, and city landmarks.
                            </p>

                            <div className="location-landmarks-list">
                                {locationLandmarks.map((item, index) => (
                                    <div className="location-item d-flex align-items-center gap-3 mb-3" key={index}>
                                        <div className="location-icon-box">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h5 className="location-title mb-0">{item.title}</h5>
                                            <span className="location-dist">{item.distance}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="location-map-box">
                                <iframe 
                                    title="Estate Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8928373302636!2d75.782012!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3244673199859%3A0xc3f6ef098864703a!2sSakleshpur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                                    width="100%" 
                                    height="420" 
                                    style={{ border: 0, borderRadius: '6px' }} 
                                    allowFullScreen="" 
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing-wrapper-dark py-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="text-start mb-5">
                        <span className="section-tag-gold d-block mb-1">PRICING STRUCTURE</span>
                        <h2 className="about-heading-light">Pricing & Plans</h2>

                        <div className="pricing-toggle-container mt-3 ">
                            <span className= {!isYearly ? "active-toggle-dark" : "inactive-toggle-dark"}>Standard Plan</span>
                            <label className="pricing-switch">
                                <input
                                    type="checkbox"
                                    checked={isYearly}
                                    onChange={() => setIsYearly(!isYearly)}
                                />
                                <span className="slider ps-2 pe-2 round"></span>
                            </label>
                            <span className={isYearly ? "active-toggle-dark" : "inactive-toggle-dark"}>
                                Early Bird Plan <span className="discount-tag">Save 8%</span>
                            </span>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-card-dark">
                                <span className="pricing-card-badge">Popular</span>
                                <div className="pricing-card-header">
                                    <div className="pricing-card-icon"><FaBuilding /></div>
                                    <h3 className="pricing-card-title">Executive Suite</h3>
                                    <div className="pricing-bhk-tag">2 & 3 BHK</div>
                                </div>

                                <div className="pricing-card-price">
                                    <span className="price-amount-dark">
                                        {isYearly ? "₹ 1.15 Cr" : "₹ 1.25 Cr"}
                                    </span>
                                    <span className="price-label-dark">Onwards</span>
                                </div>

                                <hr className="pricing-divider-dark" />

                                <ul className="pricing-features-list-dark">
                                    <li><FaCheck className="check-icon" /><span>1,250 - 1,600 Sq.Ft. Area</span></li>
                                    <li><FaCheck className="check-icon" /><span>Spacious Balconies with Park View</span></li>
                                    <li><FaCheck className="check-icon" /><span>Modular Kitchen Included</span></li>
                                    <li><FaCheck className="check-icon" /><span>1 Reserved Covered Parking</span></li>
                                    <li><FaCheck className="check-icon" /><span>Access to Clubhouse & Pool</span></li>
                                </ul>

                                <button className="discover-btn-gold w-100 mt-4">
                                    Schedule Site Visit <FaArrowRight className="ms-2" />
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-card-dark featured-dark">
                                <span className="pricing-card-badge">Most Premium</span>
                                <div className="pricing-card-header">
                                    <div className="pricing-card-icon"><FaCrown /></div>
                                    <h3 className="pricing-card-title">Royal Penthouse</h3>
                                    <div className="pricing-bhk-tag">4 BHK Duplex</div>
                                </div>

                                <div className="pricing-card-price">
                                    <span className="price-amount-dark">
                                        {isYearly ? "₹ 2.65 Cr" : "₹ 2.85 Cr"}
                                    </span>
                                    <span className="price-label-dark">Onwards</span>
                                </div>

                                <hr className="pricing-divider-dark" />

                                <ul className="pricing-features-list-dark">
                                    <li><FaCheck className="check-icon" /><span>3,200 Sq.Ft. Living Space</span></li>
                                    <li><FaCheck className="check-icon" /><span>Private Deck & Plunge Pool</span></li>
                                    <li><FaCheck className="check-icon" /><span>Italian Marble Flooring</span></li>
                                    <li><FaCheck className="check-icon" /><span>2 Covered Car Parkings</span></li>
                                    <li><FaCheck className="check-icon" /><span>24/7 Personal Concierge</span></li>
                                </ul>

                                <button className="discover-btn-gold w-100 mt-4">
                                    Schedule Site Visit <FaArrowRight className="ms-2" />
                                </button>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-card-dark">
                                <span className="pricing-card-badge">Limited Edition</span>
                                <div className="pricing-card-header">
                                    <div className="pricing-card-icon"><FaGem /></div>
                                    <h3 className="pricing-card-title">Presidential Villa</h3>
                                    <div className="pricing-bhk-tag">5 BHK Villa</div>
                                </div>

                                <div className="pricing-card-price">
                                    <span className="price-amount-dark">
                                        {isYearly ? "₹ 4.20 Cr" : "₹ 4.50 Cr"}
                                    </span>
                                    <span className="price-label-dark">Onwards</span>
                                </div>

                                <hr className="pricing-divider-dark" />

                                <ul className="pricing-features-list-dark">
                                    <li><FaCheck className="check-icon" /><span>5,000+ Sq.Ft. Private Estate</span></li>
                                    <li><FaCheck className="check-icon" /><span>Private Landscaped Garden</span></li>
                                    <li><FaCheck className="check-icon" /><span>Home Automation & Cinema</span></li>
                                    <li><FaCheck className="check-icon" /><span>3 Dedicated Parkings</span></li>
                                    <li><FaCheck className="check-icon" /><span>Private Elevator & Servant Quarter</span></li>
                                </ul>

                                <button className="discover-btn-gold w-100 mt-4">
                                    Schedule Site Visit <FaArrowRight className="ms-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CONTACT FORM SECTION */}
            <div className="new-contact-container py-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="text-start mb-5">
                        <span className="section-tag-gold d-block mb-1">INQUIRIES</span>
                        <h2 className="about-heading-light m-0">Contact Us</h2>
                    </div>

                    <div className="row g-4 justify-content-center align-items-stretch">
                        <div className="col-12 col-lg-4">
                            <div className="new-info-card h-100 p-4 p-md-5 d-flex flex-column justify-content-between">
                                <div>
                                    <h3 className="fw-normal text-white mb-3 font-serif">Contact Information</h3>
                                    <p className="aria-text-stone text-white small mb-4">
                                        Feel free to reach out via phone, email, or visit our office location directly.
                                    </p>

                                    <div className="d-flex flex-column gap-4 my-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="new-icon-box"><FaPhoneAlt /></div>
                                            <div>
                                                <span className="d-block text-uppercase text-gold extra-small">Phone</span>
                                                <strong className="text-white">+91 81477 75092</strong>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-3">
                                            <div className="new-icon-box"><FaEnvelope /></div>
                                            <div>
                                                <span className="d-block text-uppercase text-gold extra-small">Email</span>
                                                <strong className="text-white">info@amyrafarms.com</strong>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-3">
                                            <div className="new-icon-box"><FaMapMarkerAlt /></div>
                                            <div>
                                                <span className="d-block text-uppercase text-gold extra-small">Location</span>
                                                <strong className="text-white">Sakleshpur, Karnataka</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-8">
                            <div className="new-form-card p-4 p-md-5">
                                {sent ? (
                                    <div className="text-center py-5">
                                        <h3 className="text-gold fw-bold font-serif">Message Logged!</h3>
                                        <p className="aria-text-stone small">We will get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-4">
                                            <div className="col-12 col-md-6">
                                                <div className="new-input-group">
                                                    <label className="new-input-label">First Name *</label>
                                                    <input
                                                        type="text"
                                                        className="new-input-field"
                                                        required
                                                        placeholder="First Name"
                                                        value={formData.firstName}
                                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="new-input-group">
                                                    <label className="new-input-label">Last Name *</label>
                                                    <input
                                                        type="text"
                                                        className="new-input-field"
                                                        required
                                                        placeholder="Last Name"
                                                        value={formData.lastName}
                                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="new-input-group">
                                                    <label className="new-input-label">Phone Number</label>
                                                    <input
                                                        type="tel"
                                                        className="new-input-field"
                                                        placeholder="Enter Your No"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-6">
                                                <div className="new-input-group">
                                                    <label className="new-input-label">Email Address *</label>
                                                    <input
                                                        type="email"
                                                        className="new-input-field"
                                                        required
                                                        placeholder="Enter Your Email"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="new-input-group">
                                                    <label className="new-input-label">Your Message *</label>
                                                    <textarea
                                                        className="new-input-field"
                                                        rows="4"
                                                        required
                                                        placeholder="Tell us how we can help you..."
                                                        value={formData.message}
                                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="col-12 mt-4">
                                                <button
                                                    type="submit"
                                                    className="discover-btn-gold w-100 py-3 text-uppercase fw-bold"
                                                    disabled={loading}
                                                >
                                                    {loading ? "Submitting Inquiry..." : (
                                                        <>
                                                            Submit Inquiry <FaPaperPlane className="ms-2" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 10. NEW CUSTOM DETAILS FOOTER */}
      
<footer className="zen-custom-footer py-5">
        <div className="container-fluid px-3 px-md-5">
          
          {/* Main 3-Column Section */}
          <div className="row g-4 g-lg-5 pb-5">
            
            {/* Column 1: Logo, Tagline & Social Icons */}
            <div className="col-lg-4 col-md-12">
              <div className="footer-brand-container">
                <Link to="/" className="text-decoration-none d-flex align-items-center gap-2 mb-3">
                  <img src={Logo} alt="Ariahaus Logo" className="zen-footer-logo" />
                  <span className="zen-footer-brand-title">ARIAHAUS</span>
                </Link>
                
                <p className="zen-footer-tagline mb-4">
                  A luxury villa community in Sakleshpur, Karnataka. Elevation without compromise.
                </p>

                <div className="zen-social-links d-flex align-items-center gap-3">
                  <a href="#facebook" className="zen-social-circle" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="#instagram" className="zen-social-circle" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="#whatsapp" className="zen-social-circle" aria-label="WhatsApp">
                    <FaWhatsapp />
                  </a>
                  <a href="#website" className="zen-social-circle" aria-label="Website">
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Navigate Links */}
            <div className="col-lg-4 col-md-6 ps-lg-5">
              <h6 className="zen-column-header">NAVIGATE</h6>
              <ul className="zen-nav-list">
                <li><Link to="/Property">Residences</Link></li>
                <li><Link to="/#about">Amenities</Link></li>
                <li><Link to="/#gallery">Gallery</Link></li>
                <li><Link to="/#location">Location</Link></li>
                <li><Link to="/New">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="col-lg-4 col-md-6">
              <h6 className="zen-column-header">CONTACT</h6>
              <div className="zen-contact-details">
                <p className="mb-1">
                  <a href="mailto:info@amyrafarms.com" className="zen-email-link">info@amyrafarms.com</a>
                </p>
                <p className="mb-3">
                  <a href="https://ariahausvillas.in" className="zen-email-link">ariahausvillas.in</a>
                </p>
                <div className="zen-address-text">
                  <p className="m-0">Sakleshpur, Coffee Corridor,</p>
                  <p className="m-0">Karnataka, India</p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Sub-Footer Bar */}
          <div className="zen-sub-footer pt-4 border-top-gold">
            <div className="row align-items-center g-3">
              <div className="col-lg-4 col-md-12 text-center text-lg-start">
                <span className="zen-copy-text">© 2026 Ariahaus. All rights reserved.</span>
              </div>

              <div className="col-lg-4 col-md-12 text-center">
                <div className="zen-policy-links d-inline-flex gap-4">
                  <Link to="/Terms">Terms and Conditions</Link>
                  <Link to="/Privacy">Privacy Policy</Link>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 text-center text-lg-end">
                <span className="zen-rera-text">RERA Registered · K-RERA/11/BLG/0013/2026</span>
              </div>
            </div>
          </div>

        </div>
      </footer>
        </div>
    );
}