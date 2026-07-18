import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

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
        <section id="contact" className="py-5 contact text-white">
            <div className="container my-5">
                <div className="row g-5">
                    <div className="col-lg-5 d-flex flex-column justify-content-between">
                        <div>
                            <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
                            <p className="text-white mb-5">Drop us a line to discuss setup architecture, system planning, or structural property onboarding maps.</p>
                        </div>
                        <div className="d-flex flex-column gap-4 mb-4">
                            <div className="d-flex align-items-center  gap-3">
                                <div className="icon-cotcat"><FaEnvelope /></div>
                                <div>
                                    <small className="text-secondary d-block">Email</small>
                                    <span className="fw-medium">hello@vanguardliving.com</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="icon-cotcat"><FaPhone /></div>
                                <div>
                                    <small className="text-secondary d-block">Phone</small>
                                    <span className="fw-medium">+1 (555) 234-5678</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                                <div className="icon-cotcat"><FaMapMarkerAlt /></div>
                                <div>
                                    <small className="text-secondary d-block">HQ Location</small>
                                    <span className="fw-medium">Downtown Innovation Hub, Ste 200</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bg-secondary bg-opacity-10 border border-secondary p-4 p-md-5 rounded-4">
                            {sent ? (
                                <div className="text-center py-5 animate__animated animate__zoomIn">
                                    <h3 className="text-success fw-bold">Message Logged!</h3>
                                </div>
                            ) : (
                                <form onSubmit={onSubmit}>
                                    <div className="mb-4">
                                        <label className="form-label small fw-bold ">Full Name</label>
                                        <input type="text" className="form-control bg-dark text-white border-secondary custom-input-focus" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Aman Singh" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label text-secondary small fw-bold ">Email Address</label>
                                        <input type="email" className="form-control bg-dark text-white border-secondary custom-input-focus" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="aman@example.com" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label text-secondary small fw-bold ">Phone Number</label>
                                        <input type="tel" className="form-control bg-dark text-white border-secondary custom-input-focus" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+1 (555) 000-0000" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label text-secondary small fw-bold ">Message Parameters</label>
                                        <textarea className="form-control bg-dark text-white border-secondary custom-input-focus" rows="4" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Outline your project timeline..."></textarea>
                                    </div>

                                    <button type="submit" disabled={loading} className="btn  btn-lg w-100 rounded-pill fw-bold  d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#c8a261', color: '#fff' }}>
                                        {loading ? "Sending..." : "Send Message"} <FaPaperPlane size={16} />
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