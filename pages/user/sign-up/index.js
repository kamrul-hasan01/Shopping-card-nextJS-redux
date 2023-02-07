import React from "react";
import SignForm from "../../../components/UserLogInSignIn/SignForm";

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
          <SignForm />
        </div>
      </section>
    </>
  );
};

export default Index;
