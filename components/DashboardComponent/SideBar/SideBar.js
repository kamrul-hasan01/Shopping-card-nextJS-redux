import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import {
  Brand,
  Category,
  Home,
  Product,
  Stock,
  Store,
  Supplier,
  User,
} from "../../SVG/SVG";
const SideBar = () => {
  const nav_list = [
    {
      nav_name: "Dashboard",
      nav_link: "/dashboard",
      nav_icon: <Home />,
    },
    {
      nav_name: "Brands",
      nav_link: "/dashboard/brands",
      nav_icon: <Brand />,
    },
    {
      nav_name: "Store",
      nav_link: "/dashboard/stores",
      nav_icon: <Store />,
    },
    {
      nav_name: "Category",
      nav_link: "/dashboard/categories",
      nav_icon: <Category />,
    },
    {
      nav_name: "Supplier",
      nav_link: "/dashboard/suppliers",
      nav_icon: <Supplier />,
    },
    {
      nav_name: "Products",
      nav_link: "/dashboard/products",
      nav_icon: <Product />,
    },
    {
      nav_name: "Stock",
      nav_link: "/dashboard/stocks",
      nav_icon: <Stock />,
    },
    {
      nav_name: "User",
      nav_link: "/dashboard/users",
      nav_icon: <User />,
    },
  ];
  const router = useRouter();
  return (
    <section className="w-2/12  min-h-[100vh] bg-navyBlue">
      <div className="mt-[13vh] py-4 pl-5 overflow-hidden  h-[calc(100vh-13vh)] overflow-y-visible scrollbar-gray">
        <ul className="flex flex-col">
          {nav_list.map((item, idx) => {
            return (
              <li key={idx} className={`group`}>
                <Link
                  href={item.nav_link}
                  className={`flex items-center gap-x-2 group p-2 rounded-l my-1 text-[15px] leading-6 hover:text-[#8280fd] group-hover:bg-[#050717] ${
                    router.pathname === item.nav_link &&
                    "text-purple bg-darkBlue "
                  } `}
                >
                  {item.nav_icon} <span> {item.nav_name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
