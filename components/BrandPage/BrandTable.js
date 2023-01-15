import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../Common/Modal/Modal";
import { Delete, Edit } from "../SVG/SVG";
import { URL } from "../Utils/BaseUrl";

const BrandTable = ({ content, setBrandTableData }) => {
  const [editBradModal, setEditBrandModal] = useState(false);
  const [deleteBradModal, setDeleteBrandModal] = useState(false);
  const [formData, setFormData] = useState({});
  const form = useRef();
  const handleInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    let newFromData = { ...formData };
    newFromData[field] = value;
    setFormData(newFromData);
  };
  const fetchData = async () => {
    try {
      let response = await axios.get(`${URL}/brand`);
      await setBrandTableData(response?.data?.data || []);
    } catch (error) {
      console.log("error :", error);
    }
  };
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    try {
      const url = URL + "/brand/" + id;
      const result = await axios.patch(url, formData);
      console.log("result :", result);
      if (result.data.status == "success") {
        form.current.reset();
        setEditBrandModal(false);
        await fetchData();
        await toast.success("Band update Successfully");
      }
    } catch (error) {
      console.log("error :", error);
      setEditBrandModal(false);
      form.current.reset();
      toast.error("Band update Failed");
    }
  };
  const handleBrandDelete = async (id) => {
    try {
      const url = URL + "/brand/" + id;
      const result = await axios.delete(url);
      console.log("result :", result);
      if (result.data.status == "success") {
        setDeleteBrandModal(false);
        await fetchData();
        toast.success("Band delete Successfully");
      }
    } catch (error) {
      console.log("error :", error);
      setDeleteBrandModal(false);
      form.current.reset();
      toast.error("Band delete Failed");
    }
  };
  return (
    <table className="w-full text-sm text-left  text-gray-400">
      <thead className="text-xs  uppercase  bg-navyBlue  border-b border-[gray]">
        <tr>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">ID</th>
          <th className="px-6 py-3">Description</th>
          <th className="px-6 py-3">Location</th>
          <th className="px-6 py-3  text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {content?.map((item, idx) => {
          return (
            <tr
              key={idx}
              className=" border-b bg-navyBlue border-[gray] hover:bg-darkBlue hover:text-white"
            >
              <td className="px-6 py-4">{idx + 1}</td>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">{item.description}</td>
              <td className="px-6 py-4">{item.location}</td>
              <td className="px-6 py-4  flex justify-center items-center gap-x-3 ">
                <span
                  className="cursor-pointer hover:text-[#0D86FF]"
                  onClick={() => setEditBrandModal(true)}
                >
                  <Edit />
                </span>

                <span
                  className="cursor-pointer hover:text-[#E03232]"
                  onClick={() => setDeleteBrandModal(true)}
                >
                  <Delete />
                </span>
              </td>
              <Modal
                title="Delete brand"
                isOpen={deleteBradModal}
                toggleModal={() => setDeleteBrandModal(!deleteBradModal)}
              >
                <button
                  onClick={() => handleBrandDelete(item._id)}
                  className="text-[red]  mt-6 border  w-7/12 md:w-5/12 py-3 rounded border-[red] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight hover:border-[#8280fd] hover:text-purple"
                >
                  Delete
                </button>
              </Modal>
              <Modal
                title="Edit brand information"
                isOpen={editBradModal}
                toggleModal={() => setEditBrandModal(!editBradModal)}
              >
                <form ref={form} onSubmit={(e) => handleSubmit(e, item._id)}>
                  <input
                    required
                    type="text"
                    className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2 outline-0 text-theme-text-title pl-5"
                    name="name"
                    placeholder="Enter full Brand Name"
                    defaultValue={item.name}
                    onChange={(e) => handleInputChange(e)}
                  />
                  <input
                    required
                    type="text"
                    className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2 outline-0  pl-5 mt-5"
                    name="location"
                    placeholder="Enter Location"
                    defaultValue={item.location}
                    onChange={(e) => handleInputChange(e)}
                  />

                  <textarea
                    required
                    type="text"
                    className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2  outline-0  pl-5 mt-5"
                    placeholder="Brand Information"
                    name="description"
                    defaultValue={item.description}
                    onChange={(e) => handleInputChange(e)}
                  />
                  <button
                    type="submit"
                    className="  mt-6 border  w-7/12 md:w-5/12 py-3 rounded border-[gray] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight hover:border-[#8280fd] hover:text-purple"
                  >
                    Update
                  </button>
                </form>
              </Modal>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BrandTable;
