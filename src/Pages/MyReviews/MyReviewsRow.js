import React from "react";
import { Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

const MyReviewsRow = ({
  review,
  index,
  handleDelete,
  handleShow,
  
}) => {
  const { _id, serviceName, email, text } = review;

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{serviceName}</td>
      <td>{email}</td>
      <td>{text}</td>
      <td>
        <Button onClick={() => handleDelete(_id)}>X</Button>
      </td>
      <td>
        <Button onClick={(() => handleShow(_id))}>
          <FaEdit></FaEdit>
        </Button>
      </td>
    </tr>
  );
};

export default MyReviewsRow;
