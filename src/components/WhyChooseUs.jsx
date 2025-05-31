import React from "react";
import "./WhyChooseUs.css";

const features = [
  {
    icon: "fa-umbrella-beach",
    title: "Beachfront Luxury",
    description: "Enjoy the pristine beach just steps from your room.",
  },
  {
    icon: "fa-swimming-pool",
    title: "Infinity Pool",
    description: "Relax in our ocean-view infinity pool.",
  },
  {
    icon: "fa-bed",
    title: "Premium Rooms",
    description: "Spacious, elegant rooms with all modern amenities.",
  },
  {
    icon: "fa-concierge-bell",
    title: "24/7 Concierge",
    description: "We’re here to serve you, anytime you need.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-5">
      <div className="container text-center">
        <h2 className="section-title mb-4">Why Choose SeaSkyDelux?</h2>
        <div className="row">
          {features.map((item, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <div className="feature-card p-4 h-100">
                <i className={`fa ${item.icon} feature-icon mb-3`}></i>
                <h5>{item.title}</h5>
                <p className="text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
