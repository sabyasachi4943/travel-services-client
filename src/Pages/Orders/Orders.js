import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Orders = () => {
  
  const [orders, setOrders] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email, logOut]);

  return (
    <div>
      <h3>total orders: {orders.length}</h3>
      {orders.map((order) => (
        <p key={order._id}>{order.serviceName}</p>
      ))}
    </div>
  );
};

export default Orders;
