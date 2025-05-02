import React from 'react';
import './ContactWidget.css';
import { FaWhatsapp, FaHeadset, FaPhoneAlt } from 'react-icons/fa';

const ContactWidget = () => {
  return (
    <div className="contact-widget">
      <a href="" className="widget-btn whatsapp" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="" className="widget-btn support">
        <FaHeadset />
      </a>
      <a href="" className="widget-btn call">
        <FaPhoneAlt />
      </a>
    </div>
  );
};

export default ContactWidget;
