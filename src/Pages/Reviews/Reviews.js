import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Reviews = ({ service }) => {
  const { user } = useContext(AuthContext);

  const { _id, service_id, title, price } = service;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || "unregistered";
    const text = form.text.value;

    let d = new Date();

    const review = {
      service: _id,
      serviceName: title,
      price,
      service_id,
      name,
      email,
      text,
      createdAt: d.toString(),
    };

    fetch("https://travel-services-server.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem('travel-token')}`
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("review submitted successfully");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div className="align-items-center text-center justify-content-center p-5 m-5  border border-dark rounded">
      <h3>Add your review</h3>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Your Name"
              required
              defaultValue={user?.displayName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              readOnly
              defaultValue={user?.email}
            />
          </Form.Group>

          <Form.Group controlId="form.Textarea">
            <Form.Label>Review</Form.Label>
            <Form.Control name="text" type="text" as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary" className="mt-2" type="submit">
            submit review
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Reviews;
