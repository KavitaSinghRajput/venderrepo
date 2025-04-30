import React from "react";
import Image from "../../assets/pastevent1.jpeg";
import Image1 from "../../assets/pastevent2.jpeg";
import Image2 from "../../assets/pastevent4.jpeg";

export default function PastEvent() {
  return (
    <div className=" container ">
      <div className="">
        <h2 className="text-center fw-bold mb-4">
          <span className="text-danger">#PastDefinesTheFuture</span>
          <br />
          <span className="text-dark">
            The <span className="text-danger">Best</span> of What Just Happened
          </span>
        </h2>
      </div>
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={Image}
              className="card-img-top"
              alt="pastevent1"
              style={{ width: "18rem" }}
            />
            <div className="card-body">
              <p className="card-text">
              Success Mantra - 3 is the next-level leadership and mindset training event by Herbalife, curated for those ready to take their business from active to unstoppable
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={Image1}
              className="card-img-top"
              alt="pastevent2"
              style={{ width: "18rem" }}
            />
            <div className="card-body">
              <p className="card-text">
              The Soybean Processors Association of India (SOPA) is the sole national-level organization representing soybean processors, farmers, exporters, and brokers in India.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: "20rem" }}>
            <img
              src={Image2}
              className="card-img-top"
              alt="pastevent4"
              style={{ width: "18rem" }}
            />
            <div className="card-body">
              <p className="card-text">
                 The Future Business Builder School (FBBS) is a dynamic training and development program by Herbalife, designed to empower aspiring and existing distributors to grow their independent business with vision, skill, and leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
