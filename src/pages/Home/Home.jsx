import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import './Home.css';
import image from '../../assets/heroimage.png'
import image2 from '../../assets/hero1image.png'

const Home = () => {
  return (
    <div className="hero-carousel">
      <Carousel fade interval={5000}>
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="slide-content d-flex">
            <div className="text-side">
              <p className="sub-heading">Best Artist and Venue Booking Platform</p>
              <h1>
                One Platform, <span className="highlight">Endless Possibilities</span> – Book Artists, Secure Venues, And Power Up Event Production
              </h1>
              <p>Your all-in-one event solution - book top artists, secure the best venues, and elevate event production seamlessly. Endless possibilities await!</p>
              <div className="buttons">
                <Button variant="danger">Start Booking →</Button>
                <Button variant="outline-danger" className="ms-3">Contact Us</Button>
              </div>
            </div>
            <div className="image-side">
              <img src={image} alt="Slide 1" />
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="slide-content d-flex">
            <div className="text-side">
              <p className="sub-heading">Best event planning company in Noida</p>
              <h1>
                Corporate Offsites, <span className="highlight">Team-Building, And Travel</span> – Flawless Planning, Effortless Execution – Hire4Event!
              </h1>
              <p>Expertly planned corporate offsites, team-building, and travel—seamless execution, stress-free experiences, only with Hire4Event!</p>
              <div className="buttons">
                <Button variant="danger">Start Planning →</Button>
                <Button variant="outline-danger" className="ms-3">Contact Us</Button>
              </div>
            </div>
            <div className="image-side">
              <img src={image2} alt="Slide 2" />
            </div>
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="slide-content d-flex">
            <div className="text-side">
              <p className="sub-heading">Event Management Company in Delhi</p>
              <h1>
                Host A <span className="highlight">Conference</span> That Speaks Success – Planned By Experts, Executed To Perfection!
              </h1>
              <p>Hire4Event supplied security equipment for the 2019 UN COP14 at India Expo Mart, Greater Noida, ensuring safety for PM Modi and the event.</p>
              <div className="buttons">
                <Button variant="danger">Explore Now →</Button>
                <Button variant="outline-danger" className="ms-3">Contact Us</Button>
              </div>
            </div>
            <div className="image-side">
              <img src={image2} alt="Slide 3" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
