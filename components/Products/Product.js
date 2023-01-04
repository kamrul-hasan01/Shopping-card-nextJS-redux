/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Start } from "../SVG/SVG";

const Product = ({ content }) => {
  const { name, price, starCount, img } = content;

  return (
    // <div className="w-3/12   p-4">
    //   {/* // eslint-disable-next-line react/jsx-no-comment-textnodes */}
    //   <div className="shadow-black shadow rounded-md p-2 group cursor-pointer">
    //     <img
    //       src={img}
    //       alt=""
    //       className="w-[100%] mx-auto bg-[red] rounded-xl"
    //     />
    //     <p className="text-lg pt-5 pb-2">
    //       <span className="text-white ">$ {price}</span>{" "}
    //       <span className="pl-4 text-gray-400">$ {price + 10}</span>
    //     </p>
    //     <h6 className="text-white text-xl">{name.slice(0, 45)}..</h6>
    //     <div className="flex justify-between items-center py-4">
    //       <p className="text-lg py-2">{starCount} Reviews</p>
    //       <p>
    //         <ShoppingCardIcon />
    //       </p>
    //     </div>
    //   </div>
    // </div>

    <div class="w-3/12 p-4">
      <div className="rounded-lg shadow-md bg-gray-800 border-gray-700">
        <img class="p-8 rounded-t-lg" src={img} alt="product image" />

        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-white">
              {name.slice(0, 34)}..
            </h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <Start />
            <Start />
            <Start />
            <Start />
            <Start />
            <span class=" text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
              5.0
            </span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-white">${price}</span>
            <p class="text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              Add to cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
