import React from "react";

const Order = (props) => {
  const { name, img, key, quantity } = props.products;
  return (
    <>
      <div className="col-12 row justify-content-between align-items-center border-bottom p-4">
        <div className="img-box col-2">
          <img width="100" src={img} alt="" />
        </div>
        <div className="col-10">
          <h5>{name}</h5>
          <small className="text-success">id: {key}</small>
          <p className="fw-bold">Quantity: {quantity}</p>
          <button
            onClick={() => props.removeClick(key)}
            className="btn btn-warning fs-6 border border-dark px-4 py-1"
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default Order;
