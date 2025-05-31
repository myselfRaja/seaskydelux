// Rooms.jsx
import React from "react";
import RoomCard from "./RoomCard";
import acSuper from "../assets/image1.jpg";
import acDeluxe from "../assets/image2.jpg";
import nonAcCottage from "../assets/image3.jpg";
import tent from "../assets/image4.jpg";
import './Rooms.css'

const rooms = [
  {
    image: acSuper,
    title: "AC Super Deluxe Room",
    price: "Rs.1600/Per Person",
    features: [
      "Free WiFi", "2/3 Man Bed", "24/7 Security", "24/7 Electricity",
      "24/7 Water", "Attached Bathroom", "Free Parking", "Sea View",
      "Couple Friendly", "Bonfire", "Hookah", "Musical Night"
    ]
  },
  {
    image: acDeluxe,
    title: "AC Deluxe Room",
    price: "Rs.1500/Per Person",
    features: [
      "Free WiFi", "2/3 Man Bed", "24/7 Security", "24/7 Electricity",
      "24/7 Water", "Attached Bathroom", "Free Parking", "Sea View",
      "Couple Friendly", "Bonfire", "Hookah", "Musical Night"
    ]
  },
  {
    image: nonAcCottage,
    title: "Non AC Cottage",
    price: "Rs.1300/Per Person",
    features: [
      "Free WiFi", "2/3 Man Bed", "24/7 Security", "24/7 Electricity",
      "24/7 Water", "Attached Bathroom", "Free Parking", "Sea View",
      "Couple Friendly", "Bonfire", "Hookah", "Musical Night"
    ]
  },
  {
    image: tent,
    title: "Tents",
    price: "Rs.1000-1200/Per Person",
    features: [
      "Free WiFi", "2/3 Man Bed", "24/7 Security", "24/7 Electricity",
      "24/7 Water", "Attached Bathroom", "Free Parking", "Sea View",
      "Couple Friendly", "Bonfire", "Hookah", "Musical Night"
    ]
  }
];

const Rooms = () => {
  return (
    <div className="rooms-container">
      {rooms.map((room, index) => (
        <RoomCard key={index} {...room} />
      ))}
    </div>
  );
};

export default Rooms;
