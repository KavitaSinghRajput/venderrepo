import React from "react";
import "./BookCard.css";
import OrganizeConference from './assets3/gop.jpg';
import Bookartists from './assets3/Bookartists.jpeg';
import renteventequipment from './assets3/renteventequipment.jpeg';
import plancorporateoffsite from './assets3/plancorporateoffsite.jpg';
import bookeventvenue from './assets3/bookeventvenue.webp';
import corporateteambuilding from './assets3/corporateteambuilding.jpg';


export default function BookCard() {
  return (
    <div className="container-fluid ab mt-5" style={{ background: "#fff5f5" }}>
      <div
        className="row"
        style={{
          paddingRight: "60px",
          paddingLeft: "80px",
          paddingTop: "90px",
        }}
      >
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src={OrganizeConference} className="card-img-top" alt="Organize Conference"/>
            <div className="card-body">
              <h5 className="card-title">Organize Conference</h5>
              <p className="card-text">
                Host a flawless conference! Our expert planning ensures smooth
               
              </p>
              <a href="#" className="btn btn-primary">
                Start Planning
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src={Bookartists} className="card-img-top" alt="Bookartists" />
            <div className="card-body">
              <h5 className="card-title">Book Artists</h5>
              <p className="card-text">
                Make your event unforgettable! Book top artists, live bands,
                
              </p>
              <a href="#" className="btn btn-primary">
                Book an Artist
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src={renteventequipment} style={{height:"9rem"}} className="card-img-top" alt="renteventequipment" />
            <div className="card-body">
              <h5 className="card-title">Rent Event Equipment</h5>
              <p className="card-text">
                Get everything you need for your event! From sound and lighting
               .
              </p>
              <a href="#" className="btn btn-primary">
                Explore Equipment
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="row mt-5"
        style={{
          paddingRight: "60px",
          paddingLeft: "80px",
          paddingBottom: "50px",
        }}
      >
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src={plancorporateoffsite} className="card-img-top" alt="plancorporateoffsite" />
            <div className="card-body">
              <h5 className="card-title">Plan Corporate Offsite</h5>
              <p className="card-text">
                Plan the perfect corporate offsite!
                
              </p>
              <a href="#" className="btn btn-primary">
                Plan Offsite Event
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src={bookeventvenue} className="card-img-top" alt="bookeventvenue" />
            <div className="card-body">
              <h5 className="card-title">Book Event Venue</h5>
              <p className="card-text">
                Find the right venue hassle-free! Whether it's a wedding,
               
              </p>
              <a href="#" className="btn btn-primary">
                Book a Venue
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: "18rem" }}>
            <img src={corporateteambuilding} className="card-img-top" alt="corporateteambuilding" />
            <div className="card-body">
              <h5 className="card-title">Corporate Team Building</h5>
              <p className="card-text">
                Bring your team closer! Fun and engaging activities designed to
              
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
