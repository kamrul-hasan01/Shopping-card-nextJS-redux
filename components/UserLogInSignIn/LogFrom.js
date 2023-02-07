import Link from "next/link";
import React, { useRef, useState } from "react";
const LogFrom = () => {
  const form = useRef();
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newFromData = { ...formData };
    newFromData[field] = value;
    setFormData(newFromData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData :", formData);
    form.current.reset();
  };
  return (
    <div className="min-w-full md:min-w-[385px] h-full ">
      <div className="p-10  shadow-lg rounded-lg bg-[#E2E8F0] border-0">
        <p className="text-sm font-bold text-[#64748b] text-center py-3 border-b border-[#00000021] mb-3">
          Sign in
        </p>

        <form
          ref={form}
          className="flex flex-col "
          onSubmit={(e) => handleSubmit(e)}
        >
          <label
            htmlFor="email"
            className="text-xs text-[#475569] font-bold py-1 mt-2"
          >
            Email
          </label>
          <input
            required
            type="email"
            id="email"
            className="bg-[white]  border-0 mt-2 mb-4 p-3  placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="email"
            placeholder="Email"
            onChange={(e) => handleInputChange(e)}
          />
          <label
            htmlFor="password"
            className="text-xs text-[#475569] font-bold py-1 mt-2"
          >
            PASSWORD
          </label>
          <input
            required
            type="password"
            id="password"
            className="bg-[white]  border-0 mt-2 mb-4 p-3  placeholder-blueGray-300 text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            name="password"
            placeholder="Password"
            onChange={(e) => handleInputChange(e)}
          />

          <button
            type="submit"
            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 bg-[#0F172A] mt-3"
          >
            SIGN IN
          </button>
        </form>
      </div>

      <div className="flex justify-between mt-[30px]">
        <Link href="/" className="text-[#e2e8f0] text-[13px]  hover:underline">
          Forgot password?
        </Link>
        <Link
          href="/user/sign-up"
          className="text-[#e2e8f0] text-[13px]  hover:underline"
        >
          Create new account
        </Link>
      </div>
    </div>
  );
};

export default LogFrom;
