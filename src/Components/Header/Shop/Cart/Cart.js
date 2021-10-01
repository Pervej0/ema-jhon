import React from "react";
import { getStorgae } from "../Storage/storage";
import { ordered } from "./Ordered/ordered";

const Cart = (props) => {
  const { cart } = props;
  const storageProduct = getStorgae();
  let orderCount = 0;
  for (let key in storageProduct) {
    orderCount += storageProduct[key];
  }

  let itemCost = 0;
  let shippingCost = 0;
  for (let item of cart) {
    itemCost += item.price;
    if (itemCost < 250) {
      shippingCost = (itemCost * 7) / 100;
    } else if (itemCost < 600) {
      shippingCost = (itemCost * 6) / 100;
    } else if (itemCost < 1500) {
      shippingCost = (itemCost * 5) / 100;
    } else {
      shippingCost = (itemCost * 4) / 100;
    }
  }
  const TotalBeforeTax = itemCost + shippingCost;
  const tax = (TotalBeforeTax * 10) / 100;
  const orderTotal = TotalBeforeTax + tax;

  const reviewClick = () => {
    ordered(cart);
  };
  return (
    <div>
      <h4 className="text-center">Order Summery</h4>
      <h5 className="fw-normal text-center">Items ordered: {orderCount}</h5>
      <table className="text-left w-100 ms-2">
        <tbody>
          <tr className="border-bottom">
            <td className="py-2">Items:</td>
            <td>
              $<span className="price">{itemCost.toFixed(2)}</span>
            </td>
          </tr>
          <tr className="border-bottom">
            <td className="py-2">Shipping & Handling:</td>
            <td>
              $<span className="price">{shippingCost.toFixed(2)}</span>
            </td>
          </tr>
          <tr className="border-bottom">
            <td className="py-2">Total before tax: </td>
            <td>
              $<span className="price">{TotalBeforeTax.toFixed(2)}</span>
            </td>
          </tr>
          <tr className="border-bottom">
            <td className="py-2">Estimated Tax:</td>
            <td>
              $<span className="price">{tax.toFixed(2)}</span>
            </td>
          </tr>
          <tr className="h5 text-success">
            <td className="py-2">Order Total:</td>
            <td>
              $<span className="price">{orderTotal.toFixed(2)}</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-center mt-2">
        <button
          className="btn btn-warning fs-6 border border-dark px-5 py-1"
          onClick={reviewClick}
        >
          Review your order
        </button>
      </div>
    </div>
  );
};

export default Cart;
