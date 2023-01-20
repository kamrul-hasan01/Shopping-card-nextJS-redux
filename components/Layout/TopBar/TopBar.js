import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";

const TopBar = () => {
  return (
    <div className="bg-[#182335] min-h-[10vh">
      <div className="flex   items-center gap-x-3 container justify-end pt-2">
        <p className="flex flex-col">
          <span className="text-[17px] font-bold">Kamrul hasan</span>{" "}
          <span className="text-sx">kamrul@gmail.com</span>
        </p>
        <div className="cursor-pointer group relative lg:w-2/12 2xl:w-1/12">
          <Image
            src="/my.jpg"
            height={70}
            width={70}
            alt="image"
            layout="fixed"
            className="rounded-full"
          />
          <div className=" flex-col absolute bg-[#182335] py-2 rounded hidden group-hover:flex transition-all ease-in-out delay-100">
            <Link
              href="#"
              className="py-2 px-4 w-full hover:bg-[#050717] hover:text-[#6C4FFA]"
            >
              Sing out
            </Link>
            <Link
              href="#"
              className="py-2 px-4 w-full hover:bg-[#050717] hover:text-[#6C4FFA]"
            >
              Sing in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
