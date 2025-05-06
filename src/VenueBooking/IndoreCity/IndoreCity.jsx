import React, { useEffect, useState } from 'react';
import './IndoreCity.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import img1 from '../../VenueBooking/IndoreCity/assets2/gh.jpeg';
import img2 from '../../VenueBooking/IndoreCity/assets2/citrus hotel.jpeg';
import img3 from '../../VenueBooking/IndoreCity/assets2/effotel hotel.jpeg';
import img4 from '../../VenueBooking/IndoreCity/assets2/ginger.jpeg';
import img5 from '../../VenueBooking/IndoreCity/assets2/lemon tree hotel.jpeg';
import img6 from '../../VenueBooking/IndoreCity/assets2/pride hotel.jpeg';
import img7 from '../../VenueBooking/IndoreCity/assets2/sayajii hotel.jpeg';
import img8 from '../../VenueBooking/IndoreCity/assets2/treebo trip phoenix.jpeg';

const IndoreCity = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const hotelvenue = [
    {
      image: img1,
      venue: "Brilliant Hotel",
      rating: "4.5 star",
      address: "Plot No 5, near Life Care Hospital, Scheme Number 78, Part II, Scheme 78, Vijay Nagar, Indore, Madhya Pradesh 452010",
    },
    {
      image: img2,
      venue: "Citrus Hotel",
      rating: "5.0 star",
      address: "No 34-35 F, 34, Vijay Nagar Square, Ratna Lok Colony, Indore, Madhya Pradesh 452010",
    },
    {
      image: img3,
      venue: "Effotel Hotel",
      rating: "4.3 star",
      address: "Plot No. 10, C/ C.A, Scheme No:94, Sector C, Scheme 94 Sector CA, Indore, Madhya Pradesh 452010",
    },
    {
      image: img4,
      venue: "Ginger",
      rating: "3.9 star",
      address: "AB Rd, near Shaniwar Darpan, Choti Khajrani, Indore, Madhya Pradesh 452008",
    },
    {
      image: img5,
      venue: "Lemon Tree Hotel",
      rating: "4.0 star",
      address: "3, RNT Marg, South Tukoganj, Indore, Madhya Pradesh 452001",
    },
    {
      image: img6,
      venue: "Pride Hotel",
      rating: "4.1 star",
      address: "35, PW5H+6VQ, 1, Bicholi Mardana, near pride hotel, Indore, Madhya Pradesh 452016",
    },
    {
      image: img7,
      venue: "Sayaji Hotel",
      rating: "4.4 star",
      address: "H/1, Maguda Nagar, Vijay Nagar, Scheme No 54, Indore, Madhya Pradesh 452010",
    },
    {
      image: img8,
      venue: "Treebo Trip Phoenix",
      rating: "3 star",
      address: "25-B, Pipliya Rao Ring Rd, near IT park, Indrapuri Colony, Nanak Nagar, Indore, Madhya Pradesh 452001",
    },
  ];

  return (
    <div className="indore-page container py-5">
      <div className="row first-row mb-4">
        <div className="col text-center">
          <h2 data-aos="fade-up">
            Book Top Event Venues in Indore — Conference Halls, Hotels, Resorts & More!
          </h2>
          <p className="mt-3" data-aos="fade-up" data-aos-delay="200">
            Looking To Book <b>The Best Venues In Indore</b> for your Next Event?
            GNVIndia offers A Seamless Venue Booking Experience For
            <b> Corporate Events, Weddings, Exhibitions, And Private Parties</b>.
            Choose From Our Extensive Network Of <b>Banquet Halls, Luxury Hotels,
            Outdoor Lawns, Resorts, And Convention Centers</b> To Make Your Event Truly Special.
          </p>
        </div>
      </div>

      <div className="row card-row2">
        {hotelvenue.map((item, index) => (
          <div
            className="col-md-3 col-sm-6 mb-4 text-center"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <div
              className={`card2 p-3 shadow-sm rounded venue-card ${selectedCard === index ? 'active' : ''}`}
              onClick={() => handleCardClick(index)}
            >
              <img
                src={item.image}
                alt={item.venue}
                className="img-fluid rounded mb-3"
                style={{ height: '200px', width: '100%', objectFit: 'cover' }}
              />
              <h5 className="mb-2">{item.venue}</h5>

              <div className="rating text-warning mb-2" data-aos="fade-right">
                <i className="fas fa-star me-1"></i> {item.rating}
              </div>

              <p className="text-muted" data-aos="fade-left">
                <i className="fas fa-map-marker-alt text-danger me-2"></i>
                <b>Address:</b> {item.address}
              </p>

              <button
                className="btn btn-danger animated-btn mt-2"
                data-aos="zoom-in"
              >
                <i className="fas fa-calendar-check me-2"></i> BOOK NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndoreCity;
