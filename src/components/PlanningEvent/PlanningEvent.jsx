import React from 'react';
import './PlanningEvent.css';

const PlanningEvent = () => {
  return (
    <section className="planning-event">
      <div className="container">
        <h1>The Best Companies for <span>Event Management</span> in Delhi</h1>
        <p>
          Planning an event, whether a corporate conference, wedding, trade fair, or a social gathering, is no child's play.
          The planning itself is long and tedious, requiring careful logistical details, coordination of vendors, and ensuring
          that things are just right. This is where Companies for Event Management fit in. With the help of the proper event
          management company, you can turn your dream into reality with less of the anxiety which normally accompanies planning.
        </p>
        
        <div className="features">
          <div className="feature">
            <img src="/icons/affordable.png" alt="Affordable Solutions" />
            <h4>Affordable Solutions</h4>
          </div>
          <div className="feature">
            <img src="/icons/planning.png" alt="Explore Planning" />
            <h4>Explore Planning and Events</h4>
          </div>
          <div className="feature">
            <img src="/icons/experience.png" alt="Expertise and Experience" />
            <h4>Expertise and Experience</h4>
          </div>
          <div className="feature">
            <img src="/icons/stressfree.png" alt="Time and Stress-Saving" />
            <h4>Time and Stress-Saving</h4>
          </div>
          <div className="feature">
            <img src="/icons/personalized.png" alt="Personalized Services" />
            <h4>Personalized Services</h4>
          </div>
        </div>

        <div className="buttons">
          <button className="search-artist">Search Artist</button>
          <button className="expert-planning">Expert Event Planning Services in Delhi, Mumbai</button>
        </div>
      </div>
    </section>
  );
};

export default PlanningEvent;
