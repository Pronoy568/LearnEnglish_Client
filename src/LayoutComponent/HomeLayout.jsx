import React from "react";
import Header from "../pages/Common/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Common/Footer/Footer";

const HomeLayout = () => {
  return (
    <div className="container">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
