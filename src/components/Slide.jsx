import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './Slide.css';

const amenitiesData = [
  { id: 1, title: 'Lounge Area', image: 'https://i.pinimg.com/1200x/3d/36/04/3d3604cdd452581614347a8d3b579bb0.jpg' },
  { id: 2, title: 'Garden & Walkway', image: 'https://i.pinimg.com/736x/6b/7b/77/6b7b77f5459ddc58c6a6cc2c9f9a7162.jpg' },
  { id: 3, title: 'Banquet Hall', image: 'https://i.pinimg.com/736x/18/55/f4/1855f4b641d11a542cef9b28c0c189a3.jpg' },
  { id: 4, title: 'Gymnasium', image: 'https://i.pinimg.com/236x/d8/62/52/d8625259262bcbeae50a280f3ef97c45.jpg' },
  { id: 5, title: 'Infinity Pool', image: 'https://i.pinimg.com/736x/5b/44/bd/5b44bd74746090d90c5e6981ec78e321.jpg' },
  { id: 6, title: 'Yoga Deck', image: 'https://i.pinimg.com/1200x/b7/03/8a/b7038ae553f928789a9900ef9c0cdfbd.jpg' },
  { id: 7, title: 'Kids Play Zone', image: 'https://i.pinimg.com/736x/b4/90/1e/b4901e4bf8ce6e379453a3c2b4d29506.jpg' },
  { id: 8, title: 'Coffee Lounge', image: 'https://i.pinimg.com/1200x/eb/7c/96/eb7c962f4621b95fefa47873aaf8714e.jpg' },
];

const AmenitiesGallery = () => {
  const [activeImage, setActiveImage] = useState(null);

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

    const cards = document.querySelectorAll('.amenities-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="amenities-gallery-section py-5 position-relative">
      <div className="container-fluid px-3 px-md-5 my-4">

        {/* Section Header */}
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="gallery-section-tag d-block mb-1">ESTATE AMENITIES</span>
            <h2 className="gallery-section-title m-0">Amenities


            </h2>
          </div>

          <div className="d-flex gap-2">
            <button className="nav-btn custom-prev-btn" aria-label="Previous slide">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button className="nav-btn custom-next-btn" aria-label="Next slide">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{ prevEl: '.custom-prev-btn', nextEl: '.custom-next-btn' }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
          className="amenities-swiper"
        >
          {amenitiesData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="amenities-card"
                onClick={() => setActiveImage(item.image)}
              >
                <img src={item.image} alt={item.title} className="card-img-zoom" />
                <div className="card-gradient-overlay" />

                <div className="card-hover-content">
                  <span className="hover-text">{item.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {activeImage && (
        <div className="lightbox-overlay" onClick={() => setActiveImage(null)}>
          <span className="lightbox-close">&times;</span>
          <div className="lightbox-content animate-zoom" onClick={(e) => e.stopPropagation()}>
            <img src={activeImage} alt="Enlarged view" />
          </div>
        </div>
      )}
    </section>
  );
};

export default AmenitiesGallery;