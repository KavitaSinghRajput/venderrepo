  import React, { useEffect, useState } from 'react';
  import './GwaliorCity.css';
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
  
  const GwaliorCity = () => {
    useEffect(() => {
      AOS.init({ once: true, duration: 800, easing: 'ease-out-quart' });
    }, []);
  
    const [selected, setSelected] = useState(null);
    const handleClick = (i) => setSelected(i);
  
    const venues = [
   { image: img1, venue: "Brilliant Hotel", rating: "4.5", address: "Plot No 5, Vijay Nagar" },
       { image: img2, venue: "Citrus Hotel",   rating: "5.0", address: "Vijay Nagar Square"   },
       { image: img3, venue: "Effotel Hotel",  rating: "4.3", address: "Scheme 94 CA"         },
       { image: img4, venue: "Ginger",         rating: "3.9", address: "Choti Khajrani"       },
       { image: img5, venue: "Lemon Tree",     rating: "4.0", address: "South Tukoganj"       },
       { image: img6, venue: "Pride Hotel",    rating: "4.1", address: "Bicholi Mardana"      },
       { image: img7, venue: "Sayaji Hotel",   rating: "4.4", address: "Maguda Nagar"         },
       { image: img8, venue: "Treebo Phoenix", rating: "3.0", address: "Nanak Nagar"          },
     ];
  
    return (
      <div className="bhopal-page">
  
        {/* Hero Section */}
        <div
          className="hero-section d-flex flex-column justify-content-center align-items-center text-center"
        >
          <h2
            className="hero-title"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Book Top <span className="highlight">Venues In Gwalior</span>
          </h2>
          <p
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            
          >
           Looking To Book The Best Venues In GwaliorCity for your Next Event? GNVIndia offers A Seamless Venue Booking Experience For Corporate Events, Weddings, Exhibitions, And Private Parties. Choose From Our Extensive Network Of Banquet Halls, Luxury Hotels, Outdoor Lawns, Resorts, And Convention Centers To Make Your Event Truly Special.
          </p>
        </div>
  
        {/* Venue Cards */}
        <div className="container py-5">
          <div className="row">
            {venues.map((v, i) => (
              <div
                className="col-md-3 col-sm-6 mb-4"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={300 + i * 100}
              >
                <div
                  className={`venue-card ${selected === i ? 'active' : ''}`}
                  onClick={() => handleClick(i)}
                >
                  <div className="img-wrap">
                    <img src={v.image} alt={v.venue} />
                    <div className="shine"></div>
                  </div>
                  <h5 className="mt-2">{v.venue}</h5>
                  <div className="rating">
                    <i className="fas fa-star"></i> {v.rating}
                  </div>
                  <p className="address">
                    <i className="fas fa-map-marker-alt"></i> {v.address}
                  </p>
                  <button className="book-btn">BOOK NOW</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default GwaliorCity;
  