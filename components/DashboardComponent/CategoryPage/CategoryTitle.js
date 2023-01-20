import React, { useRef, useState } from "react";
import Modal from "../../Common/Modal/Modal";
import CategoryForm from "./CategoryForm";

const CategoryTitle = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    setIsOpen(false);
  };
  return (
    <>
      <div className="flex justify-between mb-2">
        <h4 className="text-lg">Categories</h4>
        <p
          onClick={() => setIsOpen(true)}
          className="text-white bg-navyBlue py-2 px-3 rounded font-semibold cursor-pointer hover:text-purple"
        >
          Add Category
        </p>
      </div>
      <Modal
        title="Add brand"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(false)}
      >
        <CategoryForm
          form={form}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </Modal>
    </>
  );
};

export default CategoryTitle;
