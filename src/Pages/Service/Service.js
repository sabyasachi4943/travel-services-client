import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";

const Service = ({ service, handleAddService }) => {
  const { _id, title, img, description } = service;
  return (
    <div className="p-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" style={{ height: "100px" }} src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="light">
            <Link to={`/service/${service._id}`}>{title}</Link>
          </Button>
          <Button variant="light" onClick={handleAddService}>
            <Link to={`/checkout/${_id}`}>Add service</Link>
          </Button>
        </Card.Body>
      </Card>

    </div>
  );
};

export default Service;
