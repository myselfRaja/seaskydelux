import React from 'react';
import './Footer.css';
import logo from '../assets/logo.jpg'; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container py-5">
        <div className="row">

          {/* Column 1 - Logo & Name */}
          <div className="col-md-3 text-center text-md-start mb-4 mb-md-0">
            <img src={logo} alt="Sea Sky Logo" className="footer-logo mb-2" />
            <h5 className="mb-1">SeaSkyDelux</h5>
            <p>Mousuni Island</p>
          </div>

          {/* Column 2 - Welcome Text */}
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <h6>About Us</h6>
            <p className="welcome-text">
              Welcome to Sea Sky Deluxe Resort — a peaceful beachside escape at Mousuni Island, perfect for relaxation, family fun, and adventure.
            </p>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="col-md-3 text-center text-md-start mb-4 mb-md-0">
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/gallery" className="footer-link">Gallery</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className="col-md-3 text-center text-md-end">
            <h6>Contact Us</h6>
            <p className="mb-1">+91 9907127825</p>
            <p className="mb-1">+91 7236829293</p>
            <p>Mousuni Island, Namkhana, West Bengal 743357</p>
            <div className="social-icons mt-2">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram mx-2"></i>
              <i className="bi bi-whatsapp"></i>
            </div>
          </div>

        </div>

        <div className="text-center pt-3 border-top mt-4">
          <small>© {new Date().getFullYear()} seaskydeluxresort. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
