import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './Gallery.css'; 

const apartmentsData = [
  { id: 1, image: 'https://www.express-zenith.site/assets/img/a1-768w.jpg', price: 'Gym' },
  { id: 2, image: 'https://www.express-zenith.site/assets/img/a2-768w.jpg', price: 'Gym' },
  { id: 3, image: 'https://www.express-zenith.site/assets/img/a5-768w.jpg', price: 'Gym' },
  { id: 4, image: 'https://www.express-zenith.site/assets/img/a6-768w.jpg', price: 'Gym' },
  { id: 5, image: 'https://www.express-zenith.site/assets/img/a4-768w.jpg', price: 'Gym' },
  { id: 6, image: 'https://www.express-zenith.site/assets/img/a5-768w.jpg', price: 'Gym' },
  { id: 7, image: 'https://www.express-zenith.site/assets/img/a7-768w.jpg', price: 'Gym' },
];

export default function ApartmentsSection() {
  return (
    <section className="apartments-container">
      <div className="apartments-header">
        <div className="header-text">
          <h1 className='display-5 font-serif text-dark m-0'>Amenities</h1>
        </div>
        
        <div className="navigation-buttons">
          <button className="nav-btn prev-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="nav-btn next-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        onBeforeInit={(swiper) => {
          // Swiper init hone se pehle navigation elements set karein
          swiper.params.navigation.prevEl = '.prev-btn';
          swiper.params.navigation.nextEl = '.next-btn';
        }}
        navigation={{
          prevEl: '.prev-btn',
          nextEl: '.next-btn',
        }}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="apartments-slider"
      >
        {apartmentsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="card">
              <div className="card-image-wrapper">
                <img src={item.image} alt="Amenity" className="card-image" />
                <div className="price-tag">
                  <span className="starting-text">{item.price}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}