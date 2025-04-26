import React, { useState } from "react";
import "./ArtistSlider.css";

const artistData = [
  {
    img: "/images/artist1.jpg",
    name: "Lipika Samanta Saxophone",
    info: "Live Band | Kolkata | 90-120 mins"
  },
  {
    img: "/images/artist2.jpg",
    name: "Samay Raina",
    info: "Comedian | Pune | 45-60 mins"
  },
  {
    img: "/images/artist3.jpg",
    name: "Another Artist",
    info: "Singer | Delhi | 60 mins"
  },
  {
    img: "/images/artist4.jpg",
    name: "More Artist",
    info: "DJ | Mumbai | 90 mins"
  },
  {
    img: "/images/artist5.jpg",
    name: "Famous Artist",
    info: "Performer | Bangalore | 75 mins"
  }
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
          <button className="btn btn-danger">Book Your Artist →</button>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-1 text-center">
          <button className="slider-arrow" onClick={prevSlide}>←</button>
        </div>
        <div className="col-10">
          <div className="slider-holder">
            {artistData.map((artist, index) => (
              <div
                key={index}
                className={`slider-card ${index === current ? "active" : ""}`}
              >
                <img src={artist.img} alt={artist.name} />
                <h5>{artist.name}</h5>
                <p>{artist.info}</p>
              </div>
            ))}
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
