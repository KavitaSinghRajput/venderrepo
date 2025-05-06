import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './ArtistDetail.css';
import { useParams } from 'react-router-dom';

const ArtistDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { id } = useParams();

  return (
    <div className="artist-detail-page">
      {/* Optional top section to show Artist ID */}
      <div className="container py-5">
        <h2>Artist Detail Page</h2>
        <p>Showing details for: <strong>{id}</strong></p>
      </div>

      {/* Full Page Content */}
      <div className="container-fluid px-0 artist-wrapper">
        {/* Top Section */}
        <div className="row m-0 bg-primary text-white p-4" data-aos="fade-up">
          <div className="col-md-3 text-center">
            <img
              src="https://via.placeholder.com/250x300"
              alt={id}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="fw-bold">{id}</h2>
            <p>⭐ 4.7 (7430 reviews)</p>
            <p>Book Artist for corporate events, weddings & college fests. Contact, booking & charges available.</p>
          </div>
          <div className="col-md-3">
            <form className="bg-white p-3 rounded shadow text-dark">
              <h5>Book Now</h5>
              <input type="text" placeholder="Your Name" className="form-control mb-2" />
              <input type="email" placeholder="Email" className="form-control mb-2" />
              <input type="text" placeholder="Event Type" className="form-control mb-2" />
              <input type="text" placeholder="City" className="form-control mb-2" />
              <button className="btn btn-danger w-100">SUBMIT</button>
            </form>
          </div>
        </div>

        {/* Info Grid */}
        <div className="container py-4" data-aos="fade-up">
          <div className="row text-center">
            <div className="col-md-3">⏱ 60-90 Mins</div>
            <div className="col-md-3">👥 1-2 Members</div>
            <div className="col-md-3">🌍 Worldwide</div>
            <div className="col-md-3">🗣 English/Hindi</div>
          </div>
        </div>

        {/* About Section */}
        <div className="container py-4" data-aos="fade-up">
          <h4>About {id}</h4>
          <p>
            {id} is a popular artist known for their engaging and energetic performances...
            (Add more specific info here)
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="container py-4" data-aos="fade-up">
          <h5>Photo Gallery</h5>
          <div className="row">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="col-md-4 mb-3">
                <img
                  src="https://via.placeholder.com/300x200"
                  className="img-fluid rounded shadow"
                  alt={`${id} Show ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Video Gallery */}
        <div className="container py-4" data-aos="fade-up">
          <h5>Video Gallery</h5>
          <div className="row">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="col-md-3 mb-3">
                <iframe
                  width="100%"
                  height="180"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Related Artists */}
        <div className="container py-4" data-aos="fade-up">
          <h5>Similar Comedians</h5>
          <div className="row">
            {['Amar', 'Appurv', 'Lakshay', 'Rajnish'].map((name, i) => (
              <div key={i} className="col-md-3 mb-3">
                <div className="card shadow h-100 text-center">
                  <img
                    src="https://via.placeholder.com/200x150"
                    className="card-img-top"
                    alt={name}
                  />
                  <div className="card-body">
                    <h6>{`Comedian ${name}`}</h6>
                    <p>Starts ₹30,000+</p>
                    <button className="btn btn-outline-danger btn-sm">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Section */}
        <div className="container py-4" data-aos="fade-up">
          <h5>Review {id}</h5>
          <textarea className="form-control mb-2" rows="3" placeholder="Write your review..."></textarea>
          <button className="btn btn-primary">Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
