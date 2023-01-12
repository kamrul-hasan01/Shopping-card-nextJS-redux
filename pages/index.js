import Header from "../components/StoreComponent/Header/Header";
import Shopping from "../components/StoreComponent/Shopping/Shopping";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Header />
      <Shopping />
    </>
  );
};
Index.layout = "PublicLayout";
export default Index;
