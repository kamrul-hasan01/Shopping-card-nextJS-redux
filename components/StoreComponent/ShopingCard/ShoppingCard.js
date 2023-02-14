/* eslint-disable @next/next/no-img-element */
import React from "react";
import useCart from "../../Hooks/useCart";

import { Minus, Plus } from "../../SVG/SVG";

const ShoppingCard = () => {
  const { handleDelete, cart, totalPrice, handleCheckout, handleQuantity } =
    useCart();

  return (
    <div className="sticky top-0 left-0  w-full">
      <div className="h-screen overflow-y-auto pt-28">
        <h2 className="text-lg font-medium">Shopping cart</h2>
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {cart.length ? (
            cart.map((item, idx) => {
              return (
                <li key={idx} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    {/* // eslint-disable-next-line @next/next/no-img-element, @next/next/no-img-element */}
                    <img
                      src={item?.img}
                      alt="Salmon"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>{" "}
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium">
                        <h3>{item?.name}</h3>
                        <p className="ml-4">${item?.price}</p>
                      </div>
                      <p className="mt-1 text-sm">{item?.category}</p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className=" flex items-center gap-x-2">
                        <span
                          onClick={() => handleQuantity(item?.key, "minus")}
                        >
                          <Minus />
                        </span>
                        <span className="text-xl">{item?.quantity}</span>
                        <span onClick={() => handleQuantity(item?.key, "plus")}>
                          <Plus />
                        </span>
                      </p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => handleDelete(item?.key)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <li>
              <p className="pt-10">Your cart is empty</p>
            </li>
          )}
        </ul>
      </div>
      <div className="border-t border-gray-200 py-6 px-4 sm:px-6 absolute left-0 bottom-0 w-full">
        <div className="flex justify-between text-base font-medium">
          <p>Subtotal</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <p
            onClick={() => handleCheckout()}
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
