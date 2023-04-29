import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const { EmailLogin, GoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/courses";

  const handleLogin = (event) => {
    event.preventDefault();
    const target = event.target;
    const emailValue = target.email.value;
    const passwordValue = target.password.value;

    EmailLogin(emailValue, passwordValue)
      .then((user) => {
        console.log(user);
        setErrorMessage("");
        setSuccessMessage("Login Successfully !!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setSuccessMessage("");
      });
  };

  const handleGoogleLogin = () => {
    GoogleLogin()
      .then((result) => {
        console.log(result);
        setErrorMessage("");
        setSuccessMessage("Login Successfully !!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setSuccessMessage("");
      });
  };

  return (
    <div className="bg-base-200">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold py-6">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}>
            <div className="px-8 pt-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <Link
                    to="/register"
                    className="label-text-alt link link-hover my-2"
                  >
                    Registration Here ???
                  </Link>
                </label>
              </div>
              {ErrorMessage && (
                <p className="text-red-500 pb-2">{ErrorMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 pb-2">{successMessage}</p>
              )}
              <div className="form-control">
                <button className="btn">Login</button>
                <div className="divider text-blue-600">OR</div>
              </div>
            </div>
          </form>
          <button onClick={handleGoogleLogin} className="btn bg-slate-500">
            Google Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
