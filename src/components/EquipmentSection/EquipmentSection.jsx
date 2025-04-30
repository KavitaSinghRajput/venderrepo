import React from 'react';
import './EquipmentSection.css';

import eq1 from './eqimage/rtr.avif';
import eq2 from './eqimage/rtr2.jpg';
import eq3 from './eqimage/rtr3.avif';
import eq4 from './eqimage/rtr4.avif';
import eq5 from './eqimage/rtr5.avif';

const EquipmentSection = () => {
  const equipmentImages = [eq1, eq2, eq3, eq4, eq5];

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
          {equipmentImages.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Equipment ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
