
import React from 'react';
import './Indore.css';
import image1 from  '../../ArtistBooking/Indore/assets1/boby chorasiya.jpeg'
import image2 from  '../../ArtistBooking/Indore/assets1/ansh bhawser.jpg'
import image3 from  '../../ArtistBooking/Indore/assets1/oyye indori.jpeg'
import image4 from  '../../ArtistBooking/Indore/assets1/zakirkhan.jpeg'
import image5 from  '../../ArtistBooking/Indore/assets1/rahul jain.jpg'
import image6 from  '../../ArtistBooking/Indore/assets1/ankita lokhande.webp'
import image7 from  '../../ArtistBooking/Indore/assets1/asad khan.jpeg'
import image8 from  '../../ArtistBooking/Indore/assets1/paridhi sharma.jpeg'

const Indore = () => {

   const artistprofile = [ 
  {
        image:image1,
        artist:"Boby chorasiya",
        rating:"4 star",
        time:"30min",
  },
       
       {  image:image2,
        artist:"Ansh bhawser",
        rating:"4 star",
        time:"30min",
       },
       {  image:image3,
        artist:"oyye indori",
        rating:"4 star",
        time:"30min",
       },
       {  image:image4,
        artist:"zakir Khan",
        rating:"5 star",
        time:"30min",
       },
       {  image:image5,
        artist:"rahul jain",
        rating:"4 star",
        time:"30min",
       },
      
      
       {  image:image6,
        artist:"ankita lokhande",
        rating:"4 star",
        time:"30min",
       },   
       {  image:image7,
        artist:"asad khan",
        rating:"4 star",
        time:"30min",
       },
       {  image:image8,
        artist:"paridhi sharma",
        rating:"5 star",
        time:"30min",
       },
       
   ]



  return (
    <div className="indore-page">
   
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
      <div className="row card-row1">
      {artistprofile.map((index,item) => (
          <div className="col card1" key={item}>
         <img style={{width:"250px",height:"200px"}} src={index.image} alt="vghghg"  />
            <h3>{index.artist}</h3>
            <div className="rating"> {index.rating}</div>
            <p><b>Performance Duration: </b> {index.time} -- mins</p>
            <button>BOOK NOW</button>
          </div>
        ))}
      </div>  
      
    </div>
  );
};

export default Indore;
