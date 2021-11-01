import { useEffect, useState } from "react";
import { getStorage } from "../Storage/storage";

const useCart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getProducts = getStorage();
    const keys = Object.keys(getProducts);
    if (keys) {
      fetch(`http://localhost:5000/products/keys`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(keys),
      })
        .then((res) => res.json())
        .then((products) => {
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
        });
    }
  }, []);

  return [cart, setCart];
};

export default useCart;
