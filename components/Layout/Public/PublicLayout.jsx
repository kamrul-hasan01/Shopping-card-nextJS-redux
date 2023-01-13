import React from "react";

const PublicLayout = ({ children }) => {
  return (
    <>
      <main className="bg-[#0F172A] text-[#94a3b8] font-montserrat">
        {children}
      </main>
    </>
  );
};

export default PublicLayout;
