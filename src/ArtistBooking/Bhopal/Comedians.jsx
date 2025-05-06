import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Comedians.css';
import { useNavigate } from 'react-router-dom'; // 👈 navigation ke liye

const Comedians = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const navigate = useNavigate(); // 👈 navigate function

  const artists = [
    { id: 1, name: 'uhhvb', role: 'Comedian', rating: '4.7★', reviews: '1540', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'whdgusavxb', role: 'Comedian', rating: '4.8★', reviews: '3700', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'wdgwqhvx', role: 'Comedian', rating: '4.6★', reviews: '3600', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'wdbgwna', role: 'Comedian', rating: '4.7★', reviews: '1200', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="comedians-page">
      {/* Hero Section */}
      <div className="hero-section text-center text-white py-5">
        <div className="container">
          <h2 className="fw-bold">Book Stand-Up Comedian For Corporate Event And Live Shows</h2>
          <p className="mt-2">Find the best artist</p>

          <div className="filter-bar bg-white p-3 rounded mt-4 d-flex flex-wrap justify-content-center shadow">
            <select className="form-select me-2 mb-2" style={{ width: '200px' }}>
              <option value="">What? (e.g., Comedian)</option>
            </select>
            <select className="form-select me-2 mb-2" style={{ width: '200px' }}>
              <option value="">Where? (e.g., Bhopal)</option>
            </select>
            <button className="btn btn-primary mb-2">Search Artist</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-5">
        <h4 className="mb-4">Book Comedian For Event And Weddings</h4>
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-4">
            <div className="list-group shadow-sm category-sidebar">
              {[
                "Book Live Band",
                "Book Singer",
                "Book Comedian",
                "Book Sketch Artist",
                "Book Anchor",
                "Book Emcee",
                "Book Spiritual Person",
                "Book Dancer",
                "Book Celebrity",
                "Hire Influencer",
              ].map((item, idx) => (
                <button key={idx} className="list-group-item list-group-item-action">
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Artist Cards */}
          <div className="col-lg-9">
            <div className="row">
              {artists.map((artist, index) => (
                <div className="col-md-4 mb-4" key={index} data-aos="zoom-in">
                  <div className="card artist-card h-100 text-center">
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="card-img-top rounded-circle mx-auto mt-3"
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <h6>{artist.name}</h6>
                      <p className="mb-1 text-muted">{artist.role}</p>
                      <p className="mb-1 text-success fw-bold">
                        {artist.rating} ({artist.reviews} reviews)
                      </p>

                      {/* 👇 Navigate to Artist Detail Page */}
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => navigate(`/artist-detail/${artist.id}`)}
                      >
                        Book Now
                      </button>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Remaining sections same as your code */}
      {/* How It Works, Client Logos, SEO Text */}
    </div>
  );
};

export default Comedians;
