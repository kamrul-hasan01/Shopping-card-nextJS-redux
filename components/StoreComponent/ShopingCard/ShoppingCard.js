/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../../redux/slices/cartSlice";

import { Minus, Plus } from "../../SVG/SVG";

const ShoppingCard = () => {
  const { cart } = useSelector((state) => state.cart);
  const { products } = useSelector((state) => state.products);

  const total = cart?.reduce(
    (previous, product) => previous + product?.price * product?.quantity,
    0
  );
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.key !== id);
    dispatch(setCart(newCart));
  };
  const handleQuantity = (key, type) => {
    const newCart = cart.map((item) => {
      if (item.key === key) {
        let newProduct;
        if (type === "plus" && item.quantity < item.stock) {
          newProduct = { ...item };
          newProduct.quantity = newProduct.quantity + 1;
        } else if (type === "minus" && item.quantity > 1) {
          newProduct = { ...item };

          newProduct.quantity = newProduct.quantity - 1;
        } else return item;
        return newProduct;
      } else return item;
    });

    dispatch(setCart(newCart ? newCart : []));
  };
  const handleCheckout = () => {
    const confirm = window.confirm(" sure");
    if (confirm) {
      dispatch(setCart([]));
      localStorage.removeItem("cart");
    }
  };

  const handleTest = () => {
    const getData = JSON.parse(localStorage.getItem("cart"));
    let newCart = [];

    if (getData) {
      products.filter((item) =>
        getData.find((local_item) => {
          let newItem;
          if (local_item.key === item.key) {
            newItem = { ...item };
            newItem.quantity = local_item.quantity;
            newCart = [...newCart, newItem];
          }
        })
      );
      dispatch(setCart(newCart));
    }
  };
  useEffect(() => {
    handleTest();
  }, [products]);
  return (
    <div className="relative z-10">
      <div className="fixed">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div className="pointer-events-auto w-screen max-w-md">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                <div className="flex items-start justify-between">
                  <h2
                    className="text-lg font-medium text-gray-900"
                    id="slide-over-title"
                  >
                    Shopping cart
                  </h2>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
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
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>{item?.name}</h3>
                                    <p className="ml-4">${item?.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item?.category}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <p className=" flex items-center gap-x-2">
                                    <span
                                      onClick={() =>
                                        handleQuantity(item?.key, "minus")
                                      }
                                    >
                                      <Minus />
                                    </span>
                                    <span className="text-xl">
                                      {item?.quantity}
                                    </span>
                                    <span
                                      onClick={() =>
                                        handleQuantity(item?.key, "plus")
                                      }
                                    >
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
                          <p>Your cart is empty</p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${total.toFixed(2)}</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;