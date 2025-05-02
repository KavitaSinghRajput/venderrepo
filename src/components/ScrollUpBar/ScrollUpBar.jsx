import React, { useEffect, useState } from 'react';
import './ScrollUpBar.css';

const ScrollUpBar = () => {
  const [scrollUp, setScrollUp] = useState(false);
  let lastScroll = window.pageYOffset;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll < lastScroll && currentScroll > 100) {
        setScrollUp(true);  // scrolling up
      } else {
        setScrollUp(false); // scrolling down
      }

      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`scroll-up-bar ${scrollUp ? 'expand' : 'shrink'}`}>
      <div className="scrolling-text">
        <span className='text-center'>
          Expert Event Planning Services in Delhi, Mumbai, Gurgaon, Noida – Conferences, Corporate Events, Weddings & More – Hire4Event Delivers Excellence
        </span>
      </div>
    </div>
  );
};

export default ScrollUpBar;
