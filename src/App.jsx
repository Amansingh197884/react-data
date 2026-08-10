import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';

import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import VisionMission from './components/VisionMission.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactUs from './components/ContactUs.jsx';
import Slide from './components/Slide.jsx';
import High from './components/High.jsx';
import New from './components/New.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';
import Property from './components/Property.jsx';
import PropertyDetails from './components/PropertyDetails.jsx';
import Aboutpage from './components/Aboutpage.jsx';
import Featured from './components/Featured.jsx';
import Estate from './components/Estate.jsx';
import Terms from './components/Terms.jsx';
import Privacy from './components/Privacy.jsx';

const MainPage = () => {
  return (
    <>
      <Home />
      <High />
      <Featured />

      <Estate />

      <VisionMission />
      <AboutUs />

      <Gallery />
      <Slide />

      <Testimonials />
      <ContactUs />
    </>
  );
};

export default function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  const isDetailsPage = location.pathname.toLowerCase() === '/propertydetails';

  return (
    <div className="bg-light min-vh-100 overflow-x-hidden">
      {!isDetailsPage && <Navbar />}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new" element={<New />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>

      {!isDetailsPage && <Footer />}
    </div>
  );
}