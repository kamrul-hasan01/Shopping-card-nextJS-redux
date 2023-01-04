/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/slices/cartSlice";
import { Start } from "../SVG/SVG";

const Product = ({ content }) => {
  const dispatch = useDispatch();
  const { name, price, img } = content;
  const { cart } = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    let exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      let newProduct = { ...exists };
      newProduct.quantity = newProduct.quantity + 1;
      newCart = [...rest, newProduct];
    } else {
      let newProduct = { ...product };
      newProduct.quantity = 1;
      newCart = [...cart, newProduct];
    }

    dispatch(setCart(newCart));
  };
  return (
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
            <p
              class="text-white   focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 cursor-pointer"
              onClick={() => handleAddToCart(content)}
            >
              Add to cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
