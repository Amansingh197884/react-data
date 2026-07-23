import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: "Anna Estrada",
    role: "Property Buyer",
    feedback: "Aajneeti delivered structural perfection and absolute transparency throughout our villa purchase journey in Pune.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Samantha Evans",
    role: "Real Estate Investor",
    feedback: "Exceptional architecture and seamless execution. The team redefines modern luxury living with great finesse.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Julie Warren",
    role: "Penthouse Owner",
    feedback: "From structural luxury to small utility details, everything is engineered to high-performance standards.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Commercial Client",
    feedback: "A trustworthy developer that prioritizes quality and sustainability in every square foot they build.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section py-5" id="testimonials">
      <div className="container-fluid px-3 px-md-5">
        
        {/* Section Title */}
        <div className="text-center mb-5">
          <span className="testi-tag">TESTIMONIALS</span>
          <h2 className="testi-heading">Our Clients About Us</h2>
        </div>

        {/* Swiper Slider */}
        <div className="swiper-container-wrapper">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonial-swiper"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-card-wrapper">
                  
                  {/* Bubble Glass Box */}
                  <div className="testimonial-card">
                    <div className="quote-icon-box">
                      <FaQuoteRight className="quote-icon" />
                    </div>
                    <p className="testimonial-text">
                      "{item.feedback}"
                    </p>
                    <h4 className="client-name">{item.name}</h4>
                    <span className="client-role">{item.role}</span>
                    
                    <div className="bubble-arrow"></div>
                  </div>

                  {/* Avatar Below Card */}
                  <div className="client-avatar-wrapper">
                    <img src={item.image} alt={item.name} className="client-avatar" />
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}