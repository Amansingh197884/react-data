import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import {
  FaBed,
  FaBath,
  FaCar,
  FaRulerCombined,
  FaCheck,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaGlobe,
  FaShieldAlt,
  FaCompass,
  FaCalendarAlt,
  FaCouch,
  FaPlane,
  FaHospital,
  FaSubway,
  FaBuilding,
  FaFileInvoiceDollar,
  FaCoins,
  FaFileAlt,
  FaGem,
  FaCrown,
  FaMapMarkerAlt,
  FaAward,
  FaCity,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaFileDownload,
  FaUserTie,
  FaCalendarCheck
} from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import { usePopup } from './PopupContext';

import 'swiper/css';
import './PropertySearch.css';

const defaultFallbackPhotos = [
  'https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1200'
];

const unitFeatures = [
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Bedrooms_0.png?itok=2BVMNNzU', title: 'Master Bedroom Suite' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/All%20bedrooms%20en%20suite_0.png?itok=_FRit2AT', title: 'En-suite Bathrooms' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Bathrooms_3.png?itok=L6aWyNGV', title: 'Spa-Luxury Baths' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/BOH-Kitchen.png?itok=7k0C6ce7', title: 'Italian Show Kitchen' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/Terrace.png?itok=jqqaZHWC', title: 'Sky View Terrace' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2026-02/Garden.png?itok=0MtIWwBN', title: 'Private Lawn & Balcony' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Parking%20for%20%202%20cars.png?itok=uqcm4Edv', title: 'Covered Car Parkings' },
  { img: 'https://ora-uae.com/sites/default/files/styles/max_256x256/public/2025-08/Maid%20%26%20Driver%20rooms.png?itok=cxufmeNZ', title: 'Staff Quarters' }
];

const featuresInclusions = [
  'A+ Grade Earthquake Resistant Structure',
  'VRV Multi-Zone Air Conditioning',
  'Private Plunge Pool & Sun Deck',
  'Italian Marble Flooring',
  'Biometric Smart Security Access',
  '100% DG Power Backup & EV Charger'
];

const nearbyLandmarks = [
  { icon: <FaPlane />, title: 'Airport Corridor', dist: '35 Mins Drive' },
  { icon: <FaSubway />, title: 'Transit Hub', dist: '8 Mins Walk' },
  { icon: <FaHospital />, title: 'Multi-Speciality Hospital', dist: '10 Mins Drive' },
  { icon: <FaBuilding />, title: 'Business & Tech Corridor', dist: '15 Mins Drive' }
];

const paymentMilestones = [
  { stage: 'Booking Token', share: '10%' },
  { stage: 'Agreement Execution', share: '20%' },
  { stage: 'Structure Milestone', share: '40%' },
  { stage: 'Handover & Registration', share: '30%' }
];

const navSections = [
  { id: 'sec-overview', label: 'Overview' },
  { id: 'sec-gallery', label: 'Gallery' },
  { id: 'sec-layout', label: 'Layout' },
  { id: 'sec-features', label: 'Features' },
  { id: 'sec-amenities', label: 'Amenities' },
  { id: 'sec-pricing', label: 'Pricing' },
  { id: 'sec-developer', label: 'Developer' },
  { id: 'sec-location', label: 'Location' }
];

export default function ViewProperty() {
  const navigate = useNavigate();
  const location = useLocation();
  const incomingData = location.state?.property;

  let openPopup;
  try {
    const popup = usePopup();
    openPopup = popup?.openPopup || (() => alert("Opening Inquiry Form..."));
  } catch (err) {
    openPopup = () => alert("Opening Inquiry Form...");
  }

  const property = {
    id: incomingData?.id || 1,
    propertyId: incomingData?.propertyId || 'ARIA-EXP',
    title: incomingData?.title || 'Signature Eco-Luxury Villa',
    location: incomingData?.location || 'Sakleshpur, Karnataka',
    city: incomingData?.city || 'Karnataka, India',
    price: incomingData?.price || '₹ 2.10 CR',
    status: incomingData?.status || 'For Sale',
    beds: incomingData?.beds ?? 3,
    baths: incomingData?.baths ?? 3,
    garage: incomingData?.garage ?? 2,
    area: incomingData?.area || '2,400 sqft',
    lotSize: incomingData?.lotSize || '3,200 sqft',
    author: incomingData?.author || 'Ariahaus Advisory',
    shortDesc: incomingData?.shortDesc || incomingData?.desc || 'Contemporary luxury residence engineered with open-concept pavilions, Italian marble flooring, soundproof double-glazed envelopes, and private sky lounges.',
    images: incomingData?.images && incomingData.images.length > 0 
      ? incomingData.images 
      : incomingData?.image 
        ? [incomingData.image, ...defaultFallbackPhotos.slice(1)]
        : defaultFallbackPhotos,
    pricing: incomingData?.pricing && incomingData.pricing.length > 0
      ? incomingData.pricing
      : [
          { type: 'Executive Suite', bhk: `${incomingData?.beds || 2} BHK`, priceStd: incomingData?.price || '₹ 1.80 Cr', priceEarly: '₹ 1.65 Cr', area: incomingData?.area || '1,400 Sq.Ft.', park: '1 Reserved Parking' },
          { type: 'Signature Duplex', bhk: `${(incomingData?.beds || 2) + 1} BHK Duplex`, priceStd: '₹ 2.65 Cr', priceEarly: '₹ 2.45 Cr', area: '2,400 Sq.Ft.', park: '2 Covered Parkings' },
          { type: 'Presidential Penthouse', bhk: `${(incomingData?.beds || 2) + 2} BHK Mansion`, priceStd: '₹ 3.80 Cr', priceEarly: '₹ 3.50 Cr', area: '3,600 Sq.Ft.', park: '3 Covered Parkings' }
        ]
  };

  const gallery = property.images;
  const pricingTiers = property.pricing;

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isEarlyBird, setIsEarlyBird] = useState(false);
  const [activeSection, setActiveSection] = useState('sec-overview');

  const [form, setForm] = useState({ name: '', email: '', phone: '', city: property.city || '', consent: true });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPhotoIndex(0);
    if (property.city) {
      setForm((prev) => ({ ...prev, city: property.city }));
    }

    const interval = setInterval(() => {
      setSelectedPhotoIndex((prevIndex) => (prevIndex + 1) % gallery.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [property.title, property.city, gallery.length]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      navSections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth'
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const API_URL = "https://script.google.com/macros/s/AKfycbxqNX2aA79Ijv9g8zxL5TmP_b8BrSs3-uo2SRsZOFCmQ_R6XNlFvaKpbkobnt84ZxbXzg/exec";

    try {
      await fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          city: form.city.trim(),
          projectName: `ViewProperty - [${property.propertyId}] ${property.title} (${property.city})`
        })
      });

      setSent(true);
      setForm({ name: '', email: '', phone: '', city: property.city || '', consent: true });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      alert('Submission error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="vp-main-container">
      <div className="floating-action-bar">
        <a href="https://wa.me/918147775092" target="_blank" rel="noreferrer" className="fab-btn fab-whatsapp" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="tel:8147775092" className="fab-btn fab-phone" aria-label="Phone">
          <FaPhoneAlt />
        </a>
      </div>

      <header className="vp-custom-navbar">
        <div className="container-fluid px-3 px-md-5 d-flex align-items-center justify-content-between">
          <Link to="/" className="vp-nav-brand d-flex align-items-center gap-2 text-decoration-none">
            <img src={Logo} alt="Ariahaus" className="vp-navbar-logo" />
            <span className="vp-brand-name">ARIAHAUS</span>
          </Link>

          <div className="vp-nav-links-center d-none d-lg-flex align-items-center gap-3">
            <Link to="/" className="vp-nav-text-link">
              Home
            </Link>
            {navSections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                className={`vp-nav-text-link ${activeSection === sec.id ? 'active-text-link' : ''}`}
                onClick={() => scrollToSection(sec.id)}
              >
                {sec.label}
              </button>
            ))}
          </div>

          <div className="vp-nav-right d-flex align-items-center">
            <button
              type="button"
              className="vp-nav-cta-btn"
              onClick={() => openPopup('ViewProperty-Navbar')}
            >
              Book Site Visit
            </button>
          </div>
        </div>

        <div className="vp-mobile-subnav d-lg-none">
          <Link to="/" className="vp-subnav-text-link">
            Home
          </Link>
          {navSections.map((sec) => (
            <button
              key={sec.id}
              type="button"
              className={`vp-subnav-text-link ${activeSection === sec.id ? 'active-subnav-text' : ''}`}
              onClick={() => scrollToSection(sec.id)}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </header>

      <div className="vp-hybrid-hero">
        <div 
          className="banner-kenburns-layer" 
          style={{ 
            backgroundImage: `url(${gallery[0]})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }} 
        />
        <div className="banner-soft-overlay" />

        <div className="vp-banner-content-bottom container-fluid px-3 px-md-5">
          <span className="ps-pill-tag">
            <FaGem className="me-1 text-gold" /> EXCLUSIVE RESIDENCE DOSSIER
          </span>
          <h1 className="vp-title">{property.title}</h1>
          <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mt-1">
            <p className="vp-address mb-0">
              <FaMapMarkerAlt className="text-gold me-2" /> {property.location} • {property.city}
            </p>
            <button
              type="button"
              className="vp-hero-action-btn"
              onClick={() => openPopup('ViewProperty-HeroBanner')}
            >
              <FaCalendarCheck className="me-2" /> Request Callback / Site Visit
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3 px-md-5 py-4">
        <div className="vp-meta-header d-flex justify-content-between align-items-center flex-wrap gap-2 pb-3 border-bottom-subtle">
          <span className="vp-prop-id-clean">
            Property ID: <strong className="text-black-bold">{property.propertyId}</strong>
          </span>
          <span className="vp-price-badge-pill">Price: {property.price}</span>
        </div>

        <div className="row g-4 g-lg-5 mt-2">
          <div className="col-12 col-lg-8">
            <section id="sec-overview" className="vp-content-section mb-5">
              <div className="vp-clean-specs-grid mb-4">
                <div className="vp-clean-spec-item">
                  <FaBed className="spec-ico" />
                  <span className="spec-label">Bedrooms</span>
                  <h6 className="spec-val">{property.beds} Master</h6>
                </div>
                <div className="vp-clean-spec-item">
                  <FaBath className="spec-ico" />
                  <span className="spec-label">Bathrooms</span>
                  <h6 className="spec-val">{property.baths} En-Suite</h6>
                </div>
                <div className="vp-clean-spec-item">
                  <FaCar className="spec-ico" />
                  <span className="spec-label">Parking</span>
                  <h6 className="spec-val">{property.garage} Covered</h6>
                </div>
                <div className="vp-clean-spec-item">
                  <FaRulerCombined className="spec-ico" />
                  <span className="spec-label">Super Built-Up</span>
                  <h6 className="spec-val">{property.area}</h6>
                </div>
                <div className="vp-clean-spec-item">
                  <FaRulerCombined className="spec-ico" />
                  <span className="spec-label">Plot Size</span>
                  <h6 className="spec-val">{property.lotSize}</h6>
                </div>
              </div>

              <h4 className="section-clean-title">Key Property Overview</h4>
              <div className="row g-3 g-md-4 mt-1">
                <div className="col-6 col-md-4">
                  <div className="clean-overview-item">
                    <FaShieldAlt className="overview-icon" />
                    <div>
                      <span className="overview-label">RERA Status</span>
                      <p className="overview-text">PRM/KA/RERA/2026</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="clean-overview-item">
                    <FaCompass className="overview-icon" />
                    <div>
                      <span className="overview-label">Facing Direction</span>
                      <p className="overview-text">East-Facing (Vaastu)</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="clean-overview-item">
                    <FaCalendarAlt className="overview-icon" />
                    <div>
                      <span className="overview-label">Possession</span>
                      <p className="overview-text">Ready to Move / 2026</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="clean-overview-item">
                    <FaCouch className="overview-icon" />
                    <div>
                      <span className="overview-label">Furnishing</span>
                      <p className="overview-text">Semi-Furnished Luxury</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="clean-overview-item">
                    <FaFileInvoiceDollar className="overview-icon" />
                    <div>
                      <span className="overview-label">Ownership</span>
                      <p className="overview-text">Freehold Title Deed</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="clean-overview-item">
                    <FaBuilding className="overview-icon" />
                    <div>
                      <span className="overview-label">Layout</span>
                      <p className="overview-text">G + 1 Independent Duplex</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="sec-gallery" className="vp-content-section mb-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="section-clean-title mb-0">Interior & Space Gallery</h4>
                <span className="auto-tag">Auto Slideshow</span>
              </div>
              <div className="vp-gallery-preview-box mb-3">
                <img src={gallery[selectedPhotoIndex]} alt="Perspective Angle" />
              </div>
              <div className="d-flex gap-3 overflow-x-auto pb-2 gallery-thumb-strip">
                {gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className={`thumb-chip ${idx === selectedPhotoIndex ? 'active-thumb' : ''}`}
                    onClick={() => setSelectedPhotoIndex(idx)}
                  >
                    <img src={img} alt={`Angle ${idx + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </section>

            <section id="sec-layout" className="vp-content-section mb-5">
              <h4 className="section-clean-title">Architectural Description & Layout</h4>
              <p className="clean-desc-lead mt-2 mb-3">{property.shortDesc}</p>
              <ul className="clean-bullets-list">
                <li>Double-height living pavilion with private sun terrace connectivity.</li>
                <li>Designer Italian show kitchen complete with quartz central breakfast counter.</li>
                <li>Spa-inspired bathrooms equipped with rain shower heads and soaking tubs.</li>
                <li>Dedicated climate-controlled plunge pool with integrated sun lounge deck.</li>
              </ul>
            </section>

            <section id="sec-features" className="vp-content-section mb-5">
              <h4 className="section-clean-title">Features & Inclusions</h4>
              <div className="row g-3 mt-1">
                {featuresInclusions.map((feat, idx) => (
                  <div className="col-12 col-md-6" key={idx}>
                    <div className="clean-feature-check">
                      <FaCheck className="text-gold me-2" />
                      <span>{feat}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="sec-amenities" className="vp-content-section mb-5">
              <h4 className="section-clean-title">Unit Features & Amenities</h4>
              <div className="row g-3 mt-1">
                {unitFeatures.map((feat, index) => (
                  <div className="col-6 col-md-3" key={index}>
                    <div className="clean-amenity-card">
                      <img src={feat.img} alt={feat.title} className="amenity-img spin-on-hover" />
                      <p className="amenity-title">{feat.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {pricingTiers.length > 0 && (
              <section id="sec-pricing" className="vp-content-section mb-5">
                <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
                  <div>
                    <h4 className="section-clean-title mb-0">Pricing & Available Units</h4>
                    <p className="text-sub-dark m-0">Swipe cards to view unit options</p>
                  </div>
                  
                  <div className="clean-pricing-toggle">
                    <span className={!isEarlyBird ? 'active-toggle' : 'inactive-toggle'}>Standard</span>
                    <label className="pricing-switch">
                      <input
                        type="checkbox"
                        checked={isEarlyBird}
                        onChange={() => setIsEarlyBird(!isEarlyBird)}
                      />
                      <span className="slider round"></span>
                    </label>
                    <span className={isEarlyBird ? 'active-toggle' : 'inactive-toggle'}>
                      Early Bird <span className="discount-gold">Save 8%</span>
                    </span>
                  </div>
                </div>

                <Swiper
                  modules={[Autoplay]}
                  grabCursor={true}
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 20 }
                  }}
                  className="clean-pricing-swiper py-2 cursor-grab-swiper"
                >
                  {pricingTiers.map((tier, idx) => (
                    <SwiperSlide key={idx}>
                      <div className={`clean-price-card ${idx === 1 ? 'featured-card' : ''}`}>
                        {idx === 1 && <span className="popular-ribbon">Most Popular</span>}
                        <div className="tier-icon">
                          {idx === 0 ? <FaBuilding /> : idx === 1 ? <FaCrown /> : <FaGem />}
                        </div>
                        <h5 className="tier-name">{tier.type}</h5>
                        <span className="tier-bhk">{tier.bhk}</span>

                        <div className="tier-price my-2">
                          {isEarlyBird ? tier.priceEarly : tier.priceStd}
                        </div>

                        <hr className="subtle-hr" />

                        <ul className="tier-features mb-3">
                          <li><FaCheck className="text-gold me-2" /> {tier.area} Built-Up</li>
                          <li><FaCheck className="text-gold me-2" /> {tier.park}</li>
                          <li><FaCheck className="text-gold me-2" /> Italian Chef Kitchen</li>
                          <li><FaCheck className="text-gold me-2" /> 100% Vaastu Compliant</li>
                        </ul>

                        <button
                          type="button"
                          className="theme-outline-btn w-100 py-2"
                          onClick={() => openPopup(`UnitBooking-${tier.type}`)}
                        >
                          Enquire About Unit
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </section>
            )}

            <section id="sec-developer" className="vp-content-section mb-5">
              <h4 className="section-clean-title">About The Developer</h4>
              <div className="clean-dev-box mt-3">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="dev-icon-circle">
                    <FaCity />
                  </div>
                  <div>
                    <h5 className="dev-name mb-0">Ariahaus Luxury Infrastructure</h5>
                    <small className="dev-tag">Crafting Sustainable Eco-Residences Since 2014</small>
                  </div>
                </div>
                <p className="dev-bio mb-3">
                  Ariahaus is recognized for engineering landmark low-density residential estates across prestige corridors. Committed to zero-carbon footprints, high Vaastu alignment, and biophilic architectural principles.
                </p>
                <div className="row g-3 mb-3">
                  <div className="col-4">
                    <div className="metric-cell">
                      <FaAward className="text-gold mb-1" />
                      <h6>12+</h6>
                      <small>Delivered</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="metric-cell">
                      <FaShieldAlt className="text-gold mb-1" />
                      <h6>100%</h6>
                      <small>Clear Titles</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="metric-cell">
                      <FaGem className="text-gold mb-1" />
                      <h6>4.9/5</h6>
                      <small>Rating</small>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="theme-submit-btn w-100 py-2 mt-2"
                  onClick={() => openPopup('Developer-ScheduleTour')}
                >
                  Schedule Private Developer Tour
                </button>
              </div>
            </section>

            <section id="sec-location" className="vp-content-section mb-5">
              <h4 className="section-clean-title">Transit & Connectivity</h4>
              <div className="row g-3 mt-1 mb-4">
                {nearbyLandmarks.map((item, idx) => (
                  <div className="col-12 col-sm-6 col-md-3" key={idx}>
                    <div className="clean-transit-cell">
                      <div className="transit-ico-box spin-on-hover mb-2">{item.icon}</div>
                      <h6 className="transit-name mb-1">{item.title}</h6>
                      <span className="transit-dist">{item.dist}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h4 className="section-clean-title">Prime Location Map</h4>
              <div className="clean-map-wrap mt-3">
                <iframe
                  title="Property Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8928373302636!2d75.782012!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3244673199859%3A0xc3f6ef098864703a!2sSakleshpur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="340"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </section>
          </div>

          <div className="col-12 col-lg-4">
            <div className="theme-lead-form-card p-4 mb-4">
              <div className="text-center mb-4">
                <h3 className="form-theme-title mb-1">Submit Your Details</h3>
                <p className="form-theme-subtitle mb-0">We’ll Contact You Within 24 Hours</p>
              </div>

              {sent ? (
                <div className="text-center py-4 bg-white rounded-3">
                  <h5 className="text-gold font-serif mb-1">Inquiry Received</h5>
                  <p className="text-muted small mb-0">Our executive will get in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="theme-form-input"
                      placeholder="Your Name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="theme-form-input"
                      placeholder="Your Email Address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="tel"
                      className="theme-form-input"
                      placeholder="Your phone number"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      type="text"
                      className="theme-form-input"
                      placeholder="Your City"
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    />
                  </div>

                  <div className="form-check d-flex align-items-start gap-2 mb-4">
                    <input
                      type="checkbox"
                      className="form-check-input mt-1"
                      id="consentCheck"
                      checked={form.consent}
                      onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                      required
                    />
                    <label className="form-check-label text-muted" htmlFor="consentCheck" style={{ fontSize: '0.7rem', lineHeight: '1.4' }}>
                      I authorize company representatives to Call, SMS, Email or WhatsApp me about its products and offers. This consent overrides any registration for DNC/NDNC.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="theme-submit-btn w-100 py-3"
                    disabled={submitting}
                  >
                    {submitting ? 'Submitting...' : (
                      <>
                        Submit <FaPaperPlane className="ms-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="clean-sidebar-box p-4 mb-4">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="advisor-avatar-box">
                  <FaUserTie />
                </div>
                <div>
                  <small className="text-gold text-uppercase fw-500" style={{ fontSize: '0.72rem', letterSpacing: '0.6px' }}>
                    Listing Advisor
                  </small>
                  <h6 className="mb-0 text-dark font-serif">{property.author}</h6>
                  <small className="text-muted">Exclusive Project Desk</small>
                </div>
              </div>

              <div className="d-flex flex-column gap-2 mt-3">
                <a href="tel:8147775092" className="sidebar-action-btn">
                  <FaPhoneAlt className="text-gold" /> +91 81477 75092
                </a>
                <a href="https://wa.me/918147775092" target="_blank" rel="noreferrer" className="sidebar-action-btn btn-whatsapp-theme">
                  <FaWhatsapp /> WhatsApp Consultant
                </a>
                <a href="mailto:info@amyrafarms.com" className="sidebar-action-btn">
                  <FaEnvelope className="text-gold" /> info@amyrafarms.com
                </a>
              </div>
            </div>

            <div className="clean-sidebar-box p-4 mb-4 text-center">
              <div className="dossier-download-icon mb-2">
                <FaFileDownload />
              </div>
              <h6 className="font-serif mb-1 text-dark">Download Project Dossier</h6>
              <p className="text-muted small mb-3" style={{ fontSize: '0.8rem' }}>
                Access verified legal approvals, full pricing breakdown, and layout blueprints.
              </p>
              <button
                type="button"
                className="theme-outline-btn w-100 py-2"
                onClick={() => openPopup('DossierDownload')}
              >
                Download PDF Dossier
              </button>
            </div>

            <div className="clean-sidebar-box p-4 mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaCoins className="text-gold" />
                <h5 className="sidebar-box-title mb-0">Payment Schedule</h5>
              </div>
              <ul className="clean-milestone-list">
                {paymentMilestones.map((milestone, idx) => (
                  <li key={idx} className="d-flex justify-content-between align-items-center py-2">
                    <span className="milestone-name">{milestone.stage}</span>
                    <span className="milestone-badge-pill">{milestone.share}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="clean-sidebar-box p-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaFileAlt className="text-gold" />
                <h5 className="sidebar-box-title mb-0">Legal Approvals</h5>
              </div>
              <ul className="clean-legal-list">
                <li><FaCheck className="text-gold me-2" /> Freehold Title Clear</li>
                <li><FaCheck className="text-gold me-2" /> Gram Panchayat / Municipal Approvals</li>
                <li><FaCheck className="text-gold me-2" /> Bank Finance Available (SBI / HDFC)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="zen-custom-footer py-5 mt-5">
        <div className="container-fluid px-3 px-md-5">
          <div className="row g-4 g-lg-5 pb-5">
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
                <li><Link to="/Aboutpage">About Us</Link></li>
                <li><Link to="/PropertySearch">Search Properties</Link></li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6">
              <h6 className="zen-column-header">CONTACT</h6>
              <div className="zen-contact-details">
                <p className="mb-1"><a href="mailto:info@amyrafarms.com" className="zen-email-link">info@amyrafarms.com</a></p>
                <p className="mb-3"><a href="https://ariahausvillas.in" className="zen-email-link">ariahausvillas.in</a></p>
                <div className="zen-address-text">
                  <p className="m-0">Sakleshpur, Coffee Corridor,</p>
                  <p className="m-0">Karnataka, India</p>
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
                  <Link to="/terms">Terms and Conditions</Link>
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