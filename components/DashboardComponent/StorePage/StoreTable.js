import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Modal from "../../Common/Modal/Modal";
import { DeleteRequest } from "../../Hooks/HTTPRequest/DeleteRequest";
import { GetRequest } from "../../Hooks/HTTPRequest/GetRequest";
import { PatchRequest } from "../../Hooks/HTTPRequest/PatchRequest";
import { Delete, Edit } from "../../SVG/SVG";
import { options } from "../../Utils/Options";
import { Status } from "../../Utils/Status";

const StoreTable = ({ content, setStoreDate }) => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [formData, setFormData] = useState({});
  console.log("formData :", formData);
  const form = useRef();
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

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    setEditModal(false);
    try {
      const url = "/store/" + id;
      const result = await PatchRequest(url, formData);
      if (result) {
        await GetRequest("/store", setStoreDate);
        toast.success("Store update Successfully");
      }
    } catch (error) {
      console.log("error :", error);
      toast.error("Store update Failed");
    }
  };
  const handleBrandDelete = async (id) => {
    setDeleteModal(false);
    try {
      const url = "/store/" + id;
      const result = await DeleteRequest(url);
      if (result) {
        toast.success("Store delete Successfully");
        await GetRequest("/store", setStoreDate);
      }
    } catch (error) {
      console.log("error :", error);
      toast.error("Store delete Failed");
    }
  };

  return (
    <table className="w-full text-sm text-left  text-gray-400">
      <thead className="text-xs  uppercase  bg-navyBlue  border-b border-[gray]">
        <tr>
          <th className="px-6 py-3">ID</th>
          <th className="px-6 py-3">Manager Name</th>
          <th className="px-6 py-3">Location</th>
          <th className="px-6 py-3">Description</th>
          <th className="px-6 py-3 ">Status</th>
          <th className="px-6 py-3  text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {content.length &&
          content?.map((item, idx) => {
            return (
              <tr
                key={idx}
                className=" border-b bg-navyBlue border-[gray] hover:bg-darkBlue hover:text-white"
              >
                <td className="px-6 py-4">{idx + 1}</td>
                <td className="px-6 py-4">{item?.manager?.name}</td>
                <td className="px-6 py-4">{item?.name}</td>
                <td className="px-6 py-4">{item?.description}</td>

                <td
                  className={`px-6 py-4 ${
                    item.status === "active" ? "text-green-600" : "text-red-800"
                  }`}
                >
                  {item.status}
                </td>
                <td className="px-6 py-4  flex justify-center items-center gap-x-3 ">
                  <span
                    className="cursor-pointer hover:text-[#0D86FF]"
                    onClick={() => {
                      setFormData({
                        name: item.name,
                        description: item.description,
                        status: item.status,
                        manager: {
                          name: item.manager.name,
                        },
                      });
                      setEditModal(true);
                    }}
                  >
                    <Edit />
                  </span>

                  <span
                    className="cursor-pointer hover:text-[#E03232]"
                    onClick={() => {
                      setDeleteModal(true);
                    }}
                  >
                    <Delete />
                  </span>
                </td>
                <Modal
                  title="Delete brand"
                  isOpen={deleteModal}
                  toggleModal={() => setDeleteModal(!deleteModal)}
                >
                  <button
                    onClick={() => handleBrandDelete(item._id)}
                    className="text-[red]  mt-6 border  w-7/12 md:w-5/12 py-3 rounded border-[red] text-lg active:scale-[0.95] transition ease-in-out font-light hover:text-theme-text-highlight hover:border-[#8280fd] hover:text-purple"
                  >
                    Delete
                  </button>
                </Modal>
                <Modal
                  title="Edit Store information"
                  isOpen={editModal}
                  toggleModal={() => {
                    setEditModal(!editModal);
                    setFormData({});
                  }}
                >
                  <form ref={form} onSubmit={(e) => handleSubmit(e, item._id)}>
                    <input
                      required
                      type="text"
                      className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2 outline-0 text-theme-text-title pl-5"
                      name="name"
                      placeholder="Enter full Brand Name"
                      defaultValue={formData?.manager?.name}
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
                      {options.map((opt, idx) => {
                        return opt === formData?.name ? (
                          <option key={idx} selected disabled hidden>
                            {opt}
                          </option>
                        ) : (
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
                      className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2 outline-0  pl-5 mt-5"
                      name="status"
                      onChange={(e) => handleInputChange(e)}
                    >
                      {Status.map((opt, idx) => {
                        return opt === formData?.status ? (
                          <option key={idx} selected disabled hidden>
                            {opt}
                          </option>
                        ) : (
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

                    <textarea
                      required
                      type="text"
                      className="lg:w-10/12 lg:mx-0 w-full mx-auto block py-3 rounded bg-transparent border-[1px] border-[gray] focus:border-[#050717] focus:border-2  outline-0  pl-5 mt-5"
                      placeholder="Brand Information"
                      name="description"
                      defaultValue={formData.description}
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

export default StoreTable;
