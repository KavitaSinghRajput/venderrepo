import React, { useEffect } from 'react';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PastEvent.css';

import event1 from '../PastEvent/assets11/event1.jpg';
import event2 from '../PastEvent/assets11/event2.jpg';
import event3 from '../PastEvent/assets11/event3.jpeg';
import event4 from '../PastEvent/assets11/event4.jpg';
import event5 from '../PastEvent/assets11/event5.jpg';
import event6 from '../PastEvent/assets11/event6.webp';
import event7 from '../PastEvent/assets11/event7.jpeg';

const events = [
  {
    id: 1,
    image: event1,
    title: 'Corporate Gala Night',
    description: 'An evening of elegance and networking.',
  },
  {
    id: 2,
    image: event2,
    title: 'Product Launch Event',
    description: 'Introducing the latest innovations to the market.',
  },
  {
    id: 3,
    image: event3,
    title: 'Annual Sports Meet',
    description: 'Celebrating athletic excellence and team spirit.',
  },
  {
    id: 4,
    image: event4,
    title: 'Cultural Fest',
    description: 'An extravaganza of colors, music and dance.',
  },
  {
    id: 5,
    image: event5,
    title: 'Tech Conference',
    description: 'Gathering minds that shape the future.',
  },
  {
    id: 6,
    image: event6,
    title: 'Wedding Reception',
    description: 'Elegance, tradition, and celebration in one.',
  },
  {
    id: 7,
    image: event7,
    title: 'Music Concert',
    description: 'A night filled with rhythm and soul.',
  },
];

const PastEvent = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section className="past-event-section">
      <div className="container">
        <h5 className="text-center mb-1" data-aos="fade-up">
          <span style={{ color: "#e63946", fontWeight: "bold" }}>#PastDefinesTheFuture</span>
        </h5>
        <h2 className="section-title text-center" data-aos="fade-up">
          <span style={{ color: "#e63946" }}>The Best</span> of What Just Happened
        </h2>
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} className="" data-aos="fade-up">
              <div className="card event-card h-100">
                <div className="event-image-wrapper">
                  <img src={event.image} className="card-img-top" alt={event.title} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PastEvent;
