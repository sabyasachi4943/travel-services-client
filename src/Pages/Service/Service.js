import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const Service = ({ service }) => {
  
  const { title, img, description } = service;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" style={{ height: "100px" }} src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">
          <Link to={`/service/${service._id}`}>{title}</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Service;
