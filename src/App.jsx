import React from 'react';
import Navbar from './components/Navbar.jsx';

import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/Home.jsx';
import AboutUs from './components/AboutUs.jsx';
import VisionMission from './components/VisionMission.jsx';
// import Amenities from './components/Amenities.jsx';
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
import Terms from './components/Terms.jsx'
import Privacy from './components/Privacy.jsx'

const MainPage = () => {
  return (
    <>
      <Home />
      <High />
      <AboutUs />
      <Estate />
      <VisionMission />

      <Gallery />
      <Slide />
      <Featured />

      {/* <Amenities /> */}
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default function App() {
  const location = useLocation();

  const isDetailsPage = location.pathname.toLowerCase() === '/propertydetails';

  return (
    <div className="bg-light min-vh-100 overflow-x-hidden">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/new" element={<New />} />
        <Route path="/Property" element={<Property />} />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />
         <Route path="/Terms" element={<Terms />} />
                  <Route path="/Privacy" element={<Privacy />} />


      </Routes>

      {!isDetailsPage && <Footer />}
    </div>
  );
}