import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contact-page">
      {/* Top Section */}
      <section className="contact-hero text-white text-center py-5">
        <div className="container">
          {/* <p>Home / Contact Us</p> */}
          <h1 className="fw-bold" data-aos="fade-down">
            Let's Get In Touch
          </h1>
          <p className="mt-3" data-aos="fade-up">
            GNVIndia is an event management company based in Indore,. Known for
            exceptional services, GNVINdia caters to all event needs in
            Indore,Bhopal,Jabalpur and Gwalior.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h6 className="text-danger fw-bold" data-aos="fade-up">
            #CONTACT WITH US
          </h6>
          <h2 className="fw-bold mb-4" data-aos="zoom-in">
            Connect with Our Event Experts
          </h2>
          <div className="row g-4">
            {[
              { title: "Address", text: "" },
              { title: "Email", text: "" },
              { title: "Phone Number", text: "" },
              { title: "WhatsApp", text: "" },
            ].map((info, index) => (
              <div
                className="col-12 col-md-6 col-lg-3"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="card p-3 h-100 shadow-sm">
                  <h5>{info.title}</h5>
                  <p>{info.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-start justify-content-center align-items-center text-center">
            {/* Left Side */}
            <div className="col-12 col-md-6" data-aos="fade-right">
              <h3 className="fw-bold">
                Let's Create Your Perfect Event – Contact GNVIndia!
               </h3>
              <p className="mt-3">
                Got an event idea? Let’s turn it into a remarkable experience!
              </p>
              <div className="social-icons mt-4 d-flex gap-3 flex-wrap">
                {[
                  "instagram",
                  "facebook",
                  "youtube",
                  "linkedin",
                 
                ].map((icon, idx) => (
                  <i className={`bi bi-${icon}`} key={idx}></i>
                ))}
              </div>
            </div>

            {/* Form Side */}
            <div className="col-12 col-md-6" data-aos="fade-left">
              <div className="card p-4 shadow">
                <h5 className="fw-bold mb-3 text-danger">
                  Contact Our Event Management Team
                </h5>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Mobile"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="col-md-6">
                      <select className="form-select">
                        <option>Event Planning</option>
                        <option>Corporate Event</option>
                        <option>Wedding</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ex: 20 Lakh"
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        placeholder="Type here any requirement…"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="col-12 form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="consent"
                      />
                      <label className="form-check-label" htmlFor="consent">
                        I consent to having this website store my info.
                      </label>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-danger w-100">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
