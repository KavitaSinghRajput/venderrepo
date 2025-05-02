// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import "./HeroSection.css";
// import Image1 from "../../assets/corporate.png";
// import Image2 from "../../assets/conference.webp";
// import Image3 from "../../assets/Artist.png";

// const slides = [
//   {
//     title: "Plan Your <span>Corporate Event</span> At Your Fingertips - Seamless, Swift, And Stress-Free!",
//     description: "GNVIndia: Your trusted corporate event planner in Indore, Bhopal, Ujjain, Jabalpur, Gwalior delivering seamless and impactful events tailored to your business needs!",
//     image: Image1,
//     buttonText: "Start Planning",
//     city: "Bhopal",
//   },
//   {
//     title: "<span>Corporate Offsites, Team-Building, And Travel</span> - Flawless Planning, Effortless Execution - GNVIndia!",
//     description: "Expertly planned corporate offsites, team-building, and travel- seamless execution, stress-free experiences, only with GNVIndia!",
//     image: Image2,
//     buttonText: "Start Planning",
//     city: "Bhopal",
//   },
//   {
//     title: "Host A <span>Conference</span> That Speaks Success - Planned By Experts, Executed To Perfection!",
//     description: "GNVIndia supplied security equipment ensuring safety for PM Modi and the event.",
//     image: Image3,
//     buttonText: "Explore Now",
//     city: "Indore",
//   },
// ];

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 5000 }}
//         loop={true}
//         className="mySwiper"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="container">
//               <div className="row align-items-center py-5">
//                 <div className="col-md-6">
//                   <h5>Event Management Company in {slide.city}</h5>
//                   <h1
//                     className="H1Keyword"
//                     dangerouslySetInnerHTML={{ __html: slide.title }}
//                   />
//                   <p>{slide.description}</p>
//                   <div className="d-flex gap-3 mt-3">
//                     <button className="btn btn-dark d-flex align-items-center gap-2">
//                       {slide.buttonText}
//                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" viewBox="0 0 24 24">
//                         <path d="M7 7h10v10"></path>
//                         <path d="M7 17L17 7"></path>
//                       </svg>
//                     </button>
//                     <button className="btn btn-outline-dark">Contact Us</button>
//                   </div>
//                 </div>
//                 <div className="col-md-6 text-center">
//                   <img src={slide.image} alt="Slide" className="img-fluid" />
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Parallax } from "swiper/modules";
import image1 from "../../assets/corporate.png";
import image2 from "../../assets/conference.webp";
import image3 from "../../assets/Artist.png";
import image4 from "../../assets/offsite.png";
import "./HeroSection.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";

export default function HeroSection() {
  return (
    <div className="" >
      <Swiper
        className="mySwiper"
        loop={true}
        speed={2000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        parallax={true}
        modules={[Autoplay, Pagination, Parallax]}
       >
        <div slot="container-start" data-swiper-parallax="-300"></div>
         <div>
       <SwiperSlide>
          <div className="mt-5" data-swiper-parallax="-100">
            <div className="container">
              <div style={{marginTop:"50px"}} className="row">
                <div className="col-5">
                  <div data-swiper-parallax="-100">
                  <h5 className="mt-6">Best event planning company in Indore </h5>
                    <h2>
                      <span className="highlight">Corporate Offsites,Team-Building,And Travel</span>
                      -Flawless Planning,Effortless Execution-GNVIndi
                    </h2>
                    <p>
                      Expertly planned corporate offsites,team-building.and
                      travel-seamless execution stress-free experiences,only
                      with GNVIndia!
                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <a href="#" className="custom-btn primary-btn">Explore Now <span>&rarr;</span></a>
                      <a href="#" className="custom-btn outline-btn">Contact Us</a>
                       </div>
                  </div>
                </div>
                <div className="col">
                  <div data-swiper-parallax="-100">
                    <img src={image1} alt="Slide" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mt-5" data-swiper-parallax="-100">
            <div className="container">
              <div style={{marginTop:"50px"}} className="row">
                <div className="col-5">
                  <div data-swiper-parallax="-100">
                  <h5 className="mt-6">Best event planning company in Indore </h5>
                    <h2>
                      Host A <span className="highlight">Conference</span>That Speaks Success-Planned
                      By Experts,Executed To perfection!
                    </h2>
                    <p>
                      GNVIndia supplied security equipment and ensuring for all
                      the event security{" "}
                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <a href="#" className="custom-btn primary-btn">Explore Now <span>&rarr;</span></a>
                      <a href="#" className="custom-btn outline-btn">Contact Us</a>
                       </div>
                  </div>
                </div>
                <div className="col">
                  <div data-swiper-parallax="-100">
                    <img src={image2} alt="Slide" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mt-5" data-swiper-parallax="-100">
            <div className="container">
              <div style={{marginTop:"50px"}} className="row">
                <div className="col-5">
                  <div data-swiper-parallax="-100">
                  <h5 className="mt-6">Best event planning company in Indore </h5>
                    <h2>
                      One Platform,<span className="highlight">Endless Possibilities</span> -Book
                      Artists,Secure Venues,And Power Up Event Production
                    </h2>
                    <p>
                      Your all-in-one event solution-book top artists,secure the
                      best venues,and elevate production seamlessly Endless
                      possibilities await!{" "}
                    </p>
                    <div className="d-flex gap-3 mt-4">
                      <a href="#" className="custom-btn primary-btn">Explore Now <span>&rarr;</span></a>
                      <a href="#" className="custom-btn outline-btn">Contact Us</a>
                       </div>
                  </div>
                </div>
                <div className="col">
                  <div data-swiper-parallax="-100">
                    <img src={image3} alt="Slide" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="mt-5" data-swiper-parallax="-100">
            <div className="container">
              <div style={{marginTop:"50px"}} className="row">
                <div className="col-5">
                  <div data-swiper-parallax="-100">
                  <h5 className="mt-6">Best event planning company in Indore </h5>
                    <h2>
                      <span className="highlight">Corporate Offsites,Team-Building,And Travel</span>
                      -Flawless Planning,Effortless Execution-GNVIndi
                    </h2>
                    <p>
                      Expertly planned corporate offsites,team-building.and
                      travel-seamless execution stress-free experiences,only
                      with GNVIndia!
                    </p>

                    <div className="d-flex gap-3 mt-4">
                      <a href="#" className="custom-btn primary-btn">Explore Now <span>&rarr;</span></a>
                      <a href="#" className="custom-btn outline-btn">Contact Us</a>
                       </div>
                  </div>
                </div>
                <div className="col">
                  <div data-swiper-parallax="-100">
                    <img src={image4} alt="Slide" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
