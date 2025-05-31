import React, { useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setError("All fields are required.");
      return;
    }

    console.log("Form submitted:", formData);
    setError("");
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} />
            <input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
            <input name="subject" type="text" placeholder="Subject" value={formData.subject} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange}></textarea>
            {error && <p className="error">{error}</p>}
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Google Map */}
        <div className="contact-map">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58912.409627131236!2d88.26077899310103!3d21.587259758973413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a00d3e2fd9e27cd%3A0x8de4011b1771c6a0!2sMousuni%20Island!5e0!3m2!1sen!2sin!4v1717099890495!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Contact Details - MOVED BELOW MAP */}
          <div className="contact-info">
            <p><FaPhoneAlt /> +91 98765 43210</p>
            <p><FaEnvelope /> info@seaskyresort.com</p>
            <p><FaMapMarkerAlt /> Mousuni Island, Namkhana, West Bengal</p>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;