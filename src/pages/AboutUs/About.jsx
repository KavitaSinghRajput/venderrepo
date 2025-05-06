import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import Aboutimage from '../../assets/about.avif';

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container-fluid about-section py-5">
      <div className="container-fluid">
      <div className="hhvccbc">
        <img 
         src={Aboutimage}  
        />
      </div>
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-md-6" data-aos="fade-right">
            <img
              src={Aboutimage}
              alt="AboutUs"
              className="img-fluid rounded Aboutimage"
            />
          </div>

          {/* Right Content */}
          <div className="col-md-6" data-aos="fade-left">
            <h2 className="about-title">
              About <span className="highlight">GNV India Entertainment</span>
            </h2>
            <p className="about-text">GNV India Event Pvt. Ltd. is a visionary event management and entertainment company, dedicated to designing immersive experiences across India. With expertise in celebrity appearances, international acts, and large-scale event execution, we turn ideas into captivating realities. Our blend of creativity, precision, and professionalism ensures that every event we manage becomes a memorable story worth telling.
            </p>
           

            <div className="row mt-4">
              <div className="col-6" data-aos="zoom-in">
                <h4 className="about-stat">10+ Years</h4>
                <p className="stat-label">Experience</p>
              </div>
              <div className="col-6" data-aos="zoom-in">
                <h4 className="about-stat">500+ Events</h4>
                <p className="stat-label">Delivered</p>
              </div>
            </div>

            <a href="#contact" className="btn btn-danger mt-4" data-aos="fade-up">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
