import React from "react";
import { FaUmbrellaBeach, FaSpa, FaWifi, FaSwimmer, FaTree, FaConciergeBell, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import about1 from "../assets/about.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>Welcome to SeaSky Deluxe Resort</h1>
          <p>Where Luxury Meets Nature's Serenity</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        {/* Introduction */}
        <section className="intro-section">
          <div className="intro-text">
            <h2>Your Island Paradise Awaits</h2>
            <p>
              Nestled on the pristine shores of Mousuni Island, SeaSky Deluxe Resort offers an 
              unparalleled blend of luxury and natural beauty. Our resort is designed to provide 
              the perfect escape from everyday life while maintaining a deep connection with nature.
            </p>
            <p>
              From sea-facing suites to private beach dinners, every experience at SeaSky is 
              carefully crafted to create unforgettable memories. Our commitment to sustainability 
              ensures that your stay contributes to preserving this beautiful island ecosystem.
            </p>
          </div>
          <div className="intro-images">
            <img src={about1} alt="Resort Beach" className="intro-img main-img" />
            <div className="secondary-images">
              <img src={about2} alt="Resort Room" className="intro-img" />
              <img src={about3} alt="Resort Dining" className="intro-img" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>Why Choose SeaSky Deluxe</h2>
          <p className="subtitle">Experience the perfect blend of luxury and nature</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="card-icon">
                <FaUmbrellaBeach />
              </div>
              <h3>Private Beach Access</h3>
              <p>Exclusive 500m of pristine beachfront with complimentary loungers and umbrellas</p>
            </div>
            
            <div className="feature-card">
              <div className="card-icon">
                <FaSpa />
              </div>
              <h3>Luxury Spa</h3>
              <p>Traditional Ayurvedic treatments with ocean views and organic products</p>
            </div>
            
            <div className="feature-card">
              <div className="card-icon">
                <FaSwimmer />
              </div>
              <h3>Infinity Pool</h3>
              <p>Stunning ocean-view pool with swim-up bar and comfortable cabanas</p>
            </div>
            
            <div className="feature-card">
              <div className="card-icon">
                <FaTree />
              </div>
              <h3>Eco-Friendly</h3>
              <p>Sustainable practices including solar energy and water conservation</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <h2>What Our Guests Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="rating">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p>"Love the place love the food, and the staff was amazing. They were extremely helpful, they went over and beyond to help make our stay enjoyable. I highly recommend this resort"</p>
              <div className="guest-info">
                <div className="guest-avatar">P</div>
                <div>
                  <h4>Shipra Mondal</h4>
                  <p>Durgapur, India</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="rating">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
              <p>"Nice ambiance... Nice for family tour
Food quality is awesome👏
Staff's are very good in behavior and skilled"</p>
              <div className="guest-info">
                <div className="guest-avatar">D</div>
                <div>
                  <h4>Sathi Halder</h4>
                  <p>Kolkata, India</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="location-section">
          <div className="location-content">
            <div className="location-info">
              <h2>Our Location</h2>
              <p>
                <FaMapMarkerAlt className="icon" /> 
                Mousuni Island, Namkhana, West Bengal 743357
              </p>
              <p>
                Nestled in the Sundarbans region, our resort offers a unique blend of 
                coastal beauty and mangrove forests. Easily accessible yet completely secluded.
              </p>
                <a href="tel:+919907127825">
  <button className="book-btn">Book Your Stay</button>
</a>
            </div>
           <div className="contact-map">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58912.409627131236!2d88.26077899310103!3d21.587259758973413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a00d3e2fd9e27cd%3A0x8de4011b1771c6a0!2sMousuni%20Island!5e0!3m2!1sen!2sin!4v1717099890495!5m2!1sen!2sin"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

          </div>
        </section>
      </div>
    </div>
  );
};

export default About;