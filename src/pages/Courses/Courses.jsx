import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Courses = () => {
  const CoursesData = useLoaderData();

  return (
    <div className="py-5 m-5">
      <h1 className="text-4xl pb-5 font-semibold">
        {CoursesData.length > 20 ? "All" : CoursesData[0].categories} Total
        Courses: {CoursesData.length}
      </h1>
      <div className="md:grid grid-cols-2 gap-4">
        {CoursesData.map((courses) => (
          <div key={courses.id} className="pt-5">
            <div className="card w-96 glass">
              <figure>
                <img
                  className="rounded-lg mt-4"
                  src={courses.image}
                  alt={courses.title}
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-xl font-bold">
                  {courses.title}
                </h1>
                <p className="text-gray-500">{courses.description}</p>
                <div className="flex my-2">
                  <p>Price: ${courses.price}</p>
                  <div className="tooltip" data-tip={courses.rating}>
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={courses.rating}
                      readOnly
                    />
                  </div>
                </div>
                <div className="card-actions justify-center border border-1 rounded-lg bg-slate-200 hover:bg-slate-300">
                  <Link to={`/premium/${courses.id}`}>
                    <button className="p-3 text-blue-900 font-semibold text-lg">
                      Get Premium Access
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
