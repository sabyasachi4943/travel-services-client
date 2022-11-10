import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviews = () => {

  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(user)
  const location = useLocation();
 


  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email])


  return (
    <div>
      <h3>my total review : {reviews.length}</h3>
      {user?.email ? (
        "you are logged in"
      ) : (
        <>
          <h3>You are not logged in. Please login.</h3>
          <Navigate to="/login" state={{ from: location }} replace></Navigate>
        </>
      )}
    </div>
  );
};

export default MyReviews;