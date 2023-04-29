import React, { useContext } from "react";
import logo from "../../../assets/logo/logo.png";
import ActiveNav from "../ActiveNav/ActiveNav";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import person from "../../../assets/logo/person.png";

const Header = () => {
  const { userLogin, LogOut } = useContext(AuthContext);

  return (
    <div className="navbar bg-gray-600 container px-8">
      <div className="flex-1">
        <img src={logo} className="w-20 rounded" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-white text-xl">
          <li className="mx-3">
            <ActiveNav to="/">Home</ActiveNav>
          </li>
          <li className="mx-3">
            <ActiveNav to="/courses">Courses</ActiveNav>
          </li>
          {userLogin ? (
            <>
              <li className="mx-3">
                <p onClick={LogOut}>Logout</p>
                <div
                  className="tooltip tooltip-open tooltip-bottom"
                  data-tip={
                    userLogin.displayName
                      ? userLogin.displayName
                      : userLogin.email
                  }
                >
                  <img
                    style={{ borderRadius: "50%" }}
                    className="w-16"
                    src={
                      userLogin.photoURL === null ? person : userLogin.photoURL
                    }
                    alt={userLogin.email}
                  />
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="mx-3">
                <ActiveNav to="/login">Login</ActiveNav>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
