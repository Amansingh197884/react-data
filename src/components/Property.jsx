import { Link } from 'react-router-dom';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const apartmentsData = [
    {
        id: 1,
        image: 'https://i.pinimg.com/736x/fe/cb/57/fecb570b045956d4feedaeec96e17d1b.jpg',
        price: '$157',
        // title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/64/ee/79/64ee79abc0c2d88736e899dfda1eaee4.jpg',
        price: '$157',
        // title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/736x/ad/84/4a/ad844ab08e77522cd06c121e960783d1.jpg',
        price: '$157',
        // title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/1200x/b2/06/bf/b206bf86e2087e8616881f7241d66c07.jpg',
        price: '$157',
        // title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
    {
        id: 5,
        image: 'https://i.pinimg.com/1200x/b2/06/bf/b206bf86e2087e8616881f7241d66c07.jpg',
        price: '$157',
        // title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
];
const apartmentsDataa = [
    {
        id: 1,
        image: 'https://i.pinimg.com/736x/ed/b3/84/edb3848e23e87b6117707d4e641a5381.jpg',
        price: '$157',
        // title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/05/02/e6/0502e619c5cf4a58fb42737132f1e10b.jpg',
        price: '$157',
        // title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/736x/e5/d7/67/e5d76710d9795b9aedab287065ec832e.jpg',
        price: '$157',
        // title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/736x/ed/b3/84/edb3848e23e87b6117707d4e641a5381.jpg',
        price: '$157',
        // title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
    {
        id: 5,
        image: 'https://i.pinimg.com/736x/05/02/e6/0502e619c5cf4a58fb42737132f1e10b.jpg',
        price: '$157',
        // title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
];
export default function ApartmentsSection() {
    return (
        <>
            <div className="contact-container">
                <header className="contact-hero">
                    <div className="hero-overlay">
                        <div className="hero-content">
                            <Link to="/" className="text-decoration-none text-white me-1">HOME</Link>
                            <span>/ PROPERTY</span>
                            <h1 className='font-serif'>Property</h1>
                        </div>
                    </div>
                </header>
            </div>

            <section className="apartments-container">
                <div className="apartments-header">
                    <div className="header-text">
                        <h2>Top 10 apartments</h2>
                        <p>From a room for a night to a loft for as long as you like, there's a RoamStay for every occasion.</p>
                    </div>

                    <div className="navigation-buttons">
                        <button className="nav-btn prev-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button className="nav-btn next-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    className="apartments-slider"
                >
                    {apartmentsData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="card">
                                <div className="card-image-wrapper">
                                    <img src={item.image} alt={item.title} className="card-image" />
                                    <div className="price-tag">
                                        <span className="starting-text">Starting at</span>
                                        <span className="price-value">{item.price} <small>USD/Night</small></span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3>{item.title}</h3>
                                    <p className="location">{item.location}</p>
                                    <p className="specs">{item.specs}</p>
                                    <div>
                                        <div>
                                            <button className="btn new-btn text-center">
                                                Discover More <i class="bi bi-arrow-right ms-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>


            {/* 2 */}
            <section className="apartments-container">
                <div className="apartments-header">
                    <div className="header-text">
                        <h2>Feature Projects</h2>
                        <p>From a room for a night to a loft for as long as you like, there's a RoamStay for every occasion.</p>
                    </div>

                    <div className="navigation-buttons">
                        <button className="nav-btn prev-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button className="nav-btn next-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: '.prev-btn',
                        nextEl: '.next-btn',
                    }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        }
                    }}
                    className="apartments-slider"
                >
                    {apartmentsDataa.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="card">
                                <div className="card-image-wrapper">
                                    <img src={item.image} alt={item.title} className="card-image" />
                                    <div className="price-tag">
                                        <span className="starting-text">Starting at</span>
                                        <span className="price-value">{item.price} <small>USD/Night</small></span>
                                    </div>
                                </div>
                                <div className="card-content">
                                    <h3>{item.title}</h3>
                                    <p className="location">{item.location}</p>
                                    <p className="specs">{item.specs}</p>
                                    <div>


                                        <Link to="/PropertyDetails">
                                            <button className="btn new-btn ">
                                                Discover More <i class="bi bi-arrow-right ms-2"></i>
                                            </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
}