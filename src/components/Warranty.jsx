import React from "react";
import Navbar from "./Navbar";

export default function Warranty() {
    return (
        <div className="page-container">
            <Navbar />
            <div className="glow-bg"></div>
            <div className="content-wrapper">
                <h1>Check Warranty & Claim</h1>
                <div className="form-container glow-card">
                    <label>Enter your Serial Number / Order ID</label>
                    <input type="text" placeholder="e.g. TH-123456" className="glow-input" />
                    <button className="primary">CHECK STATUS</button>
                </div>
            </div>
        </div>
    );
}
