import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { clearStorage, getStorage } from "../../../Storage/storage";

const Shipping = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    label,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    const ordered = getStorage();
    data.order = ordered;

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Your order successfully done. 😉");
          reset();
          clearStorage();
          history.push("/order");
        }
      });

    console.log(data);
  };

  return (
    <div className="text-left my-3">
      <h3 className="text-center">Fill up this form</h3>
      <form
        className="w-50 mx-auto border p-4 my-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="fw-bold mb-2">Full Name:</label>
        <input
          className="form-control mb-3"
          defaultValue={user.displayName}
          placeholder="Enter your name"
          {...register("fullName")}
        />
        <label className="fw-bold my-2">Your Email:</label>
        <input
          className="form-control"
          defaultValue={user.email}
          placeholder="Enter your email"
          {...register("email", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.email && (
          <span className="text-danger d-block">This field is required</span>
        )}
        <label className="fw-bold my-2">Your Phone:</label>
        <input
          className="form-control"
          defaultValue={user.number}
          placeholder="Enter your phone no."
          {...register("number", { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.number && (
          <span className="text-danger d-block">This field is required</span>
        )}
        <div className="d-flex justify-content-between ">
          <div className="w-50">
            <label className="fw-bold my-2">City:</label>
            <input
              className="form-control"
              placeholder="Enter your city"
              {...register("city", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.city && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          &nbsp;&nbsp;
          <div className="w-50">
            <label className="fw-bold my-2">Location:</label>
            <input
              className="form-control"
              placeholder="Enter your location"
              {...register("location", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.location && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
        </div>
        <input
          className="d-block mt-3 btn btn-warning fs-6 border border-dark px-5 py-1"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Shipping;
