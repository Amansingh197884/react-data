import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import './Card.css';

const apartmentsData = [
  {
    id: 1,
    title: 'Trejo Urban Escape',
    location: 'Roma Norte, CDMX',
    city: 'Ciudad de México',
    price: '₹1.03 Cr*',
    image: 'https://i.pinimg.com/1200x/98/79/c9/9879c949ecbe7feafb49efac228d9a64.jpg',
  },
  {
    id: 2,
    title: 'Skyline Luxury Suite',
    location: 'Polanco, CDMX',
    city: 'Ciudad de México',
    price: '₹1.80 Cr*',
    image: 'https://i.pinimg.com/736x/a1/9e/ce/a19eceebed7b7eb5e3b8c01a2882f6d9.jpg',
  },
  {
    id: 3,
    title: 'Royal Penthouse Loft',
    location: 'Santa Fe, CDMX',
    city: 'Ciudad de México',
    price: '₹2.10 Cr*',
    image: 'https://i.pinimg.com/736x/15/77/65/1577655843ee1f4e15d05bf336b828af.jpg',
  },
  {
    id: 4,
    title: 'Grand Haven Duplex',
    location: 'Condesa, CDMX',
    city: 'Ciudad de México',
    price: '₹2.90 Cr*',
    image: 'https://i.pinimg.com/736x/6b/fb/a7/6bfba7811cc753decbaafd9f236e7201.jpg',
  }
];

const featuredData = [
  {
    id: 101,
    title: 'Aria Horizon Penthouse',
    location: 'Lomas de Chapultepec',
    city: 'CDMX',
    price: '₹3.20 Cr*',
    image: 'https://i.pinimg.com/736x/02/ff/14/02ff14ae5d16c92ac14d586a8fc7d902.jpg',
  },
  {
    id: 102,
    title: 'The Glass Pavilion Villa',
    location: 'Pedregal',
    city: 'Ciudad de México',
    price: '₹2.60 Cr*',
    image: 'https://i.pinimg.com/736x/4f/90/66/4f906605cc5da8c659f0a6118ed0cda3.jpg',
  },
  {
    id: 103,
    title: 'Urban Sanctuary Suite',
    location: 'Juárez',
    city: 'Ciudad de México',
    price: '₹1.95 Cr*',
    image: 'https://i.pinimg.com/1200x/ec/05/b2/ec05b2197739b15a9f8511c5314d57cc.jpg',
  },
  {
    id: 104,
    title: 'Presidential Duplex Mansion',
    location: 'Bosques de las Lomas',
    city: 'CDMX',
    price: '₹4.50 Cr*',
    image: 'https://i.pinimg.com/1200x/f7/7e/d8/f77ed8c18f562a0eedd305c91bce8d06.jpg',
  }
];

export default function ApartmentsSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.12 }
    );

    const animatableElements = document.querySelectorAll('.anim-reveal');
    animatableElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="aria-property-page">
      
      {/* Hero Banner */}
      <div className="property-hero-wrapper container-fluid p-0">
        <header className="property-hero-banner">
          <div className="property-hero-overlay">
            <div className="property-hero-content text-center anim-reveal">
              <div className="property-breadcrumb-badge mb-3">
                <Link to="/" className="property-breadcrumb-link">HOME</Link>
                <span className="property-crumb-separator">/</span>
                <span className="property-gold-current">PROPERTIES</span>
              </div>

              <h1 className="property-hero-title">Exclusive Residences</h1>
              <p className="property-hero-tagline mt-2">Architectural Masterpieces & Curated Living Spaces</p>
            </div>
          </div>
        </header>
      </div>

      {/* SECTION 1: TOP LUXURY APARTMENTS */}
      <section className="mt-4 mb-5 py-5 anim-reveal">
        <div className="container-fluid px-3 px-md-5">
          <div className="apartments-header d-flex justify-content-between align-items-end mb-4">
            <div className="header-text">
              <span className="aria-gold-sub d-block mb-1">CURATED SELECTION</span>
              <h2 className='mv-section-title m-0'>Top Luxury Apartments</h2>
            </div>

            <div className="navigation-buttons d-flex gap-2">
              <button className="nav-btn custom-prev-btn apt-prev-1" aria-label="Previous">
                <FaChevronLeft />
              </button>
              <button className="nav-btn custom-next-btn apt-next-1" aria-label="Next">
                <FaChevronRight />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.apt-prev-1',
              nextEl: '.apt-next-1',
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              576: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 }
            }}
            className="apartments-slider"
          >
            {apartmentsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="project-card">
                  <img src={item.image} alt={item.title} className="card-bg-img" />

                  {/* Default State Content */}
                  <div className="default-content">
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-location">{item.location}</p>
                    <p className="project-city">{item.city}</p>
                  </div>

                  {/* Hover Overlay Effect */}
                  <div className="hover-overlay">
                    <span className="price-from">starting from</span>
                    <h4 className="price-amount">{item.price}</h4>
                    <Link to="/PropertyDetails" className="view-btn">
                      View Project
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* SECTION 2: PORTFOLIO EXCLUSIVES */}
      <section className="py-5 pt-0 mt-3 anim-reveal">
        <div className="container-fluid px-3 px-md-5">
          <div className="apartments-header d-flex justify-content-between align-items-end mb-4">
            <div className="header-text">
              <span className="aria-gold-sub d-block mb-1">PORTFOLIO EXCLUSIVES</span>
              <h2 className='mv-section-title m-0'>Featured Projects</h2>
            </div>

            <div className="navigation-buttons d-flex gap-2">
              <button className="nav-btn custom-prev-btn apt-prev-2" aria-label="Previous">
                <FaChevronLeft />
              </button>
              <button className="nav-btn custom-next-btn apt-next-2" aria-label="Next">
                <FaChevronRight />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: '.apt-prev-2',
              nextEl: '.apt-next-2',
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              576: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 }
            }}
            className="apartments-slider"
          >
            {featuredData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="project-card">
                  <img src={item.image} alt={item.title} className="card-bg-img" />

                  {/* Default State Content */}
                  <div className="default-content">
                    <h3 className="project-title">{item.title}</h3>
                    <p className="project-location">{item.location}</p>
                    <p className="project-city">{item.city}</p>
                  </div>

                  {/* Hover Overlay Effect */}
                  <div className="hover-overlay">
                    <span className="price-from">starting from</span>
                    <h4 className="price-amount">{item.price}</h4>
                    <Link to="/PropertyDetails" className="view-btn">
                      View Project
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="aria-cta-banner py-5 anim-reveal">
        <div className="container-fluid px-3 px-md-5">
          <div className="aria-cta-card p-4 p-md-5 text-center">
            <span className="aria-gold-sub d-block mb-2">LIMITED RESERVATIONS</span>
            <h2 className="cta-heading mb-3">Experience Ultra-Luxury Firsthand</h2>
            <p className="aria-text-muted max-w-600 mx-auto mb-4">
              Schedule an exclusive private tour with our senior real estate advisory team and explore available residences before official releases.
            </p>
            
            <div className="cta-buttons-wrapper d-flex justify-content-center align-items-center gap-3 flex-wrap">
              <Link to="/Contact" className="view-btn text-decoration-none">
                Book Private Tour
              </Link>
              <Link to="/Property" className="aria-btn-outline text-decoration-none">
                Download Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}