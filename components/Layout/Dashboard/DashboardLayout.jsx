import React from "react";
import SideBar from "../../DashboardComponent/SideBar/SideBar";
import TopBar from "../../DashboardComponent/TopBar/TopBar";

const DashboardLayout = ({ children }) => {
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
