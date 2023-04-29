import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Registration = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [accept, setAccept] = useState(false);
  const { EmailRegister } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/courses";

  const handleRegister = (event) => {
    event.preventDefault();
    const target = event.target;
    const nameValue = target.name.value;
    const emailValue = target.email.value;
    const passwordValue = target.password.value;
    const cPasswordValue = target.cPassword.value;

    if (passwordValue !== cPasswordValue) {
      setErrorMessage(
        "Password and Confirm Password are not the same !!! Try again !!!"
      );
      setSuccessMessage("");
      return;
    }

    EmailRegister(emailValue, passwordValue)
      .then((user) => {
        console.log(user);
        setSuccessMessage("Registration successfully !!!");
        setErrorMessage("");
        target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        setSuccessMessage("");
      });
  };

  const handleCheck = (event) => {
    setAccept(event.target.checked);
  };

  return (
    <div className="bg-base-200">
      <div className="flex flex-col items-center justify-center py-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold py-6">Registration here!</h1>
        </div>
        <form
          onSubmit={handleRegister}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                name="name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
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
                placeholder="Enter Password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered"
                name="cPassword"
                required
              />
            </div>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Login Now ???
              </Link>
            </label>
            <div className="form-control pb-2">
              <label onClick={handleCheck} className="flex items-center">
                <input type="checkbox" name="check" className="checkbox mr-3" />
                <span>
                  {
                    <>
                      Accept{"   "}
                      <Link className="underline text-gray-400" to="/terms">
                        Terms And Conditions
                      </Link>
                    </>
                  }
                </span>
              </label>
            </div>
            {ErrorMessage && (
              <p className="text-red-500 pb-2">{ErrorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 pb-2">{successMessage}</p>
            )}
            <div className="form-control">
              <button className="btn" disabled={!accept}>
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
