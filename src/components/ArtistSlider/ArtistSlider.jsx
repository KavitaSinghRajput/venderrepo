import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./ArtistSlider.css";

import img from './assets5/ankita lokhande.webp';
import img1 from './assets5/ansh bhawser.jpg';
import img2 from './assets5/oyye indori.jpeg';
import img3 from './assets5/rahul jain.jpg';
import img4 from './assets5/zakirkhan.jpeg';

const artistData = [
  { img: img, name: "Ankita Lokhande", info: "BOOK NOW" },
  { img: img1, name: "Ansh Bhawser", info: "BOOK NOW" },
  { img: img2, name: "Oyye Indori", info: "BOOK NOW" },
  { img: img3, name: "Rahul Jain", info: "BOOK NOW" },
  { img: img4, name: "Zakir Khan", info: "BOOK NOW" },
];

const ArtistSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="container artist-slider-container">
      <div className="text-center mb-4">
        <h6 className="section-subtitle">Best Artist Management Companies</h6>
        <h2 className="section-title">
          Making <span>Events</span> Shine with Top <span>Artists</span>
        </h2>
        <p className="section-description">
          From live concerts to corporate events, our <span>artist booking services</span> and DJ bookings bring unmatched talent and energy.
        </p>
      </div>

      <Slider {...settings}>
        {artistData.map((artist, index) => (
          <div key={index} className="artist-card">
            <img src={artist.img} alt={artist.name} />
            <h5>{artist.name}</h5>
            <button className="book-btn">{artist.info}</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArtistSlider;
