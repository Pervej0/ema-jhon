import React, { useEffect, useState } from "react";
import Cart from "./Cart/Cart";
import { getStorage, sotrage } from "../../../Storage/storage";
import Product from "./Product/Product";
import useProduct from "../../../Hooks/useProduct";
import { Link } from "react-router-dom";

const Shop = () => {
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [products] = useProduct();
  const [searchProduct, setSearchProduct] = useState([]);
  const [productsItem, setProductsItem] = useState([]);
  const [cart, setCart] = useState([]);
  const perPageItem = 10;
  const totalPage = Math.ceil(count / perPageItem);

  // load data for shop page-
  useEffect(() => {
    fetch(
      `http://localhost:5000/products/?page=${page}&&perPage=${perPageItem}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProductsItem(data.products);
        setSearchProduct(data.products);
        setCount(data.count);
      });
  }, [page]);
  // console.log(productsItem);

  const addToCartClick = (product) => {
    const newCart = [...cart, product];
    console.log(newCart);
    sotrage(product.key);
    setCart(newCart);
  };

  useEffect(() => {
    const keyLists = getStorage();
    let productList = [];
    for (const key in keyLists) {
      const product = productsItem.find((list) => list.key === key);
      productsItem["quantity"] = keyLists[key];
      productList.push(product);
    }
    if (productList[0]) {
      setCart(productList);
    }
  }, [productsItem]);

  const searchField = (event) => {
    const searchText = event.target.value;
    const selectedProduct = productsItem.filter((item) =>
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
          {searchProduct?.map((item, index) => (
            <Product
              product={item}
              addToCartClick={addToCartClick}
              key={index}
            />
          ))}
          <div className="pagination-field text-center my-5">
            {[...Array(totalPage).keys()].map((number) => (
              <button
                key={number}
                onClick={() => setPage(number)}
                className={
                  number === page ? "ms-3 px-2 btn-success" : "ms-3 px-2"
                }
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="cart-container col-3">
          <Cart cart={cart}>
            <Link
              type="button"
              className="btn btn-warning fs-6 border border-dark px-5 py-1"
              to="/review"
            >
              Review Your Order
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
