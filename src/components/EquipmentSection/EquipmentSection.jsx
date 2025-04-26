import React from 'react';
import './EquipmentSection.css';

const EquipmentSection = () => {
  const equipmentImages = [
    '/images/equipment1.jpg',
    '/images/equipment2.jpg',
    '/images/equipment3.jpg',
    '/images/equipment4.jpg',
  ];

  return (
    <section className="equipment-section">
      <div className="container">
        <h3 className="subheading">#Equipment</h3>
        <h2 className="main-heading">
          Event <span>Equipment</span> at Your Fingertips
        </h2>
        <p className="description">
          Explore a wide selection of event equipment and services, from audio-visual rentals to seating.
          We provide everything you need, including DJ sound equipment rental, to create a seamless,
          memorable event experience. <span className="highlight">Find Your Equipment</span>
        </p>

        <div className="slider-container">
          <div className="slider-track">
            {equipmentImages.map((image, index) => (
              <div className="slide" key={index}>
                <img src={image} alt={`Equipment ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
