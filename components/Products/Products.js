import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
import Product from "./Product";
const Products = () => {
  const { products, loading } = useSelector((state) => state.products);

  return (
    <>
      <div className="flex flex-wrap">
        {loading && <Loading />}
        {products.slice(0, 8).map((item, idx) => {
          return <Product key={idx} content={item} />;
        })}
      </div>
    </>
  );
};

export default Products;
