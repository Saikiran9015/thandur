import React, { Suspense, useEffect } from "react";
import { Loader, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "./Home.css";
import PhoneStack from "./PhoneStack";

import Navbar from "./Navbar";

export default function Home() {
    useEffect(() => {
        const section = document.querySelector(".protection-section");
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("animate");
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <section className="hero">
                <Navbar />

                {/* HERO CONTENT - SPLIT LAYOUT */}
                <div className="hero-content">
                    {/* LEFT – TEXT */}
                    <div className="hero-text">
                        <h1>SLEEK <span>AND</span><br />STRONG</h1>
                        <p>
                            Precision engineered protection with premium strength and modern design.
                        </p>
                        <button className="primary">EXPLORE MORE</button>
                    </div>

                    {/* RIGHT – 3D MODEL */}
                    <div className="hero-3d">
                        <div className="glow"></div>
                        <Canvas camera={{ position: [0, 0, 8], fov: 35 }}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[5, 10, 5]} intensity={1.5} />
                            <spotLight position={[-5, 5, 5]} intensity={1.0} color="#00e5ff" />
                            <Suspense fallback={null}>
                                <PhoneStack />
                                <Environment preset="city" />
                            </Suspense>
                        </Canvas>
                        <Loader />
                    </div>
                </div>

                {/* SIDEBAR */}



            </section>

            {/* OUR PRODUCT SECTION */}
            <section className="product-section">
                <div className="product-container">
                    {/* LEFT IMAGE */}
                    <div className="product-image">
                        <img src="/our-product.png" alt="Our Product" />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="product-content">
                        <h2>THUNDER</h2>
                        <h4 style={{ color: "#00e5ff", marginBottom: "30px", fontSize: "24px", letterSpacing: "2px" }}>UNBREAKABLE PROTECTION</h4>
                        <p>
                            When strength meets innovation, protection becomes THUNDER.
                            <br /><br />
                            Engineered with military-grade material, THUNDER delivers unmatched durability while
                            staying completely invisible on your device.
                        </p>

                        <h3 style={{ marginTop: "40px", marginBottom: "25px", color: "#fff" }}>WHY THUNDER?</h3>

                        <div className="product-features" style={{ flexDirection: "column", gap: "30px" }}>
                            <div style={{ gap: "15px" }}>
                                <span><strong> Unbreakable Strength:</strong> Built to absorb extreme impact and resist cracks.</span>
                                <span><strong> Military-Grade Material:</strong> Tested for toughness and long-lasting performance.</span>
                                <span><strong> Self-Healing Technology:</strong> Minor scratches disappear automatically over time.</span>
                                <span><strong> Anti-Scratch Coating:</strong> Keeps your screen looking brand new.</span>
                            </div>
                            <div style={{ gap: "15px" }}>
                                <span><strong> Invisible Finish:</strong> Crystal-clear protection with zero visual compromise.</span>
                                <span><strong> Edge-to-Edge Coverage:</strong> Complete protection from corner to corner.</span>
                                <span><strong>Replacement Warranty:</strong> Peace of mind with guaranteed replacement support.*</span>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* PROTECTION SECTION */}
            <section className="protection-section">
                {/* STATS */}
                <div className="stats-bar">
                    <div className="stat-card">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="m20 10 2-2-2-2" /><path d="M22 8h-4" />
                        </svg>
                        <span>More than 13 years<br />of experience</span>
                    </div>
                    <div className="stat-card">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
                            <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                        <span>Installations over<br />10 countries</span>
                    </div>
                    <div className="stat-card">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
                            <path d="M3 21h18" /><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3z" /><path d="M5 21V10h14v11" /><path d="M9 17h1" /><path d="M14 17h1" />
                        </svg>
                        <span>Over 25,000 Sq. Feet<br />manufacturing facility</span>
                    </div>
                    <div className="stat-card">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="stat-icon">
                            <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /><path d="M12 22a14.5 14.5 0 0 1-4-10 14.5 14.5 0 0 1 4-10" /><path d="M12 22a14.5 14.5 0 0 0 4-10 14.5 14.5 0 0 0-4-10" />
                        </svg>
                        <span>Manufacturing in UAE,<br />South Korea And India</span>
                    </div>
                </div>

                <div className="protection-content">

                    {/* RIGHT TEXT */}
                    <div className="text-area">
                        <h2>YOU HEARD IT RIGHT!</h2>
                        <h4>We assure most comprehensive Protection.</h4>
                        <p>
                            Break Protection guarantees that your gadget will not break on normal use.
                            We take your phone care seriously. Like, really seriously.
                            <br /><br />
                            We have been working on this technology for a long time and we have tested it rigorously.
                            We like a challenge.
                            <br /><br />
                            And if it breaks?
                            <br /><br />
                            We take responsibility for the protection our product provides.
                            Your phone screen if protected by Break Protection Care+ is covered
                            with a warranty for 1 year * T&C applicable.
                        </p>
                    </div>

                    {/* RIGHT IMPACT IMAGE */}
                    <div className="impact-right">
                        <img src="/impact-right.png" alt="Impact Protection" />
                    </div>
                </div>
            </section>
        </>
    );
}
