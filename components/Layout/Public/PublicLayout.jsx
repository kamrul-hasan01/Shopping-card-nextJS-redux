import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { URL } from "../../Utils/BaseUrl";

const PublicLayout = ({ children }) => {
  const { userToken } = useSelector((state) => state.user);
  const getUserData = async (token) => {
    const result = axios(URL + "/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("result :", result);
  };
  useEffect(() => {
    if (userToken) getUserData();
  }, [userToken]);

  return (
    <>
      <main className="bg-[#0F172A] text-[#94a3b8] font-montserrat">
        {children}
      </main>
    </>
  );
};

export default PublicLayout;
