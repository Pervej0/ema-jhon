import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState([products]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearchProduct(data);
      });
  }, []);
  return [products, searchProduct, setSearchProduct];
};

export default useProduct;
