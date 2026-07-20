import "./footer.css";

import { Link } from "react-router-dom";

import {FaFacebookF,FaInstagram,FaLinkedinIn,
        FaGithub,FaEnvelope,FaLocationDot,} 
        from "react-icons/fa6";

function Footer() {
return (
<>
    <footer className="footer">
    <div className="footer-container">
        <div className="footer-col about">
            <h2 className="logo">TechZon</h2>
            <p>
                Discover the latest laptops, gaming gear, smartphones and smart
                accessories with premium quality and competitive prices.
            </p>
            <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaGithub /></a>
            </div>
        </div>
        <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>

        <div className="footer-col">
        <h3>Categories</h3>
        <ul>
            <li><Link to="/products/laptops">Laptops</Link></li>
            <li><Link to="/products/phones">Phones</Link></li>
            <li><Link to="/products/gaming">Gaming</Link></li>
            <li><Link to="/products/accessories">Accessories</Link></li>
        </ul>

        </div>
        <div className="footer-col">
            <h3>Contact</h3>
            <ul className="contact-info">
                <li><FaLocationDot />Cairo, Egypt</li>
                <li><FaEnvelope />support@techzon.com</li>
            </ul>
        </div>
    </div>
    </footer>

    <div className="copyright">
    © 2026 TechZon. All Rights Reserved.
    </div>
</>
);
}

export default Footer;