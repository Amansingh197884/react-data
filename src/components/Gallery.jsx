import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './Slide.css'; 

const amenitiesData = [
  { id: 1, title: 'Lounge Area', image: 'https://i.pinimg.com/1200x/36/f3/49/36f349abe68fa5c40a49fc95db588775.jpg' },
  { id: 2, title: 'Garden & Walkway', image: 'https://i.pinimg.com/1200x/77/00/ac/7700acfe975dab47b21cc8e21bb9af12.jpg' },
  { id: 3, title: 'Banquet Hall', image: 'https://i.pinimg.com/1200x/0b/09/f8/0b09f8beb47ecc0a43e26dc53d3d79c9.jpg' },
  { id: 4, title: 'Gymnasium', image: 'https://i.pinimg.com/736x/14/11/eb/1411eb51b37c91c40359df31469557a7.jpg' },
];

const AmenitiesGallery = () => {
  const [activeImage, setActiveImage] = useState(null);

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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button className="nav-btn custom-next-btn" aria-label="Next slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

    
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{
            prevEl: '.custom-prev-btn',
            nextEl: '.custom-next-btn',
          }}
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
                className="amenities-card position-relative overflow-hidden"
                onClick={() => setActiveImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-100 h-100 object-fit-cover card-img-zoom" 
                />
                <div className="card-gradient-overlay" />
                <span className="badge-title position-absolute px-3 py-2 rounded-pill">
                  {item.title}
                </span>
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