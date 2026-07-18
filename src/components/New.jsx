import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import './Contact.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqNX2aA79Ijv9g8zxL5TmP_b8BrSs3-uo2SRsZOFCmQ_R6XNlFvaKpbkobnt84ZxbXzg/exec";

    const dataToSubmit = {
      name: `${formData.firstName} ${formData.lastName}`.trim(),
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit)
      });

      setSent(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="custom-wrapper d-flex align-items-center justify-content-center min-vh-100 position-relative py-5">
      <div className="custom-bg-overlay position-absolute top-0 start-0 w-100 h-100"></div>

      <div className="container position-relative z-1 d-flex justify-content-center">
        <div className="custom-contact-card bg-white p-4 p-sm-5 animate__animated animate__fadeInUp">
          
          {/* Header Section */}
          <div className="text-start mb-4">
            <h1 className="fw-normal mb-3 text-dark custom-heading">
              Let's Start The Conversation
            </h1>
            <p className="text-secondary small fw-light lh-base custom-subtext">
              Reach out to our team today for a complimentary, no-obligation consultation.<br className="d-none d-sm-block" />
              We're here to answer your questions
            </p>
          </div>

          {/* Form / Success Section */}
          {sent ? (
            <div className="text-center py-5 animate__animated animate__zoomIn">
              <h3 className="text-success fw-bold">Message Logged!</h3>
              <p className="text-muted small">We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="custom-minimal-form mt-4">
              
              {/* Row 1: First Name & Last Name */}
              <div className="row g-4 mb-4">
                <div className="col-12 col-md-6">
                  <div className="custom-form-group position-relative">
                    <input
                      type="text"
                      className="form-control-custom w-100"
                      required
                      placeholder=" "
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                    <label className="custom-label">First name *</label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="custom-form-group position-relative">
                    <input
                      type="text"
                      className="form-control-custom w-100"
                      required
                      placeholder=" "
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                    <label className="custom-label">Last name *</label>
                  </div>
                </div>
              </div>

              {/* Row 2: Phone & Email */}
              <div className="row g-4 mb-4">
                <div className="col-12 col-md-6">
                  <div className="custom-form-group position-relative d-flex align-items-end">
                    <span className="custom-globe-icon text-muted me-2 mt-2 mb-1">
                      <i className="fa-solid fa-earth-americas me-1"></i>
                      {/* <i className="fa-solid fa-chevron-down tiny-arrow"></i> */}
                    </span>
                    <input
                      type="tel"
                      className="form-control-custom w-100"
                      placeholder=" "
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <label className="custom-label phone-label-shift">Phone</label>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="custom-form-group position-relative">
                    <input
                      type="type"
                      className="form-control-custom w-100"
                      required
                      placeholder=" "
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <label className="custom-label">Email *</label>
                  </div>
                </div>
              </div>

              {/* Row 3: Subject */}
            

              {/* Row 4: Message */}
              <div className="custom-form-group position-relative mb-5">
                <textarea
                  className="form-control-custom w-100"
                  rows="1"
                  required
                  placeholder=" "
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ resize: 'none' }}
                ></textarea>
                <label className="custom-label">Message</label>
              </div>

              {/* Submit Button aligned perfectly center/wide layout */}
              <div className="w-100 text-center">
                <button 
                  type="submit" 
                  className="custom-submit-btn w-100 py-3 text-uppercase  text-white"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};

export default ContactPage;