import React from "react";
import Navbar from "./Navbar";

export default function BecomePartner() {
    return (
        <div className="page-container">
            <Navbar />
            <div className="glow-bg"></div>
            <div className="content-wrapper">
                <h1>Become A Partner</h1>
                <p>Join our global network of distributors and retailers. Offer the world's best unbreakable protection to your customers.</p>
                <div className="form-container glow-card">
                    <button className="primary">APPLY NOW</button>
                </div>
            </div>
        </div>
    );
}
