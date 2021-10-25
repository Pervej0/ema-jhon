import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setSearchProduct(data.products);
      });
  }, []);

  return [products, searchProduct, setSearchProduct];
};

export default useProduct;
