import React from 'react';
import { Typewriter } from 'react-simple-typewriter'; // We'll install this for typed effect
import logo from '../assets/logo.jpg';
import './HeroSection.css';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
   const navigate = useNavigate();
  return (
    <section className="hero-section d-flex align-items-center position-relative">
      <div className="overlay"></div>

      <div className="container text-white">
        <div className="row align-items-center">
          <div className="col-md-7 hero-text">
            <h1 className="display-3 fw-bold">Welcome to SeaSky Deluxe Resort, Mousuni Island</h1>
         

<Typewriter
  words={['Luxury. Comfort. Serenity.', 'Your Dream Vacation Awaits.', 'Experience Paradise.']}
  loop={true}
  cursor
  cursorStyle='_'
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
/>

 <div className="buttons" style={{ display: "flex", gap: "1rem", marginTop: "20px" }}>
      {/* Explore Rooms */}
      <button className="btn-glow" onClick={() => navigate("/Rooms")}>
        Explore Rooms
      </button>

      {/* Book Now via WhatsApp */}
      <a
        className="btn-glow"
        href="https://wa.me/919907127825?text=Hello%20SeaSky%20Deluxe%20Resort%2C%20I%20would%20like%20to%20book%20a%20room."
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", padding: "10px 20px", display: "inline-block", textAlign: "center", color: "white" }}
      >
        Book Now
      </a>
    </div>

          
          </div>
          {/* Optional right side image or empty */}
          <div className="col-md-5 d-none d-md-block">
            {/* You can put an image or leave empty for now */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
