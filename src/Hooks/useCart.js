import { useEffect, useState } from "react";
import { getStorage } from "../Storage/storage";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getProducts = getStorage();
    const cartList = [];
    for (const cartKey in getProducts) {
      const addedProduct = products.find((item) => item.key === cartKey);
      if (addedProduct) {
        const quantity = getProducts[cartKey];
        addedProduct.quantity = quantity;
      }
      cartList.push(addedProduct);
    }
    setCart(cartList);
  }, [products]);

  return [cart, setCart];
};

export default useCart;
