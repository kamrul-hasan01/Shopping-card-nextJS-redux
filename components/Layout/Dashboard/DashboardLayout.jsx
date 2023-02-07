import React from "react";
import { useSelector } from "react-redux";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";

const DashboardLayout = ({ children }) => {
  const { userToken } = useSelector((state) => state.user);
  console.log("userToken :", userToken);
  return (
    <>
      <main className="flex bg-[#050717] text-white font-pt-sans">
        <SideBar />
        <section className="w-10/12">
          <TopBar />
          {children}
        </section>
      </main>
    </>
  );
};
export default DashboardLayout;
