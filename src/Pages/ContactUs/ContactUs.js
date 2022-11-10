import React from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const ContactUs = () => {
  return (
    <div className="align-items-center text-center justify-content-center p-5 m-5  border border-dark rounded">
      <Form>
        <Row>
          <Col>please subscribe for our services</Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email to subscribe"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default ContactUs;
