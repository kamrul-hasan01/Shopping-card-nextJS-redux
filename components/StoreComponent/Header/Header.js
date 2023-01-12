/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <header className="border-b border-gray-200 w-9/12 pl-44 fixed top-0 left-0 bg-[#0F172A]">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 text-white">
        <nav className="relative flex items-center justify-between h-16 lg:h-20">
          <div className="hidden lg:flex lg:items-center lg:space-x-10">
            <Link href="/" title="" className="text-lg font-medium">
              Home
            </Link>
          </div>

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
              <span>{cart.length}</span>
            </Link>
            <Link href="/sing-in" title="" className="text-base font-medium">
              Sign in
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
