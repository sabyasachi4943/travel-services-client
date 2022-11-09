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
      <h4>this is the review section</h4>
      <h4>{reviews.length}</h4>
      {reviews.map((review) => (
        <Card key={review._id} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{review.name}</Card.Title>
            <Card.Text>{review.text}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ReviewTab;
