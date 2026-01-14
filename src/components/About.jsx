import React from "react";
import Navbar from "./Navbar";

export default function About() {
    return (
        <div className="page-container">
            <Navbar />
            <div className="glow-bg"></div>
            <div className="content-wrapper">
                <h1>About Us</h1>
                <p>Welcome to Break Protection, where we redefine device durability. Our mission is to ensure your mobile experience is seamless and worry-free. With our military-grade materials and innovative self-healing technology, we provide the ultimate shield for your gadgets. We believe in quality, resilience, and style.</p>
                <div className="visuals">
                    <div className="pouch-card glow-card">
                        <h3>Premium Protection</h3>
                        <p>State of the art manufacturing in UAE, South Korea, and India.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
