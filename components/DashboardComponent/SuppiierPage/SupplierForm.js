import React from "react";
import useDashboard from "../../Hooks/useDashboard";
import { options } from "../../Utils/Options";

const SupplierForm = ({ form, handleSubmit, handleInputChange }) => {
  const { brands } = useDashboard("test");
  console.log("brand :", brands);
  return (
    <form ref={form} onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-y-5 w-full justify-between">
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="name"
          placeholder="Enter supplier name"
          onChange={(e) => handleInputChange(e)}
        />

        <input
          required
          type="email"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="email"
          placeholder="Enter email"
          onChange={(e) => handleInputChange(e)}
        />
        <select
          required
          type="select"
          className="w-full py-[14px] rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="brand"
          placeholder="Enter brand brand"
          onChange={(e) => handleInputChange(e)}
        >
          <option selected disabled hidden>
            select Brand
          </option>
          {options.map((opt, idx) => {
            return (
              <option key={idx} value={opt} className="text-black capitalize">
                {opt}
              </option>
            );
          })}
        </select>
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="contactNumber"
          placeholder="Mobile number"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="tradeLicenseNumber"
          placeholder="Enter Trade license number"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="presentAddress"
          placeholder="Enter Present address"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="permanentAddress"
          placeholder="Enter permanent address"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="imageURL"
          placeholder="Enter Image"
          onChange={(e) => handleInputChange(e)}
        />

        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="nationalIdImageURL"
          placeholder="Enter NID Image"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          placeholder="Enter your location"
          name="location"
          onChange={(e) => handleInputChange(e)}
        />
      </div>

      <button
        type="submit"
        className="  mt-6 border  w-7/12 md:w-5/12 lg:w-4/12 py-3 rounded border-[gray] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight hover:border-[#8280fd] hover:text-purple mx-auto block "
      >
        Add Supplier
      </button>
    </form>
  );
};

export default SupplierForm;
