import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const faqData = [
    {
        question: "What is Break Protection made of?",
        answer: "Break Protection is Ultra thin Ultra impact resistant, Urethane film specially made to withstand impacts and abrasions with the Impact resistant compound built between the multiple layers to withstand accidental fall. It adds a layer of confidence over the Phone Screen and tested and proven to withstand upto 6.1 KG of impact directly on the protector."
    },
    {
        question: "Does Break Protection self heal the scratches?",
        answer: "Yes, Break Protection features advanced self-healing technology that automatically repairs minor scratches and abrasions over time, keeping your screen looking new."
    },
    {
        question: "Will Break Protection change the look and feel of the device?",
        answer: "No, Break Protection is designed to be optically clear and extremely thin, preserving the original look, feel, and touch sensitivity of your device."
    },
    {
        question: "Does Break Protection need a hard case?",
        answer: "While Break Protection provides superior screen and body protection, using a hard case can offer additional shock absorption for the corners and edges in extreme falls."
    },
    {
        question: "Why is our product unique?",
        answer: "Our product combines military-grade impact resistance with self-healing properties in an ultra-thin film, offering a unique balance of protection and aesthetics that bulky tempered glass cannot match."
    },
    {
        question: "How Can I Claim Warranty for BP?",
        answer: "You can claim warranty by visiting our 'Check Warranty' page, entering your details, and following the claim process instructions, or by visiting any authorized store."
    },
    {
        question: "Can I extend my warranty?",
        answer: "Warranty extension options are available for specific plans. Please check the 'Check Warranty' section or contact support for eligibility details."
    },
    {
        question: "Is there Home Service available",
        answer: "Yes, we offer home service in select cities. You can book an appointment through our website's 'Book Now' section."
    },
    {
        question: "What does Break Protection warranty Cover?",
        answer: "The warranty covers manufacturing defects and air bubbles that cannot be removed. Care+ plans also cover screen breakage under specific terms."
    },
    {
        question: "What if the protection is damaged or removed under warranty?",
        answer: "If the protection is damaged due to a manufacturing defect, it will be replaced. Intentional removal or damage due to mishandling might not be covered fully."
    },
    {
        question: "What is the technology used in Break Protection?",
        answer: "We use a multi-layered Urethane thermoplastic elastomer technology with embedded nanoparticles for impact dispersion and self-healing capabilities."
    },
    {
        question: "Are there chances of internal damage even after using your product?",
        answer: "Break Protection significantly reduces the risk of external and screen damage. However, extreme impacts can still potentially cause internal component damage depending on the force."
    },
    {
        question: "What is Screen damage warranty?",
        answer: "Screen damage warranty (under Care+) ensures that if your screen breaks while protected by our product, we will cover the replacement costs up to a specified limit."
    },
    {
        question: "Will the screen be replaced for free under the Care+ plan?",
        answer: "Yes, under the Care+ plan, the screen replacement is covered, subject to a small processing fee and verification of the claim."
    },
    {
        question: "If I have to service my phone, will I have to pay the amount again to get Break Protection?",
        answer: "If you need to remove the protection for authorized service, please contact us beforehand. We may offer a replacement at a discounted service charge."
    },
    {
        question: "How can I upgrade my plan to Care+?",
        answer: "You can upgrade to Care+ at the time of purchase or within a limited window after buying the standard protection by contacting our support or visiting a store."
    },
    {
        question: "How can I renew the Care+ warranty after 1 year?",
        answer: "Renewal options will be sent to your registered email before expiry. You can also visit our website to renew your plan."
    },
    {
        question: "Will my fingerprints censor work after using Break Protection?",
        answer: "Yes, our ultra-thin material allows ultrasonic and optical fingerprint sensors to function perfectly."
    },
    {
        question: "Do you replace the screen with the original screen of the brand? Do you have tie ups with authorized service centres?",
        answer: "Yes, we partner with authorized service centers to ensure your screen is replaced with genuine parts to maintain your device's integrity."
    },
    {
        question: "Why should I share my IMEI number with the store? Why is my IMEI number captured in your system?",
        answer: "Accurate IMEI capturing is crucial to link the warranty specifically to your device. It prevents fraud and ensures seamless claim processing."
    },
    {
        question: "Why can't I get discounts for Care+ plan?",
        answer: "The Care+ plan is a premium insurance-backed service with fixed premiums, hence standard discounts often don't apply. However, watch out for seasonal offers."
    },
    {
        question: "Is Break Protection the product waterproof?",
        answer: "The protection film itself is water-resistant and will not peel off in water, but it does not make your phone waterproof if the device itself isn't."
    },
    {
        question: "Why is there a replacement charge if the product comes with a lifetime replacement warranty?",
        answer: "The product material is free under lifetime warranty, but a small service charge applies for the professional installation and logistics."
    },
    {
        question: "Is it necessary to return the product to be eligible for a replacement?",
        answer: "No, usually you do not need to return the old skin, but verification (photos/inspection) is required before a new one is applied."
    },
    {
        question: "Will the product peel off from my phone over time?",
        answer: "Under normal use, it will not peel off. It uses a strong residue-free adhesive. Peeling usually happens only if corners are picked at."
    },
    {
        question: "What are the dos and don’ts of using Break Protection?",
        answer: "Do: Clean screen before app. Don’t: Use sharp objects to test it or peel the edges unnecessarily."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const filteredFAQ = faqData.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="page-container faq-page">
            <Navbar />

            <div className="faq-wrapper">
                {/* Search Bar */}
                <div className="search-container">
                    <div className="search-input-wrapper">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="faq-header">
                    <h1>FAQs</h1>
                    <p>Being inquisitive is good. Here are some of your questions answered for better clarity.</p>
                </div>

                <div className="faq-list">
                    {filteredFAQ.map((item, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`} onClick={() => toggleAccordion(index)}>
                            <div className="faq-question">
                                <h3>{item.question}</h3>
                                <span className="faq-toggle">{activeIndex === index ? "−" : "+"}</span>
                            </div>
                            <div className={`faq-answer ${activeIndex === index ? "open" : ""}`}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}

                    {filteredFAQ.length === 0 && (
                        <p className="no-results">No questions found matching your search.</p>
                    )}
                </div>

                <div className="faq-footer">
                    <p>Still have questions?</p>
                    <Link to="/contact" className="contact-link">Contact</Link>
                </div>
            </div>
        </div>
    );
}
