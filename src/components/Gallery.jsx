import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './Slide.css';

const amenitiesData = [
  { id: 1, title: 'Lounge Area', image: 'https://i.pinimg.com/736x/26/d8/e7/26d8e7bff108f7079bfccf1b6b8d911f.jpg' },
  { id: 2, title: 'Garden & Walkway', image: 'https://i.pinimg.com/736x/f2/c9/f5/f2c9f57930431980ed35eec4ce762555.jpg' },
  { id: 3, title: 'Banquet Hall', image: 'https://i.pinimg.com/736x/22/e9/a0/22e9a01fa75ae8100c53609ac0488a22.jpg' },
  { id: 4, title: 'Gymnasium', image: 'https://i.pinimg.com/736x/b3/17/39/b31739fd20c72a52b6dde1375d621f97.jpg' },
  { id: 5, title: 'Infinity Pool', image: 'https://i.pinimg.com/736x/52/4c/76/524c767e05b4e5f620469b198c599563.jpg' },
  { id: 6, title: 'Yoga Deck', image: 'https://i.pinimg.com/736x/1c/4c/26/1c4c260cffbf6d8bd4ca604301d50c1c.jpg' },
  { id: 7, title: 'Kids Play Zone', image: 'https://i.pinimg.com/736x/31/bd/0f/31bd0ff98f234845f367e8f4ac064f61.jpg' },
  { id: 8, title: 'Coffee Lounge', image: 'https://i.pinimg.com/736x/5b/89/c0/5b89c0edda3dafc9f6b9c2ad64a77af8.jpg' },
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

        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="gallery-section-tag d-block mb-1">ESTATE AMENITIES</span>
            <h2 className="gallery-section-title m-0">Gallery & Retreat Space</h2>
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
              <div className="amenities-card" onClick={() => setActiveImage(item.image)}>
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

      {/* Lightbox Modal */}
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