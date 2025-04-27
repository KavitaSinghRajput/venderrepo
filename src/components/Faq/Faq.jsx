import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <section className="faq-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h5 className="subtitle">#FAQ</h5>
          <h2 className="title">
            Quick <span>Answers</span> You Need
          </h2>
        </div>

        <div className="accordion" id="faqAccordion">
          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                What services does Hire4Event provide?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Hire4Event provides event planning, management, and rental services for corporate, wedding, and social events.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What types of activities do you organize?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                We organize corporate events, weddings, conferences, exhibitions, and private parties.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How can I contact Hire4Event?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can contact us through our website's contact form, email, or direct call.
              </div>
            </div>
          </div>

          <div className="accordion-item mb-3">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Do you organize and manage small events?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, we cater to events of all sizes, including small and private gatherings.
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button className="btn explore-btn">
            Explore More &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
