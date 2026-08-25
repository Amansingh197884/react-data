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
        "https://i.pinimg.com/736x/8f/26/66/8f266673fa99a947be88f83a1038db06.jpg",
        "https://i.pinimg.com/736x/8f/26/66/8f266673fa99a947be88f83a1038db06.jpg",
        "https://i.pinimg.com/736x/10/9f/57/109f57ba8d8a6b84f5cbd806787e637b.jpg",
        "https://i.pinimg.com/1200x/d3/75/90/d375900924fb8ec4521165e8d422fba3.jpg",
        "https://i.pinimg.com/736x/8a/cc/8c/8acc8ccc8649512d66b8839be6ae8d40.jpg",
        "https://i.pinimg.com/736x/f2/10/f0/f210f0d5b6b251553f81fe29a9b277a8.jpg"
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
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/47/96/04/479604dff6f537980434e2c86cfaed88.jpg",
        "https://i.pinimg.com/736x/93/74/19/937419cd16165d937a9dd62956bb6396.jpg",
        "https://i.pinimg.com/736x/17/b4/b6/17b4b66eafba4a753e4d2876c2654e28.jpg",
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
        "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
        "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
        "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
        "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
        "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
        "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
        "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
        "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
        "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
        "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
        "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
        "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
        "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
        "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
        "https://i.pinimg.com/736x/4b/32/38/4b3238634c4f3e5e6e87900b95ebca97.jpg",
        "https://i.pinimg.com/736x/11/49/71/114971dc67f2b9636c0a0c4f346fa97c.jpg",
        "https://i.pinimg.com/736x/8c/02/89/8c0289a7cbb69f7f6fe5171ae9bb7e25.jpg",
        "https://i.pinimg.com/736x/3a/3c/ff/3a3cff30ebca23ad46f5010a9822da85.jpg",
        "https://i.pinimg.com/736x/f4/19/22/f41922c074df3bfa4b4238f886f7b13d.jpg",
        "https://i.pinimg.com/736x/d2/54/1b/d2541b65e9c07ef21a44e5cb4e8be306.jpg"
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
      <div className="ps-hybrid-banner">
        <div className="banner-kenburns-layer" />
        <div className="banner-soft-overlay" />
        <div className="banner-mesh-shimmer" />

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
                  <div className="ps-horizontal-card" key={index}>
                    <div className="ps-card-img-wrap">
                      <img src={item.images[0]} alt={item.title} loading="lazy" />
                      <div className="ps-img-overlay">
                        <button
                          type="button"
                          className="ps-view-btn"
                          onClick={() => handlePropertyClick(item)}
                        >
                          View Property
                        </button>
                      </div>
                      <div className="ps-img-actions">
                        <button type="button" className="ps-action-icon" aria-label="Save"><FaHeart /></button>
                        <button type="button" className="ps-action-icon" aria-label="Compare"><FaExchangeAlt /></button>
                      </div>
                    </div>

                    <div className="ps-card-info-wrap">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <span className="ps-prop-status">{item.status}</span>
                        <h4 className="ps-prop-price">{item.price}</h4>
                      </div>

                      <h4
                        className="ps-card-title"
                        onClick={() => handlePropertyClick(item)}
                      >
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
                          onClick={() => handlePropertyClick(item)}
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
            <div className="ps-sidebar-wrapper">
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