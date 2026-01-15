import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Reuse existing styles

export default function Navbar() {
    return (
        <header className="navbar">
            <Link to="/">
                <img src="/logo.png" alt="BREAK PROTECTION" className="logo" />
            </Link>

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/location">Location</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact">Get In Touch</Link>
                <Link to="/software-demo">Demo</Link>
            </nav>

            <div className="nav-buttons">
                <Link to="/book-now">
                    <button className="outline">BOOK NOW</button>
                </Link>
                <Link to="/warranty">
                    <button className="outline">CHECK WARRANTY</button>
                </Link>
            </div>
        </header>
    );
}
