// import React, { useEffect, useState } from 'react';
// import './ContactWidget.css';
// import { FaWhatsapp, FaHeadset, FaPhoneAlt } from 'react-icons/fa';

// const ContactWidget = () => {
//   const [showWidget, setShowWidget] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowWidget(window.scrollY > 100); // Show after 100px scroll
//     };
 
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []); 

//   return ( 
//     <div className={`contact-widget ${showWidget ? 'visible' : ''}`}>
//       <a href="#" className="widget-btn whatsapp" target="_blank" rel="noopener noreferrer">
//         <FaWhatsapp />
//       </a>
//       <a href="#" className="widget-btn support">
//         <FaHeadset />
//       </a>
//       <a href="#" className="widget-btn call">
//         <FaPhoneAlt />
//       </a>
//     </div>
//   );
// };

// export default ContactWidget;


import React from 'react';
import './ContactWidget.css';
import { FaWhatsapp, FaHeadset, FaPhoneAlt } from 'react-icons/fa';
import { useScrollTrigger } from './ScrollTrigger'; // 👈

const ContactWidget = () => {
  const showWidget = useScrollTrigger(); // 👈

  return (
    <div className={`contact-widget ${showWidget ? 'visible' : ''}`}>
     <a href="#" className="widget-btn whatsapp" target="_blank" rel="noopener noreferrer">
       <FaWhatsapp />
     </a>
     <a href="#" className="widget-btn support">
       <FaHeadset />
     </a>
     <a href="#" className="widget-btn call">
       <FaPhoneAlt />
     </a>
    </div>
  );
};

export default ContactWidget;
