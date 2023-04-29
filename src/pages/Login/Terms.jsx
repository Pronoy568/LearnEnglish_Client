import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold pt-10 pb-5 text-center">
        Terms and Conditions
      </h1>
      <ul className="pb-10 list-disc w-96 mx-auto">
        <li>Don't copy anything for the whole project</li>
        <li>Use valid email address</li>
        <li>Safe your authentication. DON'T Panik.</li>
        <li>Start writing using clear, straightforward language</li>
        <li>Link to other necessary legal and website policies </li>
        <li>If need any documentation then safely download</li>
      </ul>
      <div className="text-center pb-10 ">
        <span className="text-2xl text-bold">Go Back to </span>
        <button className="btn btn-accent">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </div>
  );
};

export default Terms;
