import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";

const Service = ({ service, handleAddService }) => {
  const { _id, title, img, description } = service;
  return (
    <div className="p-3">
      <Card style={{ width: "18rem" }}>
        <PhotoProvider>
          <PhotoView src={img}>
            <Card.Img variant="top" style={{ height: "100px" }} src={img} />
          </PhotoView>
        </PhotoProvider>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="warning">
            <Link
              to={`/service/${service._id}`}
              className="text-decoration-none"
            >
              see details
            </Link>
          </Button>
          <Button variant="outline-secondary" onClick={handleAddService}>
            <Link to={`/checkout/${_id}`} className="text-decoration-none">
              Add service
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
