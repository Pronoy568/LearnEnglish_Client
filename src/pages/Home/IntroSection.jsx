import React from "react";
import img1 from "../../../public/image4.jpg";
import { Link } from "react-router-dom";

const IntroSection = () => {
  return (
    <div className="w-11/12 mx-auto mt-5 pb-4">
      <div className="md:flex">
        <div className="md:w-6/12">
          <img className="rounded-lg" src={img1} alt="image" />
        </div>
        <div className="md:w-6/12 md:flex justify-center items-center md:ms-5 md:mt-0 mt-5">
          <div>
            <h2 className="text-4xl font-bold">Learn English improve skills</h2>
            <p className="text-xl my-4 text-gray-500 text-justify">
              The approach you take when learning English can vary depending on
              your initial level and your desired level of proficiency. In
              general, you need to develop these four basic skills: speaking,
              reading, writing, and listening. Everyone has different strengths,
              so expect some to be easier for you than others.
            </p>

            <button className="btn btn-primary">
              <Link to="/courses">Courses</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
