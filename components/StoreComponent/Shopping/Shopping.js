import React from "react";
import Products from "../Products/Products";
import ShoppingCard from "../ShopingCard/ShoppingCard";

const Shopping = () => {
  return (
    <section className="container flex mt-32">
      <div className="lg:w-10/12">
        <Products />
      </div>
      <div className="lg:w-2/12">
        <ShoppingCard />
      </div>
    </section>
  );
};

export default Shopping;
