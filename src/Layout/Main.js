import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Banner from "../Pages/Home/Banner/Banner";
import Orders from "../Pages/Orders/Orders";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <h3>main layout</h3>
      <Header></Header>
      <Banner></Banner>
      <Container>
        <Row>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
            <Orders></Orders>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
