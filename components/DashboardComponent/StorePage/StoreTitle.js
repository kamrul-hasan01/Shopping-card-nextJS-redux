import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../Common/Modal/Modal";
import { GetRequest } from "../../Hooks/HTTPRequest/GetRequest";
import { PostRequest } from "../../Hooks/HTTPRequest/PostRequest";
import { options } from "../../Utils/Options";

const StoreTitle = ({ setStoreDate }) => {
  const [addStoreModal, setAddStoreModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    manager: {
      name: "",
    },
  });

  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newFromData = { ...formData };
    if (field === "manager_name") {
      newFromData["manager"]["name"] = value;
    } else {
      newFromData[field] = value;
    }

    setFormData(newFromData);
  };
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    form.current.reset();
    setAddStoreModal(false);
    try {
      const result = await PostRequest("/store", formData);
      if (result) {
        setAddStoreModal(false);
        toast.success("Store Add Successfully");
        await GetRequest("/store", setStoreDate);
      }
    } catch (error) {
      toast.error("Store Add Failed");
      console.log("error :", error);
    }
  };
  return (
    <>
      <div className="flex justify-between mb-2">
        <h4 className="text-lg">Store</h4>
        <p
          onClick={() => setAddStoreModal(true)}
          className="text-white bg-navyBlue py-2 px-3 rounded font-semibold cursor-pointer hover:text-purple"
        >
          Add Store
        </p>
      </div>
      <Modal
        title="Add brand"
        isOpen={addStoreModal}
        toggleModal={() => setAddStoreModal(!addStoreModal)}
      >
        <form ref={form} onSubmit={(e) => handleSubmit(e)}>
          <input
            required
            type="text"
            className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2 outline-0 text-theme-text-title pl-5"
            name="manager_name"
            placeholder="Enter Manager Name"
            onChange={(e) => handleInputChange(e)}
          />
          <select
            required
            type="select"
            className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2 outline-0  pl-5 mt-5"
            name="name"
            placeholder="Enter Store Name"
            onChange={(e) => handleInputChange(e)}
          >
            <option selected disabled hidden>
              select one
            </option>
            {options.map((opt, idx) => {
              return (
                <option key={idx} value={opt} className="text-black capitalize">
                  {opt}
                </option>
              );
            })}
          </select>

          <textarea
            required
            type="text"
            className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2  outline-0  pl-5 mt-5"
            placeholder="store Information"
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

export default StoreTitle;
