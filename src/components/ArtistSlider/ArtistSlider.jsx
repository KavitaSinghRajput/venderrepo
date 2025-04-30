import React, { useState } from "react";
import "./ArtistSlider.css";
import img from './assets5/ankita lokhande.webp';
import img1 from './assets5/ansh bhawser.jpg';
import img2 from './assets5/oyye indori.jpeg';
import img3 from './assets5/rahul jain.jpg';
import img4 from './assets5/zakirkhan.jpeg';

const artistData = [
  {
    img: img,
    name: "Ankita Lokhande",
    info: "BOOK NOW",
  },
  {
    img: img1,
    name: "Ansh Bhawser",
    info: "BOOK NOW",
  },
  {
    img: img2,
    name: "Oyye Indori",
    info: "BOOK NOW",
  },
  {
    img: img3,
    name: "Rahul Jain",
    info: "BOOK NOW",
  },
  {
    img: img4,
    name: "Zakir Khan",
    info: "BOOK NOW",
  },
];

const ArtistSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % artistData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + artistData.length) % artistData.length);
  };

  return (
    <div className="container artist-slider-container">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h6 className="section-subtitle">Best Artist Management Companies</h6>
          <h2 className="section-title">
            Making <span>Events</span> Shine with Top <span>Artists</span>
          </h2>
          <p className="section-description">
            From live concerts to corporate events, our <span>artist booking services</span> and DJ bookings bring unmatched talent and energy, making every moment magical.
          </p>
          
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-1 text-center">
          <button className="slider-arrow" onClick={prevSlide}>←</button>
        </div>
        <div className="col-10">
          <div className="slider-holder">
            <div className="slider-card active">
              <img src={artistData[current].img} alt={artistData[current].name} />
              <h5>{artistData[current].name}</h5>
              <button style={{border:"none",padding:"10px 30px",background:"red", color:"white",borderRadius:"5px"}} >{artistData[current].info}</button>
            </div>
          </div>
        </div>
        <div className="col-1 text-center">
          <button className="slider-arrow" onClick={nextSlide}>→</button>
        </div>
      </div>
      
    </div>
  );
};

export default ArtistSlider;
