import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActiveNav from "../Common/ActiveNav/ActiveNav";

const Categories = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`https://learn-english-server-pronoy568.vercel.app/categories`)
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div className="py-5 m-5">
      <h1 className="text-4xl font-semibold">Category</h1>
      <div className="flex flex-col pt-5">
        {list.map((category) => (
          <ActiveNav to={`/courses/${category.id}`} key={category.id}>
            <p className="text-xl my-1">{category.name}</p>
          </ActiveNav>
        ))}
      </div>
    </div>
  );
};

export default Categories;
