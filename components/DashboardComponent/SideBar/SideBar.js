import Link from "next/link";
import React from "react";
import {
  Add,
  Brand,
  Category,
  Edit,
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
      nav_link: "#",
      nav_icon: <Brand />,
      sub_menu: [
        {
          sub_menu_name: "Add Brand",
          sub_menu_link: "#",
          sub_menu_icon: <Add />,
        },
        {
          sub_menu_name: "Edit Brand",
          sub_menu_link: "#",
          sub_menu_icon: <Edit />,
        },
      ],
    },
    {
      nav_name: "Store",
      nav_link: "#",
      nav_icon: <Store />,
      sub_menu: [
        {
          sub_menu_name: "Add Store",
          sub_menu_link: "#",
          sub_menu_icon: <Add />,
        },
        { sub_menu_name: "Edit", sub_menu_link: "#", sub_menu_icon: <Edit /> },
      ],
    },
    {
      nav_name: "Category",
      nav_link: "#",
      nav_icon: <Category />,
      sub_menu: [
        {
          sub_menu_name: "Add Category",
          sub_menu_link: "#",
          sub_menu_icon: <Add />,
        },
        {
          sub_menu_name: "Edit Category",
          sub_menu_link: "#",
          sub_menu_icon: <Edit />,
        },
      ],
    },
    {
      nav_name: "Supplier",
      nav_link: "#",
      nav_icon: <Supplier />,
      sub_menu: [
        {
          sub_menu_name: "Add Supplier",
          sub_menu_link: "#",
          sub_menu_icon: <Add />,
        },
        {
          sub_menu_name: "Edit Supplier",
          sub_menu_link: "#",
          sub_menu_icon: <Edit />,
        },
      ],
    },
    {
      nav_name: "Products",
      nav_link: "#",
      nav_icon: <Product />,
      sub_menu: [
        {
          sub_menu_name: "Add Products",
          sub_menu_link: "#",
          sub_menu_icon: <Add />,
        },
        {
          sub_menu_name: "Edit Products",
          sub_menu_link: "#",
          sub_menu_icon: <Edit />,
        },
      ],
    },
    {
      nav_name: "Stock",
      nav_link: "#",
      nav_icon: <Stock />,
      sub_menu: [
        {
          sub_menu_name: "Add Stock",
          sub_menu_link: "#",
          sub_menu_icon: <Add />,
        },
        {
          sub_menu_name: "Edit Stock",
          sub_menu_link: "#",
          sub_menu_icon: <Edit />,
        },
      ],
    },
    {
      nav_name: "User",
      nav_link: "#",
      nav_icon: <User />,
      sub_menu: [
        {
          sub_menu_name: "Add User",
          sub_menu_link: "#",
          sub_menu_icon: <Add />,
        },
        {
          sub_menu_name: "Edit User",
          sub_menu_link: "#",
          sub_menu_icon: <Edit />,
        },
      ],
    },
  ];
  return (
    <section className="w-2/12  min-h-[100vh] bg-[#182335]">
      <div className="mt-[13vh] py-4 pl-5 overflow-hidden  h-[calc(100vh-13vh)] overflow-y-visible scrollbar-gray">
        <ul className="flex flex-col gap-y-5">
          {nav_list.map((item, idx) => {
            return (
              <li key={idx} className="group">
                <Link
                  href={item.nav_link}
                  className="text-[15px] leading-6 hover:text-[#8280fd] flex items-center  gap-2"
                >
                  {item.nav_icon} <span> {item.nav_name}</span>
                </Link>

                {item?.sub_menu?.length ? (
                  <ul className=" flex-col gap-y-3  ml-3 pt-3 flex">
                    {item.sub_menu.map((sub_item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={sub_item.sub_menu_link}
                            className="text-[15px] leading-6 hover:text-[#8280fd] flex items-center gap-2"
                          >
                            {sub_item.sub_menu_icon}
                            <span>{sub_item.sub_menu_name}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SideBar;
