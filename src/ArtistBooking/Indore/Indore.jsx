
import React from 'react';
import './Indore.css';

const Indore = () => {
  return (
    <div className="indore-page">
      {/* First Row */}
      <div className="row first-row">
        <div className="col left-col text-center ">
          <h2>Book Top Artists In Indore – Live Bands, Singers, Stand-Up Comedians, DJs, Celebrities, Motivational Speakers, Dancers, Influencers & More</h2>

          <div className="col right-col">
          <p>
            Looking To Book <b>Top Live Bands, Singers, Stand-Up Comedians, DJs, Celebrities, Motivational Speakers, Dancers, Influencers & More In Indore?</b> Hire4Event Provides A Best Artist Booking Experience For <b>Corporate Events, Concerts, College Fests, Wedding And Private Parties</b>. We Have An Extensive Network Of <b>Bollywood Celebrities, Live Bands, Traditional Performers, And Unique Act Artists</b> To Make Your Event Unforgettable.
          </p>
        </div>

        </div>
        
      </div>

      {/* Second Row - 4 Blank Cards */}
      <div className="row card-row">
        {[1, 2, 3, 4].map((item) => (
          <div className="col card" key={item}>
            <h3>Artist Name</h3>
            <div className="rating">⭐ Rating</div>
            <p><b>Performance Duration:</b> -- mins</p>
            <button>BOOK NOW</button>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default Indore;
