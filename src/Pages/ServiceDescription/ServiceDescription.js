import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';

const ServiceDescription = () => {
  
  const service = useLoaderData();
  return (
    <div>
      <h2>{service.title}</h2>
      <Reviews service={service}></Reviews>
    </div>
  );
};

export default ServiceDescription;