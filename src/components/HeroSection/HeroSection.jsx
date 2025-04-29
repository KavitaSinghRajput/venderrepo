import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import Image1 from "../../assets/corporate.png";
import Image2 from "../../assets/conference.webp";
import Image3 from "../../assets/Artist.png";

const slides = [
  {
    title:
      "Plan Your Corporate Event At Your Fingertips - Seamless, Swift, And Stress-Free!",
    description:
      "GNVIndia: Your trusted corporate event planner in Indore,Bhopal,Ujjain,Jabalpur,Gwalior delivering seamless and impactful events tailored to your business needs!",
    image: Image1,
    buttonText: "Start Planning",
  },
  {
    title:
      "Corporate Offsites, Team-Building, And Travel - Flawless Planning, Effortless Execution - GNVIndia!",
    description:
      "Expertly planned corporate offsites, team-building, and travel- seamless execution, stress-free experiences, only with GNVIndia!",
    image: Image2,
    buttonText: "Start Planning",
  },
  {
    title:
      "Host A Conference That Speaks Success - Planned By Experts, Executed To Perfection!",
    description:
      "GNVIndia supplied security equipment the ensuring safety for PM Modi and the event.",
    image: Image3,
    buttonText: "Explore Now",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5 text-center text-md-start mb-4 mb-md-0">
            <h5>
              Event Management Company in{" "}
              {currentSlide === 2 ? "Indore" : "Bhopal"}
            </h5>
            <h1
              dangerouslySetInnerHTML={{
                __html: slides[currentSlide].title
                  .replace("Corporate Event", "<span>Corporate Event</span>")
                  .replace("Conference", "<span>Conference</span>")
                  .replace(
                    "Corporate Offsites, Team-Building, And Travel",
                    "<span>Corporate Offsites, Team-Building, And Travel</span>"
                  ),
              }}
            />
            <p>{slides[currentSlide].description}</p>
            <div className="hero-buttons mt-3">
              <button className="primary-btn">
                {slides[currentSlide].buttonText}
              </button>
              <button className="secondary-btn">Contact Us</button>
            </div>
          </div>

         <div className="col align-items-center">
          <div className="hero-image">
            <img src={slides[currentSlide].image} alt="Event Slide" />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
