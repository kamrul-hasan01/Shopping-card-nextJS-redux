import React, { useRef, useState } from "react";
import Modal from "../../Common/Modal/Modal";
import { options } from "../../Utils/Options";

const StockTItle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newFromData = { ...formData };
    newFromData[field] = value;
    setFormData(newFromData);
  };
  const form = useRef();
  return (
    <>
      <div className="flex justify-between mb-2">
        <h4 className="text-lg">Stock</h4>
        <p
          onClick={() => setIsOpen(true)}
          className="text-white bg-navyBlue py-2 px-3 rounded font-semibold cursor-pointer hover:text-purple"
        >
          Add Stock
        </p>
      </div>
      <Modal
        title="Add Stock"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(!isOpen)}
      >
        <form ref={form} onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-y-5 w-full justify-between">
            <input
              required
              type="text"
              className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
              name="location"
              placeholder="Enter name"
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

            <textarea
              required
              type="text"
              className="w-full py-3 rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
              placeholder="description"
              name="address"
              onChange={(e) => handleInputChange(e)}
            />

            <select
              required
              type="select"
              className="w-full py-[14px] rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
              name="name"
              placeholder="Enter Store Name"
              onChange={(e) => handleInputChange(e)}
            >
              <option selected disabled hidden>
                select Brand
              </option>
              {options.map((opt, idx) => {
                return (
                  <option
                    key={idx}
                    value={opt}
                    className="text-black capitalize"
                  >
                    {opt}
                  </option>
                );
              })}
            </select>
            <select
              required
              type="select"
              className="w-full py-[14px] rounded bg-transparent border-[1px] border-[gray]   outline-0 pl-2"
              name="name"
              placeholder="Enter Store Name"
              onChange={(e) => handleInputChange(e)}
            >
              <option selected disabled hidden>
                select Unit
              </option>
              {options.map((opt, idx) => {
                return (
                  <option
                    key={idx}
                    value={opt}
                    className="text-black capitalize"
                  >
                    {opt}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            type="submit"
            className="  mt-6 border  w-7/12 md:w-5/12 lg:w-3/12 py-3 rounded border-[gray] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight hover:border-[#8280fd] hover:text-purple mx-auto block"
          >
            Add Product
          </button>
        </form>
      </Modal>
    </>
  );
};

export default StockTItle;
