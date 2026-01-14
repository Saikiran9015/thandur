import React from "react";
import Navbar from "./Navbar";

export default function Location() {
    return (
        <div className="page-container">
            <Navbar />
            <div className="glow-bg"></div>
            <div className="content-wrapper">
                <h1>Our Locations</h1>
                <p>Find us across the globe. We have installations in over 10 countries and manufacturing facilities spanning 25,000 sq. feet.</p>

                <div className="grid-layout">
                    <div className="glow-card">
                        <h3>Headquarters</h3>
                        <p>1558/1, Sena Vihar, Kammanahalli<br />Bengaluru, Karnataka 560043</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
