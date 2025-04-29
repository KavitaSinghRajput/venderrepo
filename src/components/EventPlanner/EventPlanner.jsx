import React from "react";
import "./EventPlanner.css";
import ep1 from "../EventPlanner/EP1.jpeg";
import ep2 from "../EventPlanner/EP2.jpeg";
import ep3 from "../EventPlanner/Ep3.jpeg"


export default function EventPlanner() {
  return (
    <div className="container-fluid event-planner-container py-5 ">
      <div className="row align-items-center">
        {/* Left Side - Images */}
        <div className="col-md-6 d-flex flex-wrap justify-content-center gap-2">
          <img src={ep1} alt="Event 1" className="event-img" />
          <img src={ep2} alt="Event 2" className="event-img" />   
          <img src={ep3} alt="Event 3" 
          className="event-img" />
        </div>

        {/* Right Side - Content */}
        <div className="col-md-6">
          <p className="top-tagline">TOP EVENT MANAGEMENT    COMPANIES IN INDORE</p>
             <h2 className="main-heading">
            Best <span className="highlight-red">Event Planners</span> in INDORE BHOPAL & UJJAIN
            </h2>
            <p className="description">
            GNVIndia is a leading <span className="red-highlight">event management company</span> that specializes in organizing conferences and corporate events. We operate in Indore ,bhopal,Ujjain ,Jabalpur, Gwalior ensuring seamless planning and execution for memorable and impactful experiences. GNVIndia is one of the top event management companies in Indore.
            </p>

           <div className="row stats-row mt-4">
            <div className="col-6 text-center">
              <h3 className="stat-number"></h3>
              <p className="stat-label">Event Done</p>
            </div>
            <div className="col-6 text-center">
              <h3 className="stat-number"></h3>
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
