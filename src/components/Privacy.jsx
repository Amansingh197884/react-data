import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaLock, FaUserShield, FaCookieBite, FaEyeSlash } from 'react-icons/fa';
import './Privacy.css';

export default function PrivacyPolicy() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect personal information that you voluntarily provide when inquiring about our luxury estates or booking a private tour. This includes your name, phone number, email address, preferred villa configurations, and any specific preferences mentioned during private consultations."
    },
    {
      title: "2. How We Use Your Data",
      content: "Your data is used strictly to facilitate private estate viewings, send personalized property proposals, fulfill legal requirements for real estate sales, and communicate updates regarding Ariahaus developments. We never use your data for aggressive marketing or spam."
    },
    {
      title: "3. Confidentiality & Data Protection",
      content: "Ariahaus implements 256-bit SSL encryption and strict administrative safeguards to protect your personal information. High-net-worth client identity data and financial pre-qualification documents are kept strictly confidential."
    },
    {
      title: "4. Cookies & Digital Tracking",
      content: "Our platform uses essential session cookies and anonymous analytics to improve website navigation and visual experience. You can choose to disable non-essential cookies through your browser settings at any time without affecting your core browsing experience."
    },
    {
      title: "5. Third-Party Sharing",
      content: "We do not sell, rent, or trade your personal information to external third parties. Information is shared only with verified legal advisors, financial institutions, or government registries (such as RERA authorities) strictly for transaction processing with your explicit consent."
    },
    {
      title: "6. Your Privacy Rights & Opt-Out",
      content: "You retain full control over your personal data. At any point, you may request a copy of the information we hold about you, ask for corrections, or request complete deletion of your records from our systems by contacting our Data Protection Officer."
    }
  ];

  return (
    <div className="privacy-page-wrapper">
      
      {/* Header Banner */}
      <section className="privacy-hero-section text-center">
        <div className="container px-3 px-md-5">
          <span className="privacy-gold-tag d-block mb-2">TRUST & TRANSPARENCY</span>
          <h1 className="privacy-hero-title mb-3">Privacy Policy</h1>
          <p className="privacy-hero-sub mx-auto">
            Your privacy is paramount. Discover how Ariahaus safeguards your personal data and maintains utmost confidentiality.
          </p>
          <small className="privacy-effective-date d-block mt-3">
            Last Updated: March 2026
          </small>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="privacy-content-section py-5">
        <div className="container px-3 px-md-5">
          
          {/* Highlights Grid */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="privacy-card p-4 text-center h-100">
                <FaLock className="privacy-icon mb-3" />
                <h5 className="privacy-card-title">Encrypted Storage</h5>
                <p className="privacy-card-desc">End-to-end security protocols for all private inquiries.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="privacy-card p-4 text-center h-100">
                <FaEyeSlash className="privacy-icon mb-3" />
                <h5 className="privacy-card-title">Zero Data Selling</h5>
                <p className="privacy-card-desc">We never trade or disclose client information to third parties.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="privacy-card p-4 text-center h-100">
                <FaUserShield className="privacy-icon mb-3" />
                <h5 className="privacy-card-title">Complete Control</h5>
                <p className="privacy-card-desc">Request data export or erasure at any time with a single tap.</p>
              </div>
            </div>
          </div>

          {/* Accordion / Detailed Sections */}
          <div className="privacy-accordion-wrapper">
            {sections.map((item, index) => (
              <div 
                key={index} 
                className={`privacy-accordion-item ${openSection === index ? 'active' : ''}`}
              >
                <div 
                  className="privacy-accordion-header d-flex justify-content-between align-items-center"
                  onClick={() => toggleSection(index)}
                >
                  <h4 className="m-0">{item.title}</h4>
                  <FaChevronDown className={`privacy-chevron ${openSection === index ? 'rotate' : ''}`} />
                </div>
                {openSection === index && (
                  <div className="privacy-accordion-body pt-3">
                    <p className="m-0">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Data Query Contact Box */}
          <div className="privacy-contact-box mt-5 p-4 p-md-5 text-center">
            <h3 className="privacy-contact-heading mb-2">Questions Regarding Your Data?</h3>
            <p className="privacy-contact-desc mb-4">
              Reach out to our Data Protection Officer for any privacy concerns or to request data removal.
            </p>
            <Link to="/new" className="privacy-contact-btn text-decoration-none">
              Contact Privacy Officer
            </Link>
          </div>

        </div>
      </section>

    

    </div>
  );
}