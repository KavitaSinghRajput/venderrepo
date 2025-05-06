import React from "react";
import "./EventPlanner.css";
import ep1 from "../EventPlanner/EPP1.webp";
import ep2 from "../EventPlanner/EPP2.webp";
import ep3 from "../EventPlanner/EPP3.webp";

export default function EventPlanner() {
  return (
    <div className="container-fluid event-planner-container py-5">
      <div className="row align-items-center">
        {/* LEFT: Image Gallery Section */}
        <div className="col-lg-6">
          <div className="past-events">
            <div className="row g-3 justify-content-center">
              {[ep1, ep2, ep3].map((img, i) => (
                <div key={i} className="col-12 col-md-4">
                  <div className="event-card">
                    <img src={img} alt={`Event ${i + 1}`} className="img-fluid" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-4">
              <a href="#contact" className="contact-btn">
                Contact Us <span></span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Textual Info */}
        <div className="col-lg-6 mt-5 mt-lg-0">
          <p className="top-tagline">TOP EVENT MANAGEMENT COMPANIES IN INDORE</p>
          <h2 className="main-heading">
            Best <span className="highlight-red">Event Planners</span> in INDORE BHOPAL & UJJAIN
          </h2>
          <p className="description">
            GNVIndia is a leading <span className="red-highlight">event management company</span> that
            specializes in organizing conferences and corporate events. We operate in Indore, Bhopal,
            Ujjain, Jabalpur, Gwalior ensuring seamless planning and execution for memorable and
            impactful experiences.
          </p>

          <div className="row stats-row mt-4">
            <div className="col-6 text-center">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">Events Done</p>
            </div>
            <div className="col-6 text-center">
              <h3 className="stat-number">300+</h3>
              <p className="stat-label">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
