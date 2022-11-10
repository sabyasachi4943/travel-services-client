import React from "react";
import Orders from "../../Orders/Orders";
import { Col, Container, Row } from "react-bootstrap";
import ShortService from "../../ShortService/ShortService";
import Testimonials from "../../Testimonials/Testimonials";
import ContactUs from "../../ContactUs/ContactUs";

const Home = () => {
  return (
    <div className="mb-5 align-items-center text-center justify-content-center ">
      <Container>
        <Row>
          <Col lg="9">
            <ShortService></ShortService>
          </Col>
          <Col lg="3">
            <Orders></Orders>
          </Col>
        </Row>
      </Container>
      {/* <Services></Services> */}
      <div className="align-items-center text-center justify-content-center">
        <Testimonials></Testimonials>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
