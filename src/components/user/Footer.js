// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
return (
    <footer className="footer">
    <div className="footer-content">
        <div className="footer-section about">
        <h3>About Us</h3>
        <p>
            We are a team of passionate developers creating amazing applications
            to solve real-world problems.
        </p>
        </div>

        <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
        </div>

        <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +123 456 7890</p>
        </div>
    </div>
    <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
    </div>
    </footer>
);
};

export default Footer;
