import React, { useRef, useState } from "react";
import Modal from "../../../components/Modal/Modal";
import { Delete, Edit, View } from "../../../components/SVG/SVG";

const Index = () => {
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
    try {
      if (result.text == "OK") {
        form.current.reset();
      }
    } catch (error) {
      console.log("error :", error);
    }
  };
  return (
    <div className="m-5 mx-10">
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
      <div class=" overflow-x-auto shadow-md">
        <table class="w-full text-sm text-left  text-gray-400">
          <thead class="text-xs  uppercase  bg-navyBlue  border-b border-[gray]">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                Location
              </th>

              <th scope="col" class="px-6 py-3  text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class=" border-b bg-navyBlue border-[gray] hover:bg-darkBlue hover:text-white">
              <td class="px-6 py-4">Name</td>
              <td class="px-6 py-4">Description</td>
              <td class="px-6 py-4">location</td>
              <td class="px-6 py-4  flex justify-center items-center gap-x-3">
                <span className="cursor-pointer hover:text-[white]">
                  <View />
                </span>

                <span className="cursor-pointer hover:text-[#0D86FF]">
                  <Edit />
                </span>

                <span className="cursor-pointer hover:text-[#E03232]">
                  <Delete />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
Index.layout = "dashboard";
export default Index;
