import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
  FaExchangeAlt,
  FaChevronRight,
  FaWhatsapp,
  FaSpinner,
  FaFacebookF,
  FaInstagram,
  FaGlobe,
  FaCheckCircle,
  FaFileDownload,
  FaPhoneAlt,
  FaGem
} from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import './PropertySearch.css';

const recentInsights = [
  { title: "Western Ghats Real Estate Outlook", date: "Aug 2026" },
  { title: "Villa vs Apartment Yield Analysis", date: "Jul 2026" },
  { title: "Eco-Friendly Architecture Trends", date: "Jul 2026" },
  { title: "Plantation Corridor Investment Guide", date: "Jun 2026" }
];

const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const categoryData = {
  flat: [
    {
      id: 1,
      propertyId: "FLAT-101",
      title: "Signature 3 BHK Skyline Apartment",
      status: "For Sale",
      price: "₹ 1.65 CR",
      shortDesc: "Panoramic views with Italian marble flooring, connected en-suite baths, and modern kitchen.",
      beds: 3,
      baths: 3,
      garage: 2,
      area: "1,750 sqft",
      lotSize: "2,200 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 2,
      propertyId: "FLAT-102",
      title: "Luxury 2 BHK Park View Apartment",
      status: "For Sale",
      price: "₹ 1.15 CR",
      shortDesc: "Sunlit open plan layout featuring wide balconies, covered parking, and clubhouse access.",
      beds: 2,
      baths: 2,
      garage: 1,
      area: "1,250 sqft",
      lotSize: "1,600 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 3,
      propertyId: "FLAT-103",
      title: "Royal 4 BHK Penthouse Suite",
      status: "For Sale",
      price: "₹ 2.85 CR",
      shortDesc: "Duplex penthouse with private terrace deck, plunge pool, and floor-to-ceiling glass walls.",
      beds: 4,
      baths: 4,
      garage: 2,
      area: "3,100 sqft",
      lotSize: "3,800 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 4,
      propertyId: "FLAT-104",
      title: "Boutique 3 BHK Smart Residence",
      status: "For Sale",
      price: "₹ 1.95 CR",
      shortDesc: "Complete home automation, biometric access, VRV air conditioning, and EV charger point.",
      beds: 3,
      baths: 3,
      garage: 2,
      area: "1,920 sqft",
      lotSize: "2,400 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    }
  ],
  villa: [
    {
      id: 5,
      propertyId: "VILLA-201",
      title: "4 BHK Eco-Luxury Villa with Pool",
      status: "For Sale",
      price: "₹ 3.45 CR",
      shortDesc: "Private temperature plunge pool, double-height living room, and direct coffee trail access.",
      beds: 4,
      baths: 4,
      garage: 2,
      area: "3,600 sqft",
      lotSize: "4,500 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 6,
      propertyId: "VILLA-202",
      title: "3 BHK Misty Valley Country Villa",
      status: "For Sale",
      price: "₹ 2.15 CR",
      shortDesc: "Charming stone architecture with teakwood patio, garden deck, and 24/7 guarded security.",
      beds: 3,
      baths: 3,
      garage: 2,
      area: "2,400 sqft",
      lotSize: "3,200 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/206172/pexels-photo-206172.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 7,
      propertyId: "VILLA-203",
      title: "5 BHK Signature Presidential Estate",
      status: "For Sale",
      price: "₹ 5.20 CR",
      shortDesc: "5,000+ sqft private sanctuary with personal home cinema, private elevator, and servant quarter.",
      beds: 5,
      baths: 6,
      garage: 3,
      area: "5,200 sqft",
      lotSize: "6,500 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/2440471/pexels-photo-2440471.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/3288102/pexels-photo-3288102.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 8,
      propertyId: "VILLA-204",
      title: "2 BHK Zen Retreat Plantation Villa",
      status: "For Sale",
      price: "₹ 1.65 CR",
      shortDesc: "Serene compact villa crafted for vacation rentals with managed 5-star concierge operations.",
      beds: 2,
      baths: 2,
      garage: 1,
      area: "1,850 sqft",
      lotSize: "2,500 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/221502/pexels-photo-221502.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    }
  ],
  plot: [
    {
      id: 9,
      propertyId: "PLOT-301",
      title: "Premium 2,400 Sq.Ft. Gated Villa Plot",
      status: "For Sale",
      price: "₹ 65 Lakh",
      shortDesc: "Corner freehold plot with 40ft wide blacktop road, water connection, and 3-tier security.",
      beds: 0,
      baths: 0,
      garage: 0,
      area: "2,400 sqft",
      lotSize: "2,400 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/158607/cows-pasture-nature-agricultural-158607.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 10,
      propertyId: "PLOT-302",
      title: "1-Acre Organic Coffee Estate Land",
      status: "For Sale",
      price: "₹ 1.85 CR",
      shortDesc: "Fertile plantation with silver oak trees, clear title, natural stream boundary, and electricity.",
      beds: 0,
      baths: 0,
      garage: 0,
      area: "43,560 sqft",
      lotSize: "43,560 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/158607/cows-pasture-nature-agricultural-158607.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 11,
      propertyId: "PLOT-303",
      title: "Hilltop Panorama Residential Plot",
      status: "For Sale",
      price: "₹ 85 Lakh",
      shortDesc: "Elevated slope with 360-degree hill views, RERA approved, ideal for custom glass villa.",
      beds: 0,
      baths: 0,
      garage: 0,
      area: "3,200 sqft",
      lotSize: "3,200 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    },
    {
      id: 12,
      propertyId: "PLOT-304",
      title: "Commercial Highway Corridor Plot",
      status: "For Sale",
      price: "₹ 2.40 CR",
      shortDesc: "Direct highway frontage with commercial conversion clearance, high appreciation potential.",
      beds: 0,
      baths: 0,
      garage: 0,
      area: "10,000 sqft",
      lotSize: "10,000 sqft",
      author: "Ariahaus Advisory",
      images: [
        "https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/158607/cows-pasture-nature-agricultural-158607.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200"
      ]
    }
  ]
};

export default function PropertySearch() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(useLocation().search);

  const rawLocation = searchParams.get('location') || 'Sakleshpur';
  const cleanLocation = rawLocation.split(',')[0].trim();
  const typeParam = (searchParams.get('type') || 'flat').toLowerCase();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const selectedCategory = categoryData[typeParam] || categoryData.flat;
      const customized = selectedCategory.map((item) => ({
        ...item,
        location: `${cleanLocation}, Prime Corridor`
      }));

      setProperties(customized);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [cleanLocation, typeParam]);

  const getCategoryLabel = (type) => {
    if (type === 'villa') return 'Villas';
    if (type === 'plot') return 'Plots';
    return 'Flats';
  };

  const handlePropertyClick = (item) => {
    const slug = createSlug(item.title);
    navigate(`/property/${slug}`, { state: { property: item } });
  };

  return (
    <div className="ps-main-container">
      <div className="floating-action-bar">
        <a href="https://wa.me/918147775092" target="_blank" rel="noreferrer" className="fab-btn fab-whatsapp" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="tel:8147775092" className="fab-btn fab-phone" aria-label="Phone">
          <FaPhoneAlt />
        </a>
      </div>

      <div className="ps-hybrid-banner">
        <div className="banner-kenburns-layer" />
        <div className="banner-soft-overlay" />

        <div className="ps-banner-content">
          <span className="ps-pill-tag">
            <FaGem className="me-1 text-gold" /> Verified Listings
          </span>
          <h1 className="ps-banner-title">PROPERTY SEARCH</h1>
          <p className="ps-banner-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="active-crumb">Search Results</span>
          </p>
        </div>
      </div>

      <div className="container-fluid px-3 px-md-5 py-5">
        <div className="row g-4 g-lg-5">
          <div className="col-12 col-lg-8">
            <div className="ps-results-header d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
              <h3 className="ps-section-heading mb-0">
                Available <span className="text-gold">{getCategoryLabel(typeParam)}</span> in <span className="text-dark fw-600">{cleanLocation}</span>
              </h3>
              <span className="ps-count-badge">{properties.length} Results Found</span>
            </div>

            {loading ? (
              <div className="ps-loader-container text-center py-5">
                <FaSpinner className="ps-spinner" />
                <p className="text-gold mt-3">Loading available properties...</p>
              </div>
            ) : (
              <div className="ps-cards-stack d-flex flex-column gap-4">
                {properties.map((item, index) => (
                  <div
                    className="ps-horizontal-card"
                    key={index}
                    onClick={() => handlePropertyClick(item)}
                  >
                    <div className="ps-card-img-wrap">
                      <img src={item.images[0]} alt={item.title} loading="lazy" />
                      <div className="ps-img-overlay">
                        <button
                          type="button"
                          className="ps-view-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePropertyClick(item);
                          }}
                        >
                          View Property
                        </button>
                      </div>
                      <div className="ps-img-actions" onClick={(e) => e.stopPropagation()}>
                        <button type="button" className="ps-action-icon" aria-label="Save"><FaHeart /></button>
                        <button type="button" className="ps-action-icon" aria-label="Compare"><FaExchangeAlt /></button>
                      </div>
                    </div>

                    <div className="ps-card-info-wrap">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span className="ps-prop-status">{item.status}</span>
                        <h4 className="ps-prop-price">{item.price}</h4>
                      </div>

                      <h4 className="ps-card-title">
                        {item.title}
                      </h4>

                      <p className="ps-card-shortdesc">{item.shortDesc}</p>

                      {typeParam !== 'plot' ? (
                        <div className="ps-specs-row">
                          <div className="ps-spec-item">
                            <small>Bedrooms</small>
                            <span><FaBed className="spec-ico text-gold me-1" /> {item.beds}</span>
                          </div>
                          <div className="ps-spec-item">
                            <small>Bathrooms</small>
                            <span><FaBath className="spec-ico text-gold me-1" /> {item.baths}</span>
                          </div>
                          <div className="ps-spec-item">
                            <small>Area</small>
                            <span><FaRulerCombined className="spec-ico text-gold me-1" /> {item.area}</span>
                          </div>
                        </div>
                      ) : (
                        <div className="ps-specs-row">
                          <div className="ps-spec-item">
                            <small>Plot Area</small>
                            <span><FaRulerCombined className="spec-ico text-gold me-1" /> {item.area}</span>
                          </div>
                          <div className="ps-spec-item">
                            <small>Status</small>
                            <span><FaCheckCircle className="spec-ico text-gold me-1" /> Freehold</span>
                          </div>
                        </div>
                      )}

                      <div className="ps-author-footer pt-3 mt-3 border-top-glass d-flex justify-content-between align-items-center">
                        <small className="text-muted">Status: <strong className="text-dark">RERA Approved</strong></small>
                        <button
                          type="button"
                          className="ps-text-link-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePropertyClick(item);
                          }}
                        >
                          View Details <FaChevronRight className="chevron-link ms-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="col-12 col-lg-4">
            <div className="ps-sidebar-widget mb-4">
              <h4 className="ps-widget-title">Property Types</h4>
              <div className="category-count-list">
                <div
                  className={`cat-count-item ${typeParam === 'flat' ? 'active-cat' : ''}`}
                  onClick={() => navigate(`/PropertySearch?type=flat&location=${encodeURIComponent(cleanLocation)}`)}
                >
                  <span>Flats & Apartments</span>
                  <span className="cat-badge">4 Available</span>
                </div>
                <div
                  className={`cat-count-item ${typeParam === 'villa' ? 'active-cat' : ''}`}
                  onClick={() => navigate(`/PropertySearch?type=villa&location=${encodeURIComponent(cleanLocation)}`)}
                >
                  <span>Luxury Villas & Estates</span>
                  <span className="cat-badge">4 Available</span>
                </div>
                <div
                  className={`cat-count-item ${typeParam === 'plot' ? 'active-cat' : ''}`}
                  onClick={() => navigate(`/PropertySearch?type=plot&location=${encodeURIComponent(cleanLocation)}`)}
                >
                  <span>Residential & Farm Plots</span>
                  <span className="cat-badge">4 Available</span>
                </div>
              </div>
            </div>

            <div className="ps-sidebar-widget mb-4">
              <h4 className="ps-widget-title">Market Insights</h4>
              <ul className="ps-recent-list">
                {recentInsights.map((post, i) => (
                  <li key={i} className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-2">
                      <FaChevronRight className="widget-arrow" />
                      <span>{post.title}</span>
                    </div>
                    <small className="text-muted">{post.date}</small>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ps-sidebar-widget mb-4 text-center">
              <div className="floating-action-icon mb-2">
                <FaFileDownload />
              </div>
              <h5 className="text-dark font-serif mb-1" style={{ fontSize: '1.05rem' }}>Download Project Dossier</h5>
              <p className="small text-muted mb-3" style={{ fontSize: '0.82rem' }}>Get price charts, master floor layouts, and legal approvals in PDF.</p>
              <button
                type="button"
                className="ps-text-link-btn text-gold fw-bold"
                onClick={() => alert("Dossier downloading...")}
              >
                Download PDF Brochure <FaChevronRight className="chevron-link ms-1" />
              </button>
            </div>

            <div className="ps-sidebar-cta">
              <h5 className="text-white mb-2 font-serif" style={{ fontSize: '1.15rem' }}>Need Quick Consultation?</h5>
              <p className="small text-white-50 mb-4" style={{ fontSize: '0.85rem' }}>Speak directly with our senior regional property advisors.</p>
              <div className="d-flex flex-column gap-2">
                <a
                  href="https://wa.me/918147775092"
                  target="_blank"
                  rel="noreferrer"
                  className="ps-whatsapp-btn justify-content-center"
                >
                  <FaWhatsapp className="me-2" /> WhatsApp Us
                </a>
                <a
                  href="tel:8147775092"
                  className="ps-contact-call-btn"
                >
                  <FaPhoneAlt className="me-2" /> Call Advisor
                </a>
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