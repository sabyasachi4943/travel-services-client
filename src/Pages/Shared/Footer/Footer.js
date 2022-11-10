import React from "react";
import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mx-auto text-center text-white bg-dark footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> providing you the best experience
          during your travel.
        </p>
        <div className="icons p-2 d-flex">
          <div className=" p-2">
            <FaFacebook></FaFacebook>
          </div>
          <div className=" p-2">
            <FaTwitter></FaTwitter>
          </div>
          <div className=" p-2">
            <FaInstagram></FaInstagram>
          </div>
          <div className=" p-2">
            <FaGooglePlus></FaGooglePlus>
          </div>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> Shaheed Sharani, Dhaka 1206</span> Dhaka, Bangladesh
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+00) 0000 000 000</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <> office@company.com</>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          Travel<span> Services</span>
        </h2>
        <p className="menu">
          <> Home</> |<> About</> |<> Services</>
        </p>
        <p className="name"> Travel Services &copy; 2022</p>
      </div>
    </div>
  );
};

export default Footer;
