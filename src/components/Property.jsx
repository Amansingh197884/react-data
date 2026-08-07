import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { 
    FaChevronLeft, 
    FaChevronRight 
} from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import './Card.css';

const apartmentsData = [
    {
        id: 1,
        image: 'https://i.pinimg.com/736x/fe/cb/57/fecb570b045956d4feedaeec96e17d1b.jpg',
        price: '₹1.03 Cr*',
        title: 'Trejo Beautiful Escape',
        location: 'Roma Norte, Ciudad de México',
        specs: '4 Guests • 2 Bedrooms • 2 Bathrooms'
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/64/ee/79/64ee79abc0c2d88736e899dfda1eaee4.jpg',
        price: '₹1.80 Cr*',
        title: 'Skyline Luxury Suite',
        location: 'Polanco, Ciudad de México',
        specs: '2 Guests • 1 Bedroom • 1 Bathroom'
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/736x/ad/84/4a/ad844ab08e77522cd06c121e960783d1.jpg',
        price: '₹2.10 Cr*',
        title: 'Royal Penthouse Loft',
        location: 'Santa Fe, Ciudad de México',
        specs: '6 Guests • 3 Bedrooms • 3 Bathrooms'
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/1200x/b2/06/bf/b206bf86e2087e8616881f7241d66c07.jpg',
        price: '₹2.90 Cr*',
        title: 'Grand Haven Estate',
        location: 'Condesa, Ciudad de México',
        specs: '5 Guests • 3 Bedrooms • 2 Bathrooms'
    },
    {
        id: 5,
        image: 'https://i.pinimg.com/736x/66/2e/d3/662ed34442c03c5b8b1ea7504f4494a5.jpg',
        price: '₹3.10 Cr*',
        title: 'The Imperial Villa',
        location: 'Lomas Altas, CDMX',
        specs: '8 Guests • 4 Bedrooms • 4.5 Bathrooms'
    }
];

const apartmentsDataa = [
    {
        id: 1,
        image: 'https://i.pinimg.com/736x/ed/b3/84/edb3848e23e87b6117707d4e641a5381.jpg',
        price: '₹3.20 Cr*',
        title: 'Aria Horizon Penthouse',
        location: 'Lomas de Chapultepec, CDMX',
        specs: '4 Guests • 2 Bedrooms • 2.5 Bathrooms'
    },
    {
        id: 2,
        image: 'https://i.pinimg.com/736x/05/02/e6/0502e619c5cf4a58fb42737132f1e10b.jpg',
        price: '₹2.60 Cr*',
        title: 'The Glass Pavilion Villa',
        location: 'Pedregal, Ciudad de México',
        specs: '6 Guests • 4 Bedrooms • 4 Bathrooms'
    },
    {
        id: 3,
        image: 'https://i.pinimg.com/736x/e5/d7/67/e5d76710d9795b9aedab287065ec832e.jpg',
        price: '₹1.95 Cr*',
        title: 'Urban Sanctuary Suite',
        location: 'Juárez, Ciudad de México',
        specs: '3 Guests • 1 Bedroom • 1 Bathroom'
    },
    {
        id: 4,
        image: 'https://i.pinimg.com/736x/b1/d0/c3/b1d0c3926eb7b9c10f6200fc4f68c517.jpg',
        price: '₹4.50 Cr*',
        title: 'Presidential Duplex Mansion',
        location: 'Bosques de las Lomas, CDMX',
        specs: '10 Guests • 5 Bedrooms • 5.5 Bathrooms'
    }
];

export default function ApartmentsSection() {
    return (
        <div className="aria-property-page">
            
             <div className="property-hero-wrapper container-fluid p-0">
    <header className="property-hero-banner">
        <div className="property-hero-overlay">
            <div className="property-hero-content text-center">
                <div className="property-breadcrumb-nav mb-2">
                    <Link to="/" className="property-breadcrumb-link">
                        HOME
                    </Link>
                    <span className="property-crumb-separator mx-2">/</span>
                    <span className="property-gold-current">PROPERTY</span>
                </div>
                <h1 className="property-hero-title">Exclusive Residences</h1>
            </div>
        </div>
    </header>
            </div>

            <section className="mt-5 mb-5 py-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="apartments-header d-flex justify-content-between align-items-end mb-4">
                        <div className="header-text">
                            <span className="aria-gold-sub d-block mb-3">CURATED SELECTION</span>
                            <h1 className='text-white m-0'>Top Luxury Apartments</h1>
                        </div>

                        <div className="navigation-buttons d-flex gap-2">
                            <button className="nav-btn apt-prev-1" aria-label="Previous">
                                <FaChevronLeft />
                            </button>
                            <button className="nav-btn next-btn apt-next-1" aria-label="Next">
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
                        autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        spaceBetween={20}
                        slidesPerView={1.2} 
                        loop={true}
                        breakpoints={{
                            480: { slidesPerView: 1.25, spaceBetween: 20 },
                            640: { slidesPerView: 1.6, spaceBetween: 20 },
                            768: { slidesPerView: 2.2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 24 }
                        }}
                        className="apartments-slider"
                    >
                        {apartmentsData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="card property-card">
                                    <div className="card-image-wrapper">
                                        <img src={item.image} alt={item.title} className="card-image" />
                                        
                                        <div className="hover-card-overlay">
                                            <span className="overlay-starting">STARTING FROM</span>
                                            <h3 className="overlay-price">{item.price}</h3>
                                            <Link to="/PropertyDetails" className="overlay-gold-btn text-decoration-none">
                                                View Project
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="card-content">
                                        <h3 className="property-title">{item.title}</h3>
                                        <p className="location">{item.location}</p>
                                        <div className="specs-wrapper">
                                            <p className="specs m-0">{item.specs}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <section className="py-5 pt-0 mt-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="apartments-header d-flex justify-content-between align-items-end mb-4">
                        <div className="header-text">
                            <span className="aria-gold-sub d-block mb-3">PORTFOLIO EXCLUSIVES</span>
                            <h1 className='text-white m-0'>Featured Projects</h1>
                        </div>

                        <div className="navigation-buttons d-flex gap-2">
                            <button className="nav-btn apt-prev-2" aria-label="Previous">
                                <FaChevronLeft />
                            </button>
                            <button className="nav-btn next-btn apt-next-2" aria-label="Next">
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
                        autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                        spaceBetween={20}
                        slidesPerView={1.2} /* FIX 2: Default mobile peek view */
                        loop={true}
                        breakpoints={{
                            480: { slidesPerView: 1.25, spaceBetween: 20 },
                            640: { slidesPerView: 1.6, spaceBetween: 20 },
                            768: { slidesPerView: 2.2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 24 }
                        }}
                        className="apartments-slider"
                    >
                        {apartmentsDataa.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="card property-card">
                                    <div className="card-image-wrapper">
                                        <img src={item.image} alt={item.title} className="card-image" />
                                        
                                        <div className="hover-card-overlay">
                                            <span className="overlay-starting">STARTING FROM</span>
                                            <h3 className="overlay-price">{item.price}</h3>
                                            <Link to="/PropertyDetails" className="overlay-gold-btn text-decoration-none">
                                                View Project
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="card-content">
                                        <h3 className="property-title">{item.title}</h3>
                                        <p className="location">{item.location}</p>
                                        <div className="specs-wrapper">
                                            <p className="specs m-0">{item.specs}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* CTA Banner Section */}
            <section className="aria-cta-banner py-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="aria-cta-card p-4 p-md-5 text-center">
                        <span className="aria-gold-sub d-block mb-2">LIMITED RESERVATIONS</span>
                        <h2 className="cta-heading mb-3">Experience Ultra-Luxury Firsthand</h2>
                        <p className="aria-text-muted max-w-600 mx-auto mb-4">
                            Schedule an exclusive private tour with our senior real estate advisory team and explore available residences before official releases.
                        </p>
                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                            <Link to="/New" className="overlay-gold-btn px-4 py-3 text-decoration-none">
                                Book Private Tour
                            </Link>
                            <Link to="/Property" className="overlay-gold-btn px-4 py-3 text-decoration-none">
                                Download Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}