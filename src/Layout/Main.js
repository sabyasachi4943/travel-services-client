import React from "react";

import { Outlet } from "react-router-dom";
import Banner from "../Pages/Home/Banner/Banner";

import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Outlet></Outlet>    
      <Footer></Footer>
    </div>
  );
};

export default Main;
