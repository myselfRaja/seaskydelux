// RoomCard.jsx
import React from "react";
import { FaWifi, FaBed, FaLock, FaBolt, FaShower, FaCar, FaWater, FaBinoculars, FaHeart, FaFire, FaSmoking, FaMusic } from "react-icons/fa";

const featureIcons = {
  "Free WiFi": <FaWifi />,
  "2/3 Man Bed": <FaBed />,
  "24/7 Security": <FaLock />,
  "24/7 Electricity": <FaBolt />,
  "24/7 Water": <FaWater />,
  "Attached Bathroom": <FaShower />,
  "Free Parking": <FaCar />,
  "Sea View": <FaBinoculars />,
  "Couple Friendly": <FaHeart />,
  "Bonfire": <FaFire />,
  "Hookah": <FaSmoking />,
  "Musical Night": <FaMusic />
};

const RoomCard = ({ image, title, price, features }) => {
  return (
    <div className="room-card">
      <img src={image} alt={title} className="room-image" />
      <h3>{title}</h3>
      <p><strong>{price}</strong></p>
      <small className="text-muted">*Prices are subject to change...</small>
      
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index}>
            {featureIcons[feature]} <span>{feature}</span>
          </li>
        ))}
      </ul>

    <a href="tel:+919907127825">
  <button className="btn-glow">Book Now</button>
</a>

    </div>
  );
};

export default RoomCard;
