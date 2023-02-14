import React from "react";
import { useSelector } from "react-redux";

const ShoppingCard = () => {
  const { cart } = useSelector((state) => state.cart);
  console.log("cart :", cart);
  return (
    <div className="w-full h-screen">
      <p>Hello</p>
    </div>
  );
};

export default ShoppingCard;
