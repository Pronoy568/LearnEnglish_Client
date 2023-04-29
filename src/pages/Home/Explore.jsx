import React from "react";
import img1 from "../../../public/image5.jpg";

const Explore = () => {
  return (
    <div className="w-11/12 mx-auto mt-5 pb-4">
      <div className="md:flex">
        <div className="md:w-6/12 md:flex justify-center items-center">
          <div>
            <h2 className="text-4xl font-bold">
              Practicing and exploring new knowledge
            </h2>
            <p className="text-xl my-4 text-gray-500 text-justify">
              Universities have to explore new knowledge and replace the best of
              our knowledge with something even better, and simultaneously
              exploit existing knowledge through the best possible dissemination
              of this present knowledge to students and the public.
            </p>
          </div>
        </div>
        <div className="md:w-6/12 md:ms-5 md:mt-0 mt-5">
          <img className="rounded-lg" src={img1} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
