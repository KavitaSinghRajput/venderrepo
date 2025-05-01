import React, { useRef, useEffect } from "react";
import "./TrustCompany.css"; 

import img1 from './images/Atsogo.png';
import img2 from './images/thaleslogo.png';
import img3 from './images/isslogo.png';
import img4 from './images/ishafoundationlogo.png';
import img5 from './images/hikelogo.png';
import img6 from './images/bosslogo.png';
import img7 from './images/amitlogo.png';

const companies = [
  { img: img1, alt: "Atsogo" },
  { img: img2, alt: "Thales" },
  { img: img3, alt: "ISS" },
  { img: img4, alt: "Isha Foundation" },
  { img: img5, alt: "Hike" },
  { img: img6, alt: "Boss" },
  { img: img7, alt: "Amit" },
];

const TrustCompany = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="trust-company-section">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h2>
              Companies that <span>trust our work.</span>
            </h2>
          </div>
        </div>

        <div className="slider-wrapper">
          <button className="arrow left" onClick={scrollLeft}>‹</button>
          <div className="slider" ref={sliderRef}>
            {companies.map((company, index) => (
              <div className="slide" key={index}>
                <img src={company.img} alt={company.alt} />
              </div>
            ))}
          </div>
          <button className="arrow right" onClick={scrollRight}>›</button>
        </div>
      </div>
    </div>
  );
};

export default TrustCompany;
