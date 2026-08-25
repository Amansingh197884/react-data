import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import './Featured.css';

// Pinterest Hotlinking Proxy Helper
const getSafeImageUrl = (url) => {
  if (!url) return '';
  if (url.includes('i.pinimg.com')) {
    const cleanUrl = url.replace(/^https?:\/\//, '');
    return `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&default=${encodeURIComponent(url)}`;
  }
  return url;
};

// URL-friendly slug generator
const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const projectsData = [
  {
    id: 1,
    propertyId: 'NOIDA-101',
    title: 'Luxury Residency Sector 128',
    location: 'Sector 128, Noida',
    city: 'Noida',
    price: '₹1.03 Cr*',
    beds: 3,
    baths: 3,
    garage: 2,
    area: '1,850 sqft',
    lotSize: '2,400 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'Ultra-luxury high-rise residences with panoramic golf course views, Italian marble flooring, and dedicated concierge desk.',
    image: 'https://i.pinimg.com/736x/7c/1a/dd/7c1add62ac74e140cfcfd968d6e97c35.jpg',
    images: [
      'https://i.pinimg.com/736x/7c/1a/dd/7c1add62ac74e140cfcfd968d6e97c35.jpg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 2,
    propertyId: 'NOIDA-102',
    title: 'Luxury Residency Sector 153',
    location: 'Sector 153, Noida',
    city: 'Noida',
    price: '₹1.03 Cr*',
    beds: 3,
    baths: 3,
    garage: 2,
    area: '1,750 sqft',
    lotSize: '2,200 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'Modern urban oasis with connected en-suite bedrooms, European fitted modular kitchen, and clubhouse access.',
    image: 'https://i.pinimg.com/736x/00/49/cd/0049cdd6331955c998fb0efb1840cfe7.jpg',
    images: [
      'https://i.pinimg.com/736x/00/49/cd/0049cdd6331955c998fb0efb1840cfe7.jpg',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 3,
    propertyId: 'TREJO-103',
    title: 'Trejo Escape',
    location: 'Roma Norte, Ciudad',
    city: 'México',
    price: '₹1.50 Cr*',
    beds: 4,
    baths: 4,
    garage: 3,
    area: '3,100 sqft',
    lotSize: '3,800 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'Duplex penthouse suite offering private sky lounges, temperature-controlled plunge pool, and floor-to-ceiling glass facades.',
    image: 'https://i.pinimg.com/736x/e7/6d/0b/e76d0b64ffaeb9e9e7ff1b8333649802.jpg',
    images: [
      'https://i.pinimg.com/736x/e7/6d/0b/e76d0b64ffaeb9e9e7ff1b8333649802.jpg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 4,
    propertyId: 'GURGAON-104',
    title: 'Luxury Residency Sector 62',
    location: 'Sector 62, Gurgaon',
    city: 'Gurgaon',
    price: '₹2.10 Cr*',
    beds: 4,
    baths: 4,
    garage: 2,
    area: '2,900 sqft',
    lotSize: '3,500 sqft',
    author: 'Ariahaus Advisory',
    shortDesc: 'Boutique architectural residences crafted for seamless living with multi-tier biometric security and private decks.',
    image: 'https://i.pinimg.com/736x/fa/7c/42/fa7c429ea6c0c6df56b079439d810666.jpg',
    images: [
      'https://i.pinimg.com/736x/fa/7c/42/fa7c429ea6c0c6df56b079439d810666.jpg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export default function FeaturedProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleViewProject = (item) => {
    const slug = createSlug(item.title);
    navigate(`/property/${slug}`, { state: { property: item } });
  };

  return (
    <section className="featured-section py-5">
      <div className="container-fluid px-3 px-md-5">

        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="featured-tag d-block mb-1">OUR PORTFOLIO</span>
            <h2 className="featured-section-title m-0">Featured Projects</h2>
          </div>

          <div className="swiper-nav-buttons d-flex gap-2">
            <button className="swiper-prev-btn" aria-label="Previous Project">
              <FaChevronLeft />
            </button>
            <button className="swiper-next-btn" aria-label="Next Project">
              <FaChevronRight />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: '.swiper-prev-btn',
            nextEl: '.swiper-next-btn',
          }}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            576: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="featured-swiper"
        >
          {projectsData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="project-card">
                <img
                  src={getSafeImageUrl(item.image)}
                  alt={item.title}
                  className="card-bg-img"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                />

                <div className="default-content">
                  <h3 className="project-title">{item.title}</h3>
                  <p className="project-location">{item.location}</p>
                  <p className="project-city">{item.city}</p>
                </div>

                <div className="hover-overlay">
                  <span className="price-from">starting from</span>
                  <h4 className="price-amount">{item.price}</h4>
                  <button
                    type="button"
                    className="view-btn border-0 cursor-pointer"
                    onClick={() => handleViewProject(item)}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}