import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import './Featured.css';

const projectsData = [
  {
    id: 1,
    title: 'Luxury Residency',
    location: 'Sector 128, Noida',
    city: 'Noida',
    price: '₹1.03 Cr*',
    image: 'https://i.pinimg.com/736x/fe/cb/57/fecb570b045956d4feedaeec96e17d1b.jpg',
  },
  {
    id: 2,
    title: 'Luxury Residency',
    location: 'Sector 153, Noida',
    city: 'Noida',
    price: '₹1.03 Cr*',
    image: 'https://i.pinimg.com/736x/64/ee/79/64ee79abc0c2d88736e899dfda1eaee4.jpg',
  },
  {
    id: 3,
    title: 'Trejo Escape',
    location: 'Roma Norte, Ciudad',
    city: 'México',
    price: '₹1.50 Cr*',
    image: 'https://i.pinimg.com/736x/ad/84/4a/ad844ab08e77522cd06c121e960783d1.jpg',
  },
  {
    id: 4,
    title: 'Luxury Residency',
    location: 'Sector 62, Gurgaon',
    city: 'Gurgaon',
    price: '₹2.10 Cr*',
    image: 'https://i.pinimg.com/1200x/b2/06/bf/b206bf86e2087e8616881f7241d66c07.jpg',
  }
];

export default function FeaturedProjects() {
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

        {/* Swiper Slider */}
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
                <img src={item.image} alt={item.title} className="card-bg-img" />

                <div className="default-content">
                  <h3 className="project-title">{item.title}</h3>
                  <p className="project-location">{item.location}</p>
                  <p className="project-city">{item.city}</p>
                </div>

                <div className="hover-overlay">
                  <span className="price-from">starting from</span>
                  <h4 className="price-amount">{item.price}</h4>
                  <Link to="/PropertyDetails" className="view-btn">
                    View Project
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}