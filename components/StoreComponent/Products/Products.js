import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/slices/productSlice";
import Loading from "../../Common/Loading/Loading";

import Product from "./Product";
const Products = () => {
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
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
