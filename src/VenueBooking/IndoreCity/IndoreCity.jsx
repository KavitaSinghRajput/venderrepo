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
     rating:"4.5 star",
     address:"Plot No 5, near Life Care Hospital, Scheme Number 78, Part II, Scheme 78, Vijay Nagar, Indore, Madhya Pradesh 452010",
    },

   {
    image:img2,
   venue:"citrus hotel",
   rating:"5.0 star",
   address:"No 34-35 F, 34, Vijay Nagar Square, Ratna Lok Colony, Indore, Madhya Pradesh 452010",
   },

  {
   image:img3,
   venue:"effotel hotel",
   rating:"4.3 star",
   address:"Plot No. 10, C/ C.A, Scheme No:94, Sector C, Scheme 94 Sector CA, Indore, Madhya Pradesh 452010",
   },
  {
    image:img4,
   venue:"ginger",
   rating:"3.9 star",
    address:"AB Rd, near Shaniwar Darpan, Choti Khajrani, Indore, Madhya Pradesh 452008",
   },{
    image:img5,
   venue:"lemon tree hotel",
   rating:"4.0 star",
    address:"3, RNT Marg, South Tukoganj, Indore, Madhya Pradesh 452001",
   },{
    image:img6,
   venue:"pride hotel",
   rating:"4.1 star",
    address:"35, PW5H+6VQ, 1, Bicholi Mardana, near pride hotel, Indore, Madhya Pradesh 452016",
   },{
    image:img7,
   venue:"sayajii hotel",
   rating:"4.4 star",
    address:"H/1, Maguda Nagar, Vijay Nagar, Scheme No 54, Indore, Madhya Pradesh 452010",
   },{
    image:img8,
   venue:"treebo trip phoenix",
   rating:"3 star",
    address:"25-B, Pipliya Rao Ring Rd, near IT park, Indrapuri Colony, Nanak Nagar, Indore, Madhya Pradesh 452001",
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
            <h3 >{intex.venue}</h3>
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
