import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
const Products = () => {
  const { products, loading, error } = useSelector((state) => state.products);

  return (
    <>
      <div className="flex flex-wrap">
        {products.slice(0, 5).map((item, idx) => {
          return <Product key={idx} content={item} />;
        })}
      </div>
    </>
  );
};

export default Products;
