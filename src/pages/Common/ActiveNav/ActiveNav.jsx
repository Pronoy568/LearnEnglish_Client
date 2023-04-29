import React from "react";
import { NavLink } from "react-router-dom";

const ActiveNav = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isActive ? "bg-gray-200 text-black p-2 rounded-lg" : "p-2"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveNav;
