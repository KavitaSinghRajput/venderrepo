// import React from 'react';
// import './PastEvent.css';
// // import event1 from '../assets/event1.jpg';
// // import event2 from '../assets/event2.jpg';
// // import event3 from '../assets/event3.jpg';

// const events = [
//   {
//     id: 1,
//     // image: event1,
//     title: 'Corporate Events',
//     description: 'An evening of elegance and networking.',
//   },
//   {
//     id: 2,
//     // image: event2,
//     title: ' Exhibition Event',
//     description: 'Introducing the latest innovations to the market.',
//   },
//   {
//     id: 3,
//     // image: event3,
//     title:'Goverment event',
//     description: 'Celebrating athletic excellence and team spirit.',
//   },
// ];

// const PastEvent = () => {
//   return (
//     <section className="past-event-section py-5">
//       <div className="container">
//         <h2 className="section-title text-center mb-4">Our Past Events</h2>
//         <div className="row g-4">
//           {events.map((event) => (
//             <div key={event.id} className="col-md-4">
//               <div className="card event-card h-100">
//                 <img src={event.image} className="card-img-top" alt={event.title} />
//                 <div className="card-body">
//                   <h5 className="card-title">{event.title}</h5>
//                   <p className="card-text">{event.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PastEvent;
   


import React from 'react';
import Slider from "react-slick";
import './PastEvent.css';
 import event1 from '../PastEvent/assets11/event1.jpg';
 import event2 from  '../PastEvent/assets11/event2.jpg';
 import event3 from '../PastEvent/assets11/event3.jpeg';
 import event4 from  '../PastEvent/assets11/event4.jpg';
 import event5 from  '../PastEvent/assets11/event5.jpg';
 import event6 from  '../PastEvent/assets11/event6.webp';
 import event7 from  '../PastEvent/assets11/event7.jpeg';

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
  },{
    id: 4,
     image: event4,
    title: 'Annual Sports Meet',
    description: 'Celebrating athletic excellence and team spirit.',
  },{
    id: 5,
     image: event5,
    title: 'Annual Sports Meet',
    description: 'Celebrating athletic excellence and team spirit.',
  },{
    id: 6,
     image: event6,
    title: 'Annual Sports Meet',
    description: 'Celebrating athletic excellence and team spirit.',
  },{
    id: 7,
     image: event7,
    title: 'Annual Sports Meet',
    description: 'Celebrating athletic excellence and team spirit.',
  },
];

const PastEvent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
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
    <section className="past-event-section py-5">
      <div className="container">
      <h5 className='text-center'><span style={{color:"red"}}>#PastDefinesTheFuture</span></h5>
        <h2 className="section-title text-center mb-4"><span style={{color:"red"}}>The Best</span> of What Just Happened</h2>
        <Slider {...settings}>
          {events.map((event) => (
            <div key={event.id} className="px-2">
              <div className="card event-card h-100">
                <img src={event.image} className="card-img-top" alt={event.title} />
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
