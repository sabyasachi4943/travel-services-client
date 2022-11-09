import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="mx-auto d-block "
            src={`https://img.freepik.com/free-vector/travel-tourism-illustration-with-resort-sightseeing-elements_1284-30189.jpg?w=1800&t=st=1668014715~exp=1668015315~hmac=51a037fbfe20833519bcc1316fd2bfb27fd6d9ea328a5d575f3284c508bbee57`}
            alt="First slide"
            style={{ width: "900px", height: "300px" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
