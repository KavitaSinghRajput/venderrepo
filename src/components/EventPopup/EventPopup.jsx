import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./EventPopup.css";

const EventPopup = () => {
  const [show, setShow] = useState(true); // Show popup immediately

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      centered
      className="event-modal"
      backdrop="static"
    >
      <Modal.Body className="d-flex flex-column flex-md-row p-0">
        <div className="p-4 flex-fill bg-white">
          <h4 className="modal-title">
            Creating the <span className="text-danger">Perfect Event</span>, Together
          </h4>
          <p className="mb-4 small text-muted">
            Tell us about your event, and we’ll craft an experience you’ll cherish forever. Start planning today!
          </p>

          <Form>
            <div className="row g-3">
              <div className="col-md-6">
                <Form.Control type="text" placeholder="Your Name*" />
              </div>
              <div className="col-md-6">
                <Form.Control type="text" placeholder="Your Phone*" />
              </div>
              <div className="col-md-6">
                <Form.Control type="email" placeholder="Your Email*" />
              </div>
              <div className="col-md-6">
                <Form.Select>
                  <option>Services</option>
                  <option>Event Planning</option>
                  <option>Wedding</option>
                  <option>Corporate</option>
                </Form.Select>
              </div>
              <div className="col-md-6">
                <Form.Control type="text" placeholder="Organization Name" />
              </div>
              <div className="col-md-6">
                <Form.Select>
                  <option>Budget</option>
                  <option>5L to 10L</option>
                  <option>10L to 25L</option>
                  <option>25L+</option>
                </Form.Select>
              </div>
              <div className="col-12">
                <Form.Check
                  type="checkbox"
                  label="I consent to having this website store my submitted information."
                />
              </div>
              <div className="col-12 d-grid">
                <Button variant="primary" className="magic-btn">
                  Let’s Create Magic
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default EventPopup;
