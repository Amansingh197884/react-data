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
    FaCompass
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';

const PropertyBgImage = "https://i.pinimg.com/1200x/3f/9a/35/3f9a353e1b4cbb124563980c896ae9cf.jpg";
const propertyCardImage = "https://i.pinimg.com/1200x/49/86/4c/49864c7d80b57ba5dc252d070efc3d32.jpg";

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

export default function Home() {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const [selectedImgIndex, setSelectedImgIndex] = useState(null);

   

    const openLightbox = (index) => {
        setSelectedImgIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImgIndex(null);
    };

    const showPrevImage = (e) => {
        e.stopPropagation();
        setSelectedImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const showNextImage = (e) => {
        e.stopPropagation();
        setSelectedImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    const scrollToNext = () => {
        const introSection = document.getElementById('villa-intro');
        if (introSection) {
            introSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

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

    // new floor plan
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

    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <div className="Full min-vh-100 overflow-x-hidden position-relative home-wrapper">
            <div className="Full min-vh-100 overflow-x-hidden position-relative home-wrapper">

                {/* New Hero Section Matching Design */}
                <header className="hero-container" style={{ backgroundImage: `url(${PropertyBgImage})` }}>

                    {/* Hero Overlay Darkening / Tint */}
                    <div className="hero-overlay"></div>

                    {/* Main Content Area */}
                    <div className="hero-content-wrapper">

                        {/* Left Typography Block */}
                        <div className="hero-left">
                            <h1 className="hero-main-heading">
                                Stop Searching.<br />
                                Start Living.
                            </h1>

                            <p className="hero-subtext">
                                Your Direct Path To The Home<br />
                                You Deserve
                            </p>

                            <button className="contact-now-btn">
                                Contact Now
                            </button>
                        </div>

                        {/* Right Property Card & Badge */}
                        <div className="hero-right">
                            <div className="property-card-container">

                                {/* "SOLD" Yellow Badge */}
                                <div className="sold-badge">
                                    <span>SOLD</span>
                                </div>

                                {/* Property Preview Floating Box */}
                                <div className="property-card">
                                    <img
                                        src={propertyCardImage}
                                        alt="Charming Family Ranch"
                                        className="card-thumbnail"
                                    />
                                    <div className="card-details">
                                        <h3 className="card-title">
                                            Charming Family Ranch in Greenfield Estates
                                        </h3>
                                        <p className="card-specs">
                                            3 Bed | 2 Bath | 167 Sqm
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </header>

                {/* Downstream section content can be added below */}
            </div>



            <section id="villa-intro" className="villa-intro-section py-5">
                <div className="container py-4">
                    <p className="villa-top-text mb-5">
                        Perched gracefully on the serene hillside, this exquisite step-up luxury villa offers a rare blend of
                        architectural elegance and breathtaking natural beauty. From the moment you arrive, you’re welcomed into
                        a grand, double-height entrance lobby—a striking prelude to the refined living that lies beyond.
                    </p>

                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="villa-img-frame">
                                <img
                                    src="https://i.pinimg.com/1200x/d3/04/b7/d304b759643b45c59ced8e076905dfb2.jpg"
                                    alt="Double Height Entrance Lobby"
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <blockquote className="villa-quote mb-4">
                                This villa is more than a home—it's an elevated lifestyle defined by space, privacy, and uninterrupted vistas.
                            </blockquote>

                            <p className="villa-body-text mb-4">
                                Standing out in its step-up design, all primary daily living spaces are located on one principal level. The
                                upper level is a private sanctuary, home to four generous en-suite bedrooms and a master suite
                                designed for serenity. Each opens onto a lush garden retreat, with tranquil views of the parkland beyond,
                                inviting you to wake to birdsong and end each day bathed in golden sunset light.
                            </p>

                            <div className="d-flex flex-wrap gap-3 mt-4">
                                <button className="btn-pill-outline">
                                    DOWNLOAD BROCHURE <FaDownload className="ms-2" />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* new  */}
            {/* Floor Plan Section */}
            <section className="fn-section py-5">
                <div className="container-fluid p-4 py-4 position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="display-4 font-serif mb-0">Floor Plan</h2>

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

            {/* --- UNIT FEATURES SECTION --- */}
            <section className="unit-features-section py-5">

                <div className="container p-4">

                    <h2 className="unit-features-title display-4 text-center mb-5">Unit Features</h2>

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
                <div className="container py-4 position-relative">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="gallery-title mb-0">GALLERY</h2>

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