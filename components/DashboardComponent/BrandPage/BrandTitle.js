import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../Common/Modal/Modal";
import { GetRequest } from "../../Hooks/HTTPRequest/GetRequest";
import { PostRequest } from "../../Hooks/HTTPRequest/PostRequest";

const BrandTitle = ({ setBrandTableData }) => {
  const [addBradModal, setAddBrandModal] = useState(false);
  const [formData, setFormData] = useState({});

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newFromData = { ...formData };
    newFromData[field] = value;
    setFormData(newFromData);
  };
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    form.current.reset();
    setAddBrandModal(false);

    try {
      const result = await PostRequest("/brand", formData);
      if (result) {
        toast.success("Band Add Successfully");
        await GetRequest("/brand", setBrandTableData);
      }
    } catch (error) {
      console.log("error :", error);
      toast.error("Band Add Failed");
    }
  };
  return (
    <>
      <div className="flex justify-between mb-2">
        <h4 className="text-lg">Brands</h4>
        <p
          onClick={() => setAddBrandModal(true)}
          className="text-white bg-navyBlue py-2 px-3 rounded font-semibold cursor-pointer hover:text-purple"
        >
          Add Brand
        </p>
      </div>
      <Modal
        title="Add brand"
        isOpen={addBradModal}
        toggleModal={() => setAddBrandModal(!addBradModal)}
      >
        <form ref={form} onSubmit={(e) => handleSubmit(e)}>
          <input
            required
            type="text"
            className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2 outline-0 text-theme-text-title pl-5"
            name="name"
            placeholder="Enter full Brand Name"
            onChange={(e) => handleInputChange(e)}
          />
          <input
            required
            type="text"
            className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2 outline-0  pl-5 mt-5"
            name="location"
            placeholder="Enter Location"
            onChange={(e) => handleInputChange(e)}
          />

          <textarea
            required
            type="text"
            className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2  outline-0  pl-5 mt-5"
            placeholder="Brand Information"
            name="description"
            onChange={(e) => handleInputChange(e)}
          />
          <button
            type="submit"
            className="  mt-6 border  w-7/12 md:w-5/12 py-3 rounded border-[gray] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight hover:border-[#8280fd] hover:text-purple"
          >
            SEND
          </button>
        </form>
      </Modal>
    </>
  );
};

export default BrandTitle;
