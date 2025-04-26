import React from "react";
import "./EventPlanner.css";

export default function EventPlanner() {
  return (
    <div className="container event-planner-container py-5 ">
      <div className="row align-items-center">
        {/* Left Side - Images */}
        <div className="col-md-6 d-flex flex-wrap justify-content-center gap-3">
          <img src="/images/event1.jpg" alt="Event 1" className="event-img" />
          <img src="/images/event2.jpg" alt="Event 2" className="event-img" />
          <img src="/images/event3.jpg" alt="Event 3" className="event-img" />
        </div>

        {/* Right Side - Content */}
        <div className="col-md-6">
          <p className="top-tagline">TOP EVENT MANAGEMENT COMPANIES IN NOIDA</p>
          <h2 className="main-heading">
            Best <span className="highlight-red">Event Planners</span> in Delhi Noida and Gurgaon
          </h2>
          <p className="description">
            Hire4Event is a leading <span className="red-highlight">event management company</span> that specializes in organizing conferences and corporate events. We operate in Delhi, Mumbai, Bangalore, Gurgaon, and Noida, ensuring seamless planning and execution for memorable and impactful experiences. Hire4Event is one of the top event management companies in Noida.
          </p>

          <div className="row stats-row mt-4">
            <div className="col-6 text-center">
              <h3 className="stat-number">2790</h3>
              <p className="stat-label">Event Done</p>
            </div>
            <div className="col-6 text-center">
              <h3 className="stat-number">2456</h3>
              <p className="stat-label">Happy Client</p>
            </div>
          </div>

          <div className="mt-4 d-flex gap-3">
            <button className="btn btn-primary custom-btn">Plan Your Event</button>
            <button className="btn btn-outline-primary search-btn">Search Artist 🔍</button>
          </div>
        </div>
      </div>
    </div>
  );
}
