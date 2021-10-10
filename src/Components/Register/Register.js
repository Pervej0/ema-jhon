import React from "react";
import { Link } from "react-router-dom";
import useFirebse from "../../Hooks/useFirebase";

const Register = () => {
  const { googleSignIn } = useFirebse();
  return (
    <div className="w-25 mx-auto border my-5 text-left p-3">
      <form className="mb-3">
        <label className="fw-bold mb-2">Your full name:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter your name"
        />
        <label className="fw-bold my-2">Your email:</label>
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
        <label className="fw-bold my-2">Confirm Password:</label>
        <input
          className="form-control"
          type="password"
          placeholder="Re-enter your password"
        />
        <button type="submit" className="btn btn-dark mt-4 px-3 py-1">
          Sign up
        </button>
      </form>
      <div className="mb-4">--------------------- or -----------------</div>
      <button
        type="button"
        className="btn btn-warning fs-6 border border-dark px-5 py-1"
        onClick={googleSignIn}
      >
        Sign up with Google
      </button>
      <div className="my-3">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-success">
            Just sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
