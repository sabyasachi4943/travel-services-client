import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const ShortService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://travel-services-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        let newData = data.slice(0, 3);
        setServices(newData);
      });
  }, []);

  return (
    <div className="">
      <div className="d-flex justify-content-center flex-wrap p-3">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            // handleAddService={handleAddService}
          ></Service>
        ))}
      </div>
      <div className="align-items-center justify-content-center">
        <Button variant="warning">
          <Link className="text-decoration-none" to="/services">
            see all services
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ShortService;
