import React from "react";
import { options } from "../../Utils/Options";

const StockForm = ({ form, handleSubmit, handleInputChange }) => {
  return (
    <form ref={form} onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-y-5 w-full justify-between">
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="productId"
          placeholder="product id"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="name"
          placeholder="product name"
          onChange={(e) => handleInputChange(e)}
        />
        <textarea
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          placeholder="description"
          name="description"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="imageURLs"
          placeholder="image url"
          onChange={(e) => handleInputChange(e)}
        />
        <select
          required
          type="select"
          className="w-full py-[14px] rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="status"
          onChange={(e) => handleInputChange(e)}
        >
          <option selected disabled hidden>
            select status
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
          name="quantity"
          placeholder="quantity"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="price"
          placeholder="price"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          required
          type="text"
          className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="location"
          placeholder="Enter Image"
          onChange={(e) => handleInputChange(e)}
        />
        <select
          required
          type="select"
          className="w-full py-[14px] rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="unit"
          placeholder="Enter Store Name"
          onChange={(e) => handleInputChange(e)}
        >
          <option selected disabled hidden>
            select unite
          </option>
          {options.map((opt, idx) => {
            return (
              <option key={idx} value={opt} className="text-black capitalize">
                {opt}
              </option>
            );
          })}
        </select>
        <select
          required
          type="select"
          className="w-full py-[14px] rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="category"
          onChange={(e) => handleInputChange(e)}
        >
          <option selected disabled hidden>
            select category
          </option>
          {options.map((opt, idx) => {
            return (
              <option key={idx} value={opt} className="text-black capitalize">
                {opt}
              </option>
            );
          })}
        </select>
        <select
          required
          type="select"
          className="w-full py-[14px] rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="brand"
          onChange={(e) => handleInputChange(e)}
        >
          <option selected disabled hidden>
            select brand
          </option>
          {options.map((opt, idx) => {
            return (
              <option key={idx} value={opt} className="text-black capitalize">
                {opt}
              </option>
            );
          })}
        </select>
        <select
          required
          type="select"
          className="w-full py-[14px] rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="store"
          onChange={(e) => handleInputChange(e)}
        >
          <option selected disabled hidden>
            select store
          </option>
          {options.map((opt, idx) => {
            return (
              <option key={idx} value={opt} className="text-black capitalize">
                {opt}
              </option>
            );
          })}
        </select>
        <select
          required
          type="select"
          className="w-full py-[14px] rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
          name="suppliedBy"
          onChange={(e) => handleInputChange(e)}
        >
          <option selected disabled hidden>
            select suppliedBy
          </option>
          {options.map((opt, idx) => {
            return (
              <option key={idx} value={opt} className="text-black capitalize">
                {opt}
              </option>
            );
          })}
        </select>
      </div>

      <button
        type="submit"
        className="  mt-6 border  w-7/12 md:w-5/12 lg:w-4/12 py-3 rounded border-[gray] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight hover:border-[#8280fd] hover:text-purple mx-auto block"
      >
        Add Stock
      </button>
    </form>
  );
};

export default StockForm;
