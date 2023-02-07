import React from "react";
import LogFrom from "../../../components/UserLogInSignIn/LogFrom";

const Index = () => {
  return (
    <>
      <section
        className="bg-[#0F172A] min-h-screen !bg-no-repeat"
        style={{
          background: "url('/sign-bg.png')",
        }}
      >
        <div className="container flex justify-center items-center min-h-screen">
          <LogFrom />
        </div>
      </section>
    </>
  );
};

export default Index;
