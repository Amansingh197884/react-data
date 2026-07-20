import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css'; 

const testimonialData = [
  {
    id: 1,
    name: "Anna Estrada",
    company: "example.com",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor dolores, ex explicabo.",
    image: "https://i.pinimg.com/736x/02/7d/5e/027d5e542989378d0a45ff6e82a1bfdc.jpg",
    featured: true 
  },
  {
    id: 2,
    name: "Samantha Evans",
    company: "example.com",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor dolores, ex explicabo.",
    image: "https://i.pinimg.com/736x/66/0c/37/660c37232065e7332e1f479cdfac4ee4.jpg",
    featured: true 
  },
  {
    id: 3,
    name: "Julie Warren",
    company: "example.com",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor dolores, ex explicabo.",
    image: "https://i.pinimg.com/736x/19/30/be/1930bed6e303c986872a62268d9f00d7.jpg",
    featured: true 
  },
  {
    id: 4,
    name: "Michael Chang",
    company: "example.com",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor dolores, ex explicabo.",
    image: "https://i.pinimg.com/736x/7e/66/52/7e6652b5db5df7abd15a0438093627d2.jpg",
    featured: true 
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section p-4 bg-white overflow-hidden">
      <div className="container-fluid text-start py-4">
        {/* Header */}
        <h2 className="display-5 font-serif text-dark m-0">
          Testimonials
        </h2>
        <h2 className="fw-normal mb-5">Our Clients About Us</h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-swiper pb-5"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id} className="h-auto py-3">
              <div className="d-flex flex-column align-items-center h-100 testimonial-item">
                
                {/* Quote Box */}
                <div className={`quote-box p-4 rounded-3 text-center mb-4 position-relative border-0 shadow-sm transition-all duration-300 ${item.featured ? 'bg-featured text-white' : 'bg-light-custom text-secondary'}`}>
                  
                  <div className="mb-3">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" className={item.featured ? 'text-white opacity-75' : 'text-dark opacity-75'}>
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-4.765 2.627-5.3 4.47h5.3v11.379h-10v0zm-14 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-4.78 2.627-5.333 4.47h5.333v11.379h-10z" />
                    </svg>
                  </div>

                  <p className="para fs-6 lh-base mb-4 font-serief px-2">{item.text}</p>
                  
                  <h5 className={`fw-bold mb-0 fs-6 new ${item.featured ? 'text-white' : 'text-dark'}`}>{item.name}</h5>
                  <span className={`small opacity-75 neww ${item.featured ? 'text-white' : 'text-muted'}`}>{item.company}</span>
                  
                  <div className={`quote-arrow ${item.featured ? 'arrow-featured' : 'arrow-light'}`}></div>
                </div>

                <div className="avatar-wrapper rounded-circle overflow-hidden shadow">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="img-fluid w-100 h-100 object-fit-cover transition-transform duration-300"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;