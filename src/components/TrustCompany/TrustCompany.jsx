import React, { useRef, useEffect } from "react";
import "./TrustCompany.css";

const companies = [
  { img: "/images/ats.png", alt: "ATS" },
  { img: "/images/nippon.png", alt: "Nippon Steel" },
  { img: "/images/compunnel.png", alt: "Compunnel" },
  { img: "/images/zeemedia.png", alt: "Zee Media" },
  { img: "/images/nayara.png", alt: "Nayara" },
  { img: "/images/yodley.png", alt: "Yodley" },
  { img: "/images/ida.png", alt: "Indian Dairy Association" },
  { img: "/images/samsung.png", alt: "Samsung" },
  { img: "/images/reap.png", alt: "Reap" },
  { img: "/images/bose.png", alt: "Bose" },
  { img: "/images/hike.png", alt: "Hike" },
  { img: "/images/isha.png", alt: "Isha Foundation" },
  { img: "/images/argentina.png", alt: "Argentina Ministry" },
  { img: "/images/sharp.png", alt: "Sharp Travels" },
  { img: "/images/samkwang.png", alt: "Samkwang" },
  { img: "/images/nonghyup.png", alt: "Nonghyup Bank" },
  { img: "/images/addverb.png", alt: "Addverb" },
  { img: "/images/amity.png", alt: "Amity University" },
  { img: "/images/aristocrat.png", alt: "Aristocrat" },
  { img: "/images/ficci.png", alt: "FICCI" },
  { img: "/images/zee.png", alt: "Zee" },
  { img: "/images/lg.png", alt: "LG" },
  { img: "/images/adobe.png", alt: "Adobe" },
];

const TrustCompany = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
      }
    }, 3000); // har 3 second baad scroll karega

    return () => clearInterval(interval); // Clean up jab component destroy ho
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
