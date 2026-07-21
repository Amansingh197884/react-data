import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Gallery.css'; 

const amenitiesData = [
  { id: 1, title: 'Lounge Area', image: 'https://www.express-zenith.site/assets/img/a1-768w.jpg', price: 'Gym' },
  { id: 2, title: 'Lounge Area', image: 'https://www.express-zenith.site/assets/img/a2-768w.jpg', price: 'Gym' },
  { id: 3, title: 'Lounge Area', image: 'https://www.express-zenith.site/assets/img/a5-768w.jpg', price: 'Gym' },
  { id: 4, title: 'Lounge Area', image: 'https://www.express-zenith.site/assets/img/a6-768w.jpg', price: 'Gym' },
  { id: 5, title: 'Lounge Area', image: 'https://www.express-zenith.site/assets/img/a4-768w.jpg', price: 'Gym' },
  { id: 6, title: 'Lounge Area', image: 'https://www.express-zenith.site/assets/img/a5-768w.jpg', price: 'Gym' },
  { id: 7, title: 'Lounge Area', image: 'https://www.express-zenith.site/assets/img/a7-768w.jpg', price: 'Gym' },
];

const AmenitiesGallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="py-5 bg-light position-relative">
      <div className="container-fluid mt-5">
        
        {/* Header section with heading and Custom Navigation arrows */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="display-5 font-serif text-dark m-0">Amenities</h2>
          <div className="d-flex gap-2">
            <button className="nav-btn custom-prev-btn" aria-label="Previous slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="nav-btn custom-next-btn" aria-label="Next slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: '.custom-prev-btn',
            nextEl: '.custom-next-btn',
          }}
          // FIX 2: Dynamic elements load hone ke baad Swiper re-init ho
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = '.custom-prev-btn';
            swiper.params.navigation.nextEl = '.custom-next-btn';
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="amenities-swiper"
        >
          {amenitiesData.map((item) => (
            <SwiperSlide key={item.id}>
              <div 
                className="amenities-card position-relative overflow-hidden shadow-sm"
                onClick={() => setActiveImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-100 h-100 object-fit-cover" 
                />
                <span className="badge-title position-absolute px-3 py-2 rounded-pill bg-white text-dark shadow-sm">
                  {item.title}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox / Popup Modal */}
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