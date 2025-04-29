
import React from 'react';
import './IndoreCity.css';

const IndoreCity = () => {
  return (
    <div className="indore-page">
      
      <div className="row first-row">
        <div className="col left-col text-center ">
          <h2>Book Top Event Venues in indore  Conference Halls, Meeting Venues, Auditoriums, Stadiums, Hotels, Resorts, Convention Centers, and Exhibition Halls for Corporate Events</h2>

          <div className="col right-col">
          <p>
            Looking To Book <b>The Best Venues In Indore </b>  for your Next Event?GNVIndia offers A seamless Venue Booking Experience For  <b>Corporate Events, Weddings,
            Exhibition, And Private Parties</b>.Choose From Our Extensive Network Of <b>Banquet Halls,Luxury Hotels, 
            Outdoor Lawns,Resorts,And Convention Centers</b> To Make Your Event Truly Special.
          </p>
        </div>

        </div>
        
      </div>

    
      <div className="row card-row">
        {[1, 2, 3, 4].map((item) => (
          <div className="col card" key={item}>
            <h3>Venue Name</h3>
            <div className="rating">⭐ Rating</div>
            <p><b>Loction:</b></p>
            <button>BOOK NOW</button>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default IndoreCity;
