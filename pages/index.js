import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Shopping from "../components/Shopping/Shopping";
import { fetchProducts } from "../redux/slices/productSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Shopping />
    </>
  );
}
