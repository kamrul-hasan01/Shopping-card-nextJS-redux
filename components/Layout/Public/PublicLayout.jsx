import React from "react";
import useGetUser from "../../Hooks/useGetUser";

const PublicLayout = ({ children }) => {
  const getUsers = useGetUser();

  // const getToken

  return (
    <>
      <main className="bg-[#0F172A] text-[#94a3b8] font-montserrat">
        {children}
      </main>
    </>
  );
};

export default PublicLayout;
