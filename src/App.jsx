import React from 'react';
import Navbar from './components/Navbar.jsx';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import VisionMission from './components/VisionMission.jsx';
// import Amenities from './components/Amenities.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactUs from './components/ContactUs.jsx';
import Slide from './components/Slide.jsx';
import High from './components/High.jsx';
import New from './components/New.jsx';
import Gallery from './components/Gallery.jsx'
import Footer from './components/Footer.jsx';
import Property from './components/Property.jsx'

const MainPage = () => {
  return (
    <>
      <Home />
      <High />
      <Gallery/>

      <AboutUs />
            <Slide />
      
      <VisionMission />
      {/* <Amenities /> */}
      <Testimonials />
      <ContactUs />
    </>
  );
};


export default function App() {
  return (
    <div className="bg-light min-vh-100 overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new" element={<New />} />
      </Routes>
       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Property" element={<Property />} />
      </Routes>

      <Footer />

       
    </div>
  );
}
