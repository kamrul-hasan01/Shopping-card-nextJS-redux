import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../components/StoreComponent/Header/Header";
import Shopping from "../components/StoreComponent/Shopping/Shopping";
import { fetchProducts } from "../redux/slices/productSlice";

export default function Home() {
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
}
