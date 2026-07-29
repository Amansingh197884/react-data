import React, { useState, useEffect } from 'react';
import {
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
    FaDownload,
    FaGlobe,
    FaArrowDown,
    FaBed,
    FaRulerCombined,
    FaBath,
    FaCompass,
    FaArrowRight,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaClock,
    FaCheckCircle,
    FaCommentDots,
    FaCheck, FaCrown, FaBuilding, FaGem,
    
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';

const galleryImages = [
    {
        id: 1,
        url: "https://i.pinimg.com/736x/a5/3b/a7/a53ba76257e03f110e14d43e9b834e1b.jpg",
        caption: "Exterior View"
    },
    {
        id: 2,
        url: "https://i.pinimg.com/736x/e6/46/51/e646510afdef4bde6ad87324f2c56a9b.jpg",
        caption: "Grand Entrance & Hallway"
    },
    {
        id: 3,
        url: "https://i.pinimg.com/736x/ae/ac/3e/aeac3ea759cc35792286ffab3946bdc4.jpg",
        caption: "Living Room with Sea View"
    },
    {
        id: 4,
        url: "https://i.pinimg.com/736x/8b/07/b1/8b07b191b3ba0d33497bf8c01500b2ba.jpg",
        caption: "Dining & Show Kitchen Area"
    },
    {
        id: 5,
        url: "https://i.pinimg.com/736x/94/9a/37/949a375cb4562db2209c97e06b5aa568.jpg",
        caption: "Outdoor Pool Deck"
    }
];

const unitFeatures = [
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Bedrooms_0.png?itok=2BVMNNzU",
        title: "5 bedrooms"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/All%20bedrooms%20en%20suite_0.png?itok=_FRit2AT",
        title: "All bedrooms en suite with direct garden access"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Bathrooms_3.png?itok=L6aWyNGV",
        title: "6 bathrooms"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/BOH-Kitchen.png?itok=7k0C6ce7",
        title: "Back of house kitchen"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/Terrace.png?itok=jqqaZHWC",
        title: "Terrace"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/Garden.png?itok=0MtIWwBN",
        title: "Garden with direct access and view to a 40M wide park"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Parking%20for%20%202%20cars.png?itok=uqcm4Edv",
        title: "Enclosed parking for 4 cars"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Maid%20%26%20Driver%20rooms.png?itok=cxufmeNZ",
        title: "Maid and driver rooms"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Step-down%20villa_0.png?itok=pjYC-eb6",
        title: "Step-up villa"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/swimming-pool.png?itok=XaEk0L9H",
        title: "swimming-pool"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Provision%20for%20lift.png?itok=n-yfLbxf",
        title: "Lift"
    },
    {
        img: "https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-03/landscape-icon.png?itok=GiLz7kZ5",
        title: "Landscape"
    }
];

const FloorImages = [
    {
        id: 1,
        url: "https://i.pinimg.com/1200x/d0/fc/eb/d0fceb317febcbf0368beb6db1ebeab1.jpg",
        title: "Ground Floor Layout",
        bhk: "3 BHK",
        area: "1,850 Sq.Ft.",
        baths: "3 Baths",
        facing: "East Facing",
        features: ["Living Room", "Dining Area", "2 Car Parking", "Lawn"]
    },
    {
        id: 2,
        url: "https://i.pinimg.com/736x/b5/a5/10/b5a510c9eafaa5f3c6a172021af5bf0f.jpg",
        title: "First Floor Plan",
        bhk: "2 BHK + Study",
        area: "1,420 Sq.Ft.",
        baths: "2 Baths",
        facing: "North-East",
        features: ["Master Suite", "Private Balcony", "Study Room"]
    },
    {
        id: 3,
        url: "https://i.pinimg.com/736x/0d/db/82/0ddb821540197828c6f3aab237db7f2f.jpg",
        title: "Second Floor Premium Suite",
        bhk: "2 BHK",
        area: "1,250 Sq.Ft.",
        baths: "2 Baths",
        facing: "Sea View",
        features: ["Ocean Front Balcony", "Open Kitchen", "Walk-in Closet"]
    },
    {
        id: 4,
        url: "https://i.pinimg.com/1200x/a2/44/24/a2442438d6556be7ded9b912f32b08a3.jpg",
        title: "Penthouse & Show Kitchen",
        bhk: "4 BHK Duplex",
        area: "2,600 Sq.Ft.",
        baths: "4 Baths",
        facing: "North Facing",
        features: ["Island Kitchen", "Terrace Garden", "Servant Room"]
    },
    {
        id: 5,
        url: "https://i.pinimg.com/736x/0c/05/33/0c05336f48e2e00ce57aa9f269186971.jpg",
        title: "Rooftop & Pool Lounge",
        bhk: "Terrace Area",
        area: "1,100 Sq.Ft.",
        baths: "1 Powder Room",
        facing: "360 View",
        features: ["Infinity Pool", "BBQ Counter", "Sundeck"]
    }
];

const heroSlides = [
    {
        title: "Design build kitchen the family",
        subtitle: "Kitchens should be designed around what's truly important, family, food and life.",
        buttonText: "VISIT SHOW ROOM",
        image: "https://i.pinimg.com/1200x/8d/28/34/8d2834c2c580401ba7f836145be43484.jpg"
    },
    {
        title: "Modern Living & Luxury Space",
        subtitle: "Experience luxury and comfort seamlessly integrated with nature and style.",
        buttonText: "EXPLORE VILLAS",
        image: "https://i.pinimg.com/1200x/27/ce/7b/27ce7bf6c7768ba02de43ba8e4ad1cbd.jpg"
    },
    {
        title: "Elegant Interiors & Comfort",
        subtitle: "Crafted with precision to deliver an unparalleled lifestyle experience.",
        buttonText: "VIEW GALLERY",
        image: "https://i.pinimg.com/1200x/58/3f/7a/583f7ac5ce94da731d5bb7a6f1682f04.jpg"
    }
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImgIndex, setSelectedImgIndex] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    // Single Timer Effect
    useEffect(() => {
        const timer = setInterval(() => {
            handleNextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Google Sheet Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqNX2aA79Ijv9g8zxL5TmP_b8BrSs3-uo2SRsZOFCmQ_R6XNlFvaKpbkobnt84ZxbXzg/exec";

        const dataToSubmit = {
            name: `${formData.firstName} ${formData.lastName}`.trim(),
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
        };

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit)
            });

            setSent(true);
            setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setSent(false), 4000);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again!");
        } finally {
            setLoading(false);
        }
    };

    const openLightbox = (index) => setSelectedImgIndex(index);
    const closeLightbox = () => setSelectedImgIndex(null);

    const showPrevImage = (e) => {
        e.stopPropagation();
        setSelectedImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const showNextImage = (e) => {
        e.stopPropagation();
        setSelectedImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const [isYearly, setIsYearly] = useState(false);
    return (
        <div className="Full min-vh-100 overflow-x-hidden position-relative home-wrapper">
            <section className="hero-split-container">
                <div className="hero-overlay-dark"></div>

                {/* Left Content Side */}
                <div className="hero-left-panel">
                    <div key={currentSlide} className="hero-content-box animate-text">
                        <h1 className="hero-title">{heroSlides[currentSlide].title}</h1>
                        <p className="hero-subtitle">{heroSlides[currentSlide].subtitle}</p>

                        <button className="visit-showroom-btn">
                            {heroSlides[currentSlide].buttonText} <FaArrowRight className="btn-icon" />
                        </button>
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

                    {/* Navigation Arrows */}
                    <div className="hero-nav-controls">
                        <button className="nav-btn prev-btn" onClick={handlePrevSlide} aria-label="Previous Slide">
                            <FaChevronLeft />
                        </button>
                        <button className="nav-btn next-btn" onClick={handleNextSlide} aria-label="Next Slide">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
            </section>

            {/* new  */}
            <section className="about-section-container py-5 mt-5" id="about">
                <div className="container-fluid px-3 px-md-5">
                    <div className="row align-items-center g-4 g-lg-5">

                        {/* Left Text Content */}
                        <div className="col-lg-6 about-left-col pe-lg-5">
                            <div className="about-text-content">
                                <h2 className="about-heading">About Us</h2>
                                <blockquote className="villa-quote mb-4">
                                    This villa is more than a home—it's an elevated lifestyle defined by space, privacy, and uninterrupted vistas.
                                </blockquote>
                                <p className="about-description">
                                    Standing out in its step-up design, all primary daily living spaces are located on one principal level. The upper level is a private sanctuary, home to four generous en-suite bedrooms and a master suite designed for serenity. Each opens onto a lush garden retreat, with tranquil views of the parkland beyond, inviting you to wake to birdsong and end each day bathed in golden sunset light.
                                </p>

                                <button className="discover-btn">
                                    Discover More <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
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


            {/* new  */}
            {/* --- UNIT FEATURES SECTION --- */}
            <section className="unit-features-section py-5">

                <div className="container-fluid p-4">

                    <h2 className="about-heading text-dark text-center mb-5">Unit Features</h2>

                    <div className="row g-4">
                        {unitFeatures.map((feature, index) => (
                            <div className="col-lg-4 col-md-4 col-sm-6" key={index}>
                                <div className="feature-item">
                                    <div className="feature-img-wrapper align-items-center">
                                        <img src={feature.img} alt={feature.title} className="feature-icon-img" />
                                    </div>
                                    <p className="feature-text">{feature.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* --- GALLERY SECTION --- */}
            <section className="gallery-section py-5">
                <div className="container-fluid py-4 position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="about-heading text-black mb-0">GALLERY</h2>

                        <div className="swiper-custom-navigation">
                            <button className="swiper-prev-btn">
                                <FaChevronLeft />
                            </button>
                            <button className="swiper-next-btn">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        navigation={{
                            prevEl: '.swiper-prev-btn',
                            nextEl: '.swiper-next-btn',
                        }}
                        breakpoints={{
                            576: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 }
                        }}
                        className="gallery-swiper"
                    >
                        {galleryImages.map((img, index) => (
                            <SwiperSlide key={img.id}>
                                <div
                                    className="gallery-item"
                                    onClick={() => openLightbox(index)}
                                >
                                    <img src={img.url} alt={img.caption} />
                                    <div className="gallery-overlay">
                                        <span>View Photo</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>



            {/* Floor Plan Section */}
            <section className="fn-section py-5">
                <div className="container-fluid p-4 py-4 position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="about-heading text-black">Floor Plan</h2>

                        <div className="swiper-custom-navigation">
                            <button type="button" className="swiper-prev-btn">
                                <FaChevronLeft />
                            </button>
                            <button type="button" className="swiper-next-btn">
                                <FaChevronRight />
                            </button>
                        </div>
                    </div>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1.2}
                        autoplay={{ delay: 3500, disableOnInteraction: false }}
                        navigation={{
                            prevEl: '.swiper-prev-btn',
                            nextEl: '.swiper-next-btn',
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
                                <div
                                    className="gallery-item"
                                    onClick={() => setSelectedPlan(plan)}
                                >
                                    <img
                                        src={plan.url}
                                        alt={plan.title}
                                        style={{ filter: 'blur(5px)', transition: '0.3s' }}
                                    />
                                    <div className="gallery-overlay">
                                        <span>{plan.title}</span>
                                        <small className="d-block text-white-50">{plan.bhk} • {plan.area}</small>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Detail Modal Overlay */}
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
                                        <span className="badge bg-primary mb-2">{selectedPlan.bhk}</span>
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
            {/* new  */}
            <section className="pricing-wrapper py-5">
                <div className="container-fluid px-4">

                    {/* Header Section */}
                    <div className="text-start mb-5">
                        <h2 className="about-heading">Pricing & Plans</h2>
                        {/* <p className="pricing-desc">
                            Choose the space that suits your lifestyle. Transparent pricing with flexible payment schedules.
                        </p> */}

                        <div className="pricing-toggle-container mt-2">
                            <span className={!isYearly ? "active" : ""}>Standard Plan</span>
                            <label className="pricing-switch">
                                <input
                                    type="checkbox"
                                    checked={isYearly}
                                    onChange={() => setIsYearly(!isYearly)}
                                />
                                <span className="slider round"></span>
                            </label>
                            <span className={isYearly ? "active" : ""}>
                                Early Bird Plan <span className="discount-tag">Save 8%</span>
                            </span>
                        </div>
                    </div>

                    {/* Cards Container */}
                    <div className="row g-4 justify-content-center">

                        {/* Card 1 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-card">
                                <span className="pricing-card-badge">Popular</span>

                                <div className="pricing-card-header">
                                    <div className="pricing-card-icon">
                                        <FaBuilding />
                                    </div>
                                    <h3 className="pricing-card-title">Executive Suite</h3>
                                    <div className="pricing-bhk-tag">2 & 3 BHK</div>
                                </div>

                                <div className="pricing-card-price">
                                    <span className="price-amount">
                                        {isYearly ? "₹ 1.15 Cr" : "₹ 1.25 Cr"}
                                    </span>
                                    <span className="price-label">Onwards</span>
                                </div>

                                <hr className="pricing-divider" />

                                <ul className="pricing-features-list">
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>1,250 - 1,600 Sq.Ft. Area</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>Spacious Balconies with Park View</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>Modular Kitchen Included</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>1 Reserved Covered Parking</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>Access to Clubhouse & Pool</span>
                                    </li>
                                </ul>

                                <button className="discover-btn">
                                    Schedule Site Visit<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Card 2  */}
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-card featured">
                                <span className="pricing-card-badge">Most Premium</span>

                                <div className="pricing-card-header">
                                    <div className="pricing-card-icon">
                                        <FaCrown />
                                    </div>
                                    <h3 className="pricing-card-title">Royal Penthouse</h3>
                                    <div className="pricing-bhk-tag">4 BHK Duplex</div>
                                </div>

                                <div className="pricing-card-price">
                                    <span className="price-amount">
                                        {isYearly ? "₹ 2.65 Cr" : "₹ 2.85 Cr"}
                                    </span>
                                    <span className="price-label">Onwards</span>
                                </div>

                                <hr className="pricing-divider" />

                                <ul className="pricing-features-list">
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>3,200 Sq.Ft. Living Space</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>Private Deck & Plunge Pool</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>Italian Marble Flooring</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>2 Covered Car Parkings</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>24/7 Personal Concierge</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>Exclusive Sky Lounge Access</span>
                                    </li>
                                </ul>

                                <button className="discover-btn">
                                    Schedule Site Visit<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-card">
                                <span className="pricing-card-badge">Limited Edition</span>

                                <div className="pricing-card-header">
                                    <div className="pricing-card-icon">
                                        <FaGem />
                                    </div>
                                    <h3 className="pricing-card-title">Presidential Villa</h3>
                                    <div className="pricing-bhk-tag">5 BHK Villa</div>
                                </div>

                                <div className="pricing-card-price">
                                    <span className="price-amount">
                                        {isYearly ? "₹ 4.20 Cr" : "₹ 4.50 Cr"}
                                    </span>
                                    <span className="price-label">Onwards</span>
                                </div>

                                <hr className="pricing-divider" />

                                <ul className="pricing-features-list">
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>5,000+ Sq.Ft. Private Estate</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>Private Landscaped Garden</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>Home Automation & Cinema</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>3 Dedicated Parkings</span>
                                    </li>
                                    <li>
                                        <FaCheck className="check-icon" />
                                        <span>Private Elevator & Servant Quarter</span>
                                    </li>
                                </ul>

                                <button className="discover-btn">
                                    Schedule Site Visit<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* new section  */}
            <div className="new-contact-container py-5 min-vh-100 d-flex align-items-center">
                <div className="container-fluid px-4 ">

                    {/* Header Section */}
                    <div className="text-start mb-5 animate__animated animate__fadeInDown">
                        {/* <span className="new-contact-badge">GET IN TOUCH</span> */}
                        <h1 className="about-heading mt-3">Contact Us</h1>

                    </div>

                    {/* Main Grid Wrapper */}
                    <div className="row g-4 justify-content-center align-items-stretch">

                        {/* Left Side: Direct Info Panel */}
                        <div className="col-12 col-lg-4 animate__animated animate__fadeInLeft">
                            <div className="new-info-card h-100 p-4 p-md-5 d-flex flex-column justify-content-between">
                                <div>
                                    <h3 className="fw-bold text-white mb-3">Contact Information</h3>
                                    <p className="text-white small mb-4">
                                        Feel free to reach out via phone, email, or visit our office location directly.
                                    </p>

                                    <div className="d-flex flex-column gap-4 my-4">
                                        <div className="d-flex align-items-center gap-3">
                                            <div className="new-icon-box"><FaPhoneAlt /></div>
                                            <div>
                                                <span className="d-block text-uppercase text-muted extra-small">Phone</span>
                                                <strong className="text-white">+971 4 123 4567</strong>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-3">
                                            <div className="new-icon-box"><FaEnvelope /></div>
                                            <div>
                                                <span className="d-block text-uppercase text-muted extra-small">Email</span>
                                                <strong className="text-white">info@sunrayvillas.com</strong>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-3">
                                            <div className="new-icon-box"><FaMapMarkerAlt /></div>
                                            <div>
                                                <span className="d-block text-uppercase text-muted extra-small">Location</span>
                                                <strong className="text-white">Palm Jumeirah, Block B, Dubai</strong>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center gap-3">
                                            <div className="new-icon-box"><FaClock /></div>
                                            <div>
                                                <span className="d-block text-uppercase text-muted extra-small">Working Hours</span>
                                                <strong className="text-white">Mon - Sat: 9:00 AM - 7:00 PM</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="new-info-footer pt-3 border-top border-secondary">
                                    <p className="text-muted extra-small mb-0">© 2026 Sunray Luxury. All rights reserved.</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form Panel */}
                        <div className="col-12 col-lg-8 animate__animated animate__fadeInRight">
                            <div className="new-form-card p-4 p-md-5">

                                {sent ? (
                                    <div className="text-center py-5 animate__animated animate__zoomIn">
                                        <h3 className="text-success fw-bold">Message Logged!</h3>
                                        <p className="text-muted small">We will get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-4">
                                            {/* First Name */}
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

                                            {/* Last Name */}
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

                                            {/* Phone */}
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

                                            {/* Email */}
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

                                            {/* Message */}
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

                                            {/* Submit Button */}
                                            <div className="col-12 mt-4">
                                                <button
                                                    type="submit"
                                                    className="new-submit-btn w-100 py-3 text-uppercase fw-bold"
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
            {/* new  */}
            {/* --- LIGHTBOX MODAL --- */}
            {selectedImgIndex !== null && (
                <div className="lightbox-modal" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <FaTimes />
                    </button>
                    <button className="lightbox-nav lightbox-prev" onClick={showPrevImage}>
                        <FaChevronLeft />
                    </button>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={galleryImages[selectedImgIndex].url}
                            alt={galleryImages[selectedImgIndex].caption}
                        />
                        <p className="lightbox-caption">{galleryImages[selectedImgIndex].caption}</p>
                    </div>
                    <button className="lightbox-nav lightbox-next" onClick={showNextImage}>
                        <FaChevronRight />
                    </button>
                </div>
            )}




        </div>
    );
}