import React from "react";
import "./Adventure.css";
import bonfireImg from "../assets/gallery/img12.jpg";
import kayakImg from "../assets/kayaking.jpg";
import starsImg from "../assets/stragazing.webp";

const adventures = [
  {
    title: "Bonfire Nights",
    desc: "Enjoy unforgettable evenings with music, marshmallows, and laughter by the beach bonfire. A relaxing, social activity to bring guests together under the stars.",
    img: bonfireImg,
  },
  {
    title: "Kayaking Adventure",
    desc: "Paddle through the gentle waves around the island. A thrilling yet peaceful experience that brings you closer to nature.",
    img: kayakImg,
  },
  {
    title: "Stargazing Experience",
    desc: "Experience a sky full of stars far from city lights, with telescopes and guided sky tours. Perfect for romantic evenings or astronomy lovers.",
    img: starsImg,
  },
];

const Adventure = () => {
  return (
    <div className="adventure-section">
      <h2 className="adventure-heading">Explore Our Island Adventures</h2>
      {adventures.map((item, index) => (
        <div
          className={`adventure-item ${index % 2 === 0 ? "left" : "right"}`}
          key={index}
        >
          <img src={item.img} alt={item.title} className="adventure-img" />
          <div className="adventure-text">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Adventure;
