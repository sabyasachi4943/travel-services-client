import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h2>All services : {services.length}</h2>
      {services.map((service) => (
        <Service
          key={service._id}
          service={service}
          // handleAddService={handleAddService}
        ></Service>
      ))}
    </div>
  );
};

export default Services;
