import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = import.meta.glob('../assets/gallery/*.jpg', { eager: true });

  const imageList = Object.values(images).map((img, index) => (
    <div className="col-6 col-md-4 col-lg-3" key={index}>
      <div className="gallery-img-container">
        <img
          src={img.default}
          alt={`Gallery ${index + 1}`}
          loading="lazy"
          className="img-fluid rounded shadow-sm gallery-img"
        />
      </div>
    </div>
  ));

  return (
    <section className="gallery-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Gallery</h2>
        <div className="row g-3">
          {imageList}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
