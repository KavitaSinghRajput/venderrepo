import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Jabalpur.css';
import { useNavigate } from 'react-router-dom'; 


import artist1 from '../../ArtistBooking/Jabalpur/assets31/artist1.jpg';
import artist2 from '../../ArtistBooking/Jabalpur/assets31/artist2.jpg';
import artist3 from '../../ArtistBooking/Jabalpur/assets31/artist3.webp';
import artist4 from '../../ArtistBooking/Jabalpur/assets31/artist4.jpg';

const Jabalpur = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);  

  const navigate = useNavigate(); 

  const artistData = [
    {
      title: "Book The Best Live Band For Events And Weddings In Bhopal",
      artists: [
        { name: "Ishita Vishwakarma", image: artist1, rating: "4.5★", reviews: "1010", duration: "90-120 Mins" },
        { name: "Hemesh Raj", image: artist2, rating: "4.6★", reviews: "1375", duration: "90-120 Mins" },
        { name: "ShridharNagraj", image: artist3, rating: "4.4★", reviews: "1578", duration: "80-120 Mins" },
        { name: "Shashwat Singh", image: artist4, rating: "4.5★", reviews: "1027", duration: "0-120 Mins" }
      ]
    },
    
    
    
  ];

  return (
    <div className="artist-booking">
      <div className="artist-header text-white py-5 text-center">
        <div className="container">
          <h1 className="fw-bold">Book Top Artists In Jabalpur</h1>
          <p className="mt-3"
            style={{color:"white"}}>
            Book live bands, singers, comedians, celebrities, and more with GNV India. Find the perfect artist for your event in Jabalpur.
          </p>
        </div>
      </div>

      <div className="container my-5">
        {artistData.map((section, index) => (
          <div key={index} className="mb-5" data-aos="fade-up">
            <h5 className="fw-bold mb-4">{section.title}</h5>
            <div className="row">
              {section.artists.map((artist, i) => (
                <div key={i} className="col-md-3 mb-4">
                  <div className="card artist-card h-100 shadow-sm">
                    <img src={artist.image} className="card-img-top" alt={artist.name} />
                    <div className="card-body">
                      <h6 className="card-title fw-bold">{artist.name}</h6>
                      <p className="text-muted mb-1">⭐ {artist.rating} ({artist.reviews} Reviews)</p>
                      <p className="text-muted small">Performance Duration: {artist.duration}</p>
                      <button className="btn btn-danger btn-sm">BOOK NOW</button>
                    </div>
                  </div>
                </div>
                ))}
            </div>
            <div className="text-center">
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  if (section.title.includes("Comedian")) {
                    navigate('/comedians'); 
                  }
                }}
              >
                View More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jabalpur;
