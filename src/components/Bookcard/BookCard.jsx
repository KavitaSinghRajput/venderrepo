import React from "react";
import "./BookCard.css";


export default function BookCard() {
  return (
    <div className="container-fluid ab mt-5" style={{background:'#fff5f5'}} >
    <div className="row" style={{paddingRight:'60px',paddingLeft:'80px', paddingTop:'90px'}}  >
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Organize Conference</h5>
          <p className="card-text">
          Host a flawless conference! Our expert planning ensures smooth execution, great engagement, and a stress-free experience.
          </p>
          <a href="#" className="btn btn-primary">
            Start Planning Today
          </a>
        </div>
      </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Book Artists</h5>
          <p className="card-text">
          Make your event unforgettable! Book top artists, live bands, DJs, comedians, and actors—all in one easy place.
          </p>
          <a href="#" className="btn btn-primary">
            Book an Artist
          </a>
        </div>
      </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Rent Event Equipment</h5>
          <p className="card-text">
          Get everything you need for your event! From sound and lighting to staging and decor, we've got you covered.
          </p>
          <a href="#" className="btn btn-primary">
            Explore Equipment
          </a>
        </div>
      </div>
        </div>
  </div>

<div className="row mt-5" style={{paddingRight:'60px',paddingLeft:'80px', paddingBottom:'50px'}} >
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
    <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Plan Corporate Offsite</h5>
          <p className="card-text">
          Plan the perfect corporate offsite! We'll handle travel, stays, and team activities so you can focus on bonding.
          </p>
          <a href="#" className="btn btn-primary">
          Plan Offsite Event
          </a>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
    <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Book Event Venue</h5>
          <p className="card-text">
          Find the right venue hassle-free! Whether it's a wedding, corporate event, or launch, we'll help you book the best space.
          </p>
          <a href="#" className="btn btn-primary">
          Book a Venue 
          </a>
        </div>
      </div>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Corporate Team Building</h5>
          <p className="card-text">
          Bring your team closer! Fun and engaging activities designed to boost morale, teamwork, and productivity effortlessly.
          </p>
          <a href="#" className="btn btn-primary">
          Plan Team Event
          </a>
        </div>
      </div>
    </div>
    </div>
  </div>
  );
}
