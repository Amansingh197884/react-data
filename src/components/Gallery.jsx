import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Gallery.css'; 

const amenitiesData = [
  { id: 1, title: 'Lounge Area', image: 'https://i.pinimg.com/1200x/36/f3/49/36f349abe68fa5c40a49fc95db588775.jpg' },
  { id: 2, title: 'Garden & Walkway', image: 'https://i.pinimg.com/1200x/77/00/ac/7700acfe975dab47b21cc8e21bb9af12.jpg' },
  { id: 3, title: 'Banquet Hall', image: 'https://i.pinimg.com/1200x/0b/09/f8/0b09f8beb47ecc0a43e26dc53d3d79c9.jpg' },
  { id: 4, title: 'Gymnasium', image: 'https://i.pinimg.com/736x/14/11/eb/1411eb51b37c91c40359df31469557a7.jpg' },
];

const AmenitiesGallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="py-5 bg-light position-relative">
      <div className="container-fluid mt-5">
        
        {/* Header section with heading and Custom Navigation arrows */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="display-5 font-serif text-dark m-0">Gallery</h2>
          <div className="d-flex gap-2">
            <button className="nav-btn prev-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="nav-btn next-btn">
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

      {/* Lightbox / Popup Modal ("Bahar nikal kar aana" feature) */}
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