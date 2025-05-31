import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const images = import.meta.glob('../assets/gallery/*.jpg', { eager: true });

  const imageList = Object.values(images).map((img, index) => (
    <div className="col-6 col-md-4 col-lg-3" key={index}>
      <motion.div
        className="gallery-img-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <img
          src={img.default}
          alt={`Gallery ${index + 1}`}
          loading="lazy"
          className="gallery-image"
        />
      </motion.div>
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
