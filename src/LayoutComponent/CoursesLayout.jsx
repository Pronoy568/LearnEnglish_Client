import React from "react";
import Header from "../pages/Common/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Common/Footer/Footer";
import Categories from "../pages/Courses/Categories";

const CoursesLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto px-4 md:flex">
        <div className="md:w-1/5">
          <Categories></Categories>
        </div>
        <div className="md:w-4/5">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CoursesLayout;
