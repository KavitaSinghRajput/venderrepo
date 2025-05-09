// import React, { useEffect, useState } from 'react';
// import './SocialSidebar.css';
// import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

// const SocialSidebar = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
 
//   useEffect(() => {
//     const handleScroll = () =>  {
//       setShowSidebar(window.scrollY > 300);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className={`social-sidebar ${showSidebar ? 'visible' : ''}`}>
//       <ul>
//         <li className="facebook">
//           <a href="#">
//             <span className="icon"><FaFacebookF /></span>
//             <span className="label">Facebook</span>
//           </a>
//         </li>
//         <li className="instagram">
//           <a href="#">
//             <span className="icon"><FaInstagram /></span>
//             <span className="label">Instagram</span>
//           </a>
//         </li>
//         <li className="youtube">
//           <a href="#">
//             <span className="icon"><FaYoutube /></span>
//             <span className="label">YouTube</span>
//           </a>
//         </li>
//         <li className="linkedin">
//           <a href="#">
//             <span className="icon"><FaLinkedinIn /></span>
//             <span className="label">LinkedIn</span>
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default SocialSidebar;



import React from 'react';
import './SocialSidebar.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { useScrollTrigger } from './ScrollTrigger'; // 👈

const SocialSidebar = () => {
  const showSidebar = useScrollTrigger(); // 👈

  return (
    <div className={`social-sidebar ${showSidebar ? 'visible' : ''}`}>
      <ul>
        <li className="facebook">
          <a href="#">
            <span className="icon"><FaFacebookF /></span>
            <span className="label">Facebook</span>
          </a>
        </li>
        <li className="instagram">
          <a href="#">
            <span className="icon"><FaInstagram /></span>
            <span className="label">Instagram</span>
          </a>
        </li>
        <li className="youtube">
          <a href="#">
            <span className="icon"><FaYoutube /></span>
            <span className="label">YouTube</span>
          </a>
        </li>
        <li className="linkedin">
          <a href="#">
            <span className="icon"><FaLinkedinIn /></span>
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialSidebar;
