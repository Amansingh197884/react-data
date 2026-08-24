import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  FaBed,
  FaBath,
  FaCar,
  FaRulerCombined,
  FaCheck,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
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
  FaImages,
  FaCoins,
  FaFileAlt,
  FaGem
} from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import './PropertySearch.css';

const fallbackPhotos = [
  "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
  "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
  "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
  "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
  "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
  "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
];

const nearbyLandmarks = [
  { icon: <FaPlane />, title: "Airport Corridor", dist: "35 Mins Drive" },
  { icon: <FaSubway />, title: "Transit Hub", dist: "8 Mins Walk" },
  { icon: <FaHospital />, title: "Hospital", dist: "10 Mins Drive" },
  { icon: <FaBuilding />, title: "Business Park", dist: "15 Mins Drive" }
];

const paymentMilestones = [
  { stage: "Booking Token", share: "10%" },
  { stage: "Agreement Execution", share: "20%" },
  { stage: "Structure Milestone", share: "40%" },
  { stage: "Handover & Registration", share: "30%" }
];

export default function ViewProperty() {
  const location = useLocation();
  const propertyData = location.state?.property;

  const property = propertyData || {
    title: "Signature 4 BHK Eco-Luxury Villa with Plunge Pool",
    location: "Coffee Corridor, Sakleshpur, Karnataka",
    price: "₹ 2.85 CR",
    beds: 4,
    baths: 4,
    garage: 2,
    area: "3,200 sqft",
    lotSize: "4,500 sqft",
    author: "Ariahaus Advisory",
    shortDesc: "Experience luxury living with private plunge pool, panoramic greenery views, en-suite Italian baths, and double-height ceilings.",
    images: fallbackPhotos
  };

  const gallery = property.images && property.images.length > 0
    ? property.images
    : fallbackPhotos;

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '' });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxqNX2aA79Ijv9g8zxL5TmP_b8BrSs3-uo2SRsZOFCmQ_R6XNlFvaKpbkobnt84ZxbXzg/exec", {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          city: form.city.trim(),
          projectName: `ViewProperty - ${property.title}`
        })
      });

      setSent(true);
      setForm({ name: '', email: '', phone: '', city: '' });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      alert("Submission error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="vp-main-container">
      <div className="vp-hybrid-hero">
        <div className="banner-kenburns-layer" />
        <div className="banner-soft-overlay" />
        <div className="banner-mesh-shimmer" />

        <div className="vp-banner-header-text">
          <div className="container-fluid px-3 px-md-5">
            <span className="ps-pill-tag">
              <FaGem className="me-1 text-gold" /> Exclusive Residence Dossier
            </span>
            <h1 className="vp-title">{property.title}</h1>
            <p className="vp-address">{property.location}</p>
          </div>
        </div>
      </div>

      <div className="container-fluid px-3 px-md-5 py-5">
        <div className="row g-4 g-lg-5">
          <div className="col-12 col-lg-8">
            <div className="vp-meta-bar d-flex justify-content-between align-items-center mb-4">
              <span className="vp-prop-id">
                Property: <strong className="text-dark">{property.title}</strong>
              </span>
              <span className="vp-badge-status">Price: {property.price}</span>
            </div>

            <div className="vp-specs-card mb-4">
              <div className="vp-spec-box">
                <FaBed className="vp-spec-icon" />
                <small>Bedrooms</small>
                <h6>{property.beds} Master</h6>
              </div>
              <div className="vp-spec-box">
                <FaBath className="vp-spec-icon" />
                <small>Bathrooms</small>
                <h6>{property.baths} En-Suite</h6>
              </div>
              <div className="vp-spec-box">
                <FaCar className="vp-spec-icon" />
                <small>Parking</small>
                <h6>{property.garage || 2} Covered</h6>
              </div>
              <div className="vp-spec-box">
                <FaRulerCombined className="vp-spec-icon" />
                <small>Super Built-Up</small>
                <h6>{property.area}</h6>
              </div>
              <div className="vp-spec-box">
                <FaRulerCombined className="vp-spec-icon" />
                <small>Plot Size</small>
                <h6>{property.lotSize || "4,500 sqft"}</h6>
              </div>
            </div>

            <div className="vp-section-box mb-4">
              <h4 className="vp-block-title">Key Property Overview</h4>
              <div className="row g-3 vp-overview-grid mt-1">
                <div className="col-6 col-md-4">
                  <div className="vp-overview-item">
                    <FaShieldAlt className="overview-ico text-gold me-2" />
                    <div>
                      <small>RERA Status</small>
                      <p>PRM/KA/RERA/2026</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4">
                  <div className="vp-overview-item">
                    <FaCompass className="overview-ico text-gold me-2" />
                    <div>
                      <small>Facing Direction</small>
                      <p>East-Facing (Vaastu)</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4">
                  <div className="vp-overview-item">
                    <FaCalendarAlt className="overview-ico text-gold me-2" />
                    <div>
                      <small>Possession</small>
                      <p>Ready to Move / 2026</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4">
                  <div className="vp-overview-item">
                    <FaCouch className="overview-ico text-gold me-2" />
                    <div>
                      <small>Furnishing</small>
                      <p>Semi-Furnished Luxury</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4">
                  <div className="vp-overview-item">
                    <FaFileInvoiceDollar className="overview-ico text-gold me-2" />
                    <div>
                      <small>Ownership</small>
                      <p>Freehold Title Deed</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4">
                  <div className="vp-overview-item">
                    <FaBuilding className="overview-ico text-gold me-2" />
                    <div>
                      <small>Layout</small>
                      <p>G + 1 Independent Duplex</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="vp-section-box mb-4">
              <h4 className="vp-block-title">Interior & Space Gallery</h4>
              <div className="vp-active-photo-preview mb-3">
                <img src={gallery[selectedPhotoIndex]} alt="Property Perspective" />
              </div>
              <div className="d-flex gap-2 overflow-x-auto pb-1">
                {gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className={`vp-photo-chip ${idx === selectedPhotoIndex ? 'active-chip' : ''}`}
                    onClick={() => setSelectedPhotoIndex(idx)}
                  >
                    <img src={img} alt={`Angle ${idx + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            <div className="vp-section-box mb-4">
              <h4 className="vp-block-title">Architectural Description & Layout</h4>
              <p className="vp-desc-lead">{property.shortDesc}</p>

              <ul className="vp-bullets-list">
                <li>Double-height living pavilion with private sun terrace connectivity.</li>
                <li>Designer Italian show kitchen complete with quartz central breakfast counter.</li>
                <li>Spa-inspired bathrooms equipped with rain shower heads and soaking tubs.</li>
                <li>Dedicated climate-controlled plunge pool with integrated sun lounge deck.</li>
              </ul>
            </div>

            <div className="vp-section-box mb-4">
              <h4 className="vp-block-title">Features & Inclusions</h4>
              <div className="row g-3">
                {[
                  "A+ Grade Earthquake Resistant Structure",
                  "VRV Multi-Zone Air Conditioning",
                  "Private Plunge Pool & Sun Deck",
                  "Italian Marble Flooring",
                  "Biometric Smart Security",
                  "100% DG Power Backup"
                ].map((feat, idx) => (
                  <div className="col-12 col-md-6" key={idx}>
                    <div className="vp-feature-item">
                      <FaCheck className="vp-check-icon" />
                      <span>{feat}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="vp-section-box mb-4">
              <h4 className="vp-block-title">Transit & Connectivity</h4>
              <div className="row g-3">
                {nearbyLandmarks.map((item, idx) => (
                  <div className="col-6 col-md-3" key={idx}>
                    <div className="vp-landmark-box text-center p-3">
                      <div className="landmark-icon mb-2">{item.icon}</div>
                      <h6 className="mb-1 text-dark">{item.title}</h6>
                      <small className="text-gold">{item.dist}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="vp-section-box">
              <h4 className="vp-block-title">Location Map</h4>
              <div className="vp-map-wrap">
                <iframe
                  title="Property Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8928373302636!2d75.782012!3d12.971598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3244673199859%3A0xc3f6ef098864703a!2sSakleshpur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="320"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="vp-agent-card p-4 mb-4">
              <div className="d-flex align-items-center gap-3 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200"
                  alt="Agent"
                  className="vp-agent-avatar"
                />
                <div>
                  <small className="text-gold text-uppercase fw-600" style={{ fontSize: '0.72rem', letterSpacing: '0.8px' }}>
                    Listing Advisor
                  </small>
                  <h5 className="text-dark mb-0">{property.author}</h5>
                  <small className="text-muted">Ariahaus Advisory</small>
                </div>
              </div>

              <div className="vp-contact-links d-flex flex-column gap-2 mb-4">
                <a href="tel:8147775092" className="vp-contact-btn">
                  <FaPhoneAlt /> +91 81477 75092
                </a>
                <a href="https://wa.me/918147775092" target="_blank" rel="noreferrer" className="vp-contact-btn btn-whatsapp">
                  <FaWhatsapp /> WhatsApp Consultant
                </a>
                <a href="mailto:info@amyrafarms.com" className="vp-contact-btn">
                  <FaEnvelope /> info@amyrafarms.com
                </a>
              </div>

              <h6 className="text-dark text-uppercase mb-3 font-sans" style={{ fontSize: '0.82rem', letterSpacing: '1px' }}>
                Request A Site Tour & Callback
              </h6>

              {sent ? (
                <div className="text-center py-4">
                  <h5 className="text-gold font-serif mb-1">Inquiry Received</h5>
                  <p className="text-muted small mb-0">Our executive will get in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="vp-form-group mb-3">
                    <label className="vp-form-label">Full Name *</label>
                    <input
                      type="text"
                      className="vp-input-field"
                      placeholder="Enter your full name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="vp-form-group mb-3">
                    <label className="vp-form-label">Email Address *</label>
                    <input
                      type="email"
                      className="vp-input-field"
                      placeholder="Enter your email address"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div className="vp-form-group mb-3">
                    <label className="vp-form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="vp-input-field"
                      placeholder="Enter your phone number"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>

                  <div className="vp-form-group mb-4">
                    <label className="vp-form-label">City *</label>
                    <input
                      type="text"
                      className="vp-input-field"
                      placeholder="Enter your city"
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="discover-btn-gold w-100 py-3 text-uppercase fw-bold"
                    disabled={submitting}
                  >
                    {submitting ? "Submitting..." : (
                      <>
                        Book Site Tour <FaPaperPlane className="ms-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="vp-side-widget mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaImages className="text-gold" />
                <h5 className="vp-side-widget-title mb-0">Select Photo Angle</h5>
              </div>
              <div className="row g-2">
                {gallery.slice(0, 6).map((imgUrl, idx) => (
                  <div className="col-4" key={idx}>
                    <div 
                      className={`vp-side-gallery-item ${idx === selectedPhotoIndex ? 'active-side-thumb' : ''}`}
                      onClick={() => setSelectedPhotoIndex(idx)}
                    >
                      <img src={imgUrl} alt={`Angle ${idx + 1}`} loading="lazy" />
                      <span className="gallery-caption-overlay">Photo {idx + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="vp-side-widget mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaCoins className="text-gold" />
                <h5 className="vp-side-widget-title mb-0">Payment Schedule</h5>
              </div>
              <ul className="vp-payment-schedule-list">
                {paymentMilestones.map((milestone, idx) => (
                  <li key={idx} className="d-flex justify-content-between align-items-center py-2">
                    <span className="milestone-title">{milestone.stage}</span>
                    <span className="milestone-badge">{milestone.share}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="vp-side-widget">
              <div className="d-flex align-items-center gap-2 mb-3">
                <FaFileAlt className="text-gold" />
                <h5 className="vp-side-widget-title mb-0">Legal Approvals</h5>
              </div>
              <ul className="vp-legal-list">
                <li><FaCheck className="text-gold me-2" /> Freehold Title Clear</li>
                <li><FaCheck className="text-gold me-2" /> Gram Panchayat / Municipal Approvals</li>
                <li><FaCheck className="text-gold me-2" /> Bank Finance Available (SBI / HDFC)</li>
              </ul>
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