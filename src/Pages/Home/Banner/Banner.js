import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="mx-auto d-block "
            src={`https://img.freepik.com/free-photo/travel-concept-with-worldwide-landmarks_23-2149153263.jpg?3&w=1060&t=st=1668005933~exp=1668006533~hmac=7964a0e4b2f41c8a2d84aab1eb8b86013f931c3783a2cf20c8c30201a43edc13`}
            alt="First slide"
            style={{ width: "auto", height: "600px" }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
