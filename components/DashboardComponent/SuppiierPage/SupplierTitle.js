import React, { useRef, useState } from "react";
import Modal from "../../Common/Modal/Modal";
import SupplierForm from "./SupplierForm";

const SupplierTitle = () => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    formData["status"] = "active";
    console.log("formData :", formData);
    // form.current.reset();
    // setIsOpen(false);
  };
  return (
    <>
      <div className="flex justify-between mb-2">
        <h4 className="text-lg">Supplier</h4>
        <p
          onClick={() => setIsOpen(true)}
          className="text-white bg-navyBlue py-2 px-3 rounded font-semibold cursor-pointer hover:text-purple"
        >
          Add Supplier
        </p>
      </div>

      <Modal
        title="Add Supplier"
        isOpen={isOpen}
        toggleModal={() => setIsOpen(!isOpen)}
      >
        <SupplierForm
          form={form}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
        />
      </Modal>
    </>
  );
};

export default SupplierTitle;
