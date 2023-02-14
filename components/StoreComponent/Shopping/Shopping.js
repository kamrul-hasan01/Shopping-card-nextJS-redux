import React from "react";
import Products from "../Products/Products";
import ShoppingCard from "../ShopingCard/ShoppingCard";

const Shopping = () => {
  return (
    <section className="container flex">
      <div className="lg:w-9/12 mt-24 pr-5">
        <Products />
      </div>
      <div className="lg:w-3/12 relative">
        <ShoppingCard />
      </div>
    </section>
  );
};

export default Shopping;
