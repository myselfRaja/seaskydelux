import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutSection.css";

import img1 from "../assets/about.jpg";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about3.jpg";

const AboutSection = () => {
  return (
    <div className="container my-5 about-section">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <div id="aboutCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100 rounded" alt="Slide 1" />
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100 rounded" alt="Slide 2" />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100 rounded" alt="Slide 3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
          </div>
        </div>

       <div className="col-lg-6">
  <h2 className="mb-3">About Us</h2>
  <p>
    Welcome to your perfect escape by the sea! At our resort, we blend nature’s beauty with modern comfort to offer an unforgettable experience. Whether you're here to unwind on the beach, enjoy romantic bonfire nights, or explore the nearby attractions, we have something special for everyone.
  </p>
  <p>
    From cozy deluxe rooms to vibrant tents, each stay promises comfort, cleanliness, and care. Our friendly staff, 24/7 amenities, and breathtaking sea views make sure you don’t just visit — you feel at home.
  </p>
  <p>
    Discover moments, make memories, and let the waves carry your stress away. Your journey to peace, joy, and unforgettable sunsets begins here.
  </p>
</div>

      </div>
    </div>
  );
};

export default AboutSection;
