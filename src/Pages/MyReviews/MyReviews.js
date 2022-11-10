import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Orders from "../Orders/Orders";
import MyReviewsRow from "./MyReviewsRow";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(user);
  const location = useLocation();

  const [show, setShow] = useState(false);

  const [reviewId, setReviewId] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    console.log(id);
    setReviewId(id);
    setShow(true);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order",
    );
    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = reviews.filter((r) => r._id !== id);
            setReviews(remaining);
          }
        });
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    let rid = reviewId;
    const form = event.target;
    const reviewText = form.reviewText.value;

    fetch(`http://localhost:5000/reviews/${rid}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text: `${reviewText}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = reviews.filter((odr) => odr._id !== rid);
          const newReview = reviews.find((odr) => odr._id === rid);
          newReview.text = `${reviewText}`;

          const newOrders = [newReview, ...remaining];
          setReviews(newOrders);
        }
      })
      .then((error) => console.error(error));
    handleClose();
  };

  return (
    <div className="m-5">
      <h3>my total review : {reviews.length}</h3>
      {user?.email ? (
        "you are logged in"
      ) : (
        <>
          <h3>You are not logged in. Please login.</h3>
          <Navigate to="/login" state={{ from: location }} replace></Navigate>
        </>
      )}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">NO.</th>
              <th scope="col">Service Name</th>
              <th scope="col">Email</th>
              <th scope="col">Your Review </th>
              <th scope="col">Delete </th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <MyReviewsRow
                key={review._id}
                review={review}
                index={index}
                handleDelete={handleDelete}
                handleShow={handleShow}
              ></MyReviewsRow>
            ))}
          </tbody>
        </table>
      </div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{reviewId}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleUpdate}>
              {/*  */}
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                  type="text"
                  name="reviewText"
                  placeholder="Enter Your Review"
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default MyReviews;
