import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebse from "../../Hooks/useFirebase";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  // const { googleSignIn } = useFirebse();
  const { googleSignIn } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const logIn = () => {
    googleSignIn().then((result) => {
      const userInfo = result.user;
      // setUser(userInfo);
      history.replace(from);
      console.log(userInfo);
    });
  };

  return (
    <div className="w-25 mx-auto border my-5 text-left p-3">
      <form className="mb-3">
        <label className="fw-bold mb-2">Your email:</label>
        <input
          className="form-control"
          type="email"
          placeholder="Enter your email"
        />
        <label className="fw-bold my-2">Your Password:</label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit" className="btn btn-dark mt-4 px-3 py-1">
          Log in
        </button>
      </form>
      <div className="mb-4">--------------------- or -----------------</div>
      <button
        type="button"
        className="btn btn-warning fs-6 border border-dark px-5 py-1"
        onClick={logIn}
      >
        Sign in with Google
      </button>
      <div className="my-3">
        <p>
          Are you new here?{" "}
          <Link to="/register" className="text-success">
            Register an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
