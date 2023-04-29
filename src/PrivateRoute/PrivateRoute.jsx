import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userLogin, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <>
        <div>
          <h1 className="text-5xl text-center font-bold py-8 border-gray-100"></h1>
          <div className="w-9/12 mx-auto pb-10 bg-slate-100 animate-pulse flex space-x-4">
            <div className="flex flex-col justify-center items-center">
              <figure>
                <img className="rounded w-96 pb-6" src="" alt="" />
              </figure>
              <div className="text-center">
                <h2 className="text-4xl font-semibold "></h2>
                <p className="text-justify py-6"></p>
                <div>
                  <div className="radial-progress" style={{ "--value": 0 }}>
                    0%
                  </div>
                  <div className="radial-progress" style={{ "--value": 20 }}>
                    20%
                  </div>
                  <div className="radial-progress" style={{ "--value": 60 }}>
                    60%
                  </div>
                  <div className="radial-progress" style={{ "--value": 80 }}>
                    80%
                  </div>
                  <div className="radial-progress" style={{ "--value": 100 }}>
                    100%
                  </div>
                </div>
                <button className=" bg-slate-100 rounded">
                  <a className="nav-link" href="" target="_blank"></a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (userLogin) {
    return children;
  }

  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
