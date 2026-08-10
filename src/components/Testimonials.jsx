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
    image: "https://i.pinimg.com/736x/61/f9/82/61f982fa89499422030c803affc50ed0.jpg"
  },
  {
    id: 2,
    name: "Samantha Evans",
    role: "Real Estate Investor",
    feedback: "Exceptional architecture and seamless execution. The team redefines modern luxury living with great finesse.",
    image: "https://i.pinimg.com/736x/10/91/55/109155a4213dbcaf07bd7ed90393ef13.jpg"
  },
  {
    id: 3,
    name: "Julie Warren",
    role: "Penthouse Owner",
    feedback: "From structural luxury to small utility details, everything is engineered to high-performance standards.",
    image: "https://i.pinimg.com/1200x/55/18/87/551887f865fe94c481ea9c43daf5e47e.jpg"
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Commercial Client",
    feedback: "A trustworthy developer that prioritizes quality and sustainability in every square foot they build.",
    image: "https://i.pinimg.com/736x/8d/64/a2/8d64a2c405d85098f359e1d82dea6b8b.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials-section py-5 " id="testimonials">
      <div className="container-fluid px-3 px-md-5">

        <div className="text-center mb-5">
          <span className="testi-tag">TESTIMONIALS</span>
          <h2 className="testi-heading">Our Clients About Us</h2>
        </div>

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