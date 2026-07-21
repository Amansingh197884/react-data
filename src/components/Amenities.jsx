import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyDetails from './components/PropertyDetails';
import Property from './components/Property';
// Baaki saare imports...

const MainPage = () => {
  return (
    <>
      <Home />
      <High />
      <Gallery />
      <Property /> {/* Agar Property cards yahan hain */}
      <AboutUs />
      <Slide />
      <VisionMission />
      <Testimonials />
      <ContactUs />
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        
        <Route path="/property-details" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;