import React from "react";
import "./Home.css"; 

import HeroSection from "../../components/HeroSection/HeroSection";
import CorporateEventPlanner from "../../components/CorporateEventPlanner/CorporateEventPlanner";
import Bookcard from "../../components/Bookcard/BookCard";
import EventPlanner from "../../components/EventPlanner/EventPlanner";
import PastEvent from "../../components/PastEvent/PastEvent";
import EventManagment from "../../components/EventManagment/EventManagment";
import ArtistSlider from "../../components/ArtistSlider/ArtistSlider";
import TrustCompany from "../../components/TrustCompany/TrustCompany";
import EquipmentSection from "../../components/EquipmentSection/EquipmentSection";
import PlanningEvent from "../../components/PlanningEvent/PlanningEvent";
import ClientFeedBack from "../../components/ClientFeedBack/ClientFeedBack";
import ExpertPlanner from "../../components/ExpertPlanner/ExpertPlanner";
import Faq from "../../components/Faq/Faq";
import BlogPosts from "../../components/BlogPost/BlogPosts";
import OnlineBooking from "../../components/OnlineBooking/OnlineBooking";

const Home = () => {
  return (
    <div className="container-fluid" style={{ padding: "0px" }}>
      <HeroSection />
      <div>
        <CorporateEventPlanner />
      </div>
      <div className="container-fluid">
        <Bookcard />
      </div>     
      <div>
        <EventPlanner />
      </div>
      <div>
        <PastEvent />
      </div>
      <div>
        <EventManagment />
      </div>
      <div>
        <ArtistSlider />
      </div>
      <div className="mb-5">
        <TrustCompany />
      </div>
      <div>
        <EquipmentSection />
      </div>
      <div>
        <PlanningEvent />
      </div>
      <div>
        <ExpertPlanner/>
      </div>
      <div>  
        <ClientFeedBack/>
      </div>
      <div>
        <Faq/>
      </div>   
      <div>
        <BlogPosts/>
      </div>
      <div>
        <OnlineBooking/>
      </div>
    </div>
  );
};

export default Home;























// import React from "react";
// import { Carousel, Button } from "react-bootstrap";
// import "./Home.css";
// import image from "../../assets/heroimage.png";
// import image2 from "../../assets/hero1image.png";
// import CorporateEventPlanner from "../../components/CorporateEventPlanner/CorporateEventPlanner";
// import Bookcard from "../../components/Bookcard/BookCard";
// import EventPlanner from "../../components/EventPlanner/EventPlanner";
// import PastEvent from "../../components/PastEvent/PastEvent";
// import EventManagment from "../../components/EventManagment/EventManagment";
// import ArtistSlider from "../../components/ArtistSlider/ArtistSlider";
// import TrustCompany from "../../components/TrustCompany/TrustCompany";
// import EquipmentSection from "../../components/EquipmentSection/EquipmentSection";
// import PlanningEvent from "../../components/PlanningEvent/PlanningEvent";

// import  { useEffect, useState } from "react";
// import "./HeroSection.css";

// const Home = () => {
//   return (
//     <div className="container-fluid" style={{ padding: "0px" }}>
//       <div className="hero-carousel ">
       
   
    

// const slides = [
//   {
//     title: "Plan Your Corporate Event At Your Fingertips - Seamless, Swift, And Stress-Free!",
//     description: "Hire4Event: Your trusted corporate event planner in Delhi, Gurgaon and Noida, delivering seamless and impactful events tailored to your business needs!",
//     image: "/images/corporate-event.jpg",
//     buttonText: "Start Planning",
//   },
//   {
//     title: "Corporate Offsites, Team-Building, And Travel - Flawless Planning, Effortless Execution - Hire4Event!",
//     description: "Expertly planned corporate offsites, team-building, and travel- seamless execution, stress-free experiences, only with Hire4Event!",
//     image: "/images/team-building.jpg",
//     buttonText: "Start Planning",
//   },
//   {
//     title: "Host A Conference That Speaks Success - Planned By Experts, Executed To Perfection!",
//     description: "Hire4Event supplied security equipment for the 2019 UN COP14 at India Expo Mart, Greater Noida, ensuring safety for PM Modi and the event.",
//     image: "/images/conference.jpg",
//     buttonText: "Explore Now",
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 5000); // 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="hero-section">
//       <div className="hero-content">
//         <h5>Event Management Company in {currentSlide === 2 ? "Delhi" : "Noida"}</h5>
//         <h1 dangerouslySetInnerHTML={{ __html: slides[currentSlide].title.replace('Corporate Event', '<span>Corporate Event</span>').replace('Conference', '<span>Conference</span>').replace('Corporate Offsites, Team-Building, And Travel', '<span>Corporate Offsites, Team-Building, And Travel</span>') }} />
//         <p>{slides[currentSlide].description}</p>
//         <div className="hero-buttons">
//           <button className="primary-btn">{slides[currentSlide].buttonText}</button>
//           <button className="secondary-btn">Contact Us</button>
//         </div>
//       </div>
//       <div className="hero-image">
//         <img src={slides[currentSlide].image} alt="Event Slide" />
//       </div>
//     </section>

//     </div>
//       <div>
//         <CorporateEventPlanner />
//       </div>
//       <div className="container-fluid">
//         <Bookcard />
//       </div>
//       <div>
//         <EventPlanner />
//       </div>
//       <div>
//         <PastEvent />
//       </div>
//       <div>
//         <EventManagment />
//       </div>
//       <div>
//         <ArtistSlider />
//       </div>
//       <div className="mb-5">
//         <TrustCompany />
//       </div>
//       <div>
//         <EquipmentSection />
//       </div>
//       <div>
//         <PlanningEvent />
//       </div>
//     </div>
  

//   );
// };

// export default HeroSection;

   
   
   
   
   
//    {/* <Carousel fade interval={5000}>
              
//           <Carousel.Item>
//             <div className="slide-content d-flex">
//               <div className="text-side">
//                 <p className="sub-heading">
//                   Best Artist and Venue Booking Platform
//                 </p>
//                 <h1>
//                   One Platform,{" "}
//                   <span className="highlight">Endless Possibilities</span> –
//                   Book Artists, Secure Venues, And Power Up Event Production
//                 </h1>
//                 <p>
//                   Your all-in-one event solution - book top artists, secure the
//                   best venues, and elevate event production seamlessly. Endless
//                   possibilities await!
//                 </p>
//                 <div className="buttons">
//                   <Button variant="danger">Start Booking →</Button>
//                   <Button variant="outline-danger" className="ms-3">
//                     Contact Us
//                   </Button>
//                 </div>
//               </div>
//               <div className="image-side">
//                 <img src={image} alt="Slide 1" />
//               </div>
//             </div>
//           </Carousel.Item>

        
//           <Carousel.Item>
//             <div className="slide-content d-flex">
//               <div className="text-side">
//                 <p className="sub-heading">
//                   Best event planning company in Noida
//                 </p>
//                 <h1>
//                   Corporate Offsites,{" "}
//                   <span className="highlight">Team-Building, And Travel</span> –
//                   Flawless Planning, Effortless Execution – Hire4Event!
//                 </h1>
//                 <p>
//                   Expertly planned corporate offsites, team-building, and
//                   travel—seamless execution, stress-free experiences, only with
//                   Hire4Event!
//                 </p>
//                 <div className="buttons">
//                   <Button variant="danger">Start Planning →</Button>
//                   <Button variant="outline-danger" className="ms-3">
//                     Contact Us
//                   </Button>
//                 </div>
//               </div>
//               <div className="image-side">
//                 <img src={image2} alt="Slide 2" />
//               </div>
//             </div>
//           </Carousel.Item>

     
//           <Carousel.Item>
//             <div className="slide-content d-flex">
//               <div className="text-side">
//                 <p className="sub-heading">Event Management Company in Delhi</p>
//                 <h1>
//                   Host A <span className="highlight">Conference</span> That
//                   Speaks Success – Planned By Experts, Executed To Perfection!
//                 </h1>
//                 <p>
//                   Hire4Event supplied security equipment for the 2019 UN COP14
//                   at India Expo Mart, Greater Noida, ensuring safety for PM Modi
//                   and the event.
//                 </p>
//                 <div className="buttons">
//                   <Button variant="danger">Explore Now →</Button>
//                   <Button variant="outline-danger" className="ms-3">
//                     Contact Us
//                   </Button>
//                 </div>
//               </div>
//               <div className="image-side">
//                 <img src={image2} alt="Slide 3" />
//               </div>
//             </div>
//           </Carousel.Item>
//         </Carousel> */}
// {/* 
//         <div
//           id="eventCarousel"
//           className="carousel slide carousel-fade"
//           data-bs-ride="carousel"
//           data-bs-interval={5000}
//          >
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <div className="slide-content d-flex flex-column flex-md-row align-items-center">
//                 <div className="text-side text-center text-md-start">
//                   <p className="sub-heading">
//                     Best Artist and Venue Booking Platform
//                   </p>
//                   <h1>
//                     One Platform,{" "}
//                     <span className="highlight">Endless Possibilities</span> –
//                     Book Artists, Secure Venues, And Power Up Event Production
//                   </h1>
//                   <p>
//                     Your all-in-one event solution - book top artists, secure
//                     the best venues, and elevate event production seamlessly.
//                     Endless possibilities await!
//                   </p>
//                   <div className="buttons mt-3">
//                     <a href="#" className="btn btn-danger">
//                       Start Booking →
//                     </a>
//                     <a href="#" className="btn btn-outline-danger ms-3">
//                       Contact Us
//                     </a>
//                   </div>
//                 </div>
//                 <div className="image-side mt-4 mt-md-0">
//                   <img
//                     src="your-image1.jpg"
//                     alt="Slide 1"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="carousel-item">
//               <div className="slide-content d-flex flex-column flex-md-row align-items-center">
//                 <div className="text-side text-center text-md-start">
//                   <p className="sub-heading">
//                     Best event planning company in Noida
//                   </p>
//                   <h1>
//                     Corporate Offsites,{" "}
//                     <span className="highlight">Team-Building, And Travel</span>{" "}
//                     – Flawless Planning, Effortless Execution – Hire4Event!
//                   </h1>
//                   <p>
//                     Expertly planned corporate offsites, team-building, and
//                     travel—seamless execution, stress-free experiences, only
//                     with Hire4Event!
//                   </p>
//                   <div className="buttons mt-3">
//                     <a href="#" className="btn btn-danger">
//                       Start Planning →
//                     </a>
//                     <a href="#" className="btn btn-outline-danger ms-3">
//                       Contact Us
//                     </a>
//                   </div>
//                 </div>
//                 <div className="image-side mt-4 mt-md-0">
//                   <img
//                     src="your-image2.jpg"
//                     alt="Slide 2"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="carousel-item">
//               <div className="slide-content d-flex flex-column flex-md-row align-items-center">
//                 <div className="text-side text-center text-md-start">
//                   <p className="sub-heading">
//                     Event Management Company in Delhi
//                   </p>
//                   <h1>
//                     Host A <span className="highlight">Conference</span> That
//                     Speaks Success – Planned By Experts, Executed To Perfection!
//                   </h1>
//                   <p>
//                     Hire4Event supplied security equipment for the 2019 UN COP14
//                     at India Expo Mart, Greater Noida, ensuring safety for PM
//                     Modi and the event.
//                   </p>
//                   <div className="buttons mt-3">
//                     <a href="#" className="btn btn-danger">
//                       Explore Now →
//                     </a>
//                     <a href="#" className="btn btn-outline-danger ms-3">
//                       Contact Us
//                     </a>
//                   </div>
//                 </div>
//                 <div className="image-side mt-4 mt-md-0">
//                   <img
//                     src="your-image3.jpg"
//                     alt="Slide 3"
//                     className="img-fluid"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#eventCarousel"
//             data-bs-slide="prev"
//           >
//             <span className="carousel-control-prev-icon" />
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#eventCarousel"
//             data-bs-slide="next"
//           >
//             <span className="carousel-control-next-icon" />
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div> */}
      
      
      
      
      