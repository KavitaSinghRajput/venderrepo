import React from "react";
import Image from "../../assets/hero1image.jpg";

export default function PastEvent() {
  return (
    <div className="d-flex container ">
      <div className="row">
        <div className="col">
          <h2 className="text-center fw-bold mb-4">
            <span className="text-danger">#PastDefinesTheFuture</span>
            <br />
            <span className="text-dark">
              The <span className="text-danger">Best</span> of What Just
              Happened
            </span>
          </h2>
          </div>
          </div>

          
          <div className="card" style={{ width: "40rem" }}>
            <img
              src={Image}
              className="card-img-top"
              alt="..."
              style={{ width: "15rem" }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img
              src={Image}
              className="card-img-top"
              alt="..."
              style={{ width: "15rem" }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img
              src={Image}
              className="card-img-top"
              alt="..."
              style={{ width: "15rem" }}
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
          
          </div>
       
      </div>
    </div>
  );
}
