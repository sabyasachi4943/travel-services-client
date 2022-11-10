import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://travel-services-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center flex-wrap p-3">
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
