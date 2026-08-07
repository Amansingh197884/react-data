import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaShieldAlt, FaFileContract, FaRegHandshake } from 'react-icons/fa';
import './TermsAndConditions.css';

export default function TermsAndConditions() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using the Ariahaus website, mobile applications, and booking platforms, you agree to be bound by these Terms and Conditions. These terms govern all reservations, estate visits, and digital interactions with Ariahaus Luxury Real Estate."
    },
    {
      title: "2. Property Viewing & Site Visits",
      content: "Private estate viewings and guided tours are offered by appointment only. Ariahaus reserves the right to request proof of identity or financial pre-qualification prior to confirming a private viewing for select high-value estates."
    },
    {
      title: "3. Pricing & Payment Schedules",
      content: "All listed property prices, early-bird discounts, and payment plans are subject to change without prior notice until a formal booking agreement is executed. Reservation deposits and booking amounts are non-transferable unless specified in writing."
    },
    {
      title: "4. Intellectual Property Rights",
      content: "All architectural layouts, 3D renderings, floor plans, video walkthroughs, and photography featured on this website are the sole intellectual property of Ariahaus. Unauthorized reproduction or commercial distribution is strictly prohibited."
    },
    {
      title: "5. Privacy & Data Protection",
      content: "Your personal information provided during inquiries or booking requests is collected and processed in accordance with our Privacy Policy. We do not sell or share client data with unauthorized third parties."
    },
    {
      title: "6. Limitation of Liability",
      content: "While Ariahaus strives to ensure the accuracy of all property details, renderings, and dimensions, slight variations may occur during final construction. Final specifications will be governed by the legal Sale & Purchase Agreement."
    }
  ];

  return (
    <div className="terms-page-wrapper">
      
      {/* Header Banner */}
      <section className="terms-hero-section text-center">
        <div className="container px-3 px-md-5">
          <span className="terms-gold-tag d-block mb-2">LEGAL & COMPLIANCE</span>
          <h1 className="] mb-3">Terms & Conditions</h1>
          <p className="terms-hero-sub mx-auto">
            Please read these terms carefully before exploring or reserving properties with Ariahaus.
          </p>
          <small className="terms-effective-date d-block mt-3">
            Last Updated: March 2026
          </small>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="terms-content-section py-5">
        <div className="container px-3 px-md-5">
          
          {/* Highlights Row */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="terms-card p-4 text-center h-100">
                <FaFileContract className="terms-icon mb-3" />
                <h5 className="terms-card-title">Binding Agreement</h5>
                <p className="terms-card-desc">Governs all site visits, bookings, and digital inquiries.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="terms-card p-4 text-center h-100">
                <FaShieldAlt className="terms-icon mb-3" />
                <h5 className="terms-card-title">Data Protection</h5>
                <p className="terms-card-desc">Strict confidentiality for buyer credentials and records.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="terms-card p-4 text-center h-100">
                <FaRegHandshake className="terms-icon mb-3" />
                <h5 className="terms-card-title">Transparent Terms</h5>
                <p className="terms-card-desc">Clear guidelines on reservation deposits and sales agreements.</p>
              </div>
            </div>
          </div>

          {/* Accordion / List Sections */}
          <div className="terms-accordion-wrapper">
            {sections.map((item, index) => (
              <div 
                key={index} 
                className={`terms-accordion-item ${openSection === index ? 'active' : ''}`}
              >
                <div 
                  className="terms-accordion-header d-flex justify-content-between align-items-center"
                  onClick={() => toggleSection(index)}
                >
                  <h4 className="m-0">{item.title}</h4>
                  <FaChevronDown className={`terms-chevron ${openSection === index ? 'rotate' : ''}`} />
                </div>
                {openSection === index && (
                  <div className="terms-accordion-body pt-3">
                    <p className="m-0">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Assistance Box */}
          <div className="terms-contact-box mt-5 p-4 p-md-5 text-center">
            <h3 className="terms-contact-heading mb-2">Have Legal Questions?</h3>
            <p className="terms-contact-desc mb-4">
              If you need clarification regarding our terms or legal agreements, our legal team is at your service.
            </p>
            <Link to="/new" className="terms-contact-btn text-decoration-none">
              Contact Legal Advisory
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}

    </div>
  );
}