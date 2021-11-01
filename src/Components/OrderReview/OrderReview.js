import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";
import { removeStorage, clearStorage } from "../../Storage/storage";
import Cart from "../Header/Shop/Cart/Cart";
import Order from "../OrderReview/Order/Order";

const OrderReview = () => {
  const [products] = useProduct();
  const [cart, setCart] = useCart();
  const history = useHistory();
  const removeClick = (key) => {
    const remainingItem = cart.filter((item) => item.key !== key);
    setCart(remainingItem);
    removeStorage(key);
  };

  const orderClick = () => {
    history.push("/shipping");
    // clearStorage();
    // console.log(history);
  };

  return (
    <div>
      <div className="row px-5">
        <div className="prodocuts-container col-9 border-end">
          {cart[0]
            ? cart?.map((item) => (
                <Order
                  products={item}
                  removeClick={removeClick}
                  key={item.key}
                ></Order>
              ))
            : 0}
        </div>
        <div className="cart-container col-3">
          <Cart cart={cart}>
            <button
              onClick={() => orderClick()}
              className="btn btn-warning fs-6 border border-dark px-5 py-1"
            >
              Proceed to Order
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
