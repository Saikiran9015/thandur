import React from "react";
import Navbar from "./Navbar";

export default function BookNow() {
    return (
        <div className="page-container">
            <Navbar />
            <div className="glow-bg"></div>
            <div className="content-wrapper center-text">
                <h1>Book Your Protection</h1>
                <p>Schedule an appointment or order your customized skin now.</p>
                <button className="primary large-btn">START ORDER</button>
            </div>
        </div>
    );
}
