import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Card from "react-bootstrap/Card";

const ReviewTab = ({ serviceId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/service-review?service=${serviceId}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });

  return (
    <div>
      <h4>Service reviews</h4>
      <h4> Total Reviews: {reviews.length}</h4>
      {reviews.map((review) => (
        <Card
          key={review._id}
          style={{ width: "18rem" }}
          className=" border-info"
        >
          <Card.Body className="">
            <Card.Title>{review.name}</Card.Title>
            <Card.Text>{review.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ReviewTab;
