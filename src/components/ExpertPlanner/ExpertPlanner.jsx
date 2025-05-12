import React from "react";
import expertplanner from "../../assets/Expertplanner.png";

const ExpertPlanner = () => {
  return (
    <div className="container my-5">
      
      <div className="row g-4">  
        {/* Left Images */}
        <div className="col-md-6">
          <div className="row g-3">
          <div className="text-center mb-5">
        <p className="text-primary fw-bold animate_animated animate_fadeInDown">
          #EventManagementExperts
        </p>
        <h1 className="fw-bold animate_animated animate_fadeIn">
          Plan Your Event with –{" "}
          <span className="text-primary">Expert Event Planners</span>
        </h1>
        <h4 className="text-muted animate_animated animate_fadeInUp">
          From event production to corporate conferences, weddings, and
          team-building activities, we deliver seamless experiences in Indore,Bhopal.
        </h4>
      </div>
            <div className="col-12">
              <img
                style={{ }}
                src={expertplanner}
                alt="Event 1"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="col-md-6">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm animate_animated animate_fadeInRight">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-camera-video fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">
                    Event Production and Rental Service
                  </h5>
                  <p className="card-text">
                    Event Production Company in indore
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Event Production →
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm animate_animated animate_fadeInRight">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-people fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">
                    Conference & Corporate Planning
                  </h5>
                  <p className="card-text">
                    Conference Organiser in indore
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Corporate Events →
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm animate_animated animate_fadeInRight">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-heart-fill fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">Wedding Entertainment</h5>
                  <p className="card-text">
                    Best Wedding Entertainment services in indore
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Wedding Fun →
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card h-100 shadow-sm animate_animated animate_fadeInRight">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-emoji-smile fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">
                    Team-Building Games for Corporate Events
                  </h5>
                  <p className="card-text">
                    Team-building Games, Activities organizer in Indore
                  </p>
                  <a href="#" className="btn btn-outline-primary btn-sm">
                    Team Games →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertPlanner;
