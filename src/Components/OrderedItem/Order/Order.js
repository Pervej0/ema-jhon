import React from "react";

const Order = ({ orderList }) => {
  const { fullName, location, order } = orderList;

  const orderCount = () => {
    let totalOrder = 0;
    for (let orderItem in order) {
      totalOrder += order[orderItem];
    }
    return totalOrder;
  };

  return (
    <div className="border">
      <h2>Name: {fullName}</h2>
      <h2>Address: {location}</h2>
      <h2>Total Order product: {orderCount()}</h2>
    </div>
  );
};

export default Order;
