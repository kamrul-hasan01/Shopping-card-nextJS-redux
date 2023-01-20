import React from "react";

const UserForm = ({ form, handleSubmit, handleInputChange }) => {
  return (
    <form ref={form} onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-y-5 w-full justify-between">
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="firstName"
          placeholder="Enter first name"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="lastName"
          placeholder="Enter last name"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="phone"
          placeholder="Enter phone number"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="imageURL"
          placeholder="Image Url"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="email"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="email"
          placeholder="Email"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="password"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="password"
          placeholder="Password"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="password"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="confirmPassword"
          placeholder="confirm Password"
          onChange={(e) => handleInputChange(e)}
        />

        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="presentAddress"
          placeholder="Present Address"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="permanentAddress"
          placeholder="Permanent Address"
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <button
        type="submit"
        className="  mt-6 border  w-7/12 md:w-5/12 lg:w-3/12 py-3 rounded border-[gray] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight hover:border-[#8280fd] hover:text-purple mx-auto block"
      >
        Add User
      </button>
    </form>
  );
};

export default UserForm;
