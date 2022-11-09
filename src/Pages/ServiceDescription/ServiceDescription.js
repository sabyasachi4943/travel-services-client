import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import ReviewTab from '../ReviewTab/ReviewTab';

const ServiceDescription = () => {
  
  const service = useLoaderData();
  return (
    <div>
      <h2>{service.title}</h2>
      <ReviewTab serviceId ={service._id}></ReviewTab>
      <Reviews service={service}></Reviews>
    </div>
  );
};

export default ServiceDescription;