import React from 'react';
import './IndoreCity.css';

import img1 from '../../VenueBooking/IndoreCity/assets2/gh.jpeg'
import img2 from '../../VenueBooking/IndoreCity/assets2/citrus hotel.jpeg'
import img3 from '../../VenueBooking/IndoreCity/assets2/effotel hotel.jpeg'
import img4 from '../../VenueBooking/IndoreCity/assets2/ginger.jpeg'
import img5 from '../../VenueBooking/IndoreCity/assets2/lemon tree hotel.jpeg'
import img6 from '../../VenueBooking/IndoreCity/assets2/pride hotel.jpeg'
import img7 from '../../VenueBooking/IndoreCity/assets2/sayajii hotel.jpeg'
import img8 from '../../VenueBooking/IndoreCity/assets2/treebo trip phoenix.jpeg'


const IndoreCity = () => {
     
const hotelvenue = [

    {
    image:img1,
     venue:"brilliant hotel",
     rating:"4 star",
     address:"30min",
    },

   {
    image:img2,
   venue:"citrus hotel",
   rating:"4 star",
   address:"30min",
   },

  {
   image:img3,
   venue:"effotel hotel",
   rating:"4 star",
   address:"30min",
   },
  {
    image:img4,
   venue:"ginger",
   rating:"4 star",
    address:"30min",
   },{
    image:img5,
   venue:"lemon tree hotel",
   rating:"4 star",
    address:"30min",
   },{
    image:img6,
   venue:"pride hotel",
   rating:"4 star",
    address:"30min",
   },{
    image:img7,
   venue:"sayajii hotel",
   rating:"4 star",
    address:"30min",
   },{
    image:img8,
   venue:"treebo trip phoenix",
   rating:"4 star",
    address:"30min",
   },
]
         
 return (
    <div className="indore-page conatiner">
      
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

    
      <div className="row card-row2">
        {hotelvenue.map((intex,item) => (
          <div className="col card2" key={item}>
          <img style={{width:"250px",height:"200px"}} src={intex.image} alt="vghghg"  />
            <h3>Venue Name</h3>
            <div className="rating">{intex.rating}</div>
            <p><b>address:</b>{intex.address}</p>
            <button>BOOK NOW</button>
          </div>
        ))}
      </div>  
    </div>
  );
};

export default IndoreCity;
