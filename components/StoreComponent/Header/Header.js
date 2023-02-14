/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import { URL } from "../../Utils/BaseUrl";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.user);
  const router = useRouter();
  const totalItem = cart.reduce(
    (previous, product) => previous + product?.quantity,
    0
  );
  const handlePayment = async () => {
    try {
      const result = await axios.post(`${URL}/payment/init`);
      console.log("result :", result);
      if (result?.data?.status === "success") {
        router.push(result?.data?.url);
      }
    } catch (error) {
      console.log("error :", error);
    }
  };
  return (
    <header className="border-b border-gray-200 w-full pl-44 fixed top-0 left-0 right-0 bg-[#0F172A] z-[999]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 text-white container">
        <nav className="relative flex items-center justify-between h-16 lg:h-20">
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link href="/" title="" className="text-lg font-medium">
              Home
            </Link>
          </div>
          <p onClick={() => handlePayment()}>testing </p>
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link
              href="/"
              title=""
              className="flex items-center justify-center w-14 h-14  bg-black rounded-full"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span>{totalItem}</span>
            </Link>
            <Link href="/shopping" title="" className="text-base font-medium">
              Cart
            </Link>
            {userInfo?.fullName ? (
              <>
                <div className="flex items-center gap-x-3">
                  <p>
                    <span className="text-[17px] font-medium block">
                      {userInfo?.fullName}
                    </span>
                    <span className="text-[14px] text-[#c4c4c4] font-normal block">
                      {userInfo?.email}
                    </span>
                  </p>

                  <img
                    src={userInfo?.imageURL}
                    alt=""
                    className="h-[70px] w-[70px~] rounded-full"
                  />
                </div>
              </>
            ) : (
              <Link
                href="/user/log-in"
                title=""
                className="text-base font-medium"
              >
                Sign in
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
