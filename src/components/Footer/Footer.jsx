import React from "react";
import logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Row 1 - Title and Description */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="footer-title">
              GNVindiaEvents – Your Trusted Event Management Partner
            </h2>
            <p className="footer-description">
              GNVindiaEvents is a leading event management company in Madhya Pradesh offering expert solutions for corporate events, trade
              shows, artist bookings, equipment rentals, and more. From planning
              to execution, we ensure seamless and memorable experiences.
            </p>
          </div>
        </div>

        {/* Row 2 - Address | Newsletter | Home */}
        <div className="row mb-5">
          <div className="col-md-4">
            <h5>Address Location</h5>
            <p></p>
            <p>
              Phone: <a href="tel:+919691474449">+91-9691474449</a>
            </p>
            <p>
              Email:{" "}
              <a href="mailto:events@gnvindia.in">events@gnvindia.in</a>
            </p>
            <p>Office Time: 10:00 AM to 6:00 PM (Mon to Sat)</p>
          </div>

          <div className="col-md-4">
            <h5>Newsletter</h5>
            <p>You will be notified when something new will appear.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Email Address" />
              <button type="submit" className="send-btn">
                ➤
              </button>
            </form>
          </div>

          <div className="col-md-4">
            <h5>Home</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">VenueBooking</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">ArtistBooking</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Event Rental</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Row 3 - Occasions | Services | Quick Links | Top Event Management */}
        <div className="row">
          <div className="col-md-3">
            <h5>Occasions</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Corporate Events</a>
              </li>
              <li>
                <a href="#">Exhibition & Seminars</a>
              </li>
              <li>
                <a href="#">Music Concert</a>
              </li>
              <li>
                <a href="#">Sports Events</a>
              </li>
              <li>
                <a href="#">Annual Festivals</a>
              </li>
              <li>
                <a href="#">Wedding & Social Events</a>
              </li>
              <li>
                <a href="#">Artist Booking in Indore</a>
              </li>
              <li>
                <a href="#">Sports Event in Indore</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Services</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Event Organiser</a>
              </li>
              <li>
                <a href="#">Sound System on Rent</a>
              </li>
              <li>
                <a href="#">Event Production & Equipment Rental</a>
              </li>
              <li>
                <a href="#">Brand Promotion & Product Activation</a>
              </li>
              <li>
                <a href="#">Sports Management</a>
              </li>
              <li>
                <a href="#">Corporate Events & Award Ceremonies</a>
              </li>
              <li>
                <a href="#">Trip Planning & Management</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Artist Booking Agency</a>
              </li>
              <li>
                <a href="#">Book an Artist</a>
              </li>
              <li>
                <a href="#">Book Venue</a>
              </li>
              
              <li>
                <a href="#">Trending Blogs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5>Top Event Management</h5>
            <ul className="footer-links">
              <li>
                <a href="#">Event planner in Indore</a>
              </li>
              <li>
                <a href="#">Event management company</a>
              </li>
              <li>
                <a href="#">Event management in Indore</a>
              </li>
              <li>
                <a href="#">Event organisers in Indore</a>
              </li>
              <li>
                <a href="#">Artist management in Indore</a>
              </li>
            </ul>
          </div>
        </div>
         {/* Row 2 - Bottom Bar */}
        <div className="row bottom-bar align-items-center">
          <div className="col-md-4 text-start">
            <p>©Copyright 2023–2025 All Rights Reserved</p>
          </div>

          <div className="col-md-4 text-center">
           <img src={logo} alt="Gnv logo" style={{ height: "45px" }} />
          </div>

          <div className="col-md-4 text-end">
            <p className="designed-by">Designed by <span>GNVIndia IT Team</span></p>
          </div>
        </div>
         </div>
    </footer>
  );
};

export default Footer;
