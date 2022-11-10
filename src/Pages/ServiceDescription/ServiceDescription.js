import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Reviews from "../Reviews/Reviews";
import ReviewTab from "../ReviewTab/ReviewTab";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { PhotoProvider, PhotoView } from "react-photo-view";
import ListGroup from "react-bootstrap/ListGroup";

const ServiceDescription = () => {
  const service = useLoaderData();
  return (
    <div className="m-5">
      <Card style={{ width: "auto" }}>
        <PhotoProvider>
          <PhotoView src={service.img}>
            <Card.Img
              variant="top"
              src={service.img}
              style={{ height: "150px", width: "150px" }}
            />
          </PhotoView>
        </PhotoProvider>

        <Card.Body>
          <Card.Title>{service.title}</Card.Title>
          <Card.Text>{service.description}</Card.Text>
          <Card.Text>Price of the service: ${service.price}</Card.Text>

          <ListGroup as="ol" numbered>
            {service.facility.map((f, index) => (
              <ListGroup.Item
                as="li"
                key={index}
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{f.name}</div>
                  {f.details}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button variant="outline-secondary">
            <Link
              to={`/checkout/${service._id}`}
              className="text-decoration-none"
            >
              Add service
            </Link>
          </Button>
        </Card.Body>
      </Card>
      <div className="m-5">
        
        <ReviewTab  serviceId={service._id}></ReviewTab>
        <Reviews  service={service}></Reviews>
      </div>
    </div>
  );
};

export default ServiceDescription;
