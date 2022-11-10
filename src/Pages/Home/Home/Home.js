import React from "react";
import Orders from "../../Orders/Orders";
import { Col, Container, Row } from "react-bootstrap";
import ShortService from "../../ShortService/ShortService";
import Testimonials from "../../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="mb-5">
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
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
