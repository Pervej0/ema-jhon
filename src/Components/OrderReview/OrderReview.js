import React, { useEffect } from "react";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";
import { removeStorage, setSotrage } from "../../Storage/storage";
import Cart from "../Header/Shop/Cart/Cart";
import Order from "./Order/Order";

const OrderReview = () => {
  const [products] = useProduct();
  const [cart, setCart] = useCart(products);
  const removeClick = (key) => {
    const remainingItem = cart.filter((item) => item.key !== key);
    setCart(remainingItem);
    removeStorage(key);
  };

  return (
    <div>
      <div className="row px-5">
        <div className="prodocuts-container col-9 border-end">
          {cart[0]
            ? cart.map((item) => (
                <Order products={item} removeClick={removeClick}></Order>
              ))
            : 0}
        </div>
        <div className="cart-container col-3">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
