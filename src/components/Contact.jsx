import React, { Suspense } from "react";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import RotatingPhone from "./RotatingPhone";

export default function Contact() {
    return (
        <div className="contact-page">
            <Navbar />

            {/* SECTION 1: HEADER & INFO */}
            <div className="contact-hero">
                <div className="contact-info-left">
                    <h1>Contact Us And We’ll Give You A Solution!</h1>

                    <div className="info-grid">
                        <div className="info-col">
                            <h4>ADDRESS</h4>
                            <p><strong>Right View Group,</strong><br />Al Qusais, Dubai.</p>
                            <br />
                            <p><strong>Kanlee Innovations Pvt Ltd,</strong><br />Bengaluru, India.</p>
                        </div>

                        <div className="info-col">
                            <h4>TELEPHONE</h4>
                            <p>UAE - +971 48886500</p>
                            <p>OMAN - +968 78532562</p>
                            <p>INDIA - +91 90087 77088</p>
                            <p>Pakistan - +92 317 2709490</p>
                        </div>

                        <div className="info-col">
                            <h4>EMAIL</h4>
                            <a href="mailto:customersupport@breakprotection.com">customersupport@breakprotection.com</a>
                        </div>

                        <div className="info-col">
                            <h4>FOLLOW US</h4>
                            <div className="social-links">
                                <a href="#" className="social-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="social-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </a>
                                <a href="#" className="social-icon-box">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                        <rect x="2" y="9" width="4" height="12"></rect>
                                        <circle cx="4" cy="4" r="2"></circle>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-visual-right">
                    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[5, 5, 5]} intensity={1.5} />
                        <Suspense fallback={null}>
                            <RotatingPhone scale={15} rotationSpeed={0.3} />
                            <Environment preset="city" />
                        </Suspense>
                    </Canvas>
                </div>
            </div>

            {/* SECTION 2: FORM */}
            <div className="contact-form-section">
                <div className="form-visual-left">
                    <img src="/c2.png" alt="Form Visual" className="contact-img" />
                </div>

                <div className="form-wrapper-right">
                    <h2>Get In Touch</h2>
                    <p>Fill up form below for enquiry and our Expert will contact you soon. All fields are required.</p>

                    <form className="minimal-form">
                        <div className="form-row">
                            <div className="input-group">
                                <label>NAME</label>
                                <input type="text" className="minimal-input" />
                            </div>
                            <div className="input-group">
                                <label>EMAIL</label>
                                <input type="email" className="minimal-input" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label>PHONE NO</label>
                                <input type="text" className="minimal-input" />
                            </div>
                            <div className="input-group">
                                <label>PURPOSE OF INQUIRY</label>
                                <select className="minimal-input">
                                    <option>General Inquiry</option>
                                    <option>Support</option>
                                    <option>Partnership</option>
                                </select>
                            </div>
                        </div>

                        <div className="input-group">
                            <label>MESSAGE</label>
                            <input type="text" className="minimal-input" />
                        </div>

                        <button className="submit-btn">SEND MESSAGE</button>
                    </form>
                </div>
            </div>

            {/* SECTION 3: LOCATION MAP */}
            <div className="map-section">
                <div className="location-details">
                    <h3>Our Location Map</h3>
                    <p>Find out the location of our headquarters where the magic happens!</p>

                    <div className="location-list">
                        <div className="loc-item">
                            <img src="/logo.png" alt="Logo" style={{ height: "40px", marginBottom: "20px" }} />
                        </div>
                        <div className="loc-item">
                            <strong>Right View Group,</strong>
                            <span>Al Qusais, Dubai.</span>
                        </div>
                        <div className="loc-item">
                            <strong>Kanlee Innovations Pvt Ltd,</strong>
                            <span>Bengaluru, India.</span>
                        </div>
                        <div className="loc-item">
                            <strong>+91 90087 77088</strong>
                            <span>customersupport@breakprotection.com</span>
                        </div>
                        <div className="loc-item">
                            <button className="submit-btn" style={{ marginTop: "0" }}>Talk to our Expert</button>
                        </div>
                    </div>
                </div>

                <div className="map-visual">
                    {/* Placeholder for Map Image/Embed */}
                    <span>Location Map</span>
                </div>
            </div>

            {/* NEWSLETTER */}
            <div className="newsletter-section">
                <h2>Subscribe to our Newsletter</h2>
                <div className="form-container" style={{ margin: "0 auto", flexDirection: "row", gap: "0" }}>
                    <input type="email" placeholder="Enter your email" className="minimal-input" style={{ flex: 1, border: "1px solid #333", padding: "15px", borderRadius: "50px 0 0 50px" }} />
                    <button className="primary" style={{ borderRadius: "0 50px 50px 0", padding: "15px 40px" }}>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    );
}
