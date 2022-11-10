import React from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const Testimonials = () => {
  return (
    <div className="d-block h-40 text-center m-5">
      <h3>Testimonials</h3>
      <Carousel>
        <Carousel.Item>
          <Card style={{ width: "100%", height: "150px" }}>
            <Card.Body>
              <Image
                src={`https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1600`}
                alt=""
                srcset=""
                roundedCircle="true"
                style={{ height: "35px", width: "35px" }}
              />
              <Card.Title>Sam Bankman</Card.Title>
              <Card.Text>
                Before using this travel services i was not able to think that
                all travel things can be this much easier. I am so satisfied by
                having their services. I recommend everyone to use their
                services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "100%", height: "150px" }}>
            <Card.Body>
              <Image
                src={`https://images.pexels.com/photos/7562139/pexels-photo-7562139.jpeg?auto=compress&cs=tinysrgb&w=1600`}
                alt=""
                roundedCircle="true"
                style={{ height: "35px", width: "35px" }}
              />
              <Card.Title>Walter Smith</Card.Title>
              <Card.Text>
                The services are great and their security services helped me a
                lot to find my lost luggage. I am very thankful to them.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "100%", height: "150px" }}>
            <Card.Body>
              <Image
                src={`https://images.pexels.com/photos/977418/pexels-photo-977418.jpeg?auto=compress&cs=tinysrgb&w=1600`}
                alt=""
                roundedCircle="true"
                style={{ height: "35px", width: "35px" }}
              />
              <Card.Title>Alex Buffet</Card.Title>
              <Card.Text>
                This service company gives the best deal while traveling they
                introduced me to some great places to go for dinner. Loved it.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Testimonials;
