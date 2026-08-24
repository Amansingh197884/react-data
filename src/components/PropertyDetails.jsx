import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropertySubNav from './PropertySubNav';
import { usePopup } from './PopupContext';
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
  FaCheckCircle
} from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import Logo from '../assets/Logo.png';
import 'swiper/css';
import 'swiper/css/navigation';
import './Home.css';
import './DetailsFooter.css';

const propertyHighlights = [
  { icon: <FaTree />, title: 'Prime Landscaped Corridors', desc: 'Private eco-luxury living immersed in curated natural greenery.' },
  { icon: <FaSwimmingPool />, title: 'Temperature Controlled Pools', desc: 'Dedicated private pool with direct sun lounge connectivity.' },
  { icon: <FaShieldAlt />, title: '3-Tier Smart Security', desc: 'Biometric access, 24/7 CCTV surveillance, and guarded perimeter.' },
  { icon: <FaStar />, title: '5-Star Concierge Hospitality', desc: 'Fully managed maintenance, valet parking, and private housekeeping.' }
];

const locationLandmarks = [
  { icon: <FaPlane />, title: 'International Airport', distance: '35 Mins Drive' },
  { icon: <FaSubway />, title: 'Metro & Transit Hub', distance: '8 Mins Walk' },
  { icon: <FaHospital />, title: 'Specialty Hospital', distance: '12 Mins Drive' },
  { icon: <FaBuilding />, title: 'Commercial Tech Park', distance: '15 Mins Drive' }
];

const unitFeatures = [
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Bedrooms_0.png?itok=2BVMNNzU', title: 'Master Suites' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/All%20bedrooms%20en%20suite_0.png?itok=_FRit2AT', title: 'En-suite Bathrooms' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Bathrooms_3.png?itok=L6aWyNGV', title: 'Spa-Luxury Baths' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/BOH-Kitchen.png?itok=7k0C6ce7', title: 'Italian Show Kitchen' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/Terrace.png?itok=jqqaZHWC', title: 'Sky View Terrace' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/Garden.png?itok=0MtIWwBN', title: 'Private Lawn & Balcony' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Parking%20for%20%202%20cars.png?itok=uqcm4Edv', title: 'Covered Car Parkings' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Maid%20%26%20Driver%20rooms.png?itok=cxufmeNZ', title: 'Staff Quarters' }
];

const defaultFloorImages = [
  {
    id: 1,
    url: 'https://i.pinimg.com/736x/77/89/3a/77893af9dbb718aa0831610996173a1a.jpg',
    title: 'Ground Floor Layout',
    bhk: '3 BHK Residence',
    area: '1,850 Sq.Ft.',
    baths: '3 Baths',
    facing: 'East Facing',
    features: ['Double Height Living', 'Private Deck', 'Lawn Access', '2 Car Parking']
  },
  {
    id: 2,
    url: 'https://i.pinimg.com/736x/44/0d/18/440d1830e06ae38b25d08f4c9c1ef3cb.jpg',
    title: 'First Floor Suite Plan',
    bhk: '2 BHK + Study',
    area: '1,420 Sq.Ft.',
    baths: '2 Baths',
    facing: 'North-East',
    features: ['Master Bedroom', 'Private Balcony', 'Work Lounge']
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/736x/d6/3b/b1/d63bb1296bf3e7b1a20bf7d5a5749f7b.jpg',
    title: 'Penthouse & Sky Deck',
    bhk: '4 BHK Duplex',
    area: '2,600 Sq.Ft.',
    baths: '4 Baths',
    facing: 'Panoramic View',
    features: ['Plunge Pool Deck', 'Island Kitchen', 'Terrace Garden']
  }
];

export default function PropertyDetails() {
  const { openPopup } = usePopup();
  const location = useLocation();
  const project = location.state?.projectData;

  const currentProject = project || {
    id: 0,
    title: 'Ariahaus Signature Estate',
    location: 'Coffee Corridor, Sakleshpur',
    city: 'Karnataka, India',
    price: '₹1.15 Cr*',
    tagline: '20-Acre Eco-Luxury Sanctuary Amidst Scenic Greenery',
    desc: 'Standing out in its stepped architectural pavilion, all primary living suites are positioned for privacy, panoramic nature vistas, and effortless modern entertaining.',
    image: 'https://i.pinimg.com/736x/51/94/a3/5194a352e98ab5ee14ff1d61a9228ff5.jpg',
    gallery: [
      { id: 1, url: 'https://i.pinimg.com/736x/51/94/a3/5194a352e98ab5ee14ff1d61a9228ff5.jpg', caption: 'Exterior Perspective' },
      { id: 2, url: 'https://i.pinimg.com/736x/e6/46/51/e646510afdef4bde6ad87324f2c56a9b.jpg', caption: 'Grand Entrance & Hallway' },
      { id: 3, url: 'https://i.pinimg.com/736x/ae/ac/3e/aeac3ea759cc35792286ffab3946bdc4.jpg', caption: 'Living Pavilion & Deck' },
      { id: 4, url: 'https://i.pinimg.com/736x/8b/07/b1/8b07b191b3ba0d33497bf8c01500b2ba.jpg', caption: 'Italian Show Kitchen' },
      { id: 5, url: 'https://i.pinimg.com/736x/94/9a/37/949a375cb4562db2209c97e06b5aa568.jpg', caption: 'Infinity Plunge Pool Deck' },
      { id: 6, url: 'https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg', caption: 'Master Bed Terrace' }
    ],
    pricing: [
      { type: 'Executive Suite', bhk: '2 & 3 BHK', priceStd: '₹ 1.25 Cr', priceEarly: '₹ 1.15 Cr', area: '1,250 - 1,600 Sq.Ft.', park: '1 Reserved Covered Parking' },
      { type: 'Royal Penthouse', bhk: '4 BHK Duplex', priceStd: '₹ 2.85 Cr', priceEarly: '₹ 2.65 Cr', area: '3,200 Sq.Ft.', park: '2 Covered Car Parkings' },
      { type: 'Presidential Villa', bhk: '5 BHK Villa', priceStd: '₹ 4.50 Cr', priceEarly: '₹ 4.20 Cr', area: '5,000+ Sq.Ft.', park: '3 Dedicated Parkings' }
    ],
    floorPlans: defaultFloorImages
  };

  const projectFloorPlans = currentProject.floorPlans && currentProject.floorPlans.length > 0
    ? currentProject.floorPlans
    : defaultFloorImages;

  const heroSlides = [
    {
      title: `${currentProject.title} • ${currentProject.city}`,
      bullets: [
        `Curated residences in ${currentProject.location}`,
        'Private plunge pools & sunlit open decks',
        'Italian marble flooring & bespoke fittings',
        '24/7 dedicated concierge & 3-tier security'
      ],
      highlight: `Starting at ${currentProject.price} Onwards`,
      image: currentProject.image || currentProject.gallery?.[0]?.url
    },
    {
      title: currentProject.tagline || 'Elevated Living With Panoramic Vistas',
      bullets: [
        'Designer modular kitchens & dining lounge',
        'Double-height ceiling architectures',
        'Exclusive sky view terraces & private lawns',
        'RERA approved with clear freehold titles'
      ],
      highlight: 'Verified Premium Asset',
      image: currentProject.gallery?.[1]?.url || currentProject.image
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImgIndex, setSelectedImgIndex] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isYearly, setIsYearly] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    projectName: currentProject.title
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentProject.title]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxqNX2aA79Ijv9g8zxL5TmP_b8BrSs3-uo2SRsZOFCmQ_R6XNlFvaKpbkobnt84ZxbXzg/exec';

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          projectName: currentProject.title
        })
      });

      setSent(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        projectName: currentProject.title
      });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      alert('Something went wrong. Please try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-wrapper">
      <PropertySubNav />

      <section className="hero-v2-container">
        <div className="hero-v2-overlay"></div>

        <div className="hero-v2-left">
          <div key={currentSlide} className="hero-v2-card">
            <span className="section-tag-gold d-block mb-2 text-uppercase">
              {currentProject.location}
            </span>
            <h1 className="hero-v2-title">{heroSlides[currentSlide].title}</h1>

            <ul className="hero-v2-list">
              {heroSlides[currentSlide].bullets.map((point, i) => (
                <li key={i}>
                  <FaCheckCircle className="hero-v2-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="hero-v2-badge">
              <FaGem className="me-2 text-gold" />
              <span>{heroSlides[currentSlide].highlight}</span>
            </div>
          </div>
        </div>

        <div className="hero-v2-right">
          {heroSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={slide.title}
              className={`hero-v2-slide ${index === currentSlide ? 'active' : ''}`}
            />
          ))}

          <div className="hero-v2-nav">
            <button
              className="nav-btn"
              onClick={() => setCurrentSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1)}
            >
              <FaChevronLeft />
            </button>
            <button
              className="nav-btn"
              onClick={() => setCurrentSlide((currentSlide + 1) % heroSlides.length)}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      <section className="about-section-container" id="about-us">
        <div className="container-fluid px-3 px-md-5">
          <div className="row align-items-center g-4 g-lg-5">
            <div className="col-lg-6 about-left-col pe-lg-5">
              <div className="about-text-content">
                <span className="section-tag-gold d-block">OUR PHILOSOPHY</span>
                <h2 className="about-heading-dark">About {currentProject.title}</h2>
                <blockquote className="villa-quote">
                  {currentProject.tagline || 'This residence is an elevated lifestyle defined by space, privacy, and uninterrupted vistas.'}
                </blockquote>
                <p className="about-description-dark">
                  {currentProject.desc}
                </p>
                <button className="discover-btn-gold" onClick={() => openPopup(currentProject.title)}>
                  Discover More <FaArrowRight className="ms-2" />
                </button>
              </div>
            </div>

            <div className="col-lg-6 about-right-col ps-lg-5">
              <div className="about-image-wrapper border-gold-light">
                <img
                  src={currentProject.gallery?.[0]?.url || currentProject.image}
                  alt={currentProject.title}
                  className="about-img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights-section" id="amenities">
        <div className="container-fluid px-3 px-md-5">
          <div className="text-center mb-5">
            <span className="section-tag-gold d-block">KEY FEATURES</span>
            <h2 className="about-heading-light">Property Highlights</h2>
          </div>

          <div className="row g-4">
            {propertyHighlights.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="highlight-card h-100">
                  <div className="highlight-icon">{item.icon}</div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="unit-features-section-paper" id="unit-features">
        <div className="container-fluid px-3 px-md-5">
          <div className="text-center mb-5">
            <span className="section-tag-gold d-block">SPECIFICATIONS</span>
            <h2 className="about-heading-dark">Unit Features & Amenities</h2>
          </div>

          <div className="row g-3 g-md-4">
            {unitFeatures.map((feature, index) => (
              <div className="col-6 col-md-4 col-lg-3" key={index}>
                <div className="feature-item-paper h-100">
                  <div className="feature-img-wrapper">
                    <img src={feature.img} alt={feature.title} className="feature-icon-img-dark" />
                  </div>
                  <p className="feature-text-dark">{feature.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="Galleryall" id="gallery-section">
        <section className="gallery-section-dark">
          <div className="container-fluid px-3 px-md-5">
            <div className="d-flex justify-content-between align-items-end mb-4">
              <div>
                <span className="section-tag-gold d-block">VISUAL TOUR</span>
                <h2 className="about-heading-light m-0">Gallery</h2>
              </div>

              <div className="swiper-custom-navigation gap-2 d-flex">
                <button className="swiper-prev-btn nav-btn-dark gallery-prev-btn" aria-label="Previous Photo">
                  <FaChevronLeft />
                </button>
                <button className="swiper-next-btn nav-btn-dark gallery-next-btn" aria-label="Next Photo">
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
                prevEl: '.gallery-prev-btn',
                nextEl: '.gallery-next-btn'
              }}
              breakpoints={{
                640: { slidesPerView: 1.8 },
                768: { slidesPerView: 2.5 },
                1024: { slidesPerView: 3 }
              }}
              className="gallery-swiper"
            >
              {(currentProject.gallery || []).map((img, index) => (
                <SwiperSlide key={img.id || index}>
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

        {selectedImgIndex !== null && (
          <div className="luxury-lightbox-modal" onClick={() => setSelectedImgIndex(null)}>
            <div className="lightbox-top-bar" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close-btn" onClick={() => setSelectedImgIndex(null)}>
                <FaTimes />
              </button>
            </div>

            <button
              className="lightbox-arrow-btn lightbox-arrow-left"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImgIndex((prev) => (prev === 0 ? currentProject.gallery.length - 1 : prev - 1));
              }}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>

            <div className="lightbox-image-container" onClick={(e) => e.stopPropagation()}>
              <img
                src={currentProject.gallery[selectedImgIndex].url}
                alt={currentProject.gallery[selectedImgIndex].caption}
                className="lightbox-main-img"
              />
            </div>

            <button
              className="lightbox-arrow-btn lightbox-arrow-right"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImgIndex((prev) => (prev === currentProject.gallery.length - 1 ? 0 : prev + 1));
              }}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </section>

      <section className="fn-section-paper" id="floor-plans">
        <div className="container-fluid px-3 px-md-5">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="section-tag-gold d-block">ARCHITECTURAL LAYOUTS</span>
              <h2 className="about-heading-dark m-0">Floor Plans</h2>
            </div>

            <div className="swiper-custom-navigation gap-2 d-flex">
              <button type="button" className="swiper-prev-btn nav-btn-light floor-prev-btn" aria-label="Previous Floor">
                <FaChevronLeft />
              </button>
              <button type="button" className="swiper-next-btn nav-btn-light floor-next-btn" aria-label="Next Floor">
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
              prevEl: '.floor-prev-btn',
              nextEl: '.floor-next-btn'
            }}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1200: { slidesPerView: 3 }
            }}
            className="gallery-swiper"
          >
            {projectFloorPlans.map((plan) => (
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
                    <span className="badge-gold d-inline-block">{selectedPlan.bhk}</span>
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

      <section className="pricing-wrapper-dark" id="pricing-plans">
        <div className="container-fluid px-3 px-md-5">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <span className="section-tag-gold d-block">PRICING STRUCTURE</span>
              <h2 className="about-heading-dark m-0">Pricing & Available Units</h2>

              <div className="pricing-toggle-container">
                <span className={!isYearly ? 'active-toggle-dark' : 'inactive-toggle-dark'}>Standard Price</span>
                <label className="pricing-switch">
                  <input
                    type="checkbox"
                    checked={isYearly}
                    onChange={() => setIsYearly(!isYearly)}
                  />
                  <span className="slider round"></span>
                </label>
                <span className={isYearly ? 'active-toggle-dark' : 'inactive-toggle-dark'}>
                  Early Bird Booking <span className="discount-tag">Save 8%</span>
                </span>
              </div>
            </div>

            <div className="swiper-custom-navigation gap-2 d-none d-md-flex">
              <button type="button" className="swiper-prev-btn nav-btn-light pricing-prev-btn" aria-label="Previous Pricing">
                <FaChevronLeft />
              </button>
              <button type="button" className="swiper-next-btn nav-btn-light pricing-next-btn" aria-label="Next Pricing">
                <FaChevronRight />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.pricing-prev-btn',
              nextEl: '.pricing-next-btn'
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 }
            }}
            className="pricing-swiper"
          >
            {(currentProject.pricing || []).map((tier, idx) => (
              <SwiperSlide key={idx}>
                <div className={`pricing-card-dark h-100 ${idx === 1 ? 'featured-dark' : ''}`}>
                  <span className="pricing-card-badge">{idx === 1 ? 'Most Popular' : 'Limited Allocation'}</span>
                  <div className="pricing-card-header">
                    <div className="pricing-card-icon">
                      {idx === 0 ? <FaBuilding /> : idx === 1 ? <FaCrown /> : <FaGem />}
                    </div>
                    <h3 className="pricing-card-title">{tier.type}</h3>
                    <div className="pricing-bhk-tag">{tier.bhk}</div>
                  </div>

                  <div className="pricing-card-price">
                    <span className="price-amount-dark">
                      {isYearly ? tier.priceEarly : tier.priceStd}
                    </span>
                    <span className="price-label-dark">Onwards</span>
                  </div>

                  <hr className="pricing-divider-dark" />

                  <ul className="pricing-features-list-dark">
                    <li><FaCheck className="check-icon" /><span>{tier.area} Built-Up Area</span></li>
                    <li><FaCheck className="check-icon" /><span>Panoramic Balconies & Deck</span></li>
                    <li><FaCheck className="check-icon" /><span>Modular Italian Kitchen Included</span></li>
                    <li><FaCheck className="check-icon" /><span>{tier.park}</span></li>
                    <li><FaCheck className="check-icon" /><span>24/7 Security & Managed Clubhouse</span></li>
                  </ul>

                  <button
                    className="discover-btn-gold w-100 mt-4"
                    onClick={() => openPopup(`${currentProject.title} - ${tier.type}`)}
                  >
                    Schedule Site Visit <FaArrowRight className="ms-2" />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="location-section" id="location-map">
        <div className="container-fluid px-3 px-md-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <span className="section-tag-gold d-block">CONNECTIVITY</span>
              <h2 className="about-heading-light">Prime Location</h2>
              <p className="aria-text-stone text-white mb-4">
                Situated in {currentProject.location}, offering seamless access to major transit lines, airport corridors, and primary business hubs.
              </p>

              <div className="location-landmarks-list">
                {locationLandmarks.map((item, index) => (
                  <div className="location-item d-flex align-items-center gap-3 mb-3" key={index}>
                    <div className="location-icon-box">{item.icon}</div>
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

      <div className="light-gradient-contact-section" id="book-tour">
        <div className="container-fluid px-3 px-md-5">
          <div className="text-start mb-4">
            <span className="section-tag-gold d-block">INQUIRIES</span>
            <h2 className="about-heading-dark m-0">Contact Advisor for {currentProject.title}</h2>
          </div>

          <div className="row g-4 g-lg-5 align-items-stretch">
            <div className="col-12 col-lg-4">
              <div className="light-info-card h-100 p-4 p-md-5 d-flex flex-column justify-content-between">
                <div>
                  <h3 className="fw-normal text-dark mb-2 font-serif">Contact Information</h3>
                  <p className="text-muted extra-small-text mb-4">
                    Feel free to reach out via phone, email, or visit our office location directly.
                  </p>

                  <div className="d-flex flex-column gap-3 my-4">
                    <div className="contact-info-item-light">
                      <div className="light-icon-box"><FaPhoneAlt /></div>
                      <div>
                        <span className="d-block text-uppercase text-gold-dark extra-small">Phone</span>
                        <strong className="text-dark-small">+91 81477 75092</strong>
                      </div>
                    </div>

                    <div className="contact-info-item-light">
                      <div className="light-icon-box"><FaEnvelope /></div>
                      <div>
                        <span className="d-block text-uppercase text-gold-dark extra-small">Email</span>
                        <strong className="text-dark-small">info@amyrafarms.com</strong>
                      </div>
                    </div>

                    <div className="contact-info-item-light">
                      <div className="light-icon-box"><FaMapMarkerAlt /></div>
                      <div>
                        <span className="d-block text-uppercase text-gold-dark extra-small">Project Location</span>
                        <strong className="text-dark-small">{currentProject.location}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="light-form-card p-4 p-md-5">
                {sent ? (
                  <div className="text-center py-4">
                    <h4 className="text-gold-dark fw-bold font-serif mb-1">Inquiry Logged!</h4>
                    <p className="text-muted extra-small-text">Our representative will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-12 col-md-6">
                        <div className="light-input-group">
                          <label className="light-input-label">First Name *</label>
                          <input
                            type="text"
                            className="light-input-field"
                            required
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="light-input-group">
                          <label className="light-input-label">Last Name *</label>
                          <input
                            type="text"
                            className="light-input-field"
                            required
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="light-input-group">
                          <label className="light-input-label">Email Address *</label>
                          <input
                            type="email"
                            className="light-input-field"
                            required
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="light-input-group">
                          <label className="light-input-label">Phone Number *</label>
                          <input
                            type="tel"
                            className="light-input-field"
                            required
                            placeholder="Enter Your Phone No."
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="light-input-group">
                          <label className="light-input-label">City *</label>
                          <input
                            type="text"
                            className="light-input-field"
                            required
                            placeholder="Enter Your City"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="col-12 mt-3 pt-2">
                        <button
                          type="submit"
                          className="discover-btn-gold w-100 py-2 text-uppercase fw-semibold"
                          disabled={loading}
                        >
                          {loading ? 'Submitting Inquiry...' : (
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

      <footer className="zen-custom-footer py-5">
        <div className="container-fluid px-3 px-md-5">
          <div className="row g-4 g-lg-5 pb-5">
            <div className="col-lg-4 col-md-12">
              <div className="footer-brand-container">
                <Link to="/" className="text-decoration-none d-flex align-items-center gap-2 mb-3">
                  <img src={Logo} alt="Ariahaus Logo" className="zen-footer-logo" />
                  <span className="zen-footer-brand-title">ARIAHAUS</span>
                </Link>

                <p className="zen-footer-tagline mb-4">
                  Luxury properties across India. Elevation without compromise.
                </p>

                <div className="zen-social-links d-flex align-items-center gap-3">
                  <a href="#facebook" className="zen-social-circle" aria-label="Facebook"><FaFacebookF /></a>
                  <a href="#instagram" className="zen-social-circle" aria-label="Instagram"><FaInstagram /></a>
                  <a href="#whatsapp" className="zen-social-circle" aria-label="WhatsApp"><FaWhatsapp /></a>
                  <a href="#website" className="zen-social-circle" aria-label="Website"><FaGlobe /></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 ps-lg-5">
              <h6 className="zen-column-header">NAVIGATE</h6>
              <ul className="zen-nav-list">
                <li><Link to="/Property">Residences</Link></li>
                <li><a href="#about-us">About Us</a></li>
                <li><a href="#unit-features">Amenities</a></li>
                <li><a href="#location-map">Location</a></li>
                <li><a href="#book-tour">Contact</a></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h6 className="zen-column-header">CONTACT</h6>
              <div className="zen-contact-details">
                <p className="mb-1"><a href="mailto:info@amyrafarms.com" className="zen-email-link">info@amyrafarms.com</a></p>
                <p className="mb-3"><a href="https://ariahausvillas.in" className="zen-email-link">ariahausvillas.in</a></p>
                <div className="zen-address-text">
                  <p className="m-0">{currentProject.location}</p>
                  <p className="m-0">{currentProject.city}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="zen-sub-footer pt-4 border-top-gold">
            <div className="row align-items-center g-3">
              <div className="col-md-6 text-center text-md-start">
                <span className="zen-copy-text">© 2026 Ariahaus. All rights reserved.</span>
              </div>

              <div className="col-md-6 text-center text-md-end">
                <div className="zen-policy-links d-inline-flex gap-4">
                  <Link to="/Terms">Terms and Conditions</Link>
                  <Link to="/Privacy">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}