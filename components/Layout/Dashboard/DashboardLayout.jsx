import React from "react";
import useHandleUser from "../../Hooks/useGetUser";
import SideBar from "../SideBar/SideBar";
import TopBar from "../TopBar/TopBar";

const DashboardLayout = ({ children }) => {
  const getUsers = useHandleUser();
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
