import React, { useState } from 'react';
import { FaTimes, FaPaperPlane } from 'react-icons/fa';
import './LeadPopupModal.css';

export default function LeadPopupModal({ isOpen, onClose, projectName = "AriahausEstate" }) {
  // Space hatakar project name format karna
  const projectSlug = projectName.replace(/\s+/g, '');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    projectName: projectSlug
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqNX2aA79Ijv9g8zxL5TmP_b8BrSs3-uo2SRsZOFCmQ_R6XNlFvaKpbkobnt84ZxbXzg/exec";

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      setSent(true);
      setTimeout(() => {
        setSent(false);
        setFormData({ name: '', phone: '', city: '', projectName: projectSlug });
        onClose();
      }, 2500);
    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-modal-overlay" onClick={onClose}>
      <div className="popup-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Icon */}
        <button type="button" className="popup-close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="popup-header">
          <span className="popup-gold-tag">INQUIRE NOW</span>
          <h3 className="popup-title">Book Site Visit</h3>
          <p className="popup-sub">Fill details below to receive instant brochure & details.</p>
        </div>

        {sent ? (
          <div className="popup-success-box">
            <h4>Thank You!</h4>
            <p>Your inquiry for <strong>{formData.projectName}</strong> has been logged.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="popup-form">
            
            {/* Hidden Input for Project Name */}
            <input 
              type="hidden" 
              name="projectName" 
              value={formData.projectName} 
            />

            <div className="popup-input-group">
              <label>Full Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Enter mobile number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="popup-input-group">
              <label>City *</label>
              <input
                type="text"
                name="city"
                required
                placeholder="Enter your city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="popup-submit-btn" disabled={loading}>
              {loading ? "Submitting..." : (
                <>
                  Submit Inquiry <FaPaperPlane className="ms-2" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}s