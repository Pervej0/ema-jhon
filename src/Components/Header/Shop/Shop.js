import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import { getStorage, sotrage } from "../../../Storage/storage";
import Product from "./Product/Product";
import useProduct from "../../../Hooks/useProduct";

const Shop = () => {
  // const [products, setProducts] = useState([]);
  // Search product and load product inject in to custome hook-
  const [products, searchProduct, setSearchProduct] = useProduct();
  const [cart, setCart] = useState([]);
  // const [searchProduct, setSearchProduct] = useState([products]);

  /*  useEffect(
    () =>
      fetch("./Products.json")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setSearchProduct(data);
        }),
    []
  ); */
  const addToCartClick = (product) => {
    const newCart = [...cart, product];
    sotrage(product.key);
    setCart(newCart);
  };

  useEffect(() => {
    const keyLists = getStorage();
    let productList = [];
    for (const key in keyLists) {
      const product = products.find((list) => list.key === key);
      products["quantity"] = keyLists[key];
      productList.push(product);
    }
    if (productList[0]) {
      setCart(productList);
    }
  }, [products]);

  const searchField = (event) => {
    const searchText = event.target.value;
    const selectedProduct = products.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchProduct(selectedProduct);
  };

  return (
    <div>
      <div className="bg-dark py-3 my-0">
        <input
          className="form-control w-75 m-0 mx-auto py-1"
          type="input"
          onChange={searchField}
          placeholder="Search here..."
        />
      </div>
      <div className="row px-5">
        <div className="prodocuts-container col-9 border-end">
          {searchProduct.map((item, index) => (
            <Product
              product={item}
              addToCartClick={addToCartClick}
              key={index}
            />
          ))}
        </div>
        <div className="cart-container col-3">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
