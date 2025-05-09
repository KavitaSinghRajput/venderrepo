import React from 'react';
import './TopNavbar.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const TopNavbar = () => {    
  return (
    <div className="top-navbar py-2 px-3  ">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3 flex-wrap text-dark contact-info">
  <span><i className="bi bi-envelope me-2 text-primary"></i>events@gnvindia.in</span>
         <span><i className="bi bi-telephone me-2 text-success"></i>+91-9691474449</span>
        </div>

        {/* <div className="d-flex align-items-center gap-2 flex-wrap">
          <button className="btn btn-job">Job Openings</button>
          <button className="btn btn-artist">Create Artist Profile</button>
        </div> */}

       
        <div className="d-flex align-items-center gap-3 flex-wrap social-icons">
          <a href="#"><FaFacebookF className="icon" /> Facebook</a>
          <a href="#"><FaInstagram className="icon" /> Instagram</a>
          <a href="#"><FaYoutube className="icon" /> YouTube</a>
          <a href="#"><FaLinkedinIn className="icon" /> LinkedIn</a>
          <button className="btn btn-account">ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
