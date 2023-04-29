import React from "react";
import { useLoaderData } from "react-router-dom";

const Premium = () => {
  const { title, premium, image, link } = useLoaderData();

  return (
    <div>
      <h1 className="text-5xl text-center font-bold py-8">Premium</h1>
      <div className="w-9/12 mx-auto pb-10">
        <div className="flex flex-col justify-center items-center">
          <figure>
            <img className="rounded w-96 pb-6" src={image} alt={title} />
          </figure>
          <div className="text-center">
            <h2 className="text-4xl font-semibold ">{title}</h2>
            <p className="text-justify py-6">{premium}</p>
            <button className="btn btn-accent">
              <a className="nav-link" href={link} target="_blank">
                Download PDF
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
