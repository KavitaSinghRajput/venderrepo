import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import Image from '../../assets/hero1image.png'

const slides = [
  {
    title: "Plan Your Corporate Event At Your Fingertips - Seamless, Swift, And Stress-Free!",
    description: "Hire4Event: Your trusted corporate event planner in Delhi, Gurgaon and Noida, delivering seamless and impactful events tailored to your business needs!",
    image: Image ,
    buttonText: "Start Planning",
  },
  {
    title: "Corporate Offsites, Team-Building, And Travel - Flawless Planning, Effortless Execution - Hire4Event!",
    description: "Expertly planned corporate offsites, team-building, and travel- seamless execution, stress-free experiences, only with Hire4Event!",
    image:  Image,
    buttonText: "Start Planning",
  },
  {
    title: "Host A Conference That Speaks Success - Planned By Experts, Executed To Perfection!",
    description: "Hire4Event supplied security equipment for the 2019 UN COP14 at India Expo Mart, Greater Noida, ensuring safety for PM Modi and the event.",
    image: Image,
    buttonText: "Explore Now",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h5>Event Management Company in {currentSlide === 2 ? "Delhi" : "Noida"}</h5>
        <h1 dangerouslySetInnerHTML={{ 
          __html: slides[currentSlide].title
            .replace('Corporate Event', '<span>Corporate Event</span>')
            .replace('Conference', '<span>Conference</span>')
            .replace('Corporate Offsites, Team-Building, And Travel', '<span>Corporate Offsites, Team-Building, And Travel</span>')
        }} />
        <p>{slides[currentSlide].description}</p>
        <div className="hero-buttons">
          <button className="primary-btn">{slides[currentSlide].buttonText}</button>
          <button className="secondary-btn">Contact Us</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={slides[currentSlide].image} alt="Event Slide" />
      </div>
    </section>
  );
};

export default HeroSection;
