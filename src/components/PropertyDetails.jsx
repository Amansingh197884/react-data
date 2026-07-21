import React, { useState, useEffect } from 'react';
import {
    FaTimes,
    FaChevronLeft,
    FaChevronRight,
    FaDownload,
    FaGlobe,
    FaArrowDown
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';

const heroImages = [
    "https://ora-uae.com/sites/default/files/styles/max_2944x2944/public/2026-02/Sunray-Villa-Hero.jpg?itok=BQeOjhJ7",
];

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImgIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

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

    return (
        <div className="Full min-vh-100 overflow-x-hidden position-relative home-wrapper">
            <header
                className="animated-hero hero-section text-white position-relative"
                style={{ backgroundImage: `url(${heroImages[currentImgIndex]})` }}
            >
                {/* <div className="hero-overlay"></div> */}

                <div className="container text-center hero-content-wrapper hero-content pt-5 mt-5">
                    <div className="animate__animated animate__fadeInDown">
                        <h1 className="display-4 fw-light mb-2 text-uppercase tracking-wider font-serif" style={{ letterSpacing: '-1px' }}>
                            Find Your Place
                        </h1>
                        <span className="text-warning text-uppercase mb-2 tracking-wide font-serif border-bottom">
                            Sunray-Villa-Hero Unique in concept, acts as a natural connection of nature
                        </span>
                    </div>
                </div>

                <div className="explore-more-wrapper" onClick={scrollToNext}>
                    <span className="explore-text">Explore More</span>
                    <div className="capsule-arrow-btn">
                        <FaArrowDown />
                    </div>
                </div>
            </header>

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

   <section className="layout-section py-5">
                <div className="container py-4">
                    <h2 className="layout-title text-start mb-5">Layout</h2>

                    <div className="row g-4 align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="layout-details-card">
                                <div className="layout-row highlight-row">
                                    <span className="label font-weight-bold">PLOT AREA</span>
                                    <span className="value font-weight-bold">992 – 1,672 SQM <small className="text-muted">(10,678 – 17,997 sq ft)</small></span>
                                </div>
                                <div className="layout-row">
                                    <span className="label">Upper Ground Floor</span>
                                    <span className="value">328 SQM</span>
                                </div>
                                <div className="layout-row">
                                    <span className="label">External Area / Terraces / Balconies</span>
                                    <span className="value">166 SQM</span>
                                </div>
                                <div className="layout-row">
                                    <span className="label">Garage</span>
                                    <span className="value">77 SQM</span>
                                </div>
                                <div className="layout-row">
                                    <span className="label">Lower Ground Floor</span>
                                    <span className="value">145 SQM</span>
                                </div>
                                <div className="layout-row accent-row mt-3">
                                    <span className="label">Total SA</span>
                                    <span className="value">716 SQM <small>(7,707 sq ft)</small></span>
                                </div>
                                <div className="layout-row accent-row">
                                    <span className="label">TOTAL BUA</span>
                                    <span className="value">637 SQM <small>(6,857 sq ft)</small></span>
                                </div>
                                <p className="footnote mt-3">*Including Service Rooms</p>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="floorplan-box">
                                        <img
                                            src="https://i.pinimg.com/1200x/34/93/e3/3493e3ee5a649e9614db70b3606a9ebc.jpg"
                                            alt="Ground Floor Layout"
                                            className="img-fluid floorplan-img"
                                        />
                                        <span className="floorplan-label">Ground Floor</span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="floorplan-box">
                                        <img
                                            src="https://i.pinimg.com/736x/18/fa/34/18fa34f99556a5a1a2976b0977fbd41b.jpg"
                                            alt="First Floor Layout"
                                            className="img-fluid floorplan-img"
                                        />
                                        <span className="floorplan-label">First Floor</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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