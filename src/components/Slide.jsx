import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Slide.css'; 

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
    <section className="amenities-gallery-section py-5 position-relative">
      <div className="container-fluid px-3 px-md-5 my-4">
        
        {/* Header section with Tag, Heading & Custom Navigation arrows */}
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <span className="gallery-section-tag d-block mb-1">ESTATE AMENITIES</span>
            <h2 className="gallery-section-title m-0">Amenities</h2>
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

        {/* Swiper Carousel */}
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