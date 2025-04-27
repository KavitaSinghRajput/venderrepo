import React from "react";
import "./ClientFeedBack.css";

const feedbacks = [
  {
    name: "Nithya Iyer",
    role: "Senior Manager BD",
    feedback: "Thank you, Hire4Event, for making our corporate conference a success! Everything went smoothly, and the team exceeded our expectations. Will definitely use them again!",
    image: "/assets/user1.png", // sahi path dekh lena
  },
  {
    name: "Akash Chauhan",
    role: "Project Manager",
    feedback: "I have a fabulous experience with this company. They shared valuable tips and tricks for planning successful events under my budget and venue selection. I am very happy to share my experience on Google 👍🏼👍🏼",
    image: "/assets/user2.png",
  },
  {
    name: "Subhash Tripathi",
    role: "Human Resource Management",
    feedback: "This company team is very good to perform in corporate events and make solutions implemented, and the positive outcomes achieved from previous corporate events.",
    image: "/assets/user3.png",
  },
];

const ClientFeedBack = () => {
  return (
    <section className="client-feedback-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="subtitle">#Testimonials</h5>
          <h2 className="title">Client <span>Feedbacks</span></h2>
        </div>
        <div className="row g-4">
          {feedbacks.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card feedback-card h-100 p-3">
                <div className="feedback-image text-center mb-3">
                  <img src={item.image} alt={item.name} className="rounded-circle" />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.role}</h6>
                  <div className="feedback-stars mb-2">
                    {"⭐️⭐️⭐️⭐️⭐️"}
                  </div>
                  <p className="card-text">{item.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedBack;
