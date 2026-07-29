import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { 
    FaArrowRight, 
    FaChevronLeft, 
    FaChevronRight, 
    FaWifi, 
    FaSwimmingPool, 
    FaCar, 
    FaShieldAlt, 
    FaConciergeBell, 
    FaDumbbell 
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import './Card.css';

// Added more luxury cards data
const apartmentsData = [
    {
        id: 1,
        image: 'https://i.pinimg.com/736x/fe/cb/57/fecb570b045956d4feedaeec96e17d1b.jpg',
        price: '$157',
        title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/64/ee/79/64ee79abc0c2d88736e899dfda1eaee4.jpg',
        price: '$180',
        title: 'Skyline Luxury Suite',
        location: 'Polanco, Ciudad de México',
        specs: '2 Guests | 1 Bedroom | 1 Bathroom'
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/736x/ad/84/4a/ad844ab08e77522cd06c121e960783d1.jpg',
        price: '$210',
        title: 'Royal Penthouse Loft',
        location: 'Santa Fe, Ciudad de México',
        specs: '6 Guests | 3 Bedrooms | 3 Bathrooms'
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/1200x/b2/06/bf/b206bf86e2087e8616881f7241d66c07.jpg',
        price: '$290',
        title: 'Grand Haven Estate',
        location: 'Condesa, Ciudad de México',
        specs: '5 Guests | 3 Bedrooms | 2 Bathrooms'
    },
    {
        id: 5,
        image: 'https://i.pinimg.com/736x/66/2e/d3/662ed34442c03c5b8b1ea7504f4494a5.jpg',
        price: '$310',
        title: 'The Imperial Villa',
        location: 'Lomas Altas, CDMX',
        specs: '8 Guests | 4 Bedrooms | 4.5 Bathrooms'
    },
    {
        id: 6,
        image: 'https://i.pinimg.com/736x/9c/57/93/9c5793a7622d418c655551ed90774d84.jpg',
        price: '$240',
        title: 'Serenade Sky Deck',
        location: 'Interlomas, CDMX',
        specs: '4 Guests | 2 Bedrooms | 2 Bathrooms'
    }
];

const apartmentsDataa = [
    {
        id: 1,
        image: 'https://i.pinimg.com/736x/ed/b3/84/edb3848e23e87b6117707d4e641a5381.jpg',
        price: '$320',
        title: 'Aria Horizon Penthouse',
        location: 'Lomas de Chapultepec, CDMX',
        specs: '4 Guests | 2 Bedrooms | 2.5 Bathrooms'
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/05/02/e6/0502e619c5cf4a58fb42737132f1e10b.jpg',
        price: '$260',
        title: 'The Glass Pavilion Villa',
        location: 'Pedregal, Ciudad de México',
        specs: '6 Guests | 4 Bedrooms | 4 Bathrooms'
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/736x/e5/d7/67/e5d76710d9795b9aedab287065ec832e.jpg',
        price: '$195',
        title: 'Urban Sanctuary Suite',
        location: 'Juárez, Ciudad de México',
        specs: '3 Guests | 1 Bedroom | 1 Bathroom'
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/736x/b1/d0/c3/b1d0c3926eb7b9c10f6200fc4f68c517.jpg',
        price: '$450',
        title: 'Presidential Duplex Mansion',
        location: 'Bosques de las Lomas, CDMX',
        specs: '10 Guests | 5 Bedrooms | 5.5 Bathrooms'
    },
    {
        id: 5,
        image: 'https://i.pinimg.com/736x/9e/a6/f2/9ea6f210710c28863bb3009105687db7.jpg',
        price: '$380',
        title: 'Crown Residence Tower',
        location: 'Reforma, CDMX',
        specs: '6 Guests | 3 Bedrooms | 3 Bathrooms'
    }
];

export default function ApartmentsSection() {
    return (
        <div className="aria-property-page">
            
            {/* Header Banner */}
            <div className="contact-container">
                <header className="contact-hero">
                    <div className="hero-overlay">
                        <div className="hero-content aria-fade-in">
                            <Link to="/" className="text-decoration-none text-white me-1">HOME</Link>
                            <span className="aria-gold-text">/ PROPERTY</span>
                            <h1 className='mv-section-title font-serif text-white display-4 mt-2'>Exclusive Residences</h1>
                        </div>
                    </div>
                </header>
            </div>

            <section className="apartments-container py-5">
                <div className="apartments-header align-items-center">
                    <div className="header-text aria-slide-up">
                        <span className="aria-gold-sub">CURATED SELECTION</span>
                        <h2 className='mv-section-title font-serif text-white m-0'>Top Luxury Apartments</h2>
                    </div>

                    <div className="navigation-buttons">
                        <button className="nav-btn apt-prev-1">
                            <FaChevronLeft />
                        </button>
                        <button className="nav-btn next-btn apt-next-1">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: '.apt-prev-1',
                        nextEl: '.apt-next-1',
                    }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="apartments-slider"
                >
                    {apartmentsData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="card property-card">
                                <div className="card-image-wrapper">
                                    <img src={item.image} alt={item.title} className="card-image" />
                                    <div className="price-tag">
                                        <span className="starting-text">Starting at</span>
                                        <span className="price-value">{item.price} <small>USD/Night</small></span>
                                    </div>
                                    <div className="card-hover-overlay"></div>
                                </div>
                                <div className="card-content">
                                    <h3 className="property-title">{item.title}</h3>
                                    <p className="location">{item.location}</p>
                                    <p className="specs">{item.specs}</p>
                                    <div className="mt-3">
                                        <Link to="/PropertyDetails">
                                            <button className="btn new-btn aria-btn-gold w-100">
                                                Discover More <FaArrowRight className="ms-2 aria-arrow-icon" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Included Luxury Amenities */}
            <section className="aria-section-dark py-5">
                <div className="container">
                    <div className="text-center mb-5 aria-slide-up">
                        <span className="aria-gold-sub">WORLD-CLASS COMFORT</span>
                        <h2 className="font-serif text-white display-6">Unrivaled Living Amenities</h2>
                    </div>

                    <div className="row g-4">
                        <div className="col-md-4 col-sm-6">
                            <div className="aria-amenity-card">
                                <FaWifi className="amenity-icon" />
                                <h5>Fiber High-Speed Wi-Fi</h5>
                                <p>Dedicated gigabit connection suited for high-level business executives.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="aria-amenity-card">
                                <FaSwimmingPool className="amenity-icon" />
                                <h5>Infinity Heated Pools</h5>
                                <p>Panoramic skyline infinity pools with temperature control technology.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="aria-amenity-card">
                                <FaCar className="amenity-icon" />
                                <h5>Private Valet & Parking</h5>
                                <p>Secure underground covered parking with 24/7 valet attendance.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="aria-amenity-card">
                                <FaShieldAlt className="amenity-icon" />
                                <h5>High-Tech Security</h5>
                                <p>Keyless smart locks, biometric access, and round-the-clock surveillance.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="aria-amenity-card">
                                <FaConciergeBell className="amenity-icon" />
                                <h5>24/7 Private Concierge</h5>
                                <p>Personalized butler services, dining reservations, and housekeeping support.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="aria-amenity-card">
                                <FaDumbbell className="amenity-icon" />
                                <h5>Executive Wellness Gym</h5>
                                <p>State-of-the-art fitness center, sauna steam rooms, and yoga decks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Featured Projects Slider */}
            <section className="apartments-container py-5">
                <div className="apartments-header align-items-center">
                    <div className="header-text aria-slide-up">
                        <span className="aria-gold-sub">PORTFOLIO EXCLUSIVES</span>
                        <h2 className='mv-section-title font-serif text-white m-0'>Featured Projects</h2>
                    </div>

                    <div className="navigation-buttons">
                        <button className="nav-btn apt-prev-2">
                            <FaChevronLeft />
                        </button>
                        <button className="nav-btn next-btn apt-next-2">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: '.apt-prev-2',
                        nextEl: '.apt-next-2',
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    className="apartments-slider"
                >
                    {apartmentsDataa.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="card property-card">
                                <div className="card-image-wrapper">
                                    <img src={item.image} alt={item.title} className="card-image" />
                                    <div className="price-tag">
                                        <span className="starting-text">Starting at</span>
                                        <span className="price-value">{item.price} <small>USD/Night</small></span>
                                    </div>
                                    <div className="card-hover-overlay"></div>
                                </div>
                                <div className="card-content">
                                    <h3 className="property-title">{item.title}</h3>
                                    <p className="location">{item.location}</p>
                                    <p className="specs">{item.specs}</p>
                                    <div className="mt-3">
                                        <Link to="/PropertyDetails">
                                            <button className="btn new-btn aria-btn-gold w-100">
                                                Discover More <FaArrowRight className="ms-2 aria-arrow-icon" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* CTA Private Viewing Banner */}
            <section className="aria-cta-banner py-5">
                <div className="container">
                    <div className="aria-cta-card p-5 text-center">
                        <span className="aria-gold-sub mb-2">LIMITED RESERVATIONS</span>
                        <h2 className="font-serif text-white display-5 mb-3">Experience Ultra-Luxury Firsthand</h2>
                        <p className="aria-text-muted max-w-600 mx-auto mb-4">
                            Schedule an exclusive private tour with our senior real estate advisory team and explore available residences before official releases.
                        </p>
                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                            <Link to="/New" className="aria-btn-gold px-4 py-3">
                                Book Private Tour
                            </Link>
                            <Link to="/Property" className="aria-btn-outline px-4 py-3">
                                Download Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}