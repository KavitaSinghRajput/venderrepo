import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './TrustCompany.css';

import image1 from '../../components/TrustCompany/images/accenture.jpeg';
import image2 from '../../components/TrustCompany/images/bankmaharastra.jpeg';
import image3 from '../../components/TrustCompany/images/axsibank.jpeg';
import image4 from '../../components/TrustCompany/images/cipla.jpeg';
import image5 from '../../components/TrustCompany/images/coii.jpeg';
import image6 from '../../components/TrustCompany/images/dabar.jpeg';
import image7 from '../../components/TrustCompany/images/dna.jpeg';
import image8 from '../../components/TrustCompany/images/eag.jpeg';
import image9 from '../../components/TrustCompany/images/hdfclife.jpeg';
import image10 from '../../components/TrustCompany/images/hettich.jpeg';
import image11 from '../../components/TrustCompany/images/incridableindia.jpeg';
import image12 from '../../components/TrustCompany/images/johndeere.jpeg';
import image13 from '../../components/TrustCompany/images/unionbank.jpeg';
import image14 from '../../components/TrustCompany/images/ultratrack.jpeg';
import image15 from '../../components/TrustCompany/images/srf.jpeg';
import image16 from '../../components/TrustCompany/images/sopa.jpeg';
import image17 from '../../components/TrustCompany/images/solidaridad.jpeg';
import image18 from '../../components/TrustCompany/images/seventy.jpeg';
import image19 from '../../components/TrustCompany/images/sbilife.jpeg';
import image20 from '../../components/TrustCompany/images/WM.jpeg';
import image21 from '../../components/TrustCompany/images/sbigeneral.jpeg';
import image22 from '../../components/TrustCompany/images/sbi.jpeg';
import image23 from '../../components/TrustCompany/images/samsung.jpeg';
import image24 from '../../components/TrustCompany/images/nationalinstitude.jpeg';
import image25 from '../../components/TrustCompany/images/lic.jpeg';
import image26 from '../../components/TrustCompany/images/lenskart.jpeg';
const images = [
  { img: image1 },
  { img: image2 },
  { img: image3 },
  { img: image4 },
  { img: image5 },
  { img: image6 },
  { img: image7 },
  { img: image8 },
  { img: image9 },
  { img: image10 },
  { img: image11},
  { img: image12 },
  { img: image13 },
  { img: image14 },
  { img: image15 },
  { img: image16 },
  { img: image17 },
  { img: image18 },
  { img: image19 },
  { img: image20 },
  { img: image21 },
  { img: image22 },
  { img: image23 },
  { img: image24 },
  { img: image25 },
  { img: image26 },
];

const delays = [0, 1000, 2000]; // Delays for different rows

const TrustCompany = () => {
  return (
    <section className="multi-row-slider container-fluid">
      <h2 className="title text-center mb-4">
        <span>Our</span> Work
      </h2>

      {delays.map((delay, rowIndex) => (
        <Swiper
          key={rowIndex}
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000 + delay,
            disableOnInteraction: false,
          }}
          className="swiper-row mb-4"
        >
          {images.map((src, i) => (
            <SwiperSlide key={`${rowIndex}-${i}`}>
              <div className="image-card">
                <img src={src.img} alt={`Slide ${i}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ))}
    </section>
  );
};

export default TrustCompany;
