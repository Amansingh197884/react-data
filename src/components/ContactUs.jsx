import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import './ContactUs.css';

export default function ContactUs() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqNX2aA79Ijv9g8zxL5TmP_b8BrSs3-uo2SRsZOFCmQ_R6XNlFvaKpbkobnt84ZxbXzg/exec";

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            setSent(true);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSent(false), 3000);
        } catch (error) {
            console.error("Error", error);
            alert("Something went wrong. Please try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact-section py-5">
            <div className="container-fluid px-3 px-md-5 my-md-4">
                <div className="row g-4 g-lg-5 align-items-center">
                    
                    {/* Left Info Column */}
                    <div className="col-lg-5 contact-left-col pe-lg-4">
                        <div className="contact-info-wrapper">
                            <span className="contact-tag">CONNECT WITH US</span>
                            <h2 className="contact-title">Get In Touch</h2>
                            <p className="contact-subtext">
                                Drop us a line to discuss setup architecture, system planning, or structural property onboarding maps.
                            </p>

                            <div className="contact-details-list">
                                <div className="contact-item">
                                    <div className="contact-icon-box">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <small className="item-label">Email</small>
                                        <span className="item-value">hello@vanguardliving.com</span>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-box">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <small className="item-label">Phone</small>
                                        <span className="item-value">+1 (555) 234-5678</span>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-box">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <small className="item-label">HQ Location</small>
                                        <span className="item-value">Downtown Innovation Hub, Ste 200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Column */}
                    <div className="col-lg-7">
                        <div className="contact-glass-card">
                            {sent ? (
                                <div className="success-message text-center py-5">
                                    <h3 className="success-title">Message Logged!</h3>
                                    <p className="success-sub">Thank you for reaching out. We will get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={onSubmit} className="contact-form">
                                    <div className="form-group mb-4">
                                        <label className="custom-label">Full Name</label>
                                        <input 
                                            type="text" 
                                            className="custom-input" 
                                            required 
                                            value={formData.name} 
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                                            placeholder="Aman Singh" 
                                        />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label className="custom-label">Email Address</label>
                                        <input 
                                            type="email" 
                                            className="custom-input" 
                                            required 
                                            value={formData.email} 
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                                            placeholder="aman@example.com" 
                                        />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label className="custom-label">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            className="custom-input" 
                                            value={formData.phone} 
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
                                            placeholder="+1 (555) 000-0000" 
                                        />
                                    </div>

                                    <div className="form-group mb-4">
                                        <label className="custom-label">Message Parameters</label>
                                        <textarea 
                                            className="custom-input custom-textarea" 
                                            rows="4" 
                                            required 
                                            value={formData.message} 
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                                            placeholder="Outline your project timeline..."
                                        ></textarea>
                                    </div>

                                    <button type="submit" disabled={loading} className="contact-gold-btn">
                                        <span>{loading ? "Sending..." : "Send Message"}</span>
                                        <FaPaperPlane className="btn-plane-icon" />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}