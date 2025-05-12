import React from "react";
import "./OnlineBooking.css";

const categories = [
  "Book Actor/Actress", "Book Anchor", "Book Belly Dancer", "Book Bhangra Group",
  "Book Bollywood Dance", "Book Celebrity", "Book Stand-up Comedian", "Book Dancer",
  "Book Dancetroupe", "Book DJ", "Book Duo, Trio Band",
];  

const OnlineBooking = () => {
  return (
    <section className="online-booking-section py-5">
      <div className="container text-center">
        <h2 className="booking-title">
          Book artists online for your <span>Event, Wedding and Corporate event</span>
        </h2>
        <p className="booking-subtitle mb-4">
          Discover and book top-rated artists for weddings, events, and corporate gatherings. 
          Make your occasion unforgettable with the best talent.
        </p>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {categories.map((item, index) => (
                <div key={index} className="booking-box">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OnlineBooking;
