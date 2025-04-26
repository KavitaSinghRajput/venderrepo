import React from 'react'
import './EventManagment.css'

const events = [
       {
    title: 'Entertainment For Corporate Event',
    link: 'Make It Happen',
    img: '/images/event1.png'
  },
  {
    title: 'Exhibition Organiser',
    link: 'Plan Your Showcase',
    img: '/images/event2.png'
  },
  {
    title: 'Corporate Event Organiser',
    link: 'Book Your Event Now',
    img: '/images/event3.png'
  },
  {
    title: 'Sports Event Organiser',
    link: 'Plan Your Sports Event',
    img: '/images/event4.png'
  },
  {
    title: 'Annual Day & Sales Meet Organizer',
    link: 'Stage Your Meet',
    img: '/images/event5.png'
  },
  {
    title: 'Brand Promotion & Launch Organiser',
    link: 'Shine Your Brand',
    img: '/images/event6.png'
  },
];

const EventManagement = () => {
  return (


    <div className="container event-management-container">

<div className="row heading-row">
          <div className="col-12 text-center">
            <h2 className="main-heading">Event Planner in Noida</h2>
            <h1 className="sub-heading">Hire4Event: Event management company</h1>
            <p className="description">
              Hire4event is a leading top event management company in Delhi NCR, offering top-notch
              services for all your event management needs in India, including corporate event organising
              in Gurgaon, birthday party planning in Greater Noida, and audio-visual equipment rentals across the region.
            </p>
          </div>
        </div>


      <div className="row">
        {events.map((event, index) => (
          <div className="col-12 col-sm-6 col-lg-4 mb-4" key={index}>
            <div className="event-card text-center">
              <img src={event.img} alt={event.title} className="event-img" />
              <h5 className="event-title">{event.title}</h5>
              <a href="#" className="event-link">{event.link} &rarr;</a>
            </div>
          </div>
        ))}
      </div>

       {/* Buttons Row */}
       <div className="row button-row text-center">
        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <a href="#" className="btn more-about-btn">More about us →</a>
        </div>
        <div className="col-12 col-md-6">
          <a href="#" className="btn organize-event-btn">Organize an Event Now! →</a>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
